/**
 * @author walid
 * @date 2016/03/20
 * @description weex 打包配置
 */

const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fs = require('fs-extra')

const bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  {raw: true}
)

function getEntryFileContent(entryPath, vueFilePath) {
  let relativePath = path.relative(path.join(entryPath, '../'), vueFilePath);
  // relativePath = relativePath.replace(/\/ig/, '/')
  return `
/**
 * @author walid
 * @date 2016/03/20
 * @description 程序入口启动配置
 */

const App = require("${relativePath}")

// 全局注册组件
Vue.component('osc-root', require("components/osc-root"))
Vue.component('osc-navpage', require("components/osc-navpage"))
Vue.component('osc-navbar', require("components/osc-navbar"))
Vue.component('osc-tabbar', require("components/osc-tabbar"))
Vue.component('osc-list', require("components/osc-list"))
Vue.component('osc-scroller', require("components/osc-scroller"))

App.el = '#root'
new Vue(App)
`
}

const entry = {}

function walk(dir) {
  dir = dir || '.'
  let directory = path.join(__dirname, './src', dir)
  let entryDirectory = path.join(__dirname, './src/entry');
  fs.readdirSync(directory)
    .forEach(file => {
      let fullpath = path.join(directory, file)
      let stat = fs.statSync(fullpath)
      let extname = path.extname(fullpath)
      if (stat.isFile() && extname === '.vue') {
        let entryFile = path.join(entryDirectory, dir, path.basename(file, extname) + '.js')
        fs.outputFileSync(entryFile, getEntryFileContent(entryFile, fullpath))
        // let name = path.join('build', dir, path.basename(file, extname))
        let name = path.join(dir, path.basename(file, extname))
        entry[name] = entryFile + '?entry=true'
        // && file !== 'components'
      } else if (stat.isDirectory()) {
        let subdir = path.join(dir, file)
        walk(subdir)
      }
    })
}

walk()

function getBaseConfig() {
  return {
    entry: entry,
    output: {
      path: 'dist'
    },
    resolve: {
      extensions: ['', '.js', '.vue'],
      fallback: [path.join(__dirname, './node_modules')],
      alias: {
        'assets': path.resolve(__dirname, './src/assets/'),
        'components': path.resolve(__dirname, './src/components/'),
        'constants': path.resolve(__dirname, './src/constants/'),
        'api': path.resolve(__dirname, './src/api/'),
        'router': path.resolve(__dirname, './src/router/'),
        'store': path.resolve(__dirname, './src/store/'),
        'views': path.resolve(__dirname, './src/views/'),
        'mixins': path.resolve(__dirname, './src/mixins'),
        'config': path.resolve(__dirname, './config'),
        'utils': path.resolve(__dirname, './src/utils/')
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.vue$/,
          loader: 'eslint',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        }
      ]
    },
    vue: {
      postcss: [cssnext({
        features: {
          autoprefixer: false
        }
      })]
    },
    plugins: [bannerPlugin]
  }
}

const webConfig = getBaseConfig()
webConfig.entry = {
  entry: path.resolve('./src/entry.js')
}
webConfig.output = {
  path: 'dist/web',
  filename: '[name].js'
}
webConfig.module.loaders[1].loaders.push('vue')

const weexConfig = getBaseConfig()
weexConfig.output.filename = 'weex/[name].js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
