<template>
    <section class="tabikhaTop1">
      <the-header></the-header>
      <div style="display:flex">

      <div style="display:grid;margin-right:20%;">
      <p class="learn" style="margin-top:25%;margin-right:11%;">ابدأ اللعب في 4 خطوات</p>
      <p class="learnStep" v-if="this.learnslider==0">قم أولا بشراء طابقها من أحد مراكز الشراء <br>ثم حمًل تطبيق طابقها لتستمتع بتجربة مميزة </p> 
      <p class="learnStep" v-if="this.learnslider==1">تأكد أنك قمت بتحميل التطبيق ثم افتح<br>البلوتوث لتتصل مع اللعبة</p> 
      <p class="learnStep" v-else-if="this.learnslider==2">ضع المحمول في المكان المخصص له <br>وشاهد الفيديو</p> 
      <p class="learnStep" v-else-if="this.learnslider==3">أجب على الأسئلة من خلال مطابقة الصورة<br>على الشاشة مع البطاقة المناسبة</p> 
      <div class="dot1-container">
            <span :class="{dot1:true,activedot1:learnslider===0}" @click="learnslider=0"></span> 
            <span :class="{dot1:true,activedot1:learnslider===1}" @click="learnslider=1"></span> 
            <span :class="{dot1:true,activedot1:learnslider===2}" @click="learnslider=2"></span> 
            <span :class="{dot1:true,activedot1:learnslider===3}" @click="learnslider=3"></span> 
      </div>
      </div>
      <img v-if="this.learnslider==0" class="mobileImg88" src="../../components/layout/Logo/logo2.png" alt="">
      <img v-if="this.learnslider==1" class="mobileImg2" src="../../assets/bluetooth.png" alt="">
      <img v-else-if="this.learnslider==2" class="mobileImg11" src="../../assets/63.png" alt="">
      <img v-else-if="this.learnslider==3" class="mobileImg9" src="../../assets/22.jpg" style="border-radius:18px">
      </div>
   </section>
</template>

<script>
  import TheHeader from "../../components/layout/TheHeader.vue";
export default{
    components:{
    TheHeader
  },
  data(){
  return{
    learnslider:0,
  };
} 
  }
</script>

<style>
.learnStep{
  margin-right:11%;
  margin-top:-5%;
  font-size: 30px;
  width: 125%;
}
.tabikhaTop1{
  color: #fff;
  height: 56rem;
  direction: rtl;
  background-color:#e94d4f;
}
.learn{
    margin-right:5%;
    margin-top:25%;
    font-size: 38px;
    width: 100%;
  color: #e3f93e;
}



.mobileImg11{
  margin-right: 10%;
  margin-top: 5%;
  height: 400px;
  width: 400px;
animation-name: example13;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example13 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 0%;} 
  to {opacity: 1 ;margin-top: 5%;}

}
.mobileImg9{
  margin-right:10%;
  margin-top: 10%;
  height: 300px;
  width:200px;
animation-name: example14;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
.mobileImg88{
  margin-right: 10%;
  background: #fff;
  border-radius: 25px;
  padding: 3% ;
  margin-top: 12%;
  height: 220px;
  width: 220px;
animation-name: example15;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example15 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 5%;} 
  to {opacity: 1 ;margin-top: 12%;}

}
.mobileImg2{
  margin-right: 15%;
  margin-top: 10%;
  height: 300px;
  width: 150px;
animation-name: example14;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example14 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 15%;} 
  to {opacity: 1 ;margin-top: 10%;}

}

</style>