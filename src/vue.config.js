// vue.config.js
module.exports = {
    chainWebpack: config => {
        // Sass. Loader
        config.module
          .test(/\.scss$/)
          .use([
              'vue-style-loader',
                'css-loader',
                'sass-loader'])
      }
}