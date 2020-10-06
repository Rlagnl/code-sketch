import Vue from "vue";
import Router from "vue-router";
const home = () => import(/* webpackChunkName: "home" */ './views/home.vue')
const functional = () => import(/* webpackChunkName: "functional" */ './views/functional.vue')

Vue.use(Router);

export default new Router({
  // mode: "history",
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: "/home",
      name: "home",
      component: home
    }, {
      path: "/functional",
      name: "functional",
      component: functional
    }
  ]
});