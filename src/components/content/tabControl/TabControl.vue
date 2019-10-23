<template>
<div class="tab-control">
  <div v-for="(item,index) in titles" :key="index" class="tab-control-item"
  :class="{active:index===currentIndex}" @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
    export default {
      name: "TabControl",
      data(){
        return {
          currentIndex:0,
        }
      },
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index;//获取当前的点击的索引值
          this.$emit('tabControl',index)//把获取的索引值发送到Home父组件
        }
      }
    }
</script>

<style scoped lang="less">
 .tab-control{
   display: flex;

  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
}
  .active{
    color:deeppink;

    span{
      border-bottom:3px solid var(--color-tint);
      padding: 4px;
    }
  }
</style>
