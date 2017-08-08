<template>
  <div class="common-addbuycar">
    <div class="dialog-box">
        <div class="buycar">
            <div class="content">
                <img src="../../assets/img/m01.jpg">
                <p>五常大米</p>
                <span class="price">¥68.00 - 128.00</span>                   
                <span class="glyphicon glyphicon-remove-circle"></span>
            </div>
            <div class="size">
                <p>规格：</p>
                <ul>
                    <li class="selected">5kg</li>
                    <li>10kg</li>
                </ul>
                <div style="clear: both;"></div>
            </div>
            <div class="buynum">
                <p>购买数量：</p>
                <span class="sub cancel">-</span>
                <input type="text" name="" value="1" class="num">
                <span class="add">+</span>
            </div>
            <a href="" class="addbtn">加入购物车</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-addbuycar',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/addbuycar.css";
</style>
