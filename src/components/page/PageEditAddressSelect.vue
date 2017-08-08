<template>
  <div class="page-edit-address-select">
	<v-distpicker province="黑龙江省" city="哈尔滨" area="南岗区" type="mobile"></v-distpicker>
  </div>
</template>

<script>

import VDistpicker from 'v-distpicker'

export default {
  name: 'page-edit-address-select',
  data () {
    return {


    }
  },
  components:{
  	VDistpicker,
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
