<template>
  <div class="register">
    <div class="logo"></div>
    <div class="input">
      <!--      用户名输入框-->
      <label>
        <input type="text"
               class="input_text username"
               placeholder="请设置您的账户"
               @blur="userCheck()"
               ref="userName"
               v-model="userName"
               v-bind:class="[ isActive ? activeInputClass: errorInputClass]">
      </label>
      <div ref="userNameDiv"
           v-bind:class="[ isActive ? activeDivClass: errorDivClass]"
      >
      </div>
      <br>

      <!--      密码输入框-->
      <i class="icon iconfont icon-visible"
         @click="changeClass1()"
         v-bind:class="[isChangeClass1?'icon-visible':'icon-eye_protection']"
      ></i>
      <label>
        <input :type="[isChangeClass1?'password':'text']"
               class="input_text"
               placeholder="请设置为8-20位字符的密码"
               @blur="passwordChecked()"
               ref="password"
               v-model="password"
               v-bind:class="[isPassword ? activeInputClass: errorInputClass]">
      </label>
      <div v-bind:class="[isPassword ? activeDivClass: errorDivClass]"
           ref="passwordDiv">
      </div>
      <br>

      <!--      确认密码输入框-->
      <i class="icon iconfont"
         @click="changeClass2()"
         v-bind:class="[isChangeClass2?'icon-visible':'icon-eye_protection']"
      ></i>
      <label>
        <input :type="[isChangeClass2?'password':'text']"
               class="input_text"
               placeholder="确认你的密码"
               v-bind:class="[isPassword2 ? activeInputClass: errorInputClass]"
               @blur="passwordVerification()"
               v-model="password2">
      </label>
      <div v-bind:class="[isPassword2 ? activeDivClass: errorDivClass]"
           ref="passwordDiv2">
      </div>
      <br>

      <!--验证码输入框-->
      <label>
        <input type="text"
               class="input_text username"
               placeholder="请输入验证码"
               v-model="code"
               @blur="verification()"
               v-bind:class="[isRandomCode ? activeInputClass: errorInputClass]">
      </label>
      <div v-bind:class="[isRandomCode ===true? activeDivClass: errorDivClass]"
           ref="randomCode"
      >
      </div>
      <br>

      <!--验证码div-->
      <div class="checkBox"
           ref="checkBox"
           @click="checkCodeHtml(4)">
      </div>

      <button
        v-bind:class="[isDisabled ? 'btnDisabled':'btnActive']"
        @click="post()"
        ref="button"
        v-bind:disabled="isDisabled"
      >注册
      </button>
      <button class="btn btnActive"
      @click="gotoLogin()">登录</button>
      <!--      <span>清除 记录</span>-->
    </div>
    <br>
  </div>
</template>

<script>
  import {register} from "../../../network/request/request";

  export default {
    name: "Register",
    data() {
      return {
        userName: '',
        password: '',
        password2: '',
        isActive: false,
        isPassword: false,
        isPassword2: false,
        isRandomCode: false,
        isChangeClass1: true,
        isChangeClass2: true,
        isDisabled: true,
        code: '',
        randomCode: '',
        activeInputClass: 'greenBorder',
        errorInputClass: 'redBorder',
        activeDivClass: 'greenSpan',
        errorDivClass: 'redSpan',
      }
    },
    methods: {
      setCookie(name, value, day) {
        var date = new Date();
        var newDate = date.setDate(date.getDate() + day);
        document.cookie = name + "=" + value + ";expires=" + newDate;
      },
      getCookie(name) {
        //获取当前所有cookie
        var strCookies = document.cookie;
        //截取变成cookie数组
        var array = strCookies.split(';');
        //循环每个cookie
        for (var i = 0; i < array.length; i++) {
          //将cookie截取成两部分
          var item = array[i].split("=");
          //判断cookie的name 是否相等
          if (item[0] === name) {
            return item[1];
          }
        }
        return null;
      },
      removeCookie(userName) {
        setCookie('useName', '1', '-1');
      },
      checkCode(a) {
        //随机验证码函数
        var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        var checkCodeStr = '';
        for (var i = 0; i < a; i++) {
          checkCodeStr += str[Math.floor(Math.random() * (Math.random() * (str.length - 1 + 1)))];
        }
        this.randomCode = checkCodeStr;
        return checkCodeStr;
      },
      checkCodeHtml(mount) {
        this.$refs.checkBox.innerHTML = this.checkCode(mount);
        return this.$refs.checkBox.innerHTML;
      },
      userCheck() {
        //用户名正则,4到16位（字母,数字,下划线,减号）
        var Pattern = /^[a-zA-Z0-9_-]{4,16}$/;
        //输出 true
        this.isActive = Pattern.test(this.userName);
        if (this.isActive) {
          this.$refs.userNameDiv.innerHTML = '恭喜,该用户名可以注册';
        } else {
          this.$refs.userNameDiv.innerHTML = '用户名包括字母,数字,下划线,减号';
        }
        this.checkSuccess()
      },
      passwordChecked() {
        //密码强度正则,最少6位,包括至少1个大写字母,1个小写字母,1个数字,1个特殊字符
        var Pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        this.isPassword = Pattern.test(this.password);
        if (this.isPassword) {
          this.$refs.passwordDiv.innerHTML = '密码符合要求';
        } else {
          this.$refs.passwordDiv.innerHTML = '请输入至少1个大写字母,小写字母,数字,特殊字符最少6位的密码';
        }
        this.checkSuccess()
      },
      passwordVerification() {
        if (this.password === this.password2 && this.password2 !== '') {
          this.isPassword2 = true;
          this.$refs.passwordDiv2.innerHTML = '密码符合要求';
        } else {
          this.$refs.passwordDiv2.innerHTML = '请输入两次一致的密码';
        }
        this.checkSuccess()
      },
      verification() {
        if (this.code.toUpperCase() === this.randomCode.toUpperCase()) {
          this.isRandomCode = true;
          this.$refs.randomCode.innerHTML = '验证码输入正确';
        } else {
          this.$refs.randomCode.innerHTML = '请输入正确的验证码,不区分大小写';
        }
        this.checkSuccess()
      },
      post() {
        register({
          method: 'post',
          data: {
            username: this.userName,
            password: this.password,
          }
        }).then(res => {
          console.log(res);
          console.log('ok');
        }).catch(error => {
          console.log(error.message);
        })
      },
      changeClass1() {
        this.isChangeClass1 = !this.isChangeClass1;
      },
      changeClass2() {
        this.isChangeClass2 = !this.isChangeClass2;
      },
      checkSuccess() {
        if (this.$refs.userNameDiv.innerHTML === '恭喜,该用户名可以注册'
          && this.$refs.passwordDiv.innerHTML === '密码符合要求'
          && this.$refs.randomCode.innerHTML === '验证码输入正确'
          && this.$refs.passwordDiv2.innerHTML === '密码符合要求') {
          this.isDisabled = false;
        } else {
          // this.$refs.button.setAttribute('disabled', 'disabled');
          this.isDisabled = true;
        }
      },
      gotoLogin(){
        this.$router.replace('/login')
        console.log(this.$router);
      }
    },
    created() {

    },
    mounted() {
      //获取随机验证码
      this.randomCode = this.checkCodeHtml(4);
    }
  }
</script>

<style scoped lang="less">
  .register {
    touch-action: none;
    padding: 20px 20px 0;
    /*background: url("../../../assets/img/login/login.png") no-repeat;*/
    background-size: 100% 100%;
    height: 100vh;
    width: 100%;

    /*防止多次点击报错Unable to preventDefault inside passive event listener due to target being treated as passive */

    .username {
      margin-left: 16px
    }

    .input {
      text-align: center;
      position: relative;
      margin-top: 29px;

      .icon .iconfont {
        content: "\e6a2";
        position: absolute;

        .icon-visible:before {
          position: absolute;
          content: "\e6a2";

        }

        .icon-visible:before:nth-child(1) {
          top: 63px;
        }

        .icon-visible:before:nth-child(2) {
          top: 118px;
        }
      }

      .input_text {
        border-color: coral;
        border-style: solid;
        border-top-width: 0;
        border-right-width: 0;
        border-bottom-width: 1px;
        border-left-width: 0;
        width: 88%;
        color: var(--color-tint);
        padding-left: 15px;
      }
    }

    .logo {
      background: url("../../../assets/img/profile/avatar.svg") no-repeat;
      width: 75px;
      height: 75px;
      background-size: 75px;
      margin: 0 auto;
    }

    .checkBox {

      height: 42px;
      width: 90px;
      font-size: 20px;
      text-align: center;
      line-height: 42px;
      background-color: var(--color-tint);
      margin-left: 31px;
      margin-top: -1px;
      border-radius: 6px;
      text-shadow: 0px -1px 0px #5b6178;
      box-shadow: 0 1px 0 0 #f0f7fa;
      font-family: Arial;
      color: #ffffff;
      border: solid var(--color-tint) 1px;
      text-decoration: none;
    }

    .checkBox:hover {
      color: #ffffff;
      background: cyan;
      text-decoration: none;
    }
  }

  .btnActive {
    background: #599bb3;
    border-radius: 8px;
    text-shadow: 0 1px 0 #3d768a;
    box-shadow: 0 10px 14px -7px #276873;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    padding: 12px 30px 12px 30px;
    border: solid #1f628d 1px;
    text-decoration: none;
    margin-top: 34px;
    margin-right: -200px;

    .btnActive:hover {
      color: #ffffff;
      background: #408c99;
      text-decoration: none;
    }
  }

  .btnDisabled {
    background: gray;
    border-radius: 8px;
    text-shadow: 0 1px 0 #3d768a;
    box-shadow: 0 10px 14px -7px #276873;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    padding: 12px 30px 12px 30px;
    border: solid #1f628d 1px;
    text-decoration: none;
    margin-top: 34px;
    margin-right: -283px;

    .btnDisabled:hover {
      color: #ffffff;
      background: gray;
      text-decoration: none;
    }
  }

  .btn {
    margin-top: 34px;
    margin-right: -7px;
  }

  .redBorder {
    border-bottom: 2px solid red !important;
  }

  .redSpan {
    color: red;
    text-align: left;
    margin: -8px 0px -21px 35px;
  }

  .greenBorder {
    border-bottom: 2px solid #33A853 !important;
  }

  .greenSpan {
    color: #33A853;
    text-align: left;
    margin: -8px 0px -21px 35px;
  }
</style>
