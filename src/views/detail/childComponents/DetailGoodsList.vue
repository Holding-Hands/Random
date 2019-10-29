<template>
  <div class="goods-list" v-if="Object.keys(goods).length!==0">
    <goods-list-item :goodsList="goods"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './DetailGoodsListItem'

  export default {
    name: "DetailGoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
