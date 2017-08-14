<template>
  <div class="page-details">
    <div class="carousel">
      <swipe class="my-swipe">
        <swipe-item class="item1"></swipe-item>
        <swipe-item class="item2"></swipe-item>
        <swipe-item class="item3"></swipe-item>
      </swipe>
      <div class="gooddetail">
        <p class="goodname">圣谷山日照绿茶（赠茶具）</p>
        <span class="price">¥158.00-¥198.00</span>
        <span class="like">
          <i class="iconfont">&#xe60a;</i>
          <span>喜欢</span>
        </span>
      </div>
      <div class="stockdetail">
        <ul>
          <li class="col-sm-4">运费：¥10.00</li>
          <li class="col-sm-4">剩余：481</li>
          <li class="col-sm-4">销量：496</li>
        </ul>
      </div>
    </div>
    <div class="sale">
      <span>返现</span>
      <span>包邮</span>
      <span>优惠</span>
      <p><b>&nbsp;前5笔订单返现</b> 满100元包邮；满200元包邮...</p>
      <b class="next">&rsaquo;</b>
    </div>
    <div class="size">
      选择：规格
      <b>&rsaquo;</b>
    </div>
    <div class="store">
      <div class="enter">
        <p><i class="iconfont">&#xe67e;</i> 黑龙江电视台--龙江原产递</p>
        <span>进入店铺<b>&rsaquo;</b></span>
      </div>
      <div class="safety">
        <span>
          <i class="iconfont">&#xe632;</i>
          企业认证
        </span>
        <span>
          <i class="iconfont">&#xe632;</i>
          担保交易
        </span>
      </div>
    </div>
    <div class="goodimg">
      <img src="../../../static/img/details/goods-01.jpg">
      <img src="../../../static/img/details/goods-02.jpg">
      <img src="../../../static/img/details/goods-03.jpg">
      <img src="../../../static/img/details/goods-04.jpg">
      <img src="../../../static/img/details/goods-05.jpg">
      <img src="../../../static/img/details/goods-06.jpg">
      <img src="../../../static/img/details/goods-07.jpg">
    </div>
    <div class="more">
      <p class="title">更多精选商品</p>
      <ul>
        <li>
          <img src="../../../static/img/home/01.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
        </li>
        <li>
          <img src="../../../static/img/home/02.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾</p>
          <p class="price">¥118.00</p>
        </li>
        <li>
          <img src="../../../static/img/home/03.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
        </li>
        <li>
          <img src="../../../static/img/home/04.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
        </li>
      </ul>
      <p class="pb">
        <a class="btn">进店逛逛></a>
      </p>
    </div>
    <div class="details-foot">
      <a href="" class="service col-md-2">
        <i class="iconfont">&#xe7a3;</i>
        <span>客服</span>
      </a>
      <a href="" class="collect col-md-2">
        <i class="iconfont">&#xe60a;</i><br />
        <span>收藏</span>
      </a>
      <span class="buycar col-md-4" @click="buy()">加入购物车</span>
      <a href="" class="buyying col-md-4">立即购买</a>
    </div>
    <common-add-buycar v-if="show" :shopId="shopId" v-on:child-isshow="isshow"></common-add-buycar>
  </div>
</template>

<script>
import {Swipe, SwipeItem } from 'vue-swipe'
import CommonAddBuycar from '../common/CommonAddBuycar'
Swipe.auto= false;
export default {
  name: 'page-details',
  data () {
    return {
      show:false,
      shopId:this.$route.params.tag


    }
  },
  components:{
    Swipe,
    SwipeItem,
    CommonAddBuycar
  },
  methods:{
    buy:function(){
      this.show=true;
      // console.log(id);
    },
    isshow: function (a){
      this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/vue-swipe.css";
@import "../../assets/font/iconfont.css";
</style>
<style src="../../assets/css/page/details.css" scoped></style>
