<template>
  <div class="page-cart">
    <common-header></common-header>
    <div v-if="flag">
      <div class="editor">
        <span class="glyphicon glyphicon-ok-sign ok"></span>
        <i class="iconfont">&#xe67e;</i>
        <p>黑龙江电视台--龙江原产递</p>
        <a href="">编辑</a>
      </div>
      <div class="list">
        <ul>
          <li>
            <span class="glyphicon glyphicon-ok-sign ok"></span>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="num">×1</span>
          </li>
          <li>
            <span class="glyphicon glyphicon-ok-sign ok"></span>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="num">×1</span>
          </li>
          <li>
            <span class="glyphicon glyphicon-ok-sign ok"></span>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="num">×1</span>
          </li>
          <li>
            <span class="glyphicon glyphicon-ok-sign ok"></span>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="num">×1</span>
          </li>
          <li>
            <span class="glyphicon glyphicon-ok-sign ok"></span>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="num">×1</span>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="left-box">
          <span class="glyphicon glyphicon-ok-sign ok"></span>
          <span class="all">全选</span>
        </div>
        <div class="min">
          <span class="total">合计：¥<b>158</b></span>
          <p>不含运费</p>
        </div>
        
        <a href="">结算 (2)</a>
      </div>
    </div>
    <div v-else>bbbbb</div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import $ from 'jquery'
export default {
  name: 'page-cart',
  data () {
    return {

      flag:true,
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
  method:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/cart.css";
@import "../../assets/font/iconfont.css";
</style>
