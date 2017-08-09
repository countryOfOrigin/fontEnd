<template>
  <div class="page-cart">
    <common-header></common-header>
    <div v-if="flag">
      <div class="editor">
        <!-- <span class="glyphicon glyphicon-ok-sign ok"></span> -->
        <i class="iconfont ok">&#xe632;</i>
        <i class="iconfont empty">&#xe67c;</i>
        <i class="iconfont">&#xe67e;</i>
        <p>黑龙江电视台--龙江原产递</p>
        <a href="javascript:;">编辑</a>
      </div>
      <div class="list">
        <ul>
          <li>
            <!-- <span class="glyphicon glyphicon-ok-sign ok"></span> -->
            <i class="iconfont ok">&#xe632;</i>
            <i class="iconfont empty">&#xe67c;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="number">×1</span>
            <a href="" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok">&#xe632;</i>
            <i class="iconfont empty">&#xe67c;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="number">×1</span>
            <a href="" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok">&#xe632;</i>
            <i class="iconfont empty">&#xe67c;</i>
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="number">×1</span>
            <a href="" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok">&#xe632;</i>
            <!-- <i class="iconfont empty">&#xe67c;</i> -->
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="number">×1</span>
            <a href="" class="del">删除</a>
          </li>
          <li>
            <i class="iconfont ok">&#xe632;</i>
            <!-- <i class="iconfont empty">&#xe67c;</i> -->
            <img src="../../assets/img/m01.jpg">
            <p class="goodname">五常大米</p>
            <div class="buynum">
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥68.00</span>
            <span class="number">×1</span>
            <a href="" class="del">删除</a>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="left-box">
          <i class="iconfont ok">&#xe632;</i>
          <i class="iconfont empty">&#xe67c;</i>
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
  mounted(){
    var $sub = $('.sub');
    var $add = $('.add');
    var $num = $('.num');
    var $edit = $('.editor a');
    var $ok = $('.ok');
    var fla = true;
    $('.list .ok').on('click',function(){
      if(fla == false){
        $(this).html('&#xe632;');
        fla = true;
      }
      else{
        $(this).html('&#xe67c;');
        $('.editor .ok').html('&#xe67c;');
        $('.foot .ok').html('&#xe67c;');
        fla = false;
      }
    });













    $edit.on('click',function(){
      $('.goodname').toggle();
      $('.buynum').toggle();
      $('.number').toggle();
      $('.del').toggle();
      
      if($(this).text()=='编辑'){
        $(this).text('完成');
        $('.ok').html('&#xe67c;');
      }
      else{
        $(this).text('编辑');
        $('.ok').html('&#xe632;');
      }
    })
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/cart.css";
@import "../../assets/font/iconfont.css";
</style>
