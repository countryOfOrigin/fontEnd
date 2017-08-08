<template>
  <div class="page-cart">
    <common-header></common-header>
    <div v-if="flag"></div>
    <div v-else></div>
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

      flag:false,
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
</style>
