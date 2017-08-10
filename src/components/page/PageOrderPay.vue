<template>
  <div class="page-order-pay">
    <ul id="order-pay">
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
        <div class="order-state-list">
          <span>联系客服</span>
          <span class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            取消付款
          </span>
          <span>付款</span>
        </div>
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
        <div class="order-state-list">
          <span>联系客服</span>
          <span class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            取消付款
          </span>
          <span>付款</span>
        </div>
      </li>
    </ul>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              确定取消订单？
            </h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary">
              确定
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>
<script>

export default {
  name: 'page-order-pay',
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
  .page-order-pay{
    /*padding: 1rem 0.1rem 0 0.1rem ;*/
    color: #867e7e;
    padding-top: .8rem;
    font-size: .2rem;

  }
  #order-pay .order-list{
    border-bottom: 0.2rem solid #eee;
    position: relative;
    heigth : 3rem;
  }
  #order-pay .time-state{
    height:.5rem;
    line-height:.5rem;
    /*background: #FCF8E8;*/
    padding : 0 .1rem;
  }
  #order-pay .order-time{
    float: left;

  }
  #order-pay .order-state{
    float: right;

  }
  #order-pay .order-content{
    height:2rem;
    /*border-bottom: .03rem solid #eeeeee;*/
    padding:0 .1rem;
    background: rgba(245,245,245,0.5);
  }
  #order-pay .order-content img{
    display: block;
    float: left;
    width:30%;
    /*height:2rem;*/
    margin-right:.2rem;
    margin-top:.06rem;
  }
  #order-pay .order-detail{
    width:66%;
    float: right;
    margin-top: .2rem;


  }
  #order-pay .order-detail p{
    margin-bottom: .1rem;
  }
  #order-pay .total-price{
    height: 0.5rem;
    width:100%;
    line-height:0.5rem;
    padding-left:4rem;
    border-bottom: .05rem solid #eeeeee;
  }
  #order-pay .overhide {
    width:3.5rem;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    -webkit-box-orient: vertical;
  }
  #order-pay .order-state-list{
    height: 0.8rem;
    width:100%;
    line-height:0.8rem;
    padding-left:2.5rem;

  }
  #order-pay .order-state-list span{
    display: inline-block;
    width: 1.2rem;
    height:.5rem;
    line-height: .5rem;
    border:0.03rem solid #eee;
    border-radius: .25rem;
    text-align: center;
    color: #504c4c;
  }
  #order-pay .btn{
    font-size: .2rem;
    background: #fff;
    height:.5rem;
    line-height: .5rem;
    padding:0;
  }
  .page-order-pay .modal-dialog{
    margin-top:3rem;
  }
  .page-order-pay .modal-header{
    border-bottom:.05rem solid #3388ff;
    color: #3388ff;
  }
</style>
