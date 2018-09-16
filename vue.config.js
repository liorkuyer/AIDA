const path = require('path')

module.exports = {
  outputDir: '../web/web/aida/', //path.resolve(__dirname, '../web/web/'),
  configureWebpack: {
    resolve: {
      modules: [
        path.resolve(), 
        'node_modules'
      ],
    },
    output: {
      publicPath: "/",
      filename: "js/[name].js",
      chunkFilename:"js/[name].js"
    }
  },

  chainWebpack: config => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename:  "css/[name].css",
            chunkFilename: "css/[name].css"
          }
        ]);
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