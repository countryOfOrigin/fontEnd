<template>
  <div class="page-reg">
    <div class="reg">
      <div class="logo">
        <img src="../../assets/img/logo.jpg" alt="">
        <p>豆瓣看看</p>
      </div>
    
      <div class="form">
        <div class="name">
          <span>用户名：</span><input type="text" name="name" placeholder="请输入用户名" v-model="name">
        </div>
        <div class="tel">
          <span>手机号：</span><input type="text" name="tel" placeholder="请输入手机号" v-model="tel">
        </div>
        <div class="psd">
          <span>密  码：</span><input type="password" name="psd"  placeholder="请输入6-20位密码(数字或字母)" v-model="psd">
        </div>
        <!-- <div class="rpsd">
          <span>确认密码：</span><input type="password" name="rpsd"  placeholder="请输入确认密码" v-model="rpsd">
        </div> -->
        
        <!-- <input value="注册" class="button" type="submit" /> -->
        <button class="button">注册</button>
      </div>
      <div class="other">
        <router-link to="/user/user_login">登录</router-link>
        <span>已经有账号了?</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-reg',
  data () {
    return {
      name:"",
      tel:"",
      psd:"",
      flag:0
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component oly -->
<style scoped>
/*@import "../../assets/css/page/reg.css";*/
.page-reg{
  height: 100vh;
  background: rgb(190,205,90) url('../../assets/img/regbg.jpg') no-repeat;
  background-size: 6.4rem 100vh;
}
.page-reg .reg{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.1);
}
.logo{
  padding-top: 1rem;
  width: 100%;
  text-align: center;
  /*margin-bottom: .6rem;*/
}
.logo img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 20%;
  box-shadow: 0 5px 5px rgba(0,0,0,.3);
  margin: 1rem 2.5rem .2rem;  
}
.logo p{
  font-size: 1.3em;
  color: #fff;
}
.show{
  width: 5rem;
  height: .4rem;
  margin: 0 auto;
  padding: .1rem .9rem;
  color: #ec4a4a;
}
.form div{
  display: block;
  width: 4.4rem;
  height: .4rem;
  margin: 0 auto .3rem;
  background: #76cb98;
  border: 0;
  border-radius: .25rem;
  line-height: .5rem;
  padding: .1rem .3rem;
  color: #dcfffe;
}
.form div span{
  display: inline-block;
  width: 1rem;
}
.form div input{
  display: inline-block;
  border: 0;
  background: #76cb98;
  color: #dcfffe;
  width: 3.4rem;
  outline: none;
}
.form div input::-webkit-input-placeholder {
  color:#98edba;
}
.form div input:-moz-placeholder {
  color:#98edba;
}
.form div input::-moz-placeholder {
  color:#98edba;
}
.form div input:-ms-input-placeholder {
  color:#98edba;
}
/*.form input{
  display: block;
  width: 4.4rem;
  height: .4rem;
  margin: 0 auto .3rem;
  background: #76cb98;
  border: 0;
  border-radius: .25rem;
  line-height: .5rem;
  padding: .1rem .3rem;
  color: #dcfffe;
}*/
.form .button{
  display: block;
  width: 5rem;
  height: .6rem;
  background: #fff;
  margin: 0 auto .3rem;
  border: 0;
  color: #439865;
  font-weight: bolder;
  border-radius: .25rem;
  line-height: .5rem;
}
.other{
  width: 4rem;
  margin: .3rem auto;
}
.other a,.other span{
  color: #dcfffe;
  float: right;
  margin-left: .1rem;
}
.other span{
  color: #333;
}

</style>
