// const path = require('path');
//
// module.exports = {
// 	entry: './src/ts/index.ts',
// 	output: {
// 		filename: 'main.js',
// 		path: path.resolve(__dirname, 'dist')
// 	}
// };


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/ts/app.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
};
