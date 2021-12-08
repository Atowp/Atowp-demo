const path = require('path')

module.exports = {
    entry: './src/main.js',//入口
    output: {//出口
        filename: 'todos.bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}