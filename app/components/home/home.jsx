import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchKey: this.props.match.params && this.props.match.params.book ? this.props.match.params.book : '',
            noResultFound: false,
            onSearch: false,
            board: []
        };
    }

    componentWillMount() {
        var board = [];
        for (var i = 0; i < 8; i++) {
            board.push(<li key={i} id={i} onClick={this.selectEvent.bind(this, i)}></li>);
        }
        this.setState({ board });
    }

    selectEvent = (id) => {
        this.props.select(id);
    };

    componentDidMount() {
    }

    filterBooks = (event) => {
        this.setState({ searchKey: event.target.value });
    };

    reset = () => {
        this.setState({ searchKey: '' });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchKey}`);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params && nextProps.match.params.book) {
            this.setState({ searchKey: nextProps.match.params.book, onSearch: true });
        } else if (nextProps.match.params && nextProps.match.params.hasOwnProperty('book')) {
            this.setState({ searchKey: '', onSearch: true });
        } else {
            this.setState({ searchKey: '', onSearch: false });
        }
    }

    getBoard = () => {
        var board = [];
        this.props.game.board.map((cell, i) => {
            board.push(<li key={i} id={i} onClick={this.selectEvent.bind(this, i)}>{cell}</li>);
        });
        return board;
    }

    resetScore = () => {
        this.props.reset();
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    makeLine() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var listParent = document.getElementById("list-parent");
        var target1 = listParent.children[parseInt(this.props.game.winningCombo[0])];
        var target2 = listParent.children[parseInt(this.props.game.winningCombo[2])];
        var rect1 = target1.getBoundingClientRect();
        console.log(rect1.top, rect1.right, );
        var rect2 = target2.getBoundingClientRect();
        console.log(rect2.top, rect2.right, );

        var rect1Top = rect1.top + 25;
        var rect1Right = rect1.right - 66;
        var rect2Top = rect2.top + 25;
        var rect2Right = rect2.right - 66;

        context.beginPath();
        context.moveTo(rect1Right, rect1Top);
        context.lineTo(rect2Right, rect2Top);

        //console.log(rect1Right, rect1Top, rect2Right, rect2Top);
        context.strokeStyle = "#FF0000";
        context.stroke();
    }

    render() {
        let board = this.getBoard();
        return (
            <section className="container ">
                <div className="xo-container">
                    <div className="result" id="player">{this.props.game.message}</div>
                    <ul id="list-parent">
                        {board}
                    </ul>
                    {/*<div className="result" id="result"> Not Completed</div>*/}
                    <div className="result" id="result">
                        {this.props.game.isDone && <button className='reset btn-success btn' onClick={this.resetScore}>Reset</button>}
                    </div>
                </div>
            </section>
        );
    }

    componentDidUpdate() {
        if (this.props.game.isDone)
            this.makeLine();
    }
}

Home.propTypes = {};

export default Home;

