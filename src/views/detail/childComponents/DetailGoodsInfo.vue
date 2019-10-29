<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="detail-goods-info">
    <div class="info-desc clear-fix">
      <div class="goods-info-up"></div>
      <div class="goods-info-middle"><p>{{goodsInfo.desc}}</p></div>
      <div class="goods-info-down"></div>
    </div>
    <div class="goods-info-key"></div>
    <div class="goods-info-list">
      <img v-for="(item, index) in goodsInfo.detailImage[0].list"
           :key="index"
           :src="item"
           @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        // 所有的图片加载完了在发送就可以了.
        this.$emit('imageLoad');
        // if (++this.counter === this.imagesLength) {
        //   console.log('加载完毕');
        //   this.$emit('imageLoad');
        //
        // }
      }
    },
    watch: {
      detailInfo() {
        // 获取图片的个数
        this.imagesLength = this.goodsInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped lang="less">
  .detail-goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;

    .info-desc,
    .goods-info-up,
    .goods-info-down {
      padding: 0 15px;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;

      .goods-info-up {
        /*float: left;*/

        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #333;
          bottom: 0;
        }
      }

      .goods-info-middle {
        padding: 15px 0;
        font-size: 14px;
      }

      .goods-info-down {
        float: right;

        &:after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #333;
          bottom: 0;
          right: 0;
        }
      }
    }

    .goods-info-key {
      margin: 10px 0 10px 15px;
      color: #333;
      font-size: 15px;
    }

    .goods-info-list img {
      width: 100%;
    }
  }

</style>
