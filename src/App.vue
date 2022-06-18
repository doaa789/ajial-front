<template>
   <section class="top"> 
      <the-header></the-header>
      <p class="hello">أهلا بجيل المستقبل في<br> منصة أجيال</p>
      <div class="arrow">
      <button class="start" @click="this.$router.push('/signup')">ابدأ المرح</button>
      <img  class="arrow-img" src="/images/arrow2.gif" alt="arrow">
      </div>
   </section>

   <features></features>
    <new-courses></new-courses>
    <top-students></top-students>
    <new-books></new-books>
    <testimonials></testimonials>
    <contact-us></contact-us>
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

export default {
  components:{
    TheHeader,
    features,
    testimonials,
    newCourses,
    newBooks,
    ContactUs,
    HomeFooter,
    TopStudents
},    
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

section.top{
  height: 50rem;
  background-image: url("./assets/3.png"),
                  url("./assets/2.png");
  background-repeat: no-repeat;
  background-position:bottom,
      bottom right;

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
</style>
