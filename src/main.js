// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

//配置axios的全局基本路径
axios.defaults.baseURL='https://www.fastmock.site/mock/de216b265ef0e8a38492665a2ed0db7d/student'
//全局属性配置：在任意组件内可以使用this.$http获取axios对象
Vue.prototype.$http = axios

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
