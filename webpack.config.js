const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fs = require('fs')

const bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  {raw: true}
)

const entry = {
  entry: path.resolve('./src/entry.js')
}

function walk (dir) {
  dir = dir || '.'
  let directory = path.join(__dirname, './src', dir)
  fs.readdirSync(directory)
    .forEach(file => {
      let fullpath = path.join(directory, file)
      let stat = fs.statSync(fullpath)
      let extname = path.extname(fullpath)
      if (stat.isFile() && extname === '.vue') {
        // let name = path.join('build', dir, path.basename(file, extname))
        let name
        if (dir === '.') {
          name = path.join(path.basename(file, extname))
        } else {
          name = path.join(path.basename(dir, extname))
        }
        entry[name] = fullpath + '?entry=true'
      } else if (stat.isDirectory() && file !== 'components') {
        let subdir = path.join(dir, file)
        walk(subdir)
      }
    })
}

walk()

function getBaseConfig () {
  return {
    // entry: {
    //   app: path.resolve('./src/entry.js')
    // },
    entry: entry,
    output: {
      path: 'dist',
      filename: '[name].js'
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
webConfig.output.filename = '[name].web.js'
webConfig.module.loaders[1].loaders.push('vue')

const weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
