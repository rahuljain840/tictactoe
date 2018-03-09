const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const bodyParser = require("body-parser");
const isDeveloping = process.env.NODE_ENV !== 'prod';
const port = 3000;
const app = express();
const fs = require('fs');
const opn = require('opn');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/books', function response(req, res) {
    res.sendFile(path.join(__dirname, './data/books.json'));
});

app.get('/api/book/:id', function (req, res) {
    var id = req.params.id;
    fs.readFile('./data/books.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            var books = JSON.parse(data);
            var filteredArray = books.filter(book => {
                return book.id == id
            });
            json = (filteredArray[0]);
            res.send(json);
        }
    })

});

app.put('/api/book/:id', function response(req, res) {
    let books = require('./data/books.json');
    fs.readFile('./data/books.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            var jsonObject = JSON.parse(data);
            var arr = [];
            var filteredArray = jsonObject.map(function (book) {
                if (book.id === req.params.id) {
                    book.title = req.body.title;
                    book.description = req.body.description;
                    book.author = req.body.author;
                }

                arr.push(book);
            });
            var json = JSON.stringify(arr); //convert it back to json
            fs.writeFile('./data/books.json', json, 'utf8', function (err) {
                if (err)
                    throw err;
                res.send(req.body);
            });
        }
    });
});

if (isDeveloping) {
    const compiler = webpack(config(process.env.NODE_ENV));
    const middleware = webpackMiddleware(compiler, {
        publicPath: '/',
        contentBase: 'app',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(__dirname + '/public'))

    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    opn('http://localhost:3000');
    if (err) {
        console.log(err);
    }
    console.info('====> Listening on http://localhost:3000');
});
