<template>
  <div class="page-address">
    <ul id="address">
      <li class="address-list">
        <div class="name-tel">
          <span class="name">张三</span>
          <span class="tel">123456789</span>
        </div>
        <p class="address">
          黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号
        </p>
        <div class="edit">
          <router-link to="/user/address/edit/:id"><span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-edit"></span> 编辑
          </span></router-link>
          <span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-remove"></span> 删除
          </span>
        </div>
      </li>
      <li class="address-list">
        <div class="name-tel">
          <span class="name">张三</span>
          <span class="tel">123456789</span>
        </div>
        <p class="address">
          黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号
        </p>
        <div class="edit">
          <router-link to="/user/address/edit/:id"><span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-edit"></span> 编辑
          </span></router-link>
          <span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-remove"></span> 删除
          </span>
        </div>
      </li>
      <li class="address-list">
      <div class="name-tel">
        <span class="name">张三</span>
        <span class="tel">123456789</span>
      </div>
      <p class="address">
        黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号黑龙江省哈尔滨市南岗区学府路79号
      </p>
      <div class="edit">
        <router-link to="/user/address/edit/:id"><span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-edit"></span> 编辑
          </span></router-link>
        <span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-remove"></span> 删除
          </span>
      </div>
    </li>

    </ul>
    <router-link to="/user/address/edit/select/:id"><div id="footer">
      添加新地址
    </div> </router-link>
  </div>

</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-address',
  data () {
    return {


    }
  },
  components:{

  },
}
</script>

<style scoped>
  .page-address{
    /*padding:.2rem 0  1rem .2rem ;*/
    font-size:.2rem;
    padding-top: .2rem;
  }
  ul{
    list-style: none;
    padding:0;
    padding-bottom:2rem;

  }
  p{
    margin:0;
  }
  #address .address-list{
    /*height: 2rem;*/
    border-bottom: .2rem solid #eee;
  }
  #address .name-tel ,#address .address{
    padding:0 .2rem;

  }
  #address .name-tel{
    height: .6rem;
    line-height: .6rem;
  }
  #address .address{
    padding-bottom: .2rem;
    border-bottom:.02rem solid #eee;
  }
  #address .btn{
    font-size: .2rem;
    width: 1rem;
    height: .6rem;
    padding:0;
    background: #fff;
    color: #333;
    border:0;
    line-height: .6rem;
    display: inline-block;
  }
  #footer{
    height: 1rem;
    width:100%;
    line-height: 1rem;
    background: rgba(255,67,0,1);
    position: fixed;
    bottom:0;
    text-align: center;
    font-size: .3rem;
    color: #fff;
  }
</style>
