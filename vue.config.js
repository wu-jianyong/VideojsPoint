const path = require('path')

const serverPort = process.env.SERVER_PORT || 9100

// 获取版本号，CI会注入到PACKAGE_VERSION环境变量中
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // project deployment base
  publicPath: '/',

  // where to output built files
  outputDir: 'app/public',

  // filename for index.html (relative to outputDir)
  indexPath: 'index.html',

  // whether filename will contain hash part
  filenameHashing: true,

  // boolean, use full build?
  runtimeCompiler: false,

  configureWebpack: {
    resolve: { alias: { '@': path.join(__dirname, 'web'), vue$: 'vue/dist/vue.js' } }
  },

  // chainWebpack(config) {},

  // deps to transpile
  transpileDependencies: [
    /* string or regex */
  ],

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: true,

  // multi-page config
  pages: {
    index: {
      // entry for the page
      entry: 'web/main.js',
      // the source template
      template: 'web/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index'
    }
  },

  // <script type="module" crossorigin="use-credentials">
  // #1656, #1867, #2025
  crossorigin: undefined,

  // subresource integrity
  integrity: false,

  css: {
    // extract: true,
    // modules: false,
    // localIdentName: '[name]_[local]_[hash:base64:5]',
    // sourceMap: false,
    // loaderOptions: {}
  },

  // whether to use eslint-loader
  lintOnSave: true,

  devServer: {
    disableHostCheck: true,
    port: 80,
    proxy: {
      '/api': {
        target: `http://127.0.0.1:${serverPort}`
      }
    }
  }
}
