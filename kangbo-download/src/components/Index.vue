<template>
<div class="container">
  <div class="wxtip" id="JweixinTip">
    <img class="arrow" src="../assets/arrow.png" alt="">
    <p class="text">请点击右上角<br/>选择在浏览器中打开</p>
  </div>
  <Icon />
  <Head />
  <Button />
  <Phone />
</div>
</template>

<script>
import Icon from "./Icon";
import Head from "./Head";
import Button from "./Button";
import Phone from "./Phone";
export default {
  name: "Index",
  components: {
    Icon,
    Head,
    Button,
    Phone
  },
  mounted:function(){
    const ua = navigator.userAgent.toLocaleLowerCase();
    var isWeixin = !!/MicroMessenger/i.test(ua);
    console.log(isWeixin)
    if(isWeixin){
      document.getElementById('JweixinTip').style.display = 'block'
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 100vw;
  height: 100vh;
  min-height: 14rem;
  background: url('../assets/bg.png') no-repeat;
  background-size: 100% 100%;
}
.wxtip {
	background: rgba(0,0,0,0.8); 
	text-align: right; 
	position: fixed; 
	left:0; 
	top: 0; 
	width: 100%; 
	height: 100%; 
	z-index: 998; 
	display: none;
  color: #FFFFFF;
  font-size: 20px;
}
.arrow {
  margin-right: 20px;
}
.text {
  text-align: center;
}
</style>