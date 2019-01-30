<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
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
.mint-swipe {
  height: 300px;
  // .mint-swipe-item:nth-child(1){
  //   background-color: #f00;
  // }
  // .mint-swipe-item:nth-child(2){
  //   background-color: #0f0;
  // }
  // .mint-swipe-item:nth-child(3){
  //   background-color: #00f;
  // }
  .mint-swipe-item {
    // &:nth-child(1) {
    //   background-color: rgb(189, 226, 25);
    // }
    // &:nth-child(2) {
    //   background-color: rgb(13, 126, 23);
    // }
    // &:nth-child(3) {
    //   background-color: rgb(61, 19, 138);
    // }
    img{
      width: 375px;
      height: 300px;
    }
  }
}
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
