<template>
  <div class="page-collect">
    <ul id="collect">
      <li class="collect-list"> <!--/*遍历传入数据，包括商品名，价格*/-->
        <div class="img-detail">
         <!-- /*跳转页面传参数为tag（商品id）*/ -->
          <router-link to="/details/:tag"><img src="static/img/home/01.jpg" alt=""></router-link>
        </div>
        <div class="product-detail" >
          <router-link to="/details/:tag"><p class="product-info overhide">{{name}}</p></router-link>
          <span class="product-price">￥&nbsp;{{price}}</span>
          <span class="like"><i class="iconfont">&#xe60a;</i> <!--//调用收藏接口，传出数据为商品id-->
</span>
        </div>
      </li>
    </ul>
    <common-footer></common-footer>
  </div>
</template>

<script>
//import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-collect',
  data () {
    return {
      name:"aaa aaa aaaa qwhd fs dfs hb fhbfv df ds ssss sss ss ss sss sss ss sss ssaa aa aaaa",
      price:"37"
//      products:[]

    }
  },
  components:{
//    CommonHeader,
    CommonFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/font/iconfont.css";

  /*@import "../../assets/css/page/collect.css";*/
  ul{
    list-style:none;
    padding:0.2rem .1rem 0 0.1rem;
    margin-bottom: 0.1rem;

  }
  #collect{
    border-bottom: 0.05rem solid #eee;
    font-size:0.3rem;

  }
  #collect .collect-list{
    height:2.6rem;
    width:100%;
  }
  #collect .img-detail{
    float: left;
    width: 40%;
  }
  #collect .collect-list img{
    width: 100%;
  }
  #collect .product-detail{
    float: right;
    width:60%;
    padding-left:0.2rem;
    position: relative;
    height:2.55rem;

  }
  #collect .product-price{
    position: absolute;
    left:0.2rem;
    bottom: .05rem;
    color: red;
  }
  #collect .like i{
    position: absolute;
    left:2rem;
    bottom: .05rem;
    color: red;
    font-size: 0.3rem;
  }
  #collect .overhide {
    color: #000;
    display: -webkit-box !important;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

</style>
