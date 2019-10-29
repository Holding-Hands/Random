<template>
  <div>
    <div v-for="(item,index) in this.$store.state.cartList" v-bind:key="index">{{item}}</div>
  </div>
</template>

<script>
    export default {
        name: "CartListItem"
    }
</script>

<style scoped>

</style>
