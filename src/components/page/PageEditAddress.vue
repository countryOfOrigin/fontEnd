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
		<li class="address">
			<span>所在地区</span>
		</li>
		<li class="detail-address">
			<textarea v-model="message2" placeholder="哈西街道"></textarea>
		</li>
	</ul>
	<div id="delete-save">
		<span class="del">删除地址</span>
		<span class="save">保存</span>
	</div>
  </div>
</template>

<script>

export default {
  name: 'page-edit-address',
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
		background-color:#eee;
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
		width: 99%;
		height: 99%;
		outline:none;
	/*	outline-color: rgba(187, 188, 189, 0.46);
		outline-width: .01rem;*/
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











