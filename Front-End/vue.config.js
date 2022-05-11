const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


const webpack = require('webpack')
const jQueryPath = 'jquery/dist/jquery.js';

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({      
        jQuery: jQueryPath,
        $: jQueryPath,
        'window.jQuery': jQueryPath,
      }),
    ],
  }
}



module.exports = {

  devServer: {
  
  open: true, // Whether the browser page will pop up automatically 
  host: "localhost",
  port: '8080',
  proxy: {
  
  '/api': {
  
  target: 'http://localhost:8880', //API The address of the server 
  changeOrigin: false,
  }
  },
  headers: {
  
  'Access-Control-Allow-Origin': '*',
  }
  }
  }