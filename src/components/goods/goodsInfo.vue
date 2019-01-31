<template>
  <div class="infocontainer">
    <!-- 这是商品展示区 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :fullage="true"></swiper>
					</div>
				</div>
			</div>

      <!-- 这是价格展示区 -->
      <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
			</div>

      <!-- 这是商品参数 -->
      <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
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
</script>

<style lang="scss" scoped>
.infocontainer{
  background-color: #ccc;
  // margin-top: 0; 
}
</style>
