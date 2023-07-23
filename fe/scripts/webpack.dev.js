const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common')
const path = require('path')

const devConfig = {
  mode: 'development',
  devServer: {
    /** static允许我们在DevServer下访问该目录的静态资源
     * 简单理解来说 当我们启动DevServer时相当于启动了一个本地服务器
     * 这个服务器会同时以static-directory目录作为跟路径启动
     * 这样的话就可以访问到static/directory下的资源了
     */
    static: {
      directory: path.join(__dirname, '../public'),
    },
    //默认为true
    hot: true,
    //是否开启代码压缩
    compress: true,
    port: 9000,
    /**历史转发，解决刷新404 */
    historyApiFallback: true,
    open: true,
  },
  /**源码跳转 */
  devtool: 'source-map',
}

module.exports = merge(devConfig, baseConfig)
