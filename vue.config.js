const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias.set('assets', resolve('src/assets'))
  }
}
