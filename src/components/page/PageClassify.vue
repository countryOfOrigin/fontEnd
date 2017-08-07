<template>
  <div class="page-classify">
    <div class="details">
      <div class="title">
        <i class="iconfont">&#xe669;</i>&nbsp;
        <span>农副</span>
      </div>
      <ul>
        <li>
          <img src="../../../static/img/home/01.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </li>
        <li>
          <img src="../../../static/img/home/02.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾</p>
          <p class="price">¥118.00</p>
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </li>
        <li>
          <img src="../../../static/img/home/03.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </li>
        <li>
          <img src="../../../static/img/home/04.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </li>
      </ul>
    </div>
    <div style="clear: both;"></div>
    <div class="page">
      <a href="" class="prev">上一页</a>
      <a href="" class="next">下一页</a>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>

import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-home',
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
@import "../../assets/css/page/classify.css";
@import "../../assets/font/iconfont.css";
</style>
