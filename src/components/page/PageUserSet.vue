<template>
  <div class="page-user-set">
    <div class="userset-1">
      <span class="user-font font-2">头像</span>
      <span class="user-content"><img src="../../../static/img/userset/userset.png" alt="" class="user-logo"> <button class="btn btn-primary  btn-me" data-toggle="modal" data-target="#myModal">
></button></span>
      <!--弹层开始-->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content btn-content">
            <div class="modal-header">
              <button type="button" class="close " data-dismiss="modal" aria-hidden="true" >
                &times;
              </button>
              <h4 class="modal-title userset-title" id="myModalLabel">
                更改内容
              </h4>


            </div>
            <div class="modal-body userset-content">
             <div class="userset-5">
              <span class="first-box"> <span class="glyphicon glyphicon-ok-sign ok"></span><a href="">拍照</a></span>
             </div>
                <div class="userset-6">
                  <span class="secont-box"> <span class="glyphicon glyphicon-ok-sign ok"></span><a href="">相册</a></span>
                </div>


            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭
              </button>
              <button type="button" class="btn btn-primary">
                提交更改
              </button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
        <!--弹层结束-->
      </div>
    </div>
    <div class="userset-2">

      <span class="user-font">昵称</span>
      <span class="user-content"><a href="">fontEnd </a><button class="btn btn-primary  btn-you" data-toggle="modal" data-target="#myModal">
></button></span>
    </div>
    <div class="userset-2">

      <span class="user-font">性别</span>
      <span class="user-content"><a href="">未填写 > </a></span>

    </div>
    <div class="userset-2">

      <span class="user-font">会员等级</span>
      <span class="user-content"><a href="">V0普通会员> </a></span>
    </div>
    <img src="../../assets/img/logo.jpg" class alt="" class="userset-3">
    <div class="userset-4">
        <button class="cencle-box">退出登录</button>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery';


export default {
  name: 'page-user-set',
  data () {
    return {


    }
  },
  components:{
  },
  mounted(){
      var $btnme =$('.btn-me');
    var $btnyou =$('.btn-you');
    var $userContent = $('.user-content');
      var $userTitle = $('.userset-title');
      var $user5 = $('userset-5');
      var $user6 = $('userser-6');
      $btnme.on('click',function(){
         $userTitle.html(
             '设置头像'
         );
      $user5.html()

      })
    $btnyou.on('click',function(){
      $userTitle.html(
        '设定性别'
      );
//
    });
//
//

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/page/userset.css";
  @import "../../assets/font/iconfont.css";

</style>
