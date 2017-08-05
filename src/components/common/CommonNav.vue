<template>
  <div class="common-nav">
    <ul>
        <li><a href=""><span class="glyphicon glyphicon-user"></span></a></li>
        <li class="usd"><a href=""><span class="glyphicon glyphicon-usd"></span></a></li>
        <li><a href="" class="buycar">
            <span class="glyphicon glyphicon-shopping-cart"></span>
            <div>购物车</div>
            <span class="num">0</span>
        </a></li>
        <li><a href=""><span class="glyphicon glyphicon-time"></span></a></li>
        <li><a href=""><span class="glyphicon glyphicon-heart"></span></a></li>
        <li><a href=""><span class="glyphicon glyphicon-star-empty"></span></a></li>
        <li><a href=""><span class="glyphicon glyphicon-headphones"></span></a></li>
        <li><a href=""><span class="glyphicon glyphicon-qrcode"></span></a></li>
        <li class="return-top"><a href=""><span class="glyphicon glyphicon-arrow-up"></span></a></li>
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
</style>
