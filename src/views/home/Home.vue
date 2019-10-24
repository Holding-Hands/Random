<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="title" ref="tabControl1" @tabControl="tabclick" v-show="isFixed" class="tab-control"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scrollTo="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <home-recommend :recommend="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="title" ref="tabControl2" @tabControl="tabclick" v-if="this.noFixed"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  //导入公共组件
  import NavBar from '../../components/common/navBar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goodsList/GoodsList'
  import Scroll from '../../components/common/scroll/Scroll'
  import BackTop from '../../components/content/backTop/BackTop'
  //导入Home子组件
  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeature from './childComponents/HomeFeature'

  //导入方法组件
  import {getHomeData, getHomeGoods} from "../../network/request/home";

  //导入common里的函数
  import {debounce} from "../../common/tools";//导入函数调用不要加this调用

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
        isShow: false,
        tabOffSetTop: 0,
        isFixed: false,
        noFixed:true,
        saveY:0,
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
    mounted() {
      //1.监听图片加载完成(解决滚动bug)，不要早created里监听，可能拿不到$ref  会报错undefinded
      const refresh = debounce(this.$refs.scroll.refresh, 100);
      this.$bus.$on('itemImageLoad', () => {
        // this.$refs.scroll.refresh();
        refresh()
        // this.$refs.scroll.scrollTo(0,this.saveY,0);
        // refresh()
      })
    },
    destroyed(){
      console.log('home destroyed');
    },
    activated(){
      this.$refs.scroll.refresh();//进入home组件再次刷新一次，防止自己回到顶部bug
      this.$refs.scroll.scrollTo(0,this.saveY,0);
    },
    deactivated(){
      this.saveY=this.$refs.scroll.saveScrollY();
    },
    methods: {
      //事件监听相关方法
      imageLoad() {
        //2.获取tabBar的offsetTop值，但是组件没有offsetTop属性，所有组件有个$el属性用于获取组件元素
        //在mounted获取值是不正确的，img加载完成在获取高度才正确主要影响是轮播图
        this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
      },
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
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
      },
      backClick() {
        //遇到的坑，在电脑端的移动没有效果，在移动端有效果
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      contentScroll(position) {
        this.isFixed=(-position.y)>=this.tabOffSetTop;
        this.noFixed=!this.isFixed;
        this.isShow = (-position.y) >1000;
      },
      loadMore() {
        this.getHomeAllGoods(this.currentType);
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
            this.$refs.scroll.finishPullUp();
          } else {
            alert('获取数据失败')
          }
        })
      },

    }
  }
</script>

<style scoped lang="less">
  #home {
    height: 100vh;
    position: relative;
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
    margin-bottom: 44px;
  }

  .tab-control{
    position: relative;
    /*z-index: 9;*/
    background-color: white;
  }

  .content {
    height: calc(100% - 93px);
    position: absolute;
    overflow: hidden;
    /*top: 0;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
  }
</style>
