import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MenberContainer from './components/tabbar/MenberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewList from './components/news/newList.vue'
import NewInfo from './components/news/newInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import LoveList from './components/news/newLove.vue'
import GoodList from './components/goods/goodsList.vue'
import GoodInfo from './components/goods/goodsInfo.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'}, 
    {path:'/home',component:HomeContainer},
    {path:'/menber',component:MenberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/news',component:NewList},
    {path:'/home/news/info',component:NewInfo},
    {path:'/home/photo',component:PhotoList},
    {path:'/home/news/love',component:LoveList},
    {path:'/home/goods',component:GoodList},
    {path:'/home/goodsinfo',component:GoodInfo}
  ],
  linkActiveClass:' mui-active'
})

// 把路由对象暴露出去
export default router