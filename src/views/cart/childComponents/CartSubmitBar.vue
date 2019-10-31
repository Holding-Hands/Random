<template>
  <div class="cart-bottom-bar">

    <div class="total-check">
      <check-button :is-check="isSelectAll" @click.native="selectAllClick"></check-button>
      <span>全选</span>
    </div>

    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>

    <div class="calc">
      去结算({{calcCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/cheackButton/CheckButton'

  export default {
    name: "CartSubmitBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked === true
        }).reduce((prev, item) => {
          return prev + item.lowNowPrice * item.count
        }, 0).toFixed(2)
        //reduce累加，toFixed保留几位小数
      },

      calcCount() {
        return this.$store.state.cartList.filter(item => {
          return item.checked === true
        }).length
      },

      isSelectAll() {
        //选出没被选中的返回false
        if (this.$store.state.cartList.length === 0) {
          return false;
        }else{
          return !(this.$store.state.cartList.filter(item => !item.checked).length)
        }
      }
    },
    methods: {
      selectAllClick() {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 49px;
    background: #ffff00;
    display: flex;
    line-height: 60px;
    text-align: center;
  }

  .total-check {
    width: 25%;
    display: flex;
    justify-content: center;
  }

  .total-price {
    width: 50%;
  }

  .calc {
    width: 25%;
    background-color: deeppink;
    color: #fff;
  }
</style>
© 2019 GitHub, Inc.
