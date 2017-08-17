<template>
  <div class="page-collect">
    <div v-if='flag'>
      <ul id="collect">
        <li class="collect-list" v-for="elem in collect_info"> <!--/*遍历传入数据，包括商品名，价格*/-->
          <div class="img-detail">
           <!-- /*跳转页面传参数为tag（商品id）*/ -->
            <router-link to="/details/:tag"><img :src='elem.url' alt=""></router-link>
          </div>
          <div class="product-detail" >
            <router-link to="/details/:tag"><p class="product-info overhide">{{elem.name}}</p></router-link>
            <span class="product-price">￥&nbsp;{{elem.price}}</span>
            <span class="like"><i class="iconfont">&#xe60a;</i> <!--//调用收藏接口，传出数据为商品id--></span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="empty-list">
        <h4>您还没有收藏过宝贝 T.T</h4>
        <p>赶快挑点宝贝</p>
        <router-link to="/home">去逛逛</router-link>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
//import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios  from 'axios'
export default {
  name: 'page-collect',
  data () {
    return {
      flag:true,
      user_id:"",
      collect_info:{}
    }
  },
  components:{

    CommonFooter
  },
  mounted(){
    if(document.cookie){
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      this.user_id=user_id;
       var _this=this;
      Axios.get('http://127.0.0.1:3000/get_collect', {
        params:{
          user_id:this.user_id
        }
      }).then(function(res){

        _this.collect_info=JSON.parse(res.data);
      });
    }
  }
}
</script>


<style src="../../assets/font/iconfont.css" scoped></style>
<style scoped>
  ul{
    list-style:none;
    padding: .1rem 0  ;
    margin-bottom: 0.1rem;


  }
  #collect{
    font-size:0.25rem;

  }
  #collect .collect-list{
    height:2.1rem;
    width:100%;
    border-bottom: .1rem solid #eee;
    padding: 0.1rem 0.2rem 0 .2rem;
  }
  #collect .img-detail{
    float: left;
    width: 30%;
  }
  #collect .collect-list img{
    width: 100%;
  }
  #collect .product-detail{
    float: right;
    width:69%;
    padding-left:0.2rem;
    position: relative;
    height:2.0rem;

  }
  #collect .product-price{
    position: absolute;
    left:0.2rem;
    bottom: .2rem;
    color: red;
  }
  #collect .like i{
    position: absolute;
    left:2rem;
    bottom: .2rem;
    color: red;
    font-size: 0.3rem;
  }
  #collect .overhide {
    display: -webkit-box !important;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #867e7e;

  }
  /*empty-list开始*/
  .empty-list{
      margin: 1rem 1rem;
      text-align: center;
  }
  .empty-list h4{
      font-size: 0.32rem;
      margin-bottom: 0.2rem;
      color: #666;
  }
  .empty-list p{
      color: #999;
  }
  .empty-list a{
      display: inline-block;
      border-radius: 3px;
      color: #f60;
      border: 0.01rem solid #f60;
      padding: 0.1rem 0.6rem 0.13rem 0.6rem;
      margin-top: 0.15rem;
  }
  /*empty-list结束*/
</style>
