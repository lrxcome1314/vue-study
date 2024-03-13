const { defineConfig } = require('@vue/cli-service')
// webpack.config.js
//const IconsResolver = require('unplugin-icons/resolver')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ElementPlus = require('unplugin-element-plus/webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
//const Icons=require('unplugin-icons/webpack');

module.exports = defineConfig({
  //externals: {
  //  fs: require('fs'),
  //},
  /* resolve: {
    //文件扩展名需要添加ts
    extensions: ['.ts', '.js'],
  }, */
  /*  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.js", // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      //title: "webpack练习", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      //favicon: path.resolve("./public/favicon.ico"),
      //chunks: ["chunk-vendors", "chunk-common", "index"], // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk,vendor 是指提取涉及 node_modules 中的公共模块
    },
    // subpage: 'src/subpage/main.js'//官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
  }, */

  //entry :"./src/main.js",
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  lintOnSave: false,
  pluginOptions: {
    typescript: {
      // 这里是ts-loader选项
    },
  },
  chainWebpack: (config) => {
    //config.resolve.extensions
    //文件扩展名需要添加ts
    //'.ts', '.js',
    //},
    config.resolve.extensions.add('.js').add('.ts')
    //config.rule('ts')
    //config.rule('ts').use('ts-loader')
    //config.rule('ts').use('babel-loader')
    //config.rule('ts').use('cache-loader')
    //config.plugin('fork-ts-checker')
    //config.module.rule('eslint')
    //config.module.rule('eslint').use('eslint-loader')
    /* config.module
      .rule('eslint')
      .rule('ts')
      .test(/\.ts$/)
      .use('eslint-loader')
      .use('ts-loader')
      .loader('ts-loader')
      .end() */
  },
  /* server: {
    open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000', // Express服务器地址及端口号
        changeOrigin: true,
        //pathRewrite: {
        // '^/api': '',
        //},
      },
      // ...
    },
  }, */

  //设置启动ip和端口
  devServer: {
    open: true,

    //open:"Google Chrome",
    host: process.env.Host || 'localhost',
    port: 8081, // 例如 8081
    //hot: true,
    //clientLogLevel: 'warning',
    //client: {
    //overlay: false,
    //},
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Express服务器地址及端口号
        changeOrigin: true,
        //ws: true,
        /*  pathRewrite: {
          '^/api': '',
        }, */
      },
      '/test': {
        target: 'http://localhost:3002', // Express服务器地址及端口号
        changeOrigin: true,
        //ws: true,
        //pathRewrite: {
        //  '^/test': '',
        //},
      },
      // ...
    },
    //overlay:{
    //warnings:false,
    //error:true
    //}
  },
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      fs: require('fs'),
    },
    node: {
      //fs: 'empty',
      //net: 'empty',
      //tls:'empty',
    },
    resolve: {
      fallback: {
        path: false,
        fs: false,
        //net: false,
      },
      alias: {
        //   components: '@/components'
        crypto: false,
        stream: false,
        assert: false,
        //http: false,
        https: false,
        util: false,
        os: false,
        url: false,
      },
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.d.ts', '.vue', '.json', '.mjs'],
      // ...
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },

    plugins: [
      new NodePolyfillPlugin(),
      //配置webpack自动按需引入element-plus，
      require('unplugin-element-plus/webpack')({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return 'element-plus/theme-chalk/${name}.css'
            },
          },
        ],
      }),

      AutoImport({
        dts: true,
        dirs: ['./src/'],
        imports: ['vue', 'vue-router'],
        resolvers: [
          // 自动导入图标组件

          ElementPlusResolver({ importStyle: true }),
          //IconsResolver({prefix: 'Icon'}),
        ],
        // eslint报错解决
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      Components({
        dts: true,
        //dirs: ['./src/'],
        resolvers: [
          ElementPlusResolver({ importStyle: false }),
          // 自动注册图标组件
          //IconsResolver({
          //  enabledCollections: ['ep'],}),
        ],
      }),
      ElementPlus(),
      //Icons({
      //   autoInstall: true,
      //compiler: 'vue3'
      //}),
    ],
  },
})
