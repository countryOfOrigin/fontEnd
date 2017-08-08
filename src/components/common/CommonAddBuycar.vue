<template>
  <div class="common-addbuycar">
    <div class="dialog-box">
        <div class="buycar">
            <div class="content">
                <img src="../../assets/img/m01.jpg">
                <p>五常大米</p>
                <span class="price">¥68.00 - 128.00</span>                   
                <span class="glyphicon glyphicon-remove-circle remove"></span>
            </div>
            <div class="size">
                <p>规格：</p>
                <ul>
                    <li class="selected">5kg</li>
                    <li>10kg</li>
                </ul>
                <div style="clear: both;"></div>
            </div>
            <div class="buynum">
                <p>购买数量：</p>
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <a href="" class="addbtn">加入购物车</a>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'common-addbuycar',
  data () {
    return {

    }
  },
  mounted(){
    var $sub = $('.sub');
    var $add = $('.add');
    var $num = $('.num');
    var $box = $('.dialog-box');
    var $rem = $('.remove');
    $('.size li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    
    $add.on('click',function(){
        $num.val(parseInt($num.val())+1);
        if($num.val()>=999){
            $num.val(999);
            $(this).addClass('cancel');
        }
        else{
            $(this).removeClass('cancel');
            $sub.removeClass('cancel');
        }
    });
    $sub.on('click',function(){
        $num.val(parseInt($num.val())-1);
        if($num.val()<=1){
            $num.val(1);
            $(this).addClass('cancel');       
        }
        else{
            $(this).removeClass('cancel');
            $add.removeClass('cancel');
        }
    });
    $('input').bind('input propertychange', function() {
        if($num.val()>=999){
            $add.addClass('cancel');
            $sub.removeClass('cancel');
        }
        else if($num.val()<=1){
            $sub.addClass('cancel');
            $add.removeClass('cancel');
        }else{
            $sub.removeClass('cancel');
            $add.removeClass('cancel');
        }
    
    });
    $rem.on('click',function(){
        $box.hide();
    })
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/addbuycar.css";
</style>
