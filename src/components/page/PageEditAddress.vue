<template>
  <div class="page-edit-address">
	<ul id="edit-dress">
		<li class="name">
			<span>收货人</span>
			<input v-model="message" placeholder=" 张三">
		</li>
		<li class="tel">
			<span>联系电话</span>
			<input v-model="message1" placeholder=" 13104013181">
		</li>
		<li class="address btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
			<span class="address-text">所在地区</span>
      <!--<span class="box-footer" @click="showCode = !showCode">-->
      <!--{{ showCode ? 'Hide Code' : 'Show Code' }}</span>-->

      <span class="link-detail"> {{select.province.value}} {{select.city.value}}  {{select.area.value}}&nbsp;&nbsp;&nbsp;&rsaquo;</span>
		</li>
		<li class="detail-address">
			<textarea v-model="message2" placeholder="哈西街道"></textarea>
		</li>
	</ul>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h5 class="modal-title" id="myModalLabel">请选择</h5>
          </div>
          <div class="modal-body">
            <v-distpicker province="北京" city="北京市" area="海淀区" type="mobile" @province="selectProvince" @city="selectCity" @area="selectArea"></v-distpicker>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onselect" >关闭</button>
            <!--<button type="button" class="btn btn-primary" @click="onselect">确定</button>-->
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
	<div id="delete-save">
		<span class="del">删除地址</span>
		<span class="save">保存</span>
	</div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import $ from 'jquery'
export default {
  name: 'page-edit-address',
  data () {
    return {
      showCode: false,
      select: { province: '', city: '', area: '' },

    }
  },
  components:{
    VDistpicker,
  },
  methods:{
    onselect(){
        console.log(this.select);
    },
    selectProvince(value) {
      this.select.province = value

    },
    selectCity(value) {
      this.select.city = value

    },
    selectArea(value) {
      this.select.area = value

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html{
    height:42rem;
    width: 100%;
  }
	body{
		/*background-color:#eee;*/
    background: #eeeeee;

	}
	ul{
		list-style: none;
	}
	input{
		/*outline-color: rgba(187, 188, 189, 0.46);
		outline-width: .01rem;*/
		outline:none;
		width: 80%;
		height: .6rem;
    border:none;
	}
	li{
		height: .8rem;
		line-height: .8rem;
		border-bottom: .02rem solid #eee;
		padding: 0 0.2rem;
	}
	.page-edit-address{
		font-size:.2rem;
	}
	#edit-dress,#delete-save{
		padding: 0 0rem;
		margin: 0;
	}
	#edit-dress{
		border-bottom: .2rem solid #eee;
	}
	#edit-dress .detail-address{
		width: 100%;
		height: 2rem;
	}
	#edit-dress .detail-address textarea{
    border:none;
		width: 99%;
		height: 99%;
		outline:none;
	/*	outline-color: rgba(187, 188, 189, 0.46);
		outline-width: .01rem;*/
	}
  #edit-dress .btn{
    width:100%;
    border:0;
    background: #fff;
    font-size: .2rem;
    color: #333333;
  }
  #edit-dress .address-text{
    float: left;
  }
  #edit-dress .link-detail{
    float : right;
  }
	input::-webkit-input-placeholder {
		color: rgba(215, 217, 218, 0.7);
	}
	textarea::-webkit-input-placeholder {
		color: rgba(215, 217, 218, 0.7);
	}
	#delete-save{
		height: .8rem;
		border-bottom: .02rem solid #eee;
	}
	#delete-save .del{
		display: inline-block;
		float: left;
		/*background: rgba(255,67,0,1);*/
		height: 0.8rem;
		line-height: .8rem;
		width: 1.5rem;
		text-align: center;
		padding:0 .2rem;
		/*border-bottom: .1rem solid #eee;*/
		/*color: #fff;*/
		color: rgba(255,67,0,1);
		margin-right: .2rem;
		border-radius: .4rem;
	}
	#delete-save .save{
		display: inline-block;

		/*background: rgba(255,67,0,1);*/
		height: 0.8rem;
		line-height: .8rem;
		width: 1.5rem;
		text-align: center;
		padding:0 .2rem;
		/*color: #fff;*/
		color: rgba(255,67,0,1);
		border-radius: .4rem;
		float: right;
		/*border-bottom: .1rem solid #eee;*/

	}
</style>











