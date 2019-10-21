import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入fastclick库
import fastClick from 'fastclick'
fastClick.attach(document.body)

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 重置样式
import 'assets/styles/reset.css'
// 解决1px边框问题
import 'assets/styles/border.css'
// 引入iconfont样式
import 'assets/iconfont/iconfont.css'
// 引入vue-awesome-swiper的样式
import 'swiper/dist/css/swiper.css'

// 安装VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
