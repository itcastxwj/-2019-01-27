<template>
  <div class="infocontainer">
    <transition @before-enter="beforeenter" @enter="enter" @after-enter="afterenter">
      <div class="ball" v-show="ball" ref="ball"></div>
    </transition>
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
            <mt-button type="danger" size="small" @click="getToCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 这是商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:SD1541544551</p>
          <p>库存情况:60件</p>
          <p>{{ctime|dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" @click="getinfo">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numberbox from "../subcomponents/numberbox.vue";
export default {
  data() {
    return {
      ctime: new Date(),
      ball: false
    };
  },
  methods: {
    getinfo() {
      console.log(this);
      // this.$router.push("/home/news/info")
      this.$router.push({ path: "/home/news/info" })
    },
    getToCar() {
      this.ball = !this.ball
    },
    beforeenter(el) {
      el.style.transform = "translate(0,0)"
    },
    enter(el, done) {
      el.offsetWidth

      const ballPosition= this.$refs.ball.getBoundingClientRect()
      const badgePosition=document.getElementById('badge').getBoundingClientRect()

      const x=badgePosition.left-ballPosition.left
      const y=badgePosition.top-ballPosition.top


      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)"
      done()
    },
    afterenter(el) {
      this.ball = !this.ball
    }
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

  .mui-card-content-inner {
    padding: 0;
    margin: 0;
    .price {
      padding-top: 5px;
      font-size: 13px;
      padding-left: 10px;
      .new {
        font-weight: 700;
        color: red;
        font-size: 15px;
        // margin-left: 15px;
      }
      .old {
        margin-right: 12px;
      }
    }
    .buy {
      margin: 10px;
      // font-size: 20px;
      // font-style:italic;
    }
    .btn {
      padding-left: 10px;
    }
    p {
      padding-left: 13px;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .three {
    font-size: 16px;
  }
}
.ball {
  width: 20px;
  height: 20px;
  background-color: #f00;
  border-radius: 50%;
  position: absolute;
  z-index: 9999;
  top: 336px;
  left: 135px;
}
</style>
