<template>
  <div class="app-container">
    <mt-header fixed title="过不去的终究会过去">
      <span @click="goback" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-dd" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-dd" to="/menber">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-dd" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.state.selected}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-dd" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:false
    }
  },
  created() {
    this.flag=this.$route.path==='/home'?false:true;
  },
  methods: {
    goback(){
        this.$router.go(-1);
    }
  },
  watch: {
    '$route.path':function(newValue){
      if(newValue==='/home'){
        this.flag=false;
      }else{
        this.flag=true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
.mui-bar-tab .mui-tab-item-dd.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-dd {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-dd .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-dd .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
