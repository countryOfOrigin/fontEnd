<template>
  <div class="page-discount">
    <!-- <div class="discount-box" v-for="discount in discountList">
      <div class="discount-left">
        <span class="circles"></span>
          <p>代金券</p>
      </div>
      <div class="discount-right">
        <span class="circless"></span>
        <div class="discount-price">
          <div class="discount-price-left">
            {{discount.preferential}}元
          </div>
          <div class="discount-price-right">
            <p>全品类通用</p>
            <p>单笔金额>{{disount.limit}}元</p>
          </div>
        </div>
        <div class="discount-footer">
          <div class="discount-footer-left">
            认证获取
          </div>
          <div class="discount-footer-right">
            <span class="glyphicon glyphicon-time"></span>
            {{disount.get_time}}~{{disount.deadline}}有效
          </div>

        </div>
      </div>
    </div> -->
    <div v-if="flag">
      <div class="discount-box">
        <div class="discount-left">
          <span class="circles"></span>
          <p>代金券</p>
        </div>
        <div class="discount-right">
          <span class="circless"></span>
          <div class="discount-price">
            <div class="discount-price-left">
              100元
            </div>
            <div class="discount-price-right">
              <p>仅限美亚宝3月期</p>
              <p>单笔金额>10000元</p>
            </div>
          </div>
          <div class="discount-footer">
            <div class="discount-footer-left">
              注册获取
            </div>
            <div class="discount-footer-right">
              <span class="glyphicon glyphicon-time"></span>
              2016/6/7~6/12有效
            </div>

          </div>
        </div>
      </div>
      <div class="discount-box">
        <div class="discount-left">
          <span class="circles"></span>
          <p>代金券</p>
        </div>
        <div class="discount-right">
          <span class="circless"></span>
          <div class="discount-price">
            <div class="discount-price-left">
              20元
            </div>
            <div class="discount-price-right">
              <p>仅限美亚宝6月期</p>
              <p>单笔金额>5000元</p>
            </div>
          </div>
          <div class="discount-footer">
            <div class="discount-footer-left">
              首次获取
            </div>
            <div class="discount-footer-right">
              <span class="glyphicon glyphicon-time"></span>
              2016/6/7~6/12有效
            </div>

          </div>
        </div>
      </div>
      <div class="discount-box">
        <div class="discount-left">
          <span class="circles"></span>
          <p>代金券</p>
        </div>
        <div class="discount-right">
          <span class="circless"></span>
          <div class="discount-price">
            <div class="discount-price-left">
              50元
            </div>
            <div class="discount-price-right">
              <p>仅限美亚宝12月期</p>
              <p>单笔金额>3000元</p>
            </div>
          </div>
          <div class="discount-footer">
            <div class="discount-footer-left">
              好友首次获取
            </div>
            <div class="discount-footer-right">
              <span class="glyphicon glyphicon-time"></span>
              2016/6/7~6/12有效
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="empty-list">
        <h4>心疼你，一张优惠券都木有 T.T</h4>
        <p>快去首页发现优惠券</p>
        <router-link to="/home">去找找</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {

  name: 'page-discount',
  data () {
    return {
      flag:false,
      discountList:[], 
      user_id:0,
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
    this.get_discount();
  },
  methods:{
    get_discount:function(){
      Axios.get('http://localhost:3000/get_discount',{
          params:{
              uid:this.user_id,
          }
      }).then((res)=>{
          console.log(JSON.parse(res.data));
          this.discountList=JSON.parse(res.data);
      }).catch((error)=>{
          console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/page/discount.css";
  @import "../../assets/font/iconfont.css";

</style>
