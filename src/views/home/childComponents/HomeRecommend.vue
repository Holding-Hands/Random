<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommend: {
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .recommend{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;

    .recommend-item{
      padding: 10px 0;
      background-color: #fff;
      flex: 1;

      a{
        cursor: pointer;

        img{
          width: 80px;
        }

        .title{
          color:black;
        }
      }
    }
  }
</style>
