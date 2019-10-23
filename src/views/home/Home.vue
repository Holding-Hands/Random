<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"  ref="scroll" :probe-type="3" @scrollTo="contentScroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommend="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="title" class="tab-control" @tabControl="tabclick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  //导入公共组件
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabcontrol/TabControl'
  import GoodsList from '../../components/content/goodslist/GoodsList'
  import Scroll from '../../components/common/scroll/Scroll'
  import BackTop from '../../components/content/backtop/BackTop'
  //导入Home子组件
  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeature from './childComponents/HomeFeature'

  //导入方法组件
  import {getHomeData, getHomeGoods} from "../../network/request/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: {},
        recommends: {},
        title: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'sell': {page: 0, list: []},
          'new': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow:false,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      this.getHomeAllDate();
      this.getHomeAllGoods('pop');
      this.getHomeAllGoods('new');
      this.getHomeAllGoods('sell');
    },
    methods: {
      //事件监听相关方法
      tabclick(index) {
        //根据传过来的index判断是什么类型
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'sell';
            break;
          case 2:
            this.currentType = 'new';
            break;
        }
      },
      backClick(){
        //遇到的坑，在电脑端的移动没有效果，在移动端有效果
        this.$refs.scroll.scrollTo(0,0,500);
      },
      contentScroll(position){
        this.isShow=(-position.y)>1000;
        console.log(position);
      },
      //网络请求相关方法
      getHomeAllDate() {
        getHomeData().then(res => {
          if (res.status === 200) {
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
          } else {
            alert('获取数据失败')
          }
        })
      },
      getHomeAllGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          if (res.status === 200) {
            this.goods[type].list.push(...res.data.data.list);
            this.goods[type].page++;
          } else {
            alert('获取数据失败')
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  #home {
    //*height: 100vh;*/*/
    margin-top: 44px;
    position: relative;
  }

  .home-nav {
    background-color: deeppink;
    color: white;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    background-color: white;
    z-index: 9;
  }
  .content{
    /*height: calc(100%-93px);*/
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
