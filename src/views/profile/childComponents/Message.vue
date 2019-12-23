<template>
  <div class="message">
    <profile-message>
      <span slot="left">
        <img src="../../../assets/img/profile/message.svg" alt="">
      </span>
      <div slot="right" class="text">我的消息</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="../../../assets/img/profile/pointer.svg" alt="">
      </span>
      <div slot="right" class="text">积分商城</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="../../../assets/img/profile/vip.svg" alt="">
      </span>
      <div slot="right" class="text">会员卡</div>
    </profile-message>
    <div class="divider"></div>
    <profile-message>
      <span slot="left">
        <img src="../../../assets/img/profile/cart.svg" alt="">
      </span>
      <div slot="right" class="text">我的购物车</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="../../../assets/img/profile/shopping.svg" alt="">
      </span>
      <div slot="right" class="text">下载购物App</div>
    </profile-message>
  </div>
</template>

<script>
  import ProfileMessage from './ProfileMessage'
  export default {
    name: "Message",
    components: {
      ProfileMessage
    }
  }
</script>

<style scoped>
  img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .text {
    display: inline-block;
    width: calc(100vw - 40px);
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .vip {
    border-bottom: 10px solid #eeeeee;
  }
  .divider {
    margin-top: 5px;
    height: 15px;
    background-color: #eeeeee;
  }
</style>
