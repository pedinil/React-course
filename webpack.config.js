//by this command we will get path of directory 
const path = require('path');

module.exports = {

    //we will join full path with file and tell its entry file
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    }

};