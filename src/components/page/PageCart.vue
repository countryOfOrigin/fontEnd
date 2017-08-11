<template>
  <div class="page-cart">
    <div v-if="flag">
      <div class="editor">
        <i class="iconfont ok" ch="1">&#xe657;</i>
        <i class="iconfont">&#xe67e;</i>
        <p>黑龙江电视台--龙江原产递</p>
        <a href="javascript:;">编辑</a>
      </div>
      <div class="list">
        <ul>
          <li>
            <i class="iconfont ok" ch="1">&#xe657;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>68.00</b></span>
            <span class="number">×<b>1</b></span>
            <a href="javascript:;" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok" ch="1">&#xe657;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>68.00</b></span>
            <span class="number">×<b>2</b></span>
            <a href="javascript:;" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok" ch="1">&#xe657;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>68.00</b></span>
            <span class="number">×<b>3</b></span>
            <a href="javascript:;" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok" ch="1">&#xe657;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>68.00</b></span>
            <span class="number">×<b>1</b></span>
            <a href="javascript:;" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok" ch="1">&#xe657;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>68.00</b></span>
            <span class="number">×<b>1</b></span>
            <a href="javascript:;" class="del">删除</a>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="left-box">
          <i class="iconfont ok" ch="1">&#xe657;</i>
          <span class="all">全选</span>
        </div>
        <div class="min">
          <span class="total">合计：¥<b>158</b></span>
          <p>不含运费</p>
        </div>
        
        <a href="" class="clear">结算 (<b>2</b>)</a>
        <a href="" class="del-all">删除</a>
      </div>
    </div>
    
    <div v-else>
      <div class="empty-list">
        <h4>购物车快饿瘪了 T.T</h4>
        <p>快给我挑点宝贝</p>
        <a href="">去逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'page-cart',
  data () {
    return {

      flag:true,
    }
  },
  components:{
    
  },
  mounted(){
    var $sub = $('.sub');
    var $add = $('.add');
    var $edit = $('.editor a');
    var $ok = $('.ok');
    var $listOk = $('.list .ok');
    var $editOk = $('.editor .ok');
    var $footOk = $('.foot .ok');


    
    function listAll(){
      var sum = 0;
      $listOk.each(function(){
      if($(this).attr('ch')==1){
          sum += 1;
        }
      });
      $('.foot a b').text(sum);
      if($('.foot a b').text()==0){
        $('.foot a').addClass('null');
      }else{
        $('.foot a').removeClass('null');
      }
    }



    function totalAll(){
      var total = 0;
      $listOk.each(function(){
        $(this).siblings('.buynum').find('.num').val($(this).siblings('.number').find('b').text());
        var itemtotal = $(this).siblings('.price').find('b').text()*$(this).siblings('.number').find('b').text();
        if($(this).attr('ch')==1){
          total += itemtotal;
        }
      });
      $('.total b').text(total);
    }
    
    totalAll();
    listAll();
    
    $listOk.on('click',function(){
      if($(this).attr('ch')==1){
        $(this).html('&#xe67c;').attr('ch','0');
        $editOk.html('&#xe67c;').attr('ch','0');
        $footOk.html('&#xe67c;').attr('ch','0');     
      }
      else{
        $(this).html('&#xe657;');
        $(this).attr('ch','1');
        var arr = new Array();
        $listOk.each(function(){
          arr.push($(this).attr('ch'));
          if($.inArray('0', arr)==-1){
            $editOk.html('&#xe657;').attr('ch','1');
            $footOk.html('&#xe657;').attr('ch','1');
          }else{
            $editOk.html('&#xe67c;').attr('ch','0');
            $footOk.html('&#xe67c;').attr('ch','0');
          }
          
        }); 
      }
      totalAll();
      listAll();
    });
    $editOk.on('click',function(){
      if($(this).attr('ch')==1){
        $(this).html('&#xe67c;').attr('ch','0');
        $listOk.html('&#xe67c;').attr('ch','0');
        $footOk.html('&#xe67c;').attr('ch','0');
      }
      else{
        $(this).html('&#xe657;').attr('ch','1');
        $listOk.html('&#xe657;').attr('ch','1');
        $footOk.html('&#xe657;').attr('ch','1');
      }
      totalAll();
      listAll();
    });
    $footOk.on('click',function(){
      if($(this).attr('ch')==1){
        $(this).html('&#xe67c;').attr('ch','0');
        $listOk.html('&#xe67c;').attr('ch','0');
        $editOk.html('&#xe67c;').attr('ch','0');
      }
      else{
        $(this).html('&#xe657;').attr('ch','1');
        $listOk.html('&#xe657;').attr('ch','1');
        $editOk.html('&#xe657;').attr('ch','1');
      }
      totalAll();
      listAll();
    });

    $edit.on('click',function(){
      $('.goodname').toggle();
      $('.buynum').toggle();
      $('.number').toggle();
      $('.del').toggle();
      $('.min').toggle();
      $('.clear').toggle();
      $('.del-all').toggle();
      $('.foot a').toggleClass('null');
      
      if($(this).text()=='编辑'){
        $(this).text('完成');
        $('.ok').html('&#xe67c;');
        $listOk.attr('ch','0');
        $editOk.attr('ch','0');
        $footOk.attr('ch','0');
        totalAll();
        
      }
      else{
        $(this).text('编辑');

        $listOk.each(function(){
          $(this).siblings('.number').find('b').text($(this).siblings('.buynum').find('.num').val());
        });
        
      }
      listAll();
    });
    $add.on('click',function(){
      var $num =  $(this).siblings('.num');
        $num.val(parseInt($num.val())+1);
        if($num.val()>=999){
            $num.val(999);
            $(this).addClass('cancel');
        }
        else{
            $(this).removeClass('cancel');
            $(this).siblings('.sub').removeClass('cancel');
        }
    });
    $sub.on('click',function(){
      var $num =  $(this).siblings('.num');
        $num.val(parseInt($num.val())-1);
        if($num.val()<=1){
            $num.val(1);
            $(this).addClass('cancel');       
        }
        else{
            $(this).removeClass('cancel');
            $(this).siblings('.add').removeClass('cancel');
        }
    });
    $('input').bind('input propertychange', function() {
      var $add = $(this).siblings('.add');
      var $sub = $(this).siblings('.sub');
        if($(this).val()>=999){
            $add.addClass('cancel');
            $sub.removeClass('cancel');
        }
        else if($(this).val()<=1){
            $sub.addClass('cancel');
            $add.removeClass('cancel');
        }else{
            $sub.removeClass('cancel');
            $add.removeClass('cancel');
        }
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/font/iconfont.css";
</style>
<style src="../../assets/css/page/cart.css" scoped></style>
