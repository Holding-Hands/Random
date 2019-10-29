<template>
  <div class="goods-list-item" v-if="goodsList.length!==0">
    <div v-for="(item,index) in goodsList" :key="index" class="goods-item" @click="itemClick(item)">
      <img :src="item.image" alt="" @load="imageLoad">
      <p class="title">{{item.title}}</p>
      <div class="bottom">
        <p class="sell">
          <span class="price">￥{{item.price}}</span>
          <span class="collect">收藏{{item.cfav}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsListItem",
    props: {
      goodsList: {
        type:Array,
        default() {
          return []
        }
      }
    },
    created(){},
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(item){
        this.$router.push('/detail/'+item.iid);
        // this.$router.push({
        //   path:'/detail',
        //   query:{}
        // });
      }
    }
  }
</script>
s
<style scoped lang="less">
  .goods-list-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    background-color: #fff;


    .goods-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 49%;
      border: 1px solid #999;
      box-shadow: 0 0 10px #999;
      margin: 5px 0 0;
      min-height: 180px;

      p {
        margin: 0;
        padding-top: 5px;
      }

      img {
        width: 100%;
      }

      .title {
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
        color: #ccc;
        margin: 0;
      }
      .bottom {
        flex-direction: column;
        justify-content: space-between;
        margin: 5px 0 0;
        padding: 2px;
        background-color: #cccccc;
        /*position: absolute;*/
        /*bottom: 2px;*/
        /*right: 0;*/

        .price {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }

        .sell {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
