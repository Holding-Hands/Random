<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length!==0">
    <div class="shop-info-up">
      <div><img :src="shop.logo" alt=""></div>
      <div class="name">{{shop.name}}</div>
    </div>
    <div class="shop-info-middle">
      <ul>
        <li v-for="index in shop.score.length" :key="index">
          <span>{{shop.score[index-1].name}}</span>
          <span>{{shop.score[index-1].score}}</span>
        </li>
      </ul>
    </div>
    <div class="shop-info-down">
      <div class="shop-info-down-item">
        <div>{{shop.sells|sellCountFilter}}</div>
        <div>总销量</div>
      </div>
      <div class="shop-info-down-item">
        <div>{{shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(value){
        let result=value;
        if (value>10000){
          result=(result/10000).toFixed(1)+'万'
        }
        return result;
      }
    }
  }
</script>

<style scoped lang="less">
  .detail-shop-info {
    padding: 3px 10px 0;
    background-color: #fff;
    margin-top: 10px;
  }

  .shop-info-up {
    display: flex;
    margin-top: 10px;


    img {
      width: 54px;
      height: 54px;
    }

    .name {
      padding: 5px 10px;
      text-align: center;
      line-height: 54px;
      color: #333;
      font-size: 16px;
      font-family: Helvetica, sans-serif;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    padding-right: 5px;
  }

  .shop-info-middle ul {
    display: flex;
    justify-content: space-around;

    li {
      list-style: none;
      color: #999;
      font-size: 12px;

      span:nth-child(2) {
        color: #00b78b;
        padding-right: 14px;
        background-position: 100% 50%;
        background-repeat: no-repeat;
        background-size: 12px;
        font-weight: 400;
      }
    }
  }

  .shop-info-down {
    display: flex;
    justify-content: space-around;

    .shop-info-down-item{
      div:nth-child(1){
        text-align: center;
        font-size: 24px;
        font-weight: bolder;
        margin: 7px 0;
      }
    }
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;

    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
    }
  }
</style>
