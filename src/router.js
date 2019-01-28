import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MenberContainer from './components/tabbar/MenberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'}, 
    {path:'/home',component:HomeContainer},
    {path:'/menber',component:MenberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass:' mui-active'
})

// 把路由对象暴露出去
export default router