var path = require('path')
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  {raw: true}
)

function getBaseConfig () {
  return {
    entry: {
      app: path.resolve('./src/entry.js')
    },
    output: {
      path: 'dist',
    },
    resolve: {
      extensions: ['', '.js', '.vue'],
      fallback: [path.join(__dirname, './node_modules')],
      alias: {
        'assets': path.resolve(__dirname, './src/assets/'),
        'components': path.resolve(__dirname, './src/components/'),
        'api': path.resolve(__dirname, './src/api/'),
        'router': path.resolve(__dirname, './src/router/'),
        'store': path.resolve(__dirname, './src/store/'),
        'views': path.resolve(__dirname, './src/views/'),
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

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.loaders[1].loaders.push('vue')

var weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
