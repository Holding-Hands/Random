<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit('addToCart');
      }
    }
  }
</script>

<style scoped lang="less">

  .detail-bottom-bar {
    height: 60px;
    background-color: #fff;
    position: relative;
    display: flex;
    text-align: center;
    z-index: 9;
  }

  .bar-item {
    flex: 1;
    display: flex;

    div {
      flex: 1;
    }

  }

  .bar-left {

    .text {
      font-size: 13px;
    }

    .icon {
      display: block;
      width: 43px;
      height: 38px;
      margin: 1px auto;
      background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
    }

    .service {
      background-position: 0 -54px;
    }

    .shop {
      background-position: 0 -107px;
    }
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 60px;

    .cart {
      background-color: #ffe817;
      color: #333;
    }

    .buy {
      background-color: #f69;
    }
  }


</style>
