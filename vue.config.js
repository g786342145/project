module.exports = {
  devServer: {
    port: '9090',
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
