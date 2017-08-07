<template>
  <div class="page-home">
    <div class="carousel">
      <span class="glyphicon glyphicon-search"></span>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入您想要的商品">
      <swipe class="my-swipe">
        <swipe-item class="item1"></swipe-item>
        <swipe-item class="item2"></swipe-item>
        <swipe-item class="item3"></swipe-item>
      </swipe>
    </div>
    <div class="nav">
      <ul>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i1">&#xe669;</i><br />
          <span>农副</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i2">&#xe61e;</i><br />
          <span>干货</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i3">&#xe602;</i><br />
          <span>零食</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i4">&#xe650;</i><br />
          <span>水产</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i5">&#xe601;</i><br />
          <span>茶酒</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i6">&#xe66f;</i><br />
          <span>养生</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i7">&#xe65c;</i><br />
          <span>生鲜</span>
        </router-link>
        <router-link to="/details/:tag" tag="li">
          <i class="iconfont i8">&#xe69d;</i><br />
          <span>居家</span>
        </router-link>
      </ul>
    </div>
    <div class="packet">
      <ul>
        <li>
          <span class="money">¥15</span>
          <span class="con">农副<br />满减券</span>
          <span class="circle1"></span>
          <span class="circle2"></span>
        </li>
        <li>
          <span class="money">¥150</span>
          <span class="con">农副<br />满减券</span>
          <span class="circle1"></span>
          <span class="circle2"></span>
        </li>
        <li>
          <span class="money">¥15</span>
          <span class="con">农副<br />满减券</span>
          <span class="circle1"></span>
          <span class="circle2"></span>
        </li>
      </ul>
    </div>
    <div class="details" v-for="(commodity,index) in commodityList">
      <img src="../../../static/img/home/g1.jpg">
      <div class="title">
        <i class="iconfont" :class="classifyIcon[index]"></i>&nbsp;
        <span>{{classify[index]}}</span>
        <b>></b>
      </div>
      <ul>
        <li v-for="common in commodity">
          <img src="../../../static/img/home/01.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">    
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="details">
      <img src="../../../static/img/home/g1.jpg">
      <div class="title">
        <i class="iconfont">&#xe669;</i>&nbsp;
        <span>农副</span>
        <b>></b>
      </div>
      <ul>
        <li>
          <img src="../../../static/img/home/01.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/02.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/03.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/04.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
      </ul>
    </div>
    <div class="details">
      <img src="../../../static/img/home/g1.jpg">
      <div class="title">
        <i class="iconfont">&#xe669;</i>&nbsp;
        <span>农副</span>
        <b>></b>
      </div>
      <ul>
        <li>
          <img src="../../../static/img/home/01.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/02.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/03.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
        <li>
          <img src="../../../static/img/home/04.jpg">
          <p class="goodname">【顺丰包邮】正宗盱眙龙虾 加热即食</p>
          <p class="price">¥118.00</p>
          <div class="buybtn">
            
          </div>
        </li>
      </ul>
    </div> -->
    <div style="clear: both;"></div>
    <hr />
    <div class="message">
      <ul>
        <li>
          <i class="iconfont">&#xe61a;</i>
          <span>300+<br />原产地</span>
        </li>
        <li>
          <i class="iconfont">&#xe65e;</i>
          <span>60万+<br />旅程</span>
        </li>
        <li>
          <i class="iconfont">&#xe625;</i>
          <span>7个<br />国家</span>
        </li>
        <li>
          <i class="iconfont">&#xe6f3;</i>
          <span>400+<br />好食材</span>
        </li>
      </ul>
    </div>
    <div class="cooperation">
      <ul>
        <li>
          <i class="iconfont">&#xe609;</i>&nbsp;
          <span>商/务/合/作</span>
          <b>></b>
        </li>
        <li>
          <i class="iconfont">&#xe604;</i>&nbsp;
          <span>产/品/合/作</span>
          <b>></b>
        </li>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>

import Axios from 'axios'
import CommonFooter from '../common/CommonFooter'
import {Swipe, SwipeItem } from 'vue-swipe'
Swipe.auto= false;
export default {
  name: 'page-home',
  data () {
    return {
      classify:["农副","干货","零食","水产","酒茶","养生","生鲜","居家"],
      classifyIcon:["icon-mifan","icon-mogu","icon-lingshi-copy","icon-haixian","icon-cha","icon-shiwu","icon-shengxian","icon-jiaju"],
      commodityList:[]
    }
  },
  components:{   
    Swipe,
    SwipeItem,
    CommonFooter
  },
  mounted(){
    this.com_home();
  },
  methods:{
    com_home:function(){
      Axios.get('http://localhost:3000/com_home')
      .then((res)=>{
        console.log(res.data);
        this.commodityList=JSON.parse(res.data);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/home.css";
@import "../../assets/css/vue-swipe.css";
@import "../../assets/font/iconfont.css";
</style>
