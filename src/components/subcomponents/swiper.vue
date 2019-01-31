<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img :class="{'full':fullage}" src="..\..\images\3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img :class="full=fullage" src="..\..\images\5.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img :class="full=fullage" src="..\..\images\6.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props:['fullage']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
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
      height: 100%;
    }
    .full{
      width: 100%;
    }
  }
}
</style>

