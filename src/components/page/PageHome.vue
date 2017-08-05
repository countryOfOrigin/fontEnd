<template>
  <div class="page-home">
    <common-header></common-header>
    <common-nav></common-nav>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonNav from '../common/CommonNav'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-home',
  data () {
    return {
      
    }
  },
  components:{
    CommonHeader,
    CommonFooter,
    CommonNav
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/home.css";
</style>
