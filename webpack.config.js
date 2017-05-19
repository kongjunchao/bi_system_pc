var webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');
	
var config = {

	entry : {
		main : './components/js/main.js',
		login : './components/js/login.js',
		vendor : ['react', 'react-dom', 'antd']
	},

	output : {
		path : './',
		filename : 'dist/[name].min.js'
	},
	
	devServer : {
		inline : true,
		port : 7777
	},
	
	devtool : 'source-map',

	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel',
				query : {
					presets : ['es2015', 'react'],
					plugins : [["import", {"libraryName" : "antd", "style" : "css"}]]	//用于antd按需加载js和css文件
				}
			},
			{
				test : /\.(png|jpg|gif)$/,
				loader : 'url-loader?limit=819200'
			},
			{
				test : /\.(scss|css)$/,
				loader : ExtractTextPlugin.extract('style', 'css?sourceMap&' + JSON.stringify({discardComments : {removeAll : true}}) + '!sass?sourceMap')
			}
		]
	},
	
	plugins : [
		new ExtractTextPlugin('dist/[name].min.css', {allChunks : true}),	//单独打包css文件
		new webpack.optimize.CommonsChunkPlugin('dist/commons.min.js')		//单独打包公共js文件
	]

}

module.exports = config;