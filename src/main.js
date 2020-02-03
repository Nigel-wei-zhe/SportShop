import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'bootstrap';

import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';
import timestampToFormatTimeFilter from './filters/timestampToFormatTime';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true; // 跨域驗證
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timestampToFormatTime', timestampToFormatTimeFilter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(`signin_status: ${response.data.success}`);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/signin',
        });
      }
    });
  } else {
    next();
  }
});
