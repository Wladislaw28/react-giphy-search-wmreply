module.exports = {
	entry: "src/index.ts",
	output: {
		filename: "main.js",
		chunkFilename: '[name].bundle.js',
		path: __dirname + "/dist"
	},
	optimization: {
		splitChunks: {
		chunks: 'all'
		}
   },

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
		]
	},

};
