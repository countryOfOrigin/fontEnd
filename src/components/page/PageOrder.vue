<template>
  <div class="page-order">
    <common-header></common-header>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-order',
  data () {
    return {


    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/order.css";
</style>
