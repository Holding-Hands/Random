import {debounce} from "./tools";
import BackTop from '../components/content/backTop/BackTop'

export const imageListenrMixin = {
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imageListenr = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageListenr)
  }
}


export const topBackMixin = {
  methods: {
    backClick() {
      //遇到的坑，在电脑端的移动没有效果，在移动端有效果
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
  components: {
    BackTop,
  },
  data() {
    return {
      isShow: false
    }
  }
}
