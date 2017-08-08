<template>
  <div class="page-user">
    <div class="header login" v-if="show">
      <div class="header-bg">
        <div class="img-box"><router-link to="/user/address/edit/select/:id" >
          <img src="../../assets/images/user.jpg" alt="" class="user-logo">
        </router-link></div>
        <div class="text-box">
          <p class="user-name">{{user_name}}</p>
          <p class="user-level"><span>LV</span>:5</p>
        </div>
      </div>
    </div>
    <div class="header unlogin" v-else>
      <div class="header-bg">
        <router-link to="/login"><div class="img-box">
          <img src="../../assets/images/user.png" alt="" class="user-logo">
        </div></router-link>
        <!--<div class="text-box">-->
          <!--<p class="user-name">游客</p>-->
          <!--<p class="user-level"><span>LV</span>:5</p>-->
        <!--</div>-->
      </div>
    </div>

    <ul id="order-info">
      <router-link to="/order/all"> <li class="order">
        <strong class="look-for-order">查看订单</strong>
        <span class="all-orders-left">&rsaquo;</span>
        <span class="all-orders">全部订单</span>
      </li></router-link>
      <li class="order-detail">
        <ul class="order-detail-list">
          <li ><router-link to="/order/wait_pay">
            <i class="iconfont">&#xe649;</i>
            <p>待付款</p>
          </router-link></li>
          <li ><router-link to="/order/wait_go">
            <i class="iconfont">&#xe739;</i>
            <p>待发货</p>
            </router-link></li>
          <li ><router-link to="/order/wait_arrive">
            <i class="iconfont">&#xe619;</i>
            <p>待收货</p>
          </router-link></li>
          <li ><router-link to="/order/on_arrive">
            <i class="iconfont">&#xe610;</i>
            <p>已收货</p>
          </router-link></li>
          <li ><router-link to="/order/wait_go"><!--路由不对-->
            <i class="iconfont">&#xe652;</i>
            <p>待评价</p>
          </router-link></li>
        </ul>
      </li>
    </ul>
    <ul id="content">
      <li><router-link to="/order/wait_go">  <!--待定-->
        <strong>优惠券</strong>
        <span class="link-detail">&rsaquo;</span>
      </router-link></li>
      <li><router-link to="/collect">
        <strong>我的收藏</strong>
        <span class="link-detail">&rsaquo;</span>
      </router-link></li>
      <li><router-link to="/user/address">
        <strong>地址管理</strong>
        <span class="link-detail">&rsaquo;</span>
      </router-link></li>
      <li><router-link to="/order/wait_go"><!--待定-->
        <strong>关于我们</strong>
        <span class="link-detail">&rsaquo;</span>
      </router-link></li>
    </ul>
    <common-footer></common-footer>

  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-user',
  data () {
    return {
    show:false,
    flag:true,
    user_name:""
    }
  },
  components:{
    CommonFooter
  },
  mounted(){
      if(document.cookie){
          console.log(document.cookie);
          this.show=true;
          this.flag=false;
          var arr=document.cookie.split(";")[1];
          var user_name=arr.split("=")[1];
          this.user_name=user_name;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/font/iconfont.css";
  ul{
    list-style: none;
    padding:0;
  }
  a{
    color: #000;
  }
  .page-user{
    height: 100vh;
    background: #fff;
  }
  .header{
    width:100%;
    height:3rem;
    /*background-size: contain;*/
    background: url("../../assets/images/userbg1.jpg") no-repeat;
  }
  .login .user-logo{
    position: absolute;
    left: .5rem;
    width: 1.5rem;
    height:1.5rem;
    border-radius: .75rem;

  }
  .header .header-bg{
    /*width:100%;*/
    height:3rem;
    background: rgba(255,255,255,0.5) no-repeat;
    background-size: contain;
    /*margin-bottom: .2rem;*/
  }
  .header .img-box,#header .text-box{
    float: left;
    color: #555;
  }
  .unlogin .img-box{
    width: 1.5rem;
    height: 1.5rem;
    margin: .75rem 2.5rem;
    border-radius: .75rem;

  }
  .login .img-box{
    width: 1.5rem;
    height: 1.5rem;
    margin: .75rem .5rem;
    border-radius: .75rem;

  }
  .img-box img{
    width: 1.5rem;
    height: 1.5rem;
  }
   .img-box a{
     display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
  /*.header .user-logo{*/
    /*width: 1.5rem;*/
    /*height:1.5rem;*/
    /*border-radius: .75rem;*/
  /*}*/
  .header .text-box{
    height: 1rem;
    position: relative;
  }
  .header .user-name{
    font-size: 0.3rem;
    color: #054509;
    position: absolute;
    left: 2.2rem;
    top: 1.2rem;
  }
  .header .user-level{
    font-size: 0.25rem;
    color: #054509;
    position: absolute;
    left: 2.2rem;
    top: 1.7rem;
  }
  .header .user-level span{
    color: #00990b;
  }
  #order-info{
    border-bottom: .2rem solid #eee;
    margin: 0;
    padding: 0;
  }
  #order-info .order{
    margin:0 .3rem;
    font-size:0.3rem;
    height: .9rem;
    line-height: .9rem;
    border-bottom: .02rem solid #ccc;
  }
  #order-info .look-for-order{
    float: left;
    font-size: .25rem;
    /*border-bottom: .05rem solid #ccc;*/
  }
  #order-info .all-orders{
    float: right;
    font-size: .2rem;
    color: #999;
  }
  #order-info .all-orders-left{
    font-size: .5rem;
    float: right;
    margin-left: .1rem;
    line-height: .8rem;
  }
  #order-info .order-detail{
    height: 1.3rem;
    font-size:0.2rem;
    border-bottom: .02rem solid #ccc;
  }
  #order-info .order-detail-list li{
    float: left;
    width: 20%;
    text-align: center;
    margin-top:.15rem;
    color: #666;
  }
  #order-info .order-detail-list li .iconfont{
    font-size: .5rem;

  }
  #content{
    height:3.6rem;
    font-size:.25rem;

  }
  #content li{
    width: 6rem;
    height: .9rem;
    line-height: .9rem;
    margin: 0 .2rem;
    padding:0 .2rem;
    border-bottom: .02rem solid #ccc;
  }
  #content span{
    float: left;
  }
  #content .link-detail{
    float: right;
    font-size: .5rem;
    color: #aaa;
    /*margin-right:.7rem;*/

  }
</style>
