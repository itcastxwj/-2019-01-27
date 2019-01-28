import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import { Header ,Swipe, SwipeItem} from 'mint-ui';


Vue.use(VueResource)

Vue.use(VueRouter)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router//挂载路由对象
})