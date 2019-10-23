<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true
      });
      this.scroll.on('scroll',(position)=>{
        console.log(position);
        this.$emit('scrollTo',position)
      })
    },
    methods:{
      scrollTo(x,y,timer=500){
        this.scroll.scrollTo(x,y,timer);
        console.log(this.probeType);
      },
    }
  }
</script>

<style scoped>

</style>
