import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 引入样式
import '@/styles/index.less'
// 引入 vantUI 的css 样式
import 'vant/lib/index.css'
import 'amfe-flexible'
Vue.use(Vant)

import { Button,Image as VanImage,NavBar  } from 'vant';
Vue.use(Button);
Vue.use(VanImage);
Vue.use(NavBar);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
