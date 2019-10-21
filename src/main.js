import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入fastclick库
import fastClick from 'fastclick'
fastClick.attach(document.body)

// 重置样式
import 'assets/styles/reset.css'
// 解决1px边框问题
import 'assets/styles/border.css'
// 引入iconfont样式
import 'assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
