<template>
  <div>
    <h3>发表评论</h3>
    <hr>请输入你的姓名:
    <input type="text" v-model="name">
    请发表你的评论:
    <textarea placeholder="请你多BB几句" maxlength="120" v-model="message"></textarea>
    <mt-button type="primary" size="large" @click="postmsg">发表评论</mt-button>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="item in list" :key="item.id">
        <div
          class="up"
        >{{item.id}}&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间:{{item.ctime|dateFormat}}</div>
        <div class="down">{{item.message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      list: [
        {
          id: 1,
          name: "谢文钧",
          ctime: new Date(),
          message: "小芳是猪"
        },
        {
          id: 2,
          name: "钟芳宁",
          ctime: new Date(),
          message: "聪聪是猪"
        },
        {
          id: 3,
          name: "李聪聪",
          ctime: new Date(),
          message: "小芳和聪聪是猪"
        }
      ]
    };
  },
  // created() {
  //   this.postmsg();
  // },
  methods: {
    postmsg() {
      if (this.name != "" && this.message != "") {
        this.list.push({
          id: this.list.length + 1,
          name: this.name,
          ctime: new Date(),
          message: this.message
        });
        this.name = this.message = "";
      }
    }
  },
  filters: {
    dateFormat() {
      var dt = new Date()
      var y = dt.getFullYear()
      var m = (dt.getMonth() + 1).toString().padStart(2, "0")
      var d = dt.getDate().toString().padStart(2, "0")
      var h =dt.getHours().toString().padStart(2, "0")
      var n=dt.getMinutes().toString().padStart(2,'0')
      var s=dt.getSeconds().toString().padStart(2,'0')
      return y + "-" + m + "-" + d+'  '+h+'-'+n+'-'+s 
    }
  }
};
</script>
<style lang="scss" scoped>
.comment-list {
  margin: 10px 0;
  .comment-item {
    margin-bottom: 10px;
    // text-align: center;

    .up {
      background-color: #ccc;
      font-size: 13px;
    }
    .down {
      text-indent: 2em;
      font-size: 16px;
    }
  }
}
</style>

