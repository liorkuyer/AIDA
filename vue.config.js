const path = require('path')

module.exports = {

  configureWebpack: {
    resolve: {
      modules: [
        path.resolve(), 
        'node_modules'
      ],
    }
  },

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
        '/assets/public/studies/': {
            target: 'http://localhost/',
            ws: true,
            changeOrigin: true
        },
    }
  }
}