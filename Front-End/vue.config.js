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
