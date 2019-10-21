<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="title" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
  //导入公共组件
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabcontrol/TabControl'
  import GoodsList from '../../components/content/goodslist/GoodsList'

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
      GoodsList
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
        }
      }
    },
    created() {
      this.getHomeAllDate();
      this.getHomeAllGoods('pop');
      this.getHomeAllGoods('new');
      this.getHomeAllGoods('sell');
    },
    methods: {
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
        const page=this.goods[type].page+1;
        getHomeGoods(type, page).then(res => {
          console.log(res);
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
    margin-top: 44px;
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
  }
</style>
