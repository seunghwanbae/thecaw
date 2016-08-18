// webpack config
var path = require('path')

module.exports = {
	entry: { // 엔트리 파일 목록
        app: ['./src/app.js'] 
    },
	output: {
		path: path.join(__dirname, "dist/"),
    	publicPath: './src/assets/',
		filename: 'bundle.js'
	}
}