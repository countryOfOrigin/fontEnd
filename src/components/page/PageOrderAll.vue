<template>
  <div class="page-order-all">
    <ul id="order-all">
      <li class="order-list">
        <div class="time-state">
          <p class="order-time">下单时间：2016-11-21 13:51.11</p>
          <p class="order-state">买家已收货</p>
        </div>
        <div class="order-content">
          <img src="static/img/home/01.jpg" alt="">
          <div class="order-detail">
            <p class="overhide">订单编号：12d234444444444eeeeeeeeeee56789shfkjashdfhsfkdsfk3456789</p>
            <p class="overhide">商品名：超级无敌好吃的麻辣小龙虾</p>
          </div>
        </div>
        <p class="total-price">共&nbsp;1件商品 合计：￥15</p>
        <div class="order-state-list">
          <span>延长收货</span>
          <span>查看物流</span>
          <span>确认收货</span>
        </div>
      </li>
      <li class="order-list">
        <div class="time-state">
          <p class="order-time">下单时间：2016-11-21 13:51.11</p>
          <p class="order-state">买家已收货</p>
        </div>
        <div class="order-content">
          <img src="static/img/home/01.jpg" alt="">
          <div class="order-detail">
            <p class="overhide">订单编号：12d234444444444eeeeeeeeeee56789shfkjashdfhsfkdsfk3456789</p>
            <p class="overhide">商品名：超级无敌好吃的麻辣小龙虾</p>
          </div>
        </div>
        <p class="total-price">共&nbsp;1件商品 合计：￥15</p>
        <div class="order-state-list">
          <span>延长收货</span>
          <span>查看物流</span>
          <span>确认收货</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from "axios"
export default {
  name: 'page-order-all',
  data () {
    return {
      user_id:"",
      goods_info:{},
      state:"待收货"
    }
  },
  components:{

  },
  mounted(){
      if(document.cookie){
//        console.log(document.cookie)
        var arr=document.cookie.split(";");
        var user_id=arr[0].split("=")[1];
        this.user_id=user_id;
        console.log(this.user_id);
        console.log(this.state);
        // var _this=this;
        Axios.post('http://127.0.0.1:3000/get_orders',{
          params:{
            uid:this.user_id,
            state:this.state,
          }
        }).then(function(res){
            console.log(res.data);
          // this.goods_info=JSON.parse(res.data);

        });
        this.get_orders();
      }else{
          console.log("未登录");
      }
  },
  methods:{
    get_orders:function(){
        // var _this=this;
        // Axios.post('http://localhost:3000/get_orders',{
        //   params:{
        //     uid:_this.user_id,
        //     state:_this.state,
        //   }
        // }).then(function(res){
        //     console.log(res.data);
        //   // this.goods_info=JSON.parse(res.data);

        // });
      }
  }

}
</script>

<style scoped>

  body{
    background: #fff;
  }
  ul{
    list-style: none;
    padding:0;
  }
  p{
    margin:0;
  }
  .page-order-all{
    /*padding: 1rem 0.1rem 0 0.1rem ;*/
    color: #867e7e;
    padding-top: .8rem;
    font-size: .2rem;

  }
  #order-all .order-list{
    border-bottom: 0.2rem solid #eee;
    position: relative;
    heigth : 3rem;
  }
  #order-all .time-state{
    height:.5rem;
    line-height:.5rem;
    /*background: #FCF8E8;*/
    padding : 0 .1rem;
  }
  #order-all .order-time{
    float: left;

  }
  #order-all .order-state{
    float: right;

  }
  #order-all .order-content{
    height:2rem;
    /*border-bottom: .03rem solid #eeeeee;*/
    padding:0 .1rem;
    background: rgba(245,245,245,0.5);
  }
  #order-all .order-content img{
    display: block;
    float: left;
    width:30%;
    /*height:2rem;*/
    margin-right:.2rem;
    margin-top:.06rem;
  }
  #order-all .order-detail{
    width:66%;
    float: right;
    margin-top: .2rem;


  }
  #order-all .order-detail p{
    margin-bottom: .1rem;
  }
  #order-all .total-price{
    height: 0.5rem;
    width:100%;
    line-height:0.5rem;
    padding-left:4rem;
    border-bottom: .05rem solid #eeeeee;
  }
  #order-all .overhide {
    width:3.5rem;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    -webkit-box-orient: vertical;
  }
  #order-all .order-state-list{
    height: 0.8rem;
    width:100%;
    line-height:0.8rem;
    padding-left:2.5rem;

  }
  #order-all .order-state-list span{
    display: inline-block;
    width: 1.2rem;
    height:.5rem;
    line-height: .5rem;
    border:0.03rem solid #eee;
    border-radius: .25rem;
    text-align: center;
    color: #504c4c;
  }
</style>
























