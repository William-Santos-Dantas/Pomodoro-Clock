import Vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify';
import BaseTemplate from './layouts/BaseTemplate'

Vue.component('preloader-component', () => import('./components/PreLoader'))
Vue.config.productionTip = false

new Vue({
  render: h => h(BaseTemplate),
  router,
  vuetify,
}).$mount('#app')