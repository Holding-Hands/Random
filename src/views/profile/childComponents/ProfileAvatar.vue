<template>
  <div class="profile-avatar">
    <div class="logo"></div>
    <span>
      <router-link to="login" class="login">登录/</router-link>
      <router-link to="register" class="register">注册</router-link>
      <a href="javascript:;" class="down-arrow"></a>
    </span>
  </div>
</template>

<script>
  export default {
    name: "ProfileAvatar"
  }
</script>

<style scoped lang="less">
  .profile-avatar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    width: 100%;
    height: 75px;

    .logo {
      background: url("../../../assets/img/profile/avatar.svg") no-repeat;
      width: 75px;
      height: 75px;
      background-size: 75px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      margin-right: 170px;
    }


    .login,
    .register {
      color: white;
      font-size: 20px;
      line-height: 75px;

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
      border-right: 2px solid white;
      border-top: 2px solid white;
      -webkit-transform: rotate(227deg);
      transform: rotate(403deg);
      margin-top: -49px;
      margin-left: 344px;
    }
  }


</style>
