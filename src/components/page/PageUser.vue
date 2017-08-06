<template>
  <div class="page-user">
    <div id="header">
      <div class="header-bg">
        <img src="../../assets/images/user.png" alt="" class="user-logo">
        <span class="user-name">游客</span>
        <span class="user-level">等级</span>
      </div>
    </div>
    <ul id="order-info">
      <li class="order">
        <span class="look-for-order">查看订单</span>
        <span class="all-orders">全部订单&nbsp;&nbsp;></span>
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
        <span>优惠券</span>
        <span class="link-detail">&gt</span>
      </li>
      <li>
        <span>我的收藏</span>
        <span class="link-detail">&gt</span>
      </li>
      <li>
        <span>地址管理</span>
        <span class="link-detail">&gt</span>
      </li>
      <li>
        <span>关于我们</span>
        <span class="link-detail">&gt</span>
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
  #header{
    width:100%;
    height:3rem;
    /*background-size: contain;*/
    background: url("../../assets/images/userbg1.jpg") no-repeat;
  }
  #header .user-logo{
    width: 2rem;
    height:2rem;
    margin-left:.2rem;

  }
  #header .header-bg{
    /*width:100%;*/
    height:3rem;
    background: rgba(255,255,255,0.5) no-repeat;
    background-size: contain;
    /*margin-bottom: .2rem;*/
  }
  #header .user-name{
    font-size: 0.3rem;
    margin-left:0.3rem;
    line-height: 3rem;
  }
  #header .user-level{
    font-size: 0.3rem;
    margin-left:0.3rem;
    line-height: 3rem;
  }
  #order-info{
    border-bottom: .2rem solid #eee;
  }
  #order-info .order{
    margin:0 .3rem;
  }
  #order-info .order{
    font-size:0.3rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: .05rem solid #eeeeee;
  }
  #order-info .look-for-order{
    float: left;
  }
  #order-info .all-orders{
    float: right;
  }
  #order-info .order-detail{
    height: 1.5rem;
    font-size:0.2rem;

  }
  #order-info .order-detail-list li{
    float: left;
    width: 20%;
    text-align: center;
    margin-top:.35rem;
  }
  #content{
    height:3rem;
    font-size:.3rem;

  }
  #content li{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    padding:0 0.3rem;
    border-bottom: 2px solid rgba(0,0,0,0.1);
  }
  #content span{
    float: left;
  }
  #content .link-detail{
    float: right;
    /*margin-right:.7rem;*/
  }
</style>
