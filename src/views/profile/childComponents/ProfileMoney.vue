<template>
  <div class="profile-money">
    <slot name="top" class="top"></slot>
    <slot name="bottom" class="bottom"></slot>
  </div>
</template>

<script>
  export default {
    name: "ProfileMoney"
  }
</script>

<style scoped>
  .profile-money {
    height: 100px;
    border-right:1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 10px solid #eeeeee;
  }
  .top {
    margin-bottom: 5px;
  }
</style>
