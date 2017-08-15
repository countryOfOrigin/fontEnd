<template>
  <div class="page-cart">
    <div v-if="flag">
      <div class="editor">
        <i class="iconfont ok" ch="1" style="display:none">&#xe657;</i>
        <i class="iconfont">&#xe67e;</i>
        <p>黑龙江电视台--龙江原产递</p>
        <a href="javascript:;">编辑</a>
      </div>
      <div class="list">
        <ul>
          <li v-for="(cart,n) in cartList">
            <!-- <i class="iconfont ok" ch="1" @click="select(n)" v-model="check" v-if="check">&#xe67c;</i> -->
            <div @click="select(cart,n);" class="checkbox-box">
              <img :src="checkFlag[n]?src1:src2" alt="" class="checkbox">
            </div>
            <!-- <i class="iconfont ok icon-dui1" ch="1" @click="select" v-model="check" v-if="!check"></i> -->
            <!-- <i class="iconfont ok" ch="1">&#xe67c;</i> -->
            <!-- <span class="ok"><input type="checkbox" v-model="check" :value="cart" @click="select"></span> -->
            <img :src="cart.url">
            <p class="goodname">{{cart.name}}</p>
            <div class="buynum"> 
                <span class="sub" @click="sub(cart.count,cart.shop_id);cart.count==1?1:cart.count--;">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="" v-model="cart.count" class="num" @blur="update_cart(cart.count,cart.shop_id);">
                <span class="add" @click="add(cart.count,cart.shop_id);cart.count==999?999:cart.count++;">+</span>
            </div>
            <p class="size">5kg</p>
            <span class="price">¥<b>{{cart.price}}</b></span>
            <span class="number">×<b>{{cart.count}}</b></span>
            <span class="del" @click="del(cart.shop_id)">删除</span>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="left-box">
          <!-- <i class="iconfont ok" ch="1">&#xe657;</i>
          <span class="all">全选</span> -->
          <!-- <div class="checkbox">
            <label>
              <input type="checkbox" @click="all_check" v-model="allCheck"> 全选
            </label>
          </div> -->
          <div @click="all_check" class="checkall-box">
            <img :src="checkAll?src1:src2" alt="" class="checkbox">
            <span>全选</span>
          </div>
        </div>
        <div class="min">
          <p class="total">合计：¥<b>{{totalPrice}}</b></p>
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
import Axios from 'axios'
export default {
  name: 'page-cart',
  data () {
    return {
      user_id:0,
      flag:true,
      cartList:[],
      check:[],
      src1:"/static/img/cart/yes.png",
      src2:"/static/img/cart/no.png",
      checkFlag:[],
      checkAll:false,
      // allCheck:[],
    }
  },
  components:{
    
  },
  mounted(){
    if(!document.cookie){
      this.$router.push("/login"); 
    }
    var arr=document.cookie.split(";");
    var user_id=arr[0].split("=")[1];
    this.user_id=user_id;
    this.all_cart();




    var $sub = $('.sub');
    var $add = $('.add');
    var $edit = $('.editor a');
    var $ok = $('.ok');
    var $listOk = $('.list .ok');
    var $editOk = $('.editor .ok');
    var $footOk = $('.foot .ok');


    
    // function listAll(){
    //   var sum = 0;
    //   $listOk.each(function(){
    //   if($(this).attr('ch')==1){
    //       sum += 1;
    //     }
    //   });
    //   $('.foot a b').text(sum);
    //   if($('.foot a b').text()==0){
    //     $('.foot a').addClass('null');
    //   }else{
    //     $('.foot a').removeClass('null');
    //   }
    // }



    // function totalAll(){
    //   var total = 0;
    //   $listOk.each(function(){
    //     $(this).siblings('.buynum').find('.num').val($(this).siblings('.number').find('b').text());
    //     var itemtotal = $(this).siblings('.price').find('b').text()*$(this).siblings('.number').find('b').text();
    //     if($(this).attr('ch')==1){
    //       total += itemtotal;
    //     }
    //   });
    //   $('.total b').text(total);
    // }
    
    // totalAll();
    // listAll();
    
    // $listOk.on('click',function(){
    //   if($(this).attr('ch')==1){
    //     $(this).html('&#xe67c;').attr('ch','0');
    //     $editOk.html('&#xe67c;').attr('ch','0');
    //     $footOk.html('&#xe67c;').attr('ch','0');     
    //   }
    //   else{
    //     $(this).html('&#xe657;');
    //     $(this).attr('ch','1');
    //     var arr = new Array();
    //     $listOk.each(function(){
    //       arr.push($(this).attr('ch'));
    //       if($.inArray('0', arr)==-1){
    //         $editOk.html('&#xe657;').attr('ch','1');
    //         $footOk.html('&#xe657;').attr('ch','1');
    //       }else{
    //         $editOk.html('&#xe67c;').attr('ch','0');
    //         $footOk.html('&#xe67c;').attr('ch','0');
    //       }
          
    //     }); 
    //   }
    //   totalAll();
    //   listAll();
    // });
    // $editOk.on('click',function(){
    //   if($(this).attr('ch')==1){
    //     $(this).html('&#xe67c;').attr('ch','0');
    //     $listOk.html('&#xe67c;').attr('ch','0');
    //     $footOk.html('&#xe67c;').attr('ch','0');
    //   }
    //   else{
    //     $(this).html('&#xe657;').attr('ch','1');
    //     $listOk.html('&#xe657;').attr('ch','1');
    //     $footOk.html('&#xe657;').attr('ch','1');
    //   }
    //   totalAll();
    //   listAll();
    // });
    // $footOk.on('click',function(){
    //   if($(this).attr('ch')==1){
    //     $(this).html('&#xe67c;').attr('ch','0');
    //     $listOk.html('&#xe67c;').attr('ch','0');
    //     $editOk.html('&#xe67c;').attr('ch','0');
    //   }
    //   else{
    //     $(this).html('&#xe657;').attr('ch','1');
    //     $listOk.html('&#xe657;').attr('ch','1');
    //     $editOk.html('&#xe657;').attr('ch','1');
    //   }
    //   totalAll();
    //   listAll();
    // });

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
        // $('.ok').html('&#xe67c;');
        $listOk.attr('ch','0');
        $editOk.attr('ch','0');
        $footOk.attr('ch','0');
        // totalAll();
        
      }
      else{
        $(this).text('编辑');

        $listOk.each(function(){
          $(this).siblings('.number').find('b').text($(this).siblings('.buynum').find('.num').val());
        });
        
      }
      // listAll();
    });
    // $add.on('click',function(){
    //   var $num =  $(this).siblings('.num');
    //     $num.val(parseInt($num.val())+1);
    //     if($num.val()>=999){
    //         $num.val(999);
    //         $(this).addClass('cancel');
    //     }
    //     else{
    //         $(this).removeClass('cancel');
    //         $(this).siblings('.sub').removeClass('cancel');
    //     }
    // });
    // $sub.on('click',function(){
    //   var $num =  $(this).siblings('.num');
    //     $num.val(parseInt($num.val())-1);
    //     if($num.val()<=1){
    //         $num.val(1);
    //         $(this).addClass('cancel');       
    //     }
    //     else{
    //         $(this).removeClass('cancel');
    //         $(this).siblings('.add').removeClass('cancel');
    //     }
    // });
    // $('input').bind('input propertychange', function() {
    //   var $add = $(this).siblings('.add');
    //   var $sub = $(this).siblings('.sub');
    //     if($(this).val()>=999){
    //         $add.addClass('cancel');
    //         $sub.removeClass('cancel');
    //     }
    //     else if($(this).val()<=1){
    //         $sub.addClass('cancel');
    //         $add.removeClass('cancel');
    //     }else{
    //         $sub.removeClass('cancel');
    //         $add.removeClass('cancel');
    //     }
    // });
  },
  methods:{
    all_cart:function(){
      Axios.get('http://localhost:3000/cart_all',{
          params:{
              u_id:this.user_id,
          }
      }).then((res)=>{
          // if(res.data==1){
          // console.log(res.data);
          this.cartList=JSON.parse(res.data);
          // this.check=this.cartList;
          // console.log(this.cartList);
      }).catch((error)=>{
          console.log(error);
      });
    },
    update_cart:function(count,sid){
      Axios.get('http://localhost:3000/update_cart',{
          params:{
              s_id:sid,
              count:count
          }
      }).then((res)=>{
          console.log(res.data);
      }).catch((error)=>{
          console.log(error);
      });
    },
    sub:function(count,sid){
      // this.cart.count==1?1:this.cart.count--;
      if(count!=1){
        count--;
        this.update_cart(count,sid);
      }
    },
    add:function(count,sid){
      // this.cart.count==1?1:this.cart.count--;
      if(count!=999){
        count++;
        this.update_cart(count,sid);
      }
    },
    del:function(sid){
      this.checkFlag = [];
      this.check = [];
      Axios.get('http://localhost:3000/cart_del',{
          params:{
              u_id:this.user_id,
              s_id:sid,
          }
      }).then((res)=>{
          // if(res.data==1){
          console.log(res.data);
          this.cartList=JSON.parse(res.data);
          console.log(this.cartList);
      }).catch((error)=>{
          console.log(error);
      });
    },   
    select:function(cart,n){
      // console.log(this.check.indexOf(cart));
      var idx = this.check.indexOf(cart);
      if(idx == -1){
        this.check.push(cart);
        this.checkFlag[n]=true;
      }else{
        this.check.splice(idx,1);
        this.checkFlag[n]=false;
      }
      if(this.check.length==this.cartList.length){
        this.checkAll=true;
      }else{
        this.checkAll=false;
      }

      // console.log(this.check);
    },
    all_check:function(){
      this.checkAll = !this.checkAll;
      if(!this.checkAll){
        this.checkFlag = [];
        this.check = [];
      }else{
        this.check=this.cartList;
        for (var i = 0; i < this.cartList.length; i++) {
          this.checkFlag[i] = true;
        }
      }
    }
  },
  computed:{
    totalPrice:function(){
      var total = 0;
      // console.log(this.check);
      this.check.forEach(function(val){
          total += val.price * val.count;
      })
      // console.log(total);
      return total;
    },
    // allCheck:function(){
    //   if(this.check.length==this.cartList.length){
    //     return true;
    //   }else{
    //     return false;
    //   }
    // },
    // all_check:function(){
    //   // this.allCheck=!this.allCheck;
    //   // console.log(this.allCheck);
    //   if(this.allCheck){
    //     this.check=this.cartList;
    //   }else{
    //     this.check=[];
    //   }
    //   // console.log(this.allCheck);
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../assets/css/page/cart.css" scoped></style>
<style scoped>
@import "../../assets/font/iconfont.css";
.page-cart .buynum input{
  border: .005rem solid #999;
}
.page-cart .min{
  text-align: right;
}
.page-cart .ok input{
  width: .3rem;
  height: .3rem;
  display: inline-block;
  border-radius: .1rem;
  background: blue;
}
.page-cart .checkbox-box{
  /*display: block;*/
  width: .3rem;
  height: .3rem;
  float: left;
  margin: .7rem .1rem .7rem 0rem;
  /*line-height: 2rem;*/
}
.page-cart .checkall-box{
  /*display: block;*/
  /*width: .3rem;
  height: .3rem;*/
  float: left;
  margin: .3rem 0rem .3rem .3rem;
  /*line-height: 2rem;*/
}
.page-cart .checkall-box img{
  float: left;
  margin-right: .1rem;
}
.page-cart .checkbox{
  width: .3rem;
  height: .3rem;
  margin: 0;
  /*margin: .7rem .2rem;*/
}
.page-cart .min{
  margin-left: 0;
  text-align: right;
  width: 3.1rem;
}
.page-cart .min p{
  float: none;
  display: block;
}
/*.page-cart input[type=checkbox] {
   width: 0.426666rem;
   height: 0.426666rem;
   border: 0;
   outline: 0!important;
   background-color: transparent;
   -webkit-appearance: none;
}
.page-cart input[type=checkbox]:before {
   content: '\e411';
}
.page-cart input[type=checkbox]:checked:before {
   content: '\e441';
}
.page-cart input[type=checkbox]:before {
   font-family: Muiicons;
   font-size: 0.426666rem;
   font-weight: 400;
   line-height: 1;
   text-decoration: none;
   color: #81d8d0;
   border-radius: 0;
   background: 0 0;
   -webkit-font-smoothing: antialiased;
}
.page-cart input[type=checkbox]:checked:before {
    color: #81d8d0;
}*/
</style>