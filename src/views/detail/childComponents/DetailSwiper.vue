<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

  //坑 引入自己封装的swiper类名不能起swiper
 import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped lang="less">
  .detail-swiper {
     height: 300px;
     overflow: hidden;
   }

</style>
