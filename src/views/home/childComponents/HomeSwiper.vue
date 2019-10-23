<template>
  <div class="home-swiper">
    <div class="block">
      <el-carousel height="187.19px">
        <el-carousel-item v-for="item in banners" :key="item.href">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        // type:Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return {
        isEmit:true
      }
    },
    methods:{
      imageLoad(){
        //检测是否发送，因为只发送一次知道高度
        if (this.isEmit) {
          this.$emit('imageLoad');
          this.isEmit=!this.isEmit;
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .home-swiper {
    .block {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100%;
    margin: 10px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
