<template>
  <section class="tabikhaCenter2">
      <the-header></the-header>
      <div>
        <div style="display:flex;margin-top: -4%;">
            <img class="mobileImg4" src="../../assets/33.png" alt="">
            <div style="display:grid;">
            <p class="title">ما الفكرة؟</p> 
            <p  class="paragraph2">جاءت فكرة طابقها في الدمج مابين العالم <br>الملموس والالكتروني في قالب عربي محبب </p> 
              <div class="dot1-container" style="margin-right:-57%">
                  <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===1}" @click="$store.state.tabikhaSlider=1"></span> 
                  <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===2}" @click="$store.state.tabikhaSlider=2"></span> 
                  <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===3}" @click="$store.state.tabikhaSlider=3"></span> 
                  <span :class="{dot1:true, activedot1:$store.state.tabikhaSlider===4}" @click="$store.state.tabikhaSlider=4"></span> 
            </div>
          </div>
            <img class="squareImg1" src="../../assets/11.png" alt="">
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
.squareImg1{
  margin-left: 2%;
  margin-top: 15%;
  height: 350px;
  width: 350px;
animation-name: example131;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example131 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 20%;} 
  to {opacity: 1 ;margin-top: 15%;}

}
.mobileImg4{
  margin-top: 8%;
  margin-left: -20px;
  padding-left:130px ;
  height: 500px;
  min-width:600px;
animation-name: example141;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example141 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 0%;} 
  to {opacity: 1 ;margin-top: 8%;}

}
.tabikhaCenter2{
  color: #fff;
  height: 56rem;
  direction: rtl;
  background-color:#8368ab ;
}
.title{
margin-right:-15%;
margin-top:45%;
font-size: 38px;
width: 125%;
color:#e94d4f;
}
.paragraph2{
margin-right:-45%;
margin-top:-15%;
font-size: 30px;
width: 145%;
}
</style>