<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :goods-info="goodsInfo"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="comment"/>
    </scroll>
  </div>
</template>

<script>
  //detail子组件相关导入
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
  import DetailParamInfo from './childComponents/DetailParamInfo'
  import DetailCommentInfo from './childComponents/DetailCommentInfo'

  //网络请求相关导入
  import {getDetail, Goods, Shop, ParamInfo} from "../../network/request/detail";

  //导入公共组件
  import Scroll from '../../components/common/scroll/Scroll'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        goodsInfo: {},
        paramInfo: {},
        comment: {},
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        if (res.status === 200) {
          const data = res.data.result;

          //获取轮播图片信息
          this.topImages = data.itemInfo.topImages;

          //获取实物参数信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          this.shop = new Shop(data.shopInfo);
          this.goodsInfo = data.detailInfo;
          this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
          console.log(data);
          console.log(res);

          // 获取评论数据信息
          this.comment =data.rate;
        } else {
          alert('获取数据失败')
        }
      })
    },
    destroyed() {
      console.log('销毁了');
    },
    methods: {}
  }
</script>

<style scoped>
  #detail {
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
