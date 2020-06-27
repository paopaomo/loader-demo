const path = require('path');

module.exports = {
    mode: 'development',
    entry: './main',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
            test: /.js$/,
            use: ['comment-require-loader']
        }]
    }
};
