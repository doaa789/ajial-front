<template>
    <section class="tabikhaTop" v-if="$store.state.tabikhaSlider===1">
      <the-header></the-header>
      <div style="display:flex;">
      <img class="mobileImg1" src="../../assets/mobile1.png" alt="">
      <div style="display:grid;">
      <img style="margin-top:25%;margin-right:5%;width:150px;height:70px" src="../../components/layout/Logo/logo2.png" alt="">
      <p style="margin-right:5%;margin-top:-6%;font-size: 30px;width: 125%;">اللعبة التعليمية الأولى من نوعها<br>الموجهة للأطفال في مرحلة ما قبل الدراسة<br>وباللغة العربية</p> 
            <div class="dot1-container" style="margin-right:-27%">
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===1}" @click="$store.state.tabikhaSlider=1"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===2}" @click="$store.state.tabikhaSlider=2"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===3}" @click="$store.state.tabikhaSlider=3"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===4}" @click="$store.state.tabikhaSlider=4"></span> 
      </div>
      </div>
      </div>
</section>
</template>

<script>
  import TheHeader from "../../components/layout/TheHeader.vue";
export default{
    components:{
    TheHeader
  }
  }
</script>

<style>
.tabikhaTop{
  color: #fff;
  height: 58rem;
  direction: rtl;
  background-color: #17e3d2;
}
.mobileImg1{
  margin-right: 15%;
  margin-top: 5%;
  height: 500px;
  width: 250px;
animation-name: example11;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example11 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-right: 10%;} 
  to {opacity: 1 ;margin-right: 15%;}

}
</style>