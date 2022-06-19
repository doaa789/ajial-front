<template>
       <div class="features">
   <h2 class="title-feature">ميزات المنصة</h2>
      <img src="/images/course2.png" style="height:70%;margin-top:-4rem">

      <div v-if="slider==1" class="slider">
          <img src="/images/game.png" alt="safe">
        <div class="safe">
          <h2>لا قلق بعداليوم</h2>
          <p class="safe-p">تقدم منصة أجيال للجيل اليافع<br> حزمة تعليمية ترفيهية آمنة</p>
        </div>
      </div>

      <div v-if="slider==2" class="slider">
          <img src="/images/media.png" alt="social">
        <div class="safe">
          <h2>تجربة اجتماعية هادفة</h2>
          <p class="safe-p">مع منصة أجيال يمكنك الاستمتاع بمزايا<br> منصات التواصل الاجتماعي من خلال<br>المتحتوى الهادف الذي نقدمه</p>
        </div>
      </div>

      <div v-if="slider==3" class="slider">
          <img src="/images/topBooks.png" alt="safe">
        <div class="safe">
          <h2>العلامة المميزة</h2>
          <p class="safe-p">اقرأ وتعلم أكثر لتحصل على العلامة المميزة <br>على حسابك الشخصي</p>
        </div>
      </div>

      <div class="dot-container">
        <span :class="{dot:true,activedot:slider===1}" @click="slider=1"></span> 
        <span :class="{dot:true,activedot:slider===2}" @click="slider=2"></span> 
        <span :class="{dot:true,activedot:slider===3}" @click="slider=3"></span> 
      </div>
      
   </div>
</template>

<script>
export default {
      data(){
    return{
      slider:2,
    };
  },
}
</script>

<style>
.features{
  margin-top: 9%;
  background-color: rgb(220, 64, 58);
  height: 43rem;
}
.title-feature{
  font-size: 30px;
  background:rgb(220, 64, 58);
 padding-top: 4rem;
 padding-bottom: 4rem;
  padding-left: 40%;
  margin-bottom: -5%;
  margin-top: -1%;
  color: #fff;
}

.slider{
  margin:4rem 0rem 0rem 15rem;
  width: 45%;
  height: 250px;
  float: left;
  font-size: 16px;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
   animation-direction: alternate;
}
@keyframes example {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05} 
  to {opacity: 1}

}
.slider{
  display: flex;
  color: #fff;
  background: rgba(255, 255, 255, 0.102);
  backdrop-filter: blur( 20px );
  border-radius: 25px;
  padding: 2rem;
}

.safe{
      height: 110px;
      direction: rtl;
}
.slider h2{
  margin-top:1rem;
}
.slider img{
      border-radius:15px;
      height: 200px;
      width: 200px;
      margin:0rem 1rem 0rem 1rem;
}
.dot-container{
  text-align:center;
  margin-top: -5rem;
  margin-right: 8rem;
  max-height: 5rem;
}

.dot {
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin:2rem 0.25rem 19rem;
  background-color: rgb(220, 64, 58);
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.dot:hover,
.activedot {
  height: 26px;
  width: 26px;
  background-color: #fff;

}
</style>