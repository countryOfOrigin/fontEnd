<template>
  <div class="common-checkbox">
  	<lable>
      <i class='input_style checkbox_bg'><input type="checkbox" name="q" value="11"></i>
    </lable>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'common-checkbox',
  data () {
    return {

    }
  },
  mounted(){
    ;(function($){
      $.extend({
        inputStyle:function(){
          function check(el,cl){
            $(el).each(function(){
              $(this).parent('i').removeClass(cl);

              var checked = $(this).prop('checked');
              if(checked){
                $(this).parent('i').addClass(cl);
              }
            })
          } 
          $('input[type="radio"]').on('click',function(){
            check('input[type="radio"]','radio_bg_check');
          })
          $('input[type="checkbox"]').on('click',function(){
            check('input[type="checkbox"]','checkbox_bg_check');
          })
        }
        
      })

    })(jQuery)

    //调用
    $(function(){
      $.inputStyle();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/font/iconfont.css";

</style>
<style src="../../assets/lib/input/css/input.css" scoped></style>
