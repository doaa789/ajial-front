<template>
  <section class="tabikhaCenter">
      <the-header></the-header>
      <div>
        <div style="display:flex;margin-top: -4%;">
      <img class="mobileImg22" src="../../assets/mobile2.png" alt="">
      <div style="display:grid;">
      <p class="title1">الأفضل من العالمين</p> 
      <p class="paragraph1">مع طابقها لن تضطر التخلي عن الفائدة التي تقدمها<br>الألعاب الملموسة في نمو طفلك مقابل الحصول<br>على الالعاب الالكترونية الجذابة للأطفال</p> 
                 <div class="dot1-container"  style="margin-right:-27%">
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===1}" @click="$store.state.tabikhaSlider=1"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===2}" @click="$store.state.tabikhaSlider=2"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===3}" @click="$store.state.tabikhaSlider=3"></span> 
            <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===4}" @click="$store.state.tabikhaSlider=4"></span> 
      </div>
     </div>
      <img class="squareImg" src="../../assets/1.png" alt="">

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
.title1{
    margin-right:5%;
    margin-top:25%;
    font-size: 38px;
    width: 100%;
    color:#fcad02;
}
.tabikhaCenter{
  color: #fff;
  height: 56rem;
  direction: rtl;
  background-color: #c04d91;
}
.squareImg{
  margin-left: 2%;
  margin-top: 15%;
  height: 350px;
  width: 350px;
animation-name: example1;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example1 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 10%;} 
  to {opacity: 1 ;margin-top: 15%;}

}
.mobileImg22{
  margin-top: 8%;
  height: 500px;
  width: 450px;
animation-name: example12;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example12 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 12%;} 
  to {opacity: 1 ;margin-top: 8%;}

}
.paragraph1{
    margin-right:-5%;
    margin-top:-12%;
    font-size: 30px;
    width: 145%;
}


</style>