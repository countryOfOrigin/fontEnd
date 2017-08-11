<template>
  <div class="page-all-class">
    <div class="carousel">
      <swipe class="my-swipe">
        <swipe-item class="item1"></swipe-item>
        <swipe-item class="item2"></swipe-item>
        <swipe-item class="item3"></swipe-item>
      </swipe>
    </div>
    <div class="content">
      <ul>
        <li class="a1">
          <div>
            <i class="iconfont">&#xe69d;</i>
            <p>居家</p>
          </div>
          
        </li>
        <li class="a2">
          <div>
            <i class="iconfont">&#xe669;</i>
            <p>农副</p>
          </div>
        </li>
        <li class="a3">
          <div>
            <i class="iconfont">&#xe61e;</i>
            <p>干货</p>
          </div>
        </li>
        <li class="a4">
          <div>
            <i class="iconfont">&#xe602;</i>
            <p>零食</p>
          </div>
        </li>
        <li class="a5">
          <div>
            <i class="iconfont">&#xe650;</i>
            <p>水产</p>
          </div>
        </li>
        <li class="a6">
          <div>
            <i class="iconfont">&#xe601;</i>
            <p>酒茶</p>
          </div>
        </li>
        <li class="a7">
          <div>
            <i class="iconfont">&#xe66f;</i>
            <p>养生</p>
          </div>
        </li>
        <li class="a8">
          <div>
            <i class="iconfont">&#xe65c;</i>
            <p>生鲜</p>
          </div>
        </li>
        <li class="a9">
          <div>
            <i class="iconfont">&#xe67e;</i>
            <p>首页</p>
          </div>
        </li>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '../common/CommonFooter'
import {Swipe, SwipeItem } from 'vue-swipe'
import $ from 'jquery'
Swipe.auto= false;
export default {
  name: 'page-all-class',
  data () {
    return {
    }
  },
  components:{
    Swipe,
    SwipeItem,
    CommonFooter
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/vue-swipe.css";
@import "../../assets/font/iconfont.css";
</style>
<style src="../../assets/css/page/allclass.css" scoped></style>