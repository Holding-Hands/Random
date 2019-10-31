<template>
  <div class="cart">
    <cart-nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{this.$store.getters.cartLength}})</div>
    </cart-nav-bar>
    <cart-scroll class="cart-scroll" ref="scroll">
      <cart-list></cart-list>
    </cart-scroll>
    <cart-submit-bar></cart-submit-bar>
  </div>
</template>

<script>
  //导入公共组件
  import CartNavBar from '../../components/common/navBar/NavBar'
  import CartScroll from '../../components/common/scroll/Scroll'

  //导入子组件
  import CartList from './childComponents/CartList'
  import CartSubmitBar from './childComponents/CartSubmitBar'

  export default {
    name: "Cart",
    components: {
      CartNavBar,
      CartScroll,
      CartList,
      CartSubmitBar,
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped lang="less">
  .cart {
    height: 100vh;

    .cart-nav-bar {
      background-color: deeppink;
      color: white;
    }

    .cart-scroll {
      height: calc(100% - 93px);
      overflow: hidden;
    }
  }

</style>
