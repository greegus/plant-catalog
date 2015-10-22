'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = [
	{
		name: 'scripts',
		entry: __dirname + '/src/app.js',
		output: {
			path: __dirname + '/public/build/js',
			filename: '[name].js'
		},
		resolve: {
			alias: {
				'styles': __dirname + '/src/styles',
				'mixins': __dirname + '/src/mixins',
				'components': __dirname + '/src/components',
				'stores': __dirname + '/src/stores',
				'actions': __dirname + '/src/actions',
				'lib': __dirname + '/src/lib'
			}
		},
		module: {
			loaders: [
				{
					test: /\.less/,
					loader: 'style-loader!css-loader!less-loader'
				},
				{
					test: /\.(png|jpg|eot|ttf|svg|woff|woff2)$/,
					loader: 'url-loader?limit=8192'
				},
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		}
	}
];
