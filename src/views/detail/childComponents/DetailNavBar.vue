<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" >
        <div @click="back">
          <a href="javascript:;" class="down-arrow"></a>
        </div>
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item" class="title-item"
             :class="{active:index===currentIndex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navBar/NavBar'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      back(){
        // this.$router.back();
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .nav-bar {
    background-color: white;

    .title {
      display: flex;

      .title-item {
        flex: 1;
        font-size: 13px;
      }
    }
  }

  .active {
    border-bottom: deeppink;
    color: deeppink;
  }

  .down-arrow {
    width: 40px;
    height: 40px;
  }
  .down-arrow:after {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    border-right: 1px solid #888;
    border-top: 1px solid #888;
    transform: rotate(227deg);
    margin-top: 13px;
    margin-left: 30px;
  }

</style>
