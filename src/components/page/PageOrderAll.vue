<template>
  <div class="page-order-all">
    <ul id="order-all">
      <li class="order-list">
        <p class="order-time">下单时间：2016-11-21 13:51.11</p>
        <div class="order-content">
          <img src="static/img/home/01.jpg" alt="">
          <div class="order-detail">
            <p>订单编号：123456789</p>
            <p>订单金额：￥23.51</p>
            <p>订单状态：买家已收货</p>
          </div>
        </div>
        <p class="total-price">总计：￥23.51</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'page-order-all',
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
    border-bottom: 0.05rem solid #eee;
    position: relative;
    heigth : 3rem;
  }
  #order-all .order-time{
    height:.5rem;
    line-height:.5rem;
    background: #f7f2f2;
    margin-bottom:.1rem;
    padding-left:.1rem;
  }
  #order-all .order-content{
    height:2rem;
    border-bottom: .03rem solid #eeeeee;
    padding:0 .1rem;
  }
  #order-all .order-content img{
    display: block;
    float: left;
    width:30%;
    /*height:2rem;*/
    margin-right:.2rem;
  }
  #order-all .order-detail{
    width:66%;
    float: right;

  }
  #order-all .order-detail p{
    margin-bottom: .1rem;
  }
  #order-all .total-price{
    height: 0.5rem;
    line-height:0.5rem;
    margin-left:4rem;
  }
</style>
























