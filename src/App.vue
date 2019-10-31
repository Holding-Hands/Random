<template>
  <div id="app">
    <!--    keep-alive 离开组件时不会被销毁-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <mui-bar></mui-bar>
  </div>
</template>

<script>
  import MuiBar from './components/common/muiBar/MuiBar'

  export default {
    name: 'App',
    components: {
      MuiBar,
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.css';

  .v-enter {
    opacity: 0;
    transform: translate(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translate(-100%);
    position: absolute;
  }
</style>
