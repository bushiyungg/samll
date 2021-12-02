import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import {Carousel,CarouselItem} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
