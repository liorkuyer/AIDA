module.exports = {
  devServer: {
    proxy: {
      '/studies/editor': {
        target: 'http://localhost/',
        ws: true,
        changeOrigin: true
      },      
      '/images/': {
        target: 'http://localhost/',
        ws: true,
        changeOrigin: true
      },      
    }
  }
}