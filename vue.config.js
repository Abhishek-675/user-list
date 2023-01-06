const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//********for github pages */
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/user-list/'
//     : '/'
// }