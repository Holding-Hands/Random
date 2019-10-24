<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
  //detail子组件相关导入
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetialBaseInfo'

  //网络请求相关导入
  import {getDetail,Goods} from "../../network/request/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res=>{
        if (res.status===200) {

          const data=res.data.result
          console.log(data);
          this.topImages=data.itemInfo.topImages;
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          console.log(this.goods);
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

</style>
