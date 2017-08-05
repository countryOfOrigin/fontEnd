<template>
  <div class="common-nav">
    <ul>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-user"></span>
                <span class="user">
                    <img src="../../assets/img/people.gif">
                    <p>
                        您好！请<a href="">登录</a>|<a href="">注册</a>
                    </p>
                </span>
            </a>
        </li>
        <li class="usd">
            <a href="">
                <span class="glyphicon glyphicon-usd"></span>
                <span class="col-tip">领红包再购物</span>
            </a>
        </li>
        <li><a href="" class="buycar">
            <span class="glyphicon glyphicon-shopping-cart"></span>
            <div>购物车</div>
            <span class="num">0</span>
        </a></li>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-time"></span>
                <span class="col-tip">我看过的</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-heart"></span>
                <span class="col-tip">我关注的店铺</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="col-tip">我的收藏</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-headphones"></span>
                <span class="service">
                    <a href=""><i class="iconfont">&#xe62b;</i>&nbsp;在线客服</a><br />
                    <a href=""><i class="iconfont">&#xe63a;</i> &nbsp;QQ客服</a>
                </span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="glyphicon glyphicon-qrcode"></span>
                <span class="qrcode"><img src="../../assets/img/weixin.jpg"></span>
            </a>
        </li>
        <li class="return-top">
            <a href="">
                <span class="glyphicon glyphicon-arrow-up"></span>
                <span class="col-tip">返回顶部</span>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'common-nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/nav.css";
@import "../../assets/font/iconfont.css";
</style>
