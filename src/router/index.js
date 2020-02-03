import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Dashboard_layout/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Dashboard_layout/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Dashboard_layout/Coupons.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
