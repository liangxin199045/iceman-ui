const path = require('path');
const fs = require('fs');

function resolve(dir){
    return path.resolve(__dirname,dir)
}

function getEntries(epath) {
  let files = fs.readdirSync(resolve(epath));
  const entries = files.reduce((ret, item) => {
      const itemPath = path.join(epath, item)
      const isDir = fs.statSync(itemPath).isDirectory();
      if (isDir) {
          ret[item] = resolve(path.join(itemPath, 'index.ts'))
      } else {
          const [name] = item.split('.')
          ret[name] = resolve(`${itemPath}`)
      }
      return ret
  }, {})
  return entries
}

const buildConfig ={
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  },
  outputDir: path.resolve(__dirname, 'lib'),
  configureWebpack: {
    entry: { 
      ...getEntries('packages'),
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts','.js','.vue','.json'],
        alias: {
            '@': resolve('packages'),
            'assets': resolve('examples/assets'),
            'views': resolve('examples/views')
        }
    }
  }
}

const devConfig ={
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
        extensions: ['.ts','.js','.vue','.json'],
        alias: {
            '@': resolve('packages'),
            'assets': resolve('examples/assets'),
            'views': resolve('examples/views')
        }
    } 
  },
  devServer: {
    port:8080,
    hot: true,
    open: 'Google Chrome'
  }
}

let config =process.env.NODE_ENV=='development' ? devConfig : buildConfig

module.exports = config
