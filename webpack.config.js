const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/firebase.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'firebase.js'
    }
}