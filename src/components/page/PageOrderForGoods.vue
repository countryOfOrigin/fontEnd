<template>
  <div class="page-orderforgoods">
    <div class="content">
      <div class="orderforgoods-exist" v-if="flag">
        <div class="exist-left">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        </div>
        <div class="exist-center">
          <span class="user-name">收货人：叶女士</span>
          <span class="user-phone">15777777777</span>
          <p class="user-address">收货地址：黑龙江省哈尔滨市南岗区学府路黑龙江大学</p>
        </div>
        <div class="exist-right">
          <span>></span>
        </div>
      </div>
      <div class="orderforgoods-title" v-else>
        <span class="glyphicon glyphicon-plus orderforgoods-title-font"></span>
        <span>新建收货地址</span>
      </div>
      <div class="orderforgoods-logo">
        <span class="	glyphicon glyphicon-briefcase orderforgoods-logo-font"></span>
        <span>龙江原产递</span>
      </div>
      <div class="orderforgoods-content" v-for="elem in $store.state.goods_info">
        <img :src='elem.url' alt="">
        <div class="orderforgoods-content-2">
          <div class="orderforgoods-content-3">
            <span class="o-3-left">{{elem.name}}</span>
            <span class="o-3-right">￥{{elem.price}}</span>
          </div>
          <div class="orderforgoods-content-4">
            <span>5kg</span>
            <span class="o-3-right">*{{elem.count}}</span>
          </div>
        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>配送方式</span>
        </div>
        <div class="orderforgoods-content-7">
          ￥0.00<br/>快递发货

        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>合计</span>
        </div>
        <span class="total-price">
        ￥298.00
      </span>
      </div>

      <div class="orderforgoods-content-5">
        <span class="discount">优惠</span>
        <span class="use-discount">
        使用优惠>

      </span>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>短信通知收件人</span>
        </div>
        <div class="orderforgoods-content-7">


        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6 order-last">
          <span>商品金额<br>运费</span>
        </div>
        <div class="orderforgoods-content-7">
          ￥298.00<br>+￥0.00


        </div>
      </div>
    </div>
    <div class="orderforgoods-footer">
      <span>合计:￥298</span></span>
      <div class="orderforgoods-button">提交订单</div>
    </div>

  </div>


  </div>



</template>

<script>

  export default {
    name: 'page-orderforgoods',
    data () {
      return {
        flag:true,

      }
    },
    components:{

    },
    mounted(){
        console.log(this.$store.state.goods_info);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/page/orderforgoods.css";
  @import "../../assets/font/iconfont.css";
</style>
