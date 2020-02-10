import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    categories: [],
    cart: {},
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    CART(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=:page`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('LOADING', false);
      });
    },
    getCart(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        context.commit('CART', response.data.data);
        context.commit('LOADING', false);
      });
    },
    removeCartItem(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: cart }).then(() => {
        context.commit('LOADING', false);
        context.dispatch('getCart');
      });
    },
  },
  modules: {
  },
});
