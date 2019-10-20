<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">左边</slot>
    </div>
    <div class="center">
      <slot name="center">中间</slot>
    </div>
    <div class="right">
      <slot name="right">右边</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="less">
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;

  .right,
  .left {
    width: 60px;
    background-color: #269abc;
  }

  .center {
    flex: 1;
    background-color: #25fff7;
  }
  }

</style>
