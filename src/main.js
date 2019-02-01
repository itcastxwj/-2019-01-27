import Vue from "vue";
import app from "./App.vue";
import router from "./router.js";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from "vuex";
Vue.use(Vuex);

import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
import { Header, Swipe, SwipeItem, Button, Toast } from "mint-ui";
import moment from "moment";
import { InfiniteScroll } from "mint-ui";

Vue.use(InfiniteScroll);

Vue.use(VueResource);

Vue.use(VueRouter);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);
Vue.filter("dataFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});
var selected=parseInt(localStorage.getItem('selected'||0))
var store = new Vuex.Store({
  state: {
    selected:selected,
  },
  mutations: {
    addTocar(state, goodsinfo) {
      state.selected += parseInt(goodsinfo.selected);
      console.log(state.selected)
      localStorage.setItem('selected',state.selected)
    }
  },
  getters: {}
});

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router, //挂载路由对象
  store
});
