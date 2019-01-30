<template>
  <div>
    <h1>这是love组件</h1>
    <cmt-box></cmt-box>
  </div>
</template>

<script>
// import comment from '../../subcomponents/comment.vue'
import comment from '../subcomponents/comment.vue'
export default {
  components:{
    'cmt-box':comment
  }
}
</script>

<style lang="">
  
</style>