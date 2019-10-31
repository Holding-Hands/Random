<template>
  <div class="profile-avatar">
    <img src="../../../assets/img/profile/avatar.svg" alt="" class="avatar">
    <div class="center">
      <div class="login">
        <a href="">登录</a><a href="">/注册</a>
      </div>
      <div class="phone">
        <img src="../../../assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机</span>
      </div>
    </div>
    <div class="right">
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAvatar"
  }
</script>

<style scoped>
  .profile-avatar {
    display: flex;
    background-color: var(--color-tint);
    height: 90px;
    color:#fff;
    position: relative;
    /*justify-content: space-around;*/
  }
  .profile-avatar .avatar {
    width: 75px;
    height: 75px;
    padding-top: 7px;
  }
  .center {
    /*width: 60%;*/
    text-align: center;
    height: 100%;
    padding-top:15px ;
  }
  .login a {
    text-decoration: none;
    color:#fff;
    font-size: 20px;
  }
  .phone {
    position: relative;
    left: 10px;
    top:4px;
  }
  .phone img {
    width: 20px;
    height: 25px;
    vertical-align: middle;

  }
  .right {
    font-size: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>
