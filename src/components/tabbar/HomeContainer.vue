<template>
  <div>
    <!-- 轮播图 -->
    <swiper></swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photo">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goods">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    
    </ul>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  data(){
    return{}
  },
  components:{
    'swiper':swiper
  }
}
// import { Toast } from "mint-ui";
// export default {
//   data() {
//     return {
//       lunbotuList: []
//     };
//   },
//   created() {
//     this.getBanner();
//   },
//   methods: {
//     getBanner() {
//       this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
//         // console.log(result.body)
//         if (result.body.status === 0) {
//           Toast("获取轮播图成功");
//           this.lunbotuList = result.body.message;
//         } else {
//           Toast("获取轮播图失败");
//         }
//       });
//     }
//   }
// };
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: 0;
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
</style>
