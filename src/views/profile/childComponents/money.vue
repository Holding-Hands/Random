<template>
  <div class="money">
    <profile-money>
      <p slot="top" class="top"><span>0.00</span>元</p>
      <p slot="bottom">我的余额</p>
    </profile-money>
  </div>
</template>

<script>
  import ProfileMoney from './ProfileMoney'

  export default {
    name: "money",
    components: {
      ProfileMoney
    }
  }
</script>

<style scoped>
  .money {
    width: 33.3%;
  }
  .top span{
    color:#ff9950;
    font-size: 30px;
    font-weight: 700;
  }
</style>
