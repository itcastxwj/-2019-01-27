<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/news/info">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2373144604,3573823380&fm=27&gp=0.jpg"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <div class="mui-ellipsis">
              <span>发表时间:2015-04-16 11:50:28</span>
              <span>点击:1次</span>
            </div>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2373144604,3573823380&fm=27&gp=0.jpg"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <div class="mui-ellipsis">
              <span>发表时间:2015-04-16 11:50:28</span>
              <span>点击:1次</span>
            </div>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2373144604,3573823380&fm=27&gp=0.jpg"
          >
          <div class="mui-media-body">
            <h1>幸福</h1>
            <div class="mui-ellipsis">
              <span>发表时间:2015-04-16 11:50:28</span>
              <span>点击:1次</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .mui-media-body{
      h1{
      font-size: 16px;
      }
      .mui-ellipsis{
        font-size: 13px;
        color: #00f;
        display:flex;
        justify-content: space-between;
      }
    }

</style>


