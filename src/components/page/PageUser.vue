<template>
  <div class="page-user">
    <div id="header">
      <div class="header-bg">
        <div class="img-box">
          <img src="../../assets/images/user.jpg" alt="" class="user-logo">
        </div>
        <div class="text-box">
          <p class="user-name">游客</p>
          <p class="user-level"><span>LV</span>:5</p>
        </div>
      </div>
    </div>
    <ul id="order-info">
      <li class="order">
        <strong class="look-for-order">查看订单</strong>
        <span class="all-orders-left">&rsaquo;</span>
        <span class="all-orders">全部订单</span>
      </li>
      <li class="order-detail">
        <ul class="order-detail-list">
          <li >
            <i class="iconfont">&#xe649;</i>
            <p>待付款</p>
          </li>
          <li >
            <i class="iconfont">&#xe739;</i>
            <p>待发货</p>
          </li>
          <li >
            <i class="iconfont">&#xe619;</i>
            <p>待收货</p>
          </li>
          <li >
            <i class="iconfont">&#xe610;</i>
            <p>已收货</p>
          </li>
          <li >
            <i class="iconfont">&#xe652;</i>
            <p>待评价</p>
          </li>
        </ul>
      </li>
    </ul>
    <ul id="content">
      <li>
        <strong>优惠券</strong>
        <span class="link-detail">&rsaquo;</span>
      </li>
      <li>
        <strong>我的收藏</strong>
        <span class="link-detail">&rsaquo;</span>
      </li>
      <li>
        <strong>地址管理</strong>
        <span class="link-detail">&rsaquo;</span>
      </li>
      <li>
        <strong>关于我们</strong>
        <span class="link-detail">&rsaquo;</span>
      </li>
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


    }
  },
  components:{
    CommonFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/font/iconfont.css";
  ul{
    list-style: none;
    padding:0;
  }
  .page-user{
    height: 100vh;
    background: #fff;
  }
  #header{
    width:100%;
    height:3rem;
    /*background-size: contain;*/
    background: url("../../assets/images/userbg1.jpg") no-repeat;
  }
  #header .header-bg{
    /*width:100%;*/
    height:3rem;
    background: rgba(255,255,255,0.5) no-repeat;
    background-size: contain;
    /*margin-bottom: .2rem;*/
  }
  #header .img-box,#header .text-box{
    float: left;
    color: #555;
  }
  #header .img-box{
    width: 1.5rem;
    height: 1.5rem;
    margin: .75rem .3rem;
    border-radius: .75rem;
  }
  #header .user-logo{
    width: 1.5rem;
    height:1.5rem;
    border-radius: .75rem;
  }
  #header .text-box{
    width: 3rem;
    height: 1rem;
    padding: 1rem 0;
  }
  #header .user-name{
    font-size: 0.3rem;
    color: #054509;
  }
  #header .user-level{
    font-size: 0.25rem;
    color: #054509;
  }
  #header .user-level span{
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
