<template>
      <tabikha-up v-if="this.$store.state.tabikha && !this.$store.state.workTabikha 
      && !this.$store.state.productCenter && $store.state.tabikhaSlider==1 && !this.$store.state.secretIsland"></tabikha-up>
      <tabikha-top v-else-if="this.$store.state.tabikha && !this.$store.state.workTabikha 
      && !this.$store.state.productCenter && this.$store.state.tabikhaSlider==2 && !this.$store.state.secretIsland"></tabikha-top>
      <tabikha-center v-else-if="this.$store.state.tabikha && !this.$store.state.workTabikha 
      && !this.$store.state.productCenter && $store.state.tabikhaSlider==3 && !this.$store.state.secretIsland"></tabikha-center>
      <tabikha-bottom v-else-if="this.$store.state.tabikha && !this.$store.state.workTabikha 
      && !this.$store.state.productCenter &&$store.state.tabikhaSlider==4 && !this.$store.state.secretIsland"></tabikha-bottom>
      <tabikha-learn v-if="!this.$store.state.whytabikha && this.$store.state.workTabikha && this.$store.state.tabikha 
      && !this.$store.state.productCenter && !this.$store.state.secretIsland"></tabikha-learn>
     <tabikha-product v-if="!this.$store.state.whytabikha &&!this.$store.state.workTabikha && this.$store.state.productCenter 
     && this.$store.state.tabikha && !this.$store.state.secretIsland"></tabikha-product>

   <section class="ajialTop" v-if="!this.$store.state.workTabikha && !this.$store.state.tabikha && !this.$store.state.secretIsland"> 
      <the-header></the-header>
      <p class="hello">أهلا بجيل المستقبل في<br> منصة أجيال</p>
      <div class="arrow">
      <button class="start" @click="this.$router.push('/signup')" v-if=" !$store.getters.authenticated">ابدأ المرح</button>
      <img  v-if=" !$store.getters.authenticated" class="arrow-img" src="/images/arrow2.gif" alt="arrow">
      </div>
   </section>

   <secret-island v-if="!this.$store.state.workTabikha && !this.$store.state.tabikha && this.$store.state.secretIsland"></secret-island>
   <features  v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></features>
    <new-courses v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></new-courses>
    <top-students v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></top-students>
    <new-books v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></new-books>
    <testimonials v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></testimonials>
    <contact-us v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></contact-us>
    <download-app v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></download-app>
    <home-footer v-if="!this.$store.state.tabikha && !this.$store.state.secretIsland"></home-footer>

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
import TabikhaTop from './pages/tabikha/tabikhaTop.vue';
import tabikhaCenter from './pages/tabikha/tabikhaCenter.vue';
import tabikhaBottom from './pages/tabikha/tabikhaBottom.vue';
import tabikhaLearn from './pages/tabikha/tabikhaLearn.vue';
import tabikhaProduct from './pages/tabikha/tabikhaProduct.vue';
import SecretIsland from './pages/theGames/SecretIsland.vue';
import DownloadApp from './components/Home/downloadApp.vue';
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
    TabikhaTop,
    tabikhaCenter,
    tabikhaBottom,
    tabikhaLearn,
    tabikhaProduct,
    SecretIsland,
    DownloadApp
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
  border: 2px solid #fff;
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
      <p style="display:absolute;margin-top:-23%;margin-right:12%;">تعلم المزيد</p>
      .tabikhaButton{
  width:150px;
  margin-right:5%;
  margin-top:-14%;
  display: relative;
  cursor: pointer;
}
      */
</style>
