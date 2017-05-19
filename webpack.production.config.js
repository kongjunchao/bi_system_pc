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
				loader : ExtractTextPlugin.extract('style', 'css?' + JSON.stringify({discardComments : {removeAll : true}}) + '!sass')
			}
		]
	},
	
	plugins : [
		//压缩代码
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false
			},
			output : {
				comments : false	//去除注释
			}
		}),
		new ExtractTextPlugin('dist/[name].min.css', {allChunks : true}),	//单独打包css文件
		new webpack.optimize.CommonsChunkPlugin('dist/commons.min.js'),		//单独打包公共js文件
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV' : JSON.stringify('production')
			}
		})		//用于生产环境配置react
	]

}

module.exports = config;