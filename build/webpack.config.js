const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const src = path.resolve(__dirname, 'src/');

const config = {
	watch: false,
	watchOptions: {
		ignored: /node_modules/
	},
	entry: {},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_DEV': JSON.stringify('production')
		})// more info and other optimizations at https://webpack.js.org/guides/production/
	],
	module: {
		rules : [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};

const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const addDirectories = (source, dict) =>
	readdirSync(source).forEach((name) => {
		if (name !== 'shared') {
			dict[name] = join(join(source, name), 'index.jsx');
		}
});
addDirectories(src, config.entry);

module.exports = config;
