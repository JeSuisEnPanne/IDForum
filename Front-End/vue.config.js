const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})






module.exports = {

  devServer: {
  
  open: true, // Whether the browser page will pop up automatically 
  host: "localhost",
  port: '8080',
  proxy: {
  
  '/api': {
  
  target: 'http://localhost:8880', //API The address of the server 
  changeOrigin: true,
  }
  },
  headers: {
  
  'Access-Control-Allow-Origin': '*',
  }
  }
  }