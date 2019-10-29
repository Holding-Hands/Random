<template>
  <div id="detail">
    <!--    注意监听事件要用驼峰titleClick-->
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scrollTo="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :goods-info="goodsInfo"  @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="comment"/>
      <detail-goods-list ref="goods" :goods="recommend"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShow"/>
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
  import DetailGoodsList from './childComponents/DetailGoodsList'
  import DetailBottomBar from './childComponents/DetailBottomBar'

  //网络请求相关导入
  import {getDetail, getRecommend, Goods, Shop, ParamInfo} from "../../network/request/detail";

  //导入公共组件
  import Scroll from '../../components/common/scroll/Scroll'

  //导入commen里的函数
  import {imageListenrMixin} from "../../common/mixin";
  import {debounce} from "../../common/tools";
  import {topBackMixin} from "../../common/mixin";

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
        recommend: [],
        imageListenr: null,
        topYs:[],
        topY:null,
        positionY:0,
        currentIndex:0,
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
      DetailGoodsList,
      DetailBottomBar,
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

          // 获取评论数据信息
          this.comment = data.rate;

        } else {
          alert('获取数据失败')
        }
      })
      //获取recommend推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      })
      // this.$nextTick(() => {
      //   //根据最新的数据，对应的DOM是已经被渲染处理
      //   //但是图片并没有加载完(所有导致offsetTop值不对，不包含其中的图片)
      //   this.topYs = [];
      //   this.topYs.push(0);
      //   this.topYs.push(this.$refs.param.$el.offsetTop)
      //   this.topYs.push(this.$refs.comment.$el.offsetTop)
      //   this.topYs.push(this.$refs.goods.$el.offsetTop)
      //   console.log(this.topYs);
      // })
      this.topY = debounce(() => {
        this.topYs = []
        this.topYs.push(0);
        this.topYs.push(this.$refs.param.$el.offsetTop)
        this.topYs.push(this.$refs.comment.$el.offsetTop)
        this.topYs.push(this.$refs.goods.$el.offsetTop)
        this.topYs.push(Number.MAX_VALUE)  //最大值
      },100)
    },
    methods: {
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.topYs[index],200)
      },
      imageLoad() {
        this.$refs.scroll.refresh();
        this.topY();
      },
      scroll(position){
        //1.获取y值
        this.positionY=-position.y;
        //2.positionY和topYs中的值比较
        for (let i=0;i< this.topYs.length-1;i++){
          if (this.currentIndex!==i&&(this.positionY>=this.topYs[i]&&this.positionY<this.topYs[i+1])){
            this.currentIndex=i;
            this.$refs.nav.currentIndex=this.currentIndex;
          }
        }
        //比较backTop位置
        this.isShow=this.positionY > 3000;
      },
      addToCart(){
        console.log('addToCart===detail');
        //获取购物车需要展示的信息，对象的形式
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        // product.newPrice = this.newPrice;
        // this.$store.commit('addToCart',product)
        this.$store.dispatch('addToCart',product)
      }
    },
    mixins: [imageListenrMixin,topBackMixin],
    mounted() {
      //重复对象采用混入
      // const refresh = debounce(this.$refs.scroll.refresh, 100)
      // this.imageListenr = () => {
      //   refresh()
      // }
      // this.$bus.$on('itemImageLoad', imageListenr)
    },
    destroyed() {
      //离开取消监听
      //有个deactivate函数里有缓存，在deactivate执行下列代码，如果没有则在destroyed里执行
      this.$bus.$off('itemImageLoad', this.imageListenr)
    }
  }
</script>

<style scoped lang="less">
  #detail {
    position: relative;
    z-index: 100;
    height: 100vh;
    background-color: white;

    .bottom-bar{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .content {
    height: calc(100% - 93px);
    position: absolute;
    overflow: hidden;
  }

</style>
