<template>
  <div class="profile-message">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: "ProfileMessage"
  }
</script>

<style scoped>
  .profile-message {
    height: 40px;
    /*line-height: 40px;*/
    font-size: 20px;
    padding: 10px 0;
  }
</style>
