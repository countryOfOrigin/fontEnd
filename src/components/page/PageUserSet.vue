<template>
  <div class="page-user-set">
    <div class="userset-1">
      <span class="user-font font-2">头像</span>
      <span class="user-content"><img src="" alt="" class="user-logo"> <a href=""> > </a></span>
    </div>
    <div class="userset-2">

      <span class="user-font">昵称</span>
      <span class="user-content"><a href="">fontEnd > </a></span>
    </div>
    <div class="userset-2">

      <span class="user-font">性别</span>
      <span class="user-content"><a href="">未填写 > </a></span>

    </div>
    <div class="userset-2">

      <span class="user-font">会员等级</span>
      <span class="user-content"><a href="">V0普通会员> </a></span>
    </div>
    <img src="../../assets/img/logo.jpg" class alt="" class="userset-3">
    <div class="userset-4">
        <button class="cencle-box">退出登录</button>

    </div>
  </div>
</template>

<script>


export default {
  name: 'page-user-set',
  data () {
    return {


    }
  },
  components:{
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/page/userset.css";
  @import "../../assets/font/iconfont.css";

</style>
