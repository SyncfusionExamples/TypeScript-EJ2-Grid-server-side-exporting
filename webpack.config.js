const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'Scripts');
const DESTINATION = path.resolve(__dirname, 'Scripts');

module.exports = {
    context: ROOT,

    entry: {
        'index': './grid.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    }	
};