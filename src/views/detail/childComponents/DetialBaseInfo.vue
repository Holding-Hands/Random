<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length!==0">
    <div class="price">
      <span class="realPrice">{{goods.realPrice}}</span>
      <span class="discount" v-show="goods.discount.length!==0">{{goods.discount}}</span>
    </div>
    <p><span class="oldPrice">{{goods.oldPrice}}</span></p>
    <p>{{goods.title}}</p>
    <div class="other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="service-item" v-for="index in goods.services.length-1 " :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetialBaseInfo",
    props: {
      goods: {
        // type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .detail-base-info {
    padding: 3px 10px 0;
    background-color: #fff;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: #051B28;
    line-height: 20px;
    display: -webkit-box;
    max-height: 63px;
    overflow: hidden;
    /*word-break: break-all;*/
  }

  .realPrice {
    font-weight: bold;
    font: 22px "Arial", tahoma, arial;
    color: #FF0036;
    font-weight: bolder;
    position: relative;
    top: 2px;
    margin-right: 5px;
  }

  .oldPrice {
    font-size: 16px;
    color: #a19da0;
    line-height: 10px;
    text-decoration: line-through;
    margin-left: 5px;
  }

  .discount {
    background-color: #fb6878;
    color: #FFF;
    font-size: 12px;
    padding: 1px 2px;
  }

  .other {
    display: flex;
    background-color: #FFF;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    color: #999;
    text-align: center;
    justify-content: space-between;

    span {
      flex: 1;
    }
  }

  .service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;

    .service-item img {
      width: 14px;
      height: 14px;
      position: relative;
      top: 2px;
    }

    .service-item span {
      font-size: 13px;
      color: #333;
    }
  }


</style>
