<template>
  <section class="tabikhaBottom">
      <the-header></the-header>
         <div>
        <div style="display:flex;margin-top: -4%;">
      <img class="mobileImg3" src="../../assets/plane.png" alt="">
      <div style="display:grid;">
      <p style="margin-right:-13%;margin-top:25%;font-size: 38px;width: 125%;color:#E65C51;">ما تأثير اللعبة في الأطفال؟</p> 
      <p style="margin-right:-13%;margin-top:-15%;font-size: 30px;width: 145%;">ان من أبرز ما يساعد طفلك على النمو بشكل سليم هوالقدرة على الربط بين الحواس الخمسة من  خلال <br>التفاعل مع العالم الفيزيائي المحيط بطفلك</p> 
        <div class="dot1-container" style="margin-right:-27%">
            <span :class="{dot1:true,activedot1:$store.state.tabikhaSlider===1}" @click="$store.state.tabikhaSlider=1"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===2}" @click="$store.state.tabikhaSlider=2"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===3}" @click="$store.state.tabikhaSlider=3"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===4}" @click="$store.state.tabikhaSlider=4"></span> 
      </div>
     </div>
      <img class="squareImg2" src="../../assets/child.png" alt="">

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
.tabikhaBottom{
  color: #fff;
  direction: rtl;
  height: 56rem;
  background-color:#fcad02;
}
.squareImg2{
  margin-left: 6%;
  margin-top: 20%;
  height: 350px;
  width: 350px;
  animation-name: example181;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example181 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 15%;} 
  to {opacity: 1 ;margin-top: 20%;}
}
.mobileImg3{
  padding-left: 5%;
  margin-top: 3%;
  height: 500px;
  width: 450px;
  animation-name: example171;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example171 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 5%;} 
  to {opacity: 1 ;margin-top: 3%;}
}
</style>