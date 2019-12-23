<template>
  <div id="profile">
    <profile-nav-bar/>
    <profile-avatar/>
    <div class="bar">
      <Money/>
      <Cheap/>
      <Score/>
    </div>
    <Message/>
  </div>
</template>

<script>
  import ProfileNavBar from './childComponents/ProfileNavBar'
  import ProfileAvatar from './childComponents/ProfileAvatar'
  import Money from './childComponents/Money'
  import Cheap from './childComponents/Cheap'
  import Score from './childComponents/Score'
  import Message from './childComponents/Message'

  export default {
    name: "Profile",
    components: {
      ProfileNavBar,
      ProfileAvatar,
      Money,
      Cheap,
      Score,
      Message

    }
  }
</script>

<style scoped>
  .bar {
    display: flex;
    width: 100%;

  }
</style>
