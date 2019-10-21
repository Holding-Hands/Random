<template>
  <div class="goods-list-item">
    <div v-for="item in goodsList" :key="item.iid" class="goods-item">
      <div class="up">
        <a :href="item.link">
          <img :src="item.show.img" alt="">

        </a>
      </div>
      <div class="bottom">
        <p>{{item.title}}</p>
        <p>
          <span class="price">￥{{item.price}}</span>
          <span class="collect">收藏{{item.cfav}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsList: {
        // type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-list-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .goods-item {
      width: 49%;
      border: 1px solid #999;
      box-shadow: 0 0 10px #999;
      margin: 3px 0;
      padding: 2px;
      min-height: 232px;

      .up {

        img {
          width: 100%;
        }

        p {
          margin-top: 3px;
          text-align: center;
        }
      }

      .bottom {
        flex-direction: column;
        justify-content: space-between;
        margin-right: 5px;


        p:last-child{
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
