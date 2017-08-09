<template>
  <div class="page-classify">
    <div class="details">
      <div class="title">
        <i class="iconfont" :class="icon"></i>&nbsp;
        <span>{{name}}</span>
      </div>
      <ul v-for="commodity in commodityList">
        <li>
          <router-link :to="'/details/'+commodity.good_id">
            <img :src="commodity.url">
          </router-link>
          <router-link :to="'/details/'+commodity.good_id" class="goodname" tag="p">{{commodity.name}}</router-link>
          <p class="price">￥{{commodity.price}}</p>
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </li>
      </ul>
    </div>
    <div style="clear: both;"></div>
    <div class="page">
      <a href="" class="prev">上一页</a>
      <a href="" class="next">下一页</a>
    </div>
    <!-- <common-footer-logo  style="position:absolute; bottom:.5rem;"></common-footer-logo> -->
    <common-footer-logo  style="margin-bottom:1rem;"></common-footer-logo>
    <common-footer></common-footer>
  </div>
</template>

<script>
import Axios from 'axios'
import CommonFooterLogo from '../common/CommonFooterLogo'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-home',
  data () {
    return {
      commodityList:[],
      name:this.$route.params.name,
      icon:""
    }
  },
  components:{   
    CommonFooterLogo,
    CommonFooter
  },
  mounted(){
    switch(this.name){
      case "农副":this.icon="icon-mifan";break;
      case "干货":this.icon="icon-mogu";break;
      case "零食":this.icon="icon-lingshi-copy";break;
      case "水产":this.icon="icon-haixian";break;
      case "酒茶":this.icon="icon-cha";break;
      case "养生":this.icon="icon-shiwu";break;
      case "生鲜":this.icon="icon-shengxian";break;
      case "居家":this.icon="icon-jiaju";break;
    }
    this.goods_paging();
  },
  methods:{
    goods_paging:function(){
      Axios.get('http://localhost:3000/goods_paging',{
        params:{
          cls:this.name,
          // count:,
          // page:
        }
      }).then((res)=>{
        console.log(res.data);
        this.commodityList=JSON.parse(res.data);
        console.log(this.commodityList);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/page/classify.css";
@import "../../assets/font/iconfont.css";

</style>
