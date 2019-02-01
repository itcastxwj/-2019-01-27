<template>
  <div class="shopcarContainer">
    <!-- 商品部分 -->
    <div class="shopinfo">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="../../images/3.jpg" alt>
            <div class="shopinfoto">
              <h1>小米手机真辣鸡</h1>
              <div class="shopinfoDown">
                <span class="price">￥2199</span>
                <shopBox></shopBox>
                <span class="del">删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>

<script>
import shopBox from "../subcomponents/shopbox.vue";
export default {
  components: {
    shopBox
  }
};
</script>

<style lang="scss" scoped>
.shopcarContainer {
  overflow: hidden;
  .mui-card-content-inner{
    display: flex;
    align-items: center;
    img{
      width: 50px;
      height: 80px;
      margin: 0 5px;
    }
    .shopinfoto{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 8px;
      h1{
        font-size: 14px;
      }
      .shopinfoDown{
        .price{
          color: #f00;
          // font-style: italic;
          font-weight: 700;
        }
        .del{
          color: #00f;
          cursor: pointer;
        }
        .mui-numbox{
          height: 28px;
        }
      }
    }
  }
  .shopinfo {
    background-color: #eee;
    padding: 3px 0;
  }
}
</style>
