<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="center">我的档案</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navBar/NavBar'

  export default {
    name: "ProfileNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #FF8198;
    color: white;
  }
</style>
