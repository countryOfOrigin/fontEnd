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
        <li v-for="n in 8">
          <router-link :to="'/classify/'+classify[n-1]" tag="div">
            <i class="iconfont" :class="classifyIconColor[n-1]"></i><br />
            <span>{{classify[n-1]}}</span>
          </router-link>
        </li>
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
      <router-link :to="'/classify/'+classify[index]" tag="div" class="title">
        <i class="iconfont" :class="classifyIcon[index]" ></i>&nbsp;
        <span>{{classify[index]}}</span>
        <b>></b>
      </router-link>
      <ul>
        <li v-for="common in commodity">
          <router-link :to="'/details/'+common.good_id">
            <img :src="common.url">
          </router-link>
          <router-link :to="'/details/'+common.good_id" class="goodname" tag="p">{{common.name}}</router-link>
          <p class="price">￥{{common.price}}</p>
          <div class="buybtn">    
          </div>
        </li>
      </ul>
    </div>
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
      nl:["i1","i2","i3","i4","i5","i6","i7","i8"],
      classify:["农副","干货","零食","水产","酒茶","养生","生鲜","居家"],
      classifyIcon:["icon-mifan","icon-mogu","icon-lingshi-copy","icon-haixian","icon-cha","icon-shiwu","icon-shengxian","icon-jiaju"],
      classifyIconColor:["icon-mifan i1","icon-mogu i2","icon-lingshi-copy i3","icon-haixian i4","icon-cha i5","icon-shiwu i6","icon-shengxian i7","icon-jiaju i8"],
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
