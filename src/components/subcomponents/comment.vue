<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请你多BB几句" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
    <div class="comment-list">
      <div class="comment-item">
        <div class="up">
          第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019/1/29
        </div>
        <div class="down">
          你是一只猪
        </div>
      </div>
       <div class="comment-item">
        <div class="up">
          第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019/1/29
        </div>
        <div class="down">
          你是一只猪
        </div>
      </div>
       <div class="comment-item">
        <div class="up">
          第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019/1/29
        </div>
        <div class="down">
          你是一只猪
        </div>
      </div>
       <div class="comment-item">
        <div class="up">
          第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019/1/29
        </div>
        <div class="down">
          你是一只猪
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.comment-list{
  margin: 10px 0;
  .comment-item{
    margin-bottom: 10px;
    // text-align: center;

    .up{
      background-color: #ccc;
      font-size: 13px;
    }
    .down{
    text-indent: 2em;
      font-size: 16px;

    }
  }
}
</style>

