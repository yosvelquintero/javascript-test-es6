import path from 'path';

module.exports = {
	entry: {
	  preload: './target/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
    watch: true,
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	}
};
