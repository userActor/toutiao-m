module.exports = {
    plugins: {
      // 生成浏览器css 样式规则前缀 (--wek 生成这种兼容前缀)
      // 'autoprefixer': {
      //   browsers: ['Android >= 4.0', 'iOS >= 8']
      // },

      // 作用： 把px 转为rem
      'postcss-pxtorem': {
        // 根元素的值  设置规则为  设计稿的宽度 / 10 
        rootValue({file}) {
          return file.indexOf('vant') !== -1 ? 37.5: 75
        },

        // 配置要转换的 css 属性
        //  *  表示所有
        propList: ['*']
        // propList: ['height']
      }
    }
  }
  