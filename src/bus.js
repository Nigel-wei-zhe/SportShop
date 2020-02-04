import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// 製作後台提示訊息用 for dashboard
// ex: this.$bus.$emit('message:push', response.data.message, 'danger')
