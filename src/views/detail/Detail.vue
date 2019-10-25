<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
  //detail子组件相关导入
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetialBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo'

  //网络请求相关导入
  import {getDetail,Goods,Shop} from "../../network/request/detail";

  //导入公共组件
  import Scroll from '../../components/common/scroll/Scroll'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res=>{
        if (res.status===200) {
          const data=res.data.result;
          this.topImages=data.itemInfo.topImages;
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          this.shop=new Shop(data.shopInfo);
          this.detailInfo=data.detailInfo;
          console.log(res);
        }else {
          alert('获取数据失败')
        }
      })
    },
    destroyed(){
      console.log('销毁了');
    },
    methods: {

    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 100;
    height: 100vh;
    background-color: white;
  }

  .content {
    height: calc(100% - 93px);
    position: absolute;
    overflow: hidden;
  }

</style>
