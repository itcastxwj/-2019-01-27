import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import { Header } from 'mint-ui';

Vue.use(VueRouter)
Vue.component(Header.name, Header);

var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router//挂载路由对象
})