const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin")

const getScopedName = require('./getScopedName');
const isDev = process.env.NODE_ENV === 'development';

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
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{
				test: /\.css$/,
				use: [
					(isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
					{
						loader: 'css-loader',
						options: {
							modules: true,
							...(isDev ? {
								localIdentName: '[path]_[name]_[local]',
							} : {
								getLocalIdent: (context, localIdentName, localName) => (
									getScopedName(localName, context.resourcePath)
								),
							}),
						}
					},
				],
			},
		]
	},
	plugins: [
		...(isDev ? [] : [
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
				chunkFilename: '[name].[contenthash].css',
			}),
		]),
		new BundleAnalyzerPlugin({
			analyzerMode: 'server',
			generateStatsFile: true,
			statsOptions: { source: false }
		}),
		new HtmlWebpackPlugin({ template: "public/index.html" }),
	],

};
