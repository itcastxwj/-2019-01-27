<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="box" @change="boxChange">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  mounted() {
   mui(".mui-numbox").numbox() 
  //  console.log(this.maxcount)
  },
  props:["maxcount"],
  methods:{
    boxChange(){
      // console.log(this.$refs.box.value)
      this.$emit('countCh',parseInt(this.$refs.box.value))
    }
  },
  watch: {
    maxcount:function(newValue,oldValue){
      mui(".mui-numbox").numbox().setOption('max',newValue)
    }
  }
};

</script>

<style lang="scss" scoped>
</style>
