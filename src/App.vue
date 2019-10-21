<template>
  <div id="app">
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zcy" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zcy" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zcy" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zcy" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="less" scoped>
  @import 'assets/css/base.css';

  .v-enter{
    opacity:0;
    transform:translate(100%);
  }

  .v-leave-to{
    opacity:0;
    transform:translate(-100%);
    position: absolute;
  }

  .mui-bar-tab .mui-tab-item-zcy .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mui-bar-tab .mui-tab-item-zcy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-zcy.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-zcy {
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
