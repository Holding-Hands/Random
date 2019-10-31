<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>

    <profile-avatar></profile-avatar>

    <div class="bar">
      <money></money>
      <youhui></youhui>
      <jifen></jifen>
    </div>

    <message></message>


  </div>

</template>

<script>
  import ProfileNavBar from './childComponents/ProfileNavBar'
  import ProfileAvatar from './childComponents/ProfileAvatar'
  import Money from './childComponents/money'
  import Youhui from './childComponents/youhui'
  import Jifen from './childComponents/jifen'
  import message from './childComponents/message'

  export default {
    name: "Profile",
    components: {
      ProfileNavBar,
      ProfileAvatar,
      Money,
      Youhui,
      Jifen,
      message

    }
  }
</script>

<style scoped>
  .bar {
    display: flex;
    width: 100%;

  }
</style>
