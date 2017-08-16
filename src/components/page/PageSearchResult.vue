<template>
  <div class="page-search-result">
    <div class="result">
        <ul class="list">
            <li v-for="commodity in commodityList">
                <img :src="commodity.url">
                <p class="goodname">{{commodity.name}}</p>
                <span class="new-price">¥<b>{{commodity.price}}</b></span>
                <span class="old-price">¥<del>128.00</del></span>
                <span class="number">评论<b>146</b>条</span>
            </li>
            <li>
                <img src="../../assets/img/m01.jpg">
                <p class="goodname">五常大米啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                <span class="new-price">¥<b>68.00</b></span>
                <span class="old-price">¥<del>128.00</del></span>
                <span class="number">评论<b>146</b>条</span>
            </li>
            <!-- <li>
                <img src="../../assets/img/m01.jpg">
                <p class="goodname">五常大米啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                <span class="new-price">¥<b>68.00</b></span>
                <span class="old-price">¥<del>128.00</del></span>
                <span class="number">评论<b>146</b>条</span>
            </li>
            <li>
                <img src="../../assets/img/m01.jpg">
                <p class="goodname">五常大米啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                <span class="new-price">¥<b>68.00</b></span>
                <span class="old-price">¥<del>128.00</del></span>
                <span class="number">评论<b>146</b>条</span>
            </li>
            <li>
                <img src="../../assets/img/m01.jpg">
                <p class="goodname">五常大米啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                <span class="new-price">¥<b>68.00</b></span>
                <span class="old-price">¥<del>128.00</del></span>
                <span class="number">评论<b>146</b>条</span>
            </li> -->
        </ul>
        
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'page-search-result',
  data () {
    return {
        keyword:this.$route.params.key,
        commodityList:[],
        flag:true
    }
  },
  components:{

  },
  mounted(){
    this.search_key();
  },
  methods:{
    search_key:function(){
      Axios.get('http://localhost:3000/search_key',{
        params:{
          key:this.keyword,
        }
      }).then((res)=>{
        // console.log(res.data);
        this.commodityList=JSON.parse(res.data);
        console.log(this.commodityList);
      }).catch((error)=>{
        console.log(error);
      });
    }
  },
    watch:{
      '$route'(to,from){
        this.keyword=this.$route.params.key,
        this.search_key();
      }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul, ol{
        list-style: none;
    }
    body{
        background: #ecf0f1;
        color: #333;
    }
    a{
        text-decoration: none;
    }
    img{
        border: 0.01rem solid #eee;
    }
    b{
        font-weight: 400;
    }
    .result{
        padding: 0 0.15rem;
        padding-top: 1.3rem;
    }
    .list li{
        width: 100%;
        height: 2.12rem;
        border-bottom: 0.03rem solid #ddd;
        padding: 0.1rem 0.2rem;
        position: relative;
    }
    .list img{
        width: 1.8rem;
        height: 1.8rem;
        float: left;
        /*margin: 0 0.1rem;*/
        margin-right: 0.25rem;
    }
    .list .goodname{
        /*display: inline-block;*/
        font-size: 0.25rem;
        height: 0.8rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        margin-bottom: 0.25rem;
    }
    .list .old-price{
        font-size: 0.22rem;
        color: #aaa;
    }
    .list .new-price{
        color: #e33a35;
    }
    .list .number{
        font-size: 0.22rem;
        color: #666;
        float: right;
    }
</style>
