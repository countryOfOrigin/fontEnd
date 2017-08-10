<template>
  <div class="page-order-go">
    <ul id="order-go">
      <li class="order-list">
        <div class="time-state">
          <p class="order-time">下单时间：2016-11-21 13:51.11</p>
          <p class="order-state">等待买家付款</p>
        </div>
        <div class="order-content">
          <img src="static/img/home/01.jpg" alt="">
          <div class="order-detail">
            <p class="overhide">订单编号：12d234444444444eeeeeeeeeee56789shfkjashdfhsfkdsfk3456789</p>
            <p class="overhide">商品名：超级无敌好吃的麻辣小龙虾</p>
          </div>
        </div>
        <p class="total-price">共&nbsp;1件商品 合计：￥15</p>

      </li>
      <li class="order-list">
        <div class="time-state">
          <p class="order-time">下单时间：2016-11-21 13:51.11</p>
          <p class="order-state">等待买家付款</p>
        </div>
        <div class="order-content">
          <img src="static/img/home/01.jpg" alt="">
          <div class="order-detail">
            <p class="overhide">订单编号：12d234444444444eeeeeeeeeee56789shfkjashdfhsfkdsfk3456789</p>
            <p class="overhide">商品名：超级无敌好吃的麻辣小龙虾</p>
          </div>
        </div>
        <p class="total-price">共&nbsp;1件商品 合计：￥15</p>

      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'page-order-go',
  data () {
    return {


    }
  },
  components:{

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .page-order-go{
    /*padding: 1rem 0.1rem 0 0.1rem ;*/
    color: #867e7e;
    padding-top: .8rem;
    font-size: .2rem;

  }
  #order-go .order-list{
    border-bottom: 0.2rem solid #eee;
    position: relative;
    heigth : 3rem;
  }
  #order-go .time-state{
    height:.5rem;
    line-height:.5rem;
    /*background: #FCF8E8;*/
    padding : 0 .1rem;
  }
  #order-go .order-time{
    float: left;

  }
  #order-go .order-state{
    float: right;

  }
  #order-go .order-content{
    height:2rem;
    /*border-bottom: .03rem solid #eeeeee;*/
    padding:0 .1rem;
    background: rgba(245,245,245,0.5);
  }
  #order-go .order-content img{
    display: block;
    float: left;
    width:30%;
    /*height:2rem;*/
    margin-right:.2rem;
    margin-top:.06rem;
  }
  #order-go .order-detail{
    width:66%;
    float: right;
    margin-top: .2rem;


  }
  #order-go .order-detail p{
    margin-bottom: .1rem;
  }
  #order-go .total-price{
    height: 0.5rem;
    width:100%;
    line-height:0.5rem;
    padding-left:4rem;
    border-bottom: .05rem solid #eeeeee;
  }
  #order-go .overhide {
    width:3.5rem;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    -webkit-box-orient: vertical;
  }


</style>
