// Api
const API = {};

// add protocols
API.protocols = {
    HTTP: 'http://',
    HTTPS: 'https://',
    FTP: 'ftp://'
};

// add Domain configurations
API.domain = {
    TICTACTOE_CONNECT_LOCAL: 'localhost:3000',
    TICTACTOE_CONNECT_SERVER: ''
};

API.imagePath = '/assets/img/';

// utility
const UTILITY = {};

export default {
    API,
    UTILITY
};
