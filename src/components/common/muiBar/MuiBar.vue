<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item mui-active" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/category">
      <span class="mui-icon mui-icon-bars"></span>
      <span class="mui-tab-label">分类</span>
    </router-link>
    <router-link class="mui-tab-item" to="/cart">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{this.$store.getters.cartLength}}</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item " to="/profile">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
</template>

<script>
  import '../../../lib/mui/css/mui.min.css'
  import '../../../lib/mui/css/icons-extra.css'
    export default {
        name: "HomeMuiBar"
    }
</script>

<style scoped>
  .router-link-active{
    /*选择高亮*/
    background-color: #FF8198;
  }
  .mui-bar-tab .mui-tab-item.mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mui-bar-tab .mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item .mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item {
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
</style>
