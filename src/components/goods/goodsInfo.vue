<template>
  <div class="infocontainer">
    <!-- 这是商品展示区 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :fullage="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 这是价格展示区 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <span class="old">
              <del>￥2399</del>
            </span>
            销售价:
            <span class="new">￥2199</span>
          </p>
          <div class="buy">购买数量:
           <numberbox></numberbox>
          </div>
          <p class="btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 这是商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numberbox from '../subcomponents/numberbox.vue'
export default {
  data() {
    return {};
  },
  components: {
    swiper,
    numberbox
  }
};
</script>

<style lang="scss" scoped>
.infocontainer {
  background-color: #ccc;
  margin-top: -10px;
}
.mui-card-content-inner {
  padding: 0;
  margin: 0;
}
.mui-card-content-inner {
  .price {
    padding-top: 5px;
    font-size: 13px;
    padding-left: 10px;
    .new{
      font-weight: 700;
      color:red;
      font-size: 15px;
      // margin-left: 15px;
    }
    .old{
      margin-right: 12px;
    }
  }
  .buy {
    margin: 10px;
    // font-size: 20px;
    // font-style:italic;
  }
  .btn{
    padding-left: 10px;
  }
}
</style>
