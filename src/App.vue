<template>
  <section class="tabikhaTop" v-if="this.$store.state.tabikha && !this.$store.state.workTabikha">
      <the-header></the-header>
      <div style="display:flex">
      <img class="mobileImg1" src="./assets/mobile1.png" alt="">
      <div style="display:grid;">
      <img style="margin-top:25%;margin-right:5%;width:150px;height:70px" src="./components/layout/Logo/logo2.png" alt="">
      <p style="margin-right:5%;margin-top:-18%;font-size: 30px;width: 125%;">اللعبة التعليمية الأولى من نوعها<br>الموجهة للأطفال في مرحلة ما قبل الدراسة<br>وباللغة العربية</p> 
      </div>
      </div>
   </section>

     <section class="tabikhaTop1" v-if="this.$store.state.workTabikha && this.$store.state.tabikha">
      <the-header></the-header>
      <div style="display:flex">

      <div style="display:grid;margin-right:20%;">
      <p class="learn" style="margin-top:25%;margin-right:11%;">تعلم في 3 خطوات</p>
      <p v-if="this.theslider==1" style="margin-right:11%;margin-top:-5%;font-size: 30px;width: 125%;">افتح جهازك المحمول وصله مع اللعبة<br> باستخدام البلوتوث</p> 
      <p v-else-if="this.theslider==2" style="margin-right:11%;margin-top:-5%;font-size: 30px;width: 125%;">ضع المحمول في المكان المخصص له <br>وشاهد الفيديو</p> 
      <p v-else-if="this.theslider==3" style="margin-right:11%;margin-top:-5%;font-size: 30px;width: 125%;">أجب على الأسئلة من خلال مطابقة الصورة<br>على الشاشة مع البطاقة المناسبة</p> 
      <div class="dot1-container">
            <span :class="{dot1:true,activedot1:theslider===1}" @click="theslider=1"></span> 
            <span :class="{dot1:true,activedot1:theslider===2}" @click="theslider=2"></span> 
            <span :class="{dot1:true,activedot1:theslider===3}" @click="theslider=3"></span> 
      </div>
      </div>
      <img v-if="this.theslider==1" class="mobileImg2" src="./assets/bluetooth.png" alt="">
      <img v-else-if="this.theslider==2" class="mobileImg11" src="./assets/63.png" alt="">
      </div>
   </section>

   <section class="ajialTop" v-if="!this.$store.state.workTabikha && !this.$store.state.tabikha"> 
      <the-header></the-header>
      <p class="hello">أهلا بجيل المستقبل في<br> منصة أجيال</p>
      <div class="arrow">
      <button class="start" @click="this.$router.push('/signup')">ابدأ المرح</button>
      <img  class="arrow-img" src="/images/arrow2.gif" alt="arrow">
      </div>
   </section>

   <tabikha-top v-if="this.$store.state.tabikha"></tabikha-top>
   <features  v-else></features>

    <tabikha-center v-if="this.$store.state.tabikha"></tabikha-center>
    <new-courses v-else></new-courses>

    <tabikha-bottom v-if="this.$store.state.tabikha"></tabikha-bottom>
    <top-students v-else></top-students>
    <new-books v-if="this.$store.state.tabikha===false "></new-books>
    <testimonials v-if="this.$store.state.tabikha===false"></testimonials>
    <contact-us v-if="this.$store.state.tabikha===false"></contact-us>
    <home-footer></home-footer>

   <main>
     <router-view></router-view>
   </main>
</template>

<script>
import TheHeader from'./components/layout/TheHeader.vue';
import features from'./components/Home/features.vue';
import testimonials from'./components/Home/testimonials.vue';
import newCourses from'./components/Home/newCourses.vue';
import newBooks from './components/Home/newBooks.vue';
import ContactUs from './components/Home/ContactUs.vue';
import HomeFooter from './components/Home/HomeFooter.vue';
import TopStudents from './components/Home/TopStudents.vue';
import tabikhaTop from './pages/tabikha/tabikhaTop.vue';
import tabikhaCenter from './pages/tabikha/tabikhaCenter.vue';
import tabikhaBottom from './pages/tabikha/tabikhaBottom.vue';

export default {
  components:{
    TheHeader,
    features,
    testimonials,
    newCourses,
    newBooks,
    ContactUs,
    HomeFooter,
    TopStudents,
    tabikhaTop,
    tabikhaCenter,
    tabikhaBottom
},  
data(){
  return{
    theslider:1,
  };
}  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

@font-face {
  font-family: "NotoSansArabic-SemiBold";
  src: url("./fonts/Noto_Sans_Arabic/static/NotoSansArabic/NotoSansArabic-SemiBold.ttf");
}

* {
  box-sizing: border-box;
}

html {
  font-family: "NotoSansArabic-SemiBold";
}

body {
  margin: 0 ;
  height: 100rem;
  background-color: #7d52a0;
}

.ajialTop{
  height: 50rem;
  background-image: url("./assets/3.png"),
                  url("./assets/2.png");
  background-repeat: no-repeat;
  background-position:bottom,
      bottom right;

}

.tabikhaTop{
  color: #fff;
  direction: rtl;
  height: 44rem;
  background-color: rgb(23, 227, 210);
}
.tabikhaTop1{
  color: #fff;
  direction: rtl;
  height: 44rem;
  background-color:#E65C51;
}
.learn{
    margin-right:5%;
    margin-top:25%;
    font-size: 38px;
    width: 100%;
  color: yellow;
}


.mobileImg1{
  margin-right: 15%;
  margin-top: 5%;
  height: 500px;
  width: 250px;
}
.mobileImg11{
  margin-right: 10%;
  margin-top: 5%;
  height: 400px;
  width: 400px;
}
.mobileImg2{
  margin-right: 15%;
  margin-top: 10%;
  height: 300px;
  width: 150px;
}
.tabikhaButton{
  width:150px;margin-right:5%;margin-top:-14%;display: relative;cursor: pointer;
}
.hello{
  margin:6rem 22rem 0rem 22rem;
  font-size: 45px;
  text-align: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.102);
  backdrop-filter: blur( 20px );
  border-radius: 25px;
  padding: 2rem;
}
.arrow{
  display: flex;
  height: 130px;
  width: 130px;
  margin-left:38rem ;
}
.arrow-img{
    transform: scaleY(-1);
}
.start{
  margin-top: 6rem;
  height: 50px;
  font-weight: bold;
  border:none;
  color: #25da75;
  font-size: 25px;
  min-width: 110px;
  border-radius:15px;
  cursor: pointer;
  background-color: #ffffff;
}
.dot1-container{
  text-align:center;
  margin-top: 0;
  margin-right: 3rem;
  max-height: 5rem;
}

.dot1 {
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
.dot1:hover,
.activedot1 {
  height: 26px;
  width: 26px;
  background-color: #fff;

}
/*      <img class="tabikhaButton" src="./assets/button.svg" alt="">
      <p style="display:absolute;margin-top:-23%;margin-right:12%;">تعلم المزيد</p>*/
</style>
