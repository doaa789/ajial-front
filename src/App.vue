<template>
   <section class="top"> 
      <the-header></the-header>
      <p class="hello">أهلا بجيل المستقبل في<br> منصة أجيال</p>
      <div class="arrow">
      <button class="start" @click="this.$router.push('/signup')">ابدأ المرح</button>
      <img  class="arrow-img" src="/images/arrow2.gif" alt="arrow">
      </div>
   </section>

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
   
  

   <div class="new-courses">
      <h2 class="title-course">أحدث الكورسات </h2>
      <div class="row-course">
        <div>
            <h3>البرمجة بلغة سكراتش</h3>
            <p style="padding-bottom:8%;">تحتوي على مجموعة من الأوامر  يتم تركيبها<br> لتسهل يتم تركيبها لتسهل استخدام التكنولوجيا</p>
            <button class="go-course" style="margin-left:30%;" @click="learnMore">الذهاب للكورس</button>
        </div>
        <img class="course-row-img" src="/images/scratch2.jpg" alt="scratch" style="margin-left:6%;" >
      </div>
            
      <div class="row-course">
          <img class="course-row-img" src="/images/arduino3.jpg" alt="arduino"  style="margin-right:6%;">
          <div>
            <h3 style="padding-top:8%;">الاردوينو ببساطة</h3>
            <p style="padding-bottom:8%;">شهادات نعتز بهاشهادات شهادات شهادات نعتز بها<br> شهادات نعتز بهاشهادات نعتز  شهادات نعتز بها</p>
            <button class="go-course" style="margin-left:25%;">الذهاب للكورس</button>
          </div>
      </div>
   </div>

   <div class="member" style="direction:rtl;display: grid;">
      <h2 style="margin-right: 37%;margin-bottom: 5%;margin-top: 5%;font-size: 30px;color:rgb(95,110,189);margin-left:37%;padding-right:3%;">لوحة طلابنا المتميزين </h2>
      <div style="display:flex;padding-right:11%;">
      <div style="padding-left:5%;">
      <div style="display:flex;padding-left:36%;margin-top: -5%;">
        <img class="circle" src="/images/member6.jpg" style="background-color:darkgrey">
        <img class="circle" src="/images/member7.jpg">
        <img class="circle" src="/images/member.jpg" style="background-color:lightsalmon">

      </div>
      <div style="display:flex;padding-left:40%;padding-top:2%;color:rgb(95,110,189);">
          <div class="member-paragraph" style="margin-right: 19%;">اسماء العابد<br>المرتبة الأولى</div>
          <div class="member-paragraph" style="margin-right: 13%;">حسني الأشقر<br>المرتبة الثانية</div>
          <div class="member-paragraph" style="margin-right: 21%;">نور الحموي<br>المرتبة الثالثة</div>

      </div>

        <div style="display:flex;padding-bottom:9%;padding-left:55%">
      <img style="max-width:135px;max-height:130px; margin-right: 12%;margin-top: 1%;" src="/images/trophy1.png" alt="">
      <img style="max-width:145px;max-height:145px; margin-right: 21%; margin-top: 1%;" src="/images/trophy3.png" alt="">
      <img style="max-width:145px;max-height:145px; margin-right: 21%;" src="/images/trophy5.png" alt="">
      </div>
      </div>
      <div style="width:40%;">
          <h2 style="margin-right:30%;margin-left:25%;padding-right:6%;color:rgb(95,110,189);border: 5px solid rgb(215,195,204);
          border-radius:15px;background-color: rgb(215,195,204);">قسم الكورسات</h2>
          <img src="/images/top1.png" style="height:32rem;margin-top: -25%;">
      </div>
      
      </div>

      <div style="display:flex;margin-right: 5%;">
      <div style="width:40%;">
          <h2 style="margin-right:30%;margin-left:25%;padding-right:11%;color:rgb(95,110,189);border: 5px solid rgb(215,195,204);
          border-radius:15px;background-color: rgb(215,195,204);">قسم الكتب</h2>
          <img src="/images/top1.png" style="height:32rem;margin-top: -25%;">
      </div>
      <div>
      <div style="display:flex;padding-left:46%;margin-top: -5%;">
        <img class="circle" src="/images/avatar.png" style="background-color:darkgrey">
        <img class="circle" src="/images/member5.jpg">
        <img class="circle" src="/images/avatar6.png" style="background-color:lightsalmon">

      </div>
      <div style="display:flex;padding-left:20%;padding-top:2%;color:rgb(95,110,189);">
          <div class="member-paragraph" style="margin-right: 12%;">حسناء العابد<br>المرتبة الأولى</div>
          <div class="member-paragraph" style="margin-right: 3%;">حمدية الأشقر<br>المرتبة الثانية</div>
          <div class="member-paragraph" style="margin-right: 3%;">نور الحموي<br>المرتبة الثالثة</div>

      </div>

        <div style="display:flex;padding-bottom:9%;padding-left:55%">
      <img style="max-width:135px;max-height:130px; margin-right: 12%;margin-top: 1%;" src="/images/trophy1.png" alt="">
      <img style="max-width:145px;max-height:145px; margin-right: 21%; margin-top: 1%;" src="/images/trophy3.png" alt="">
      <img style="max-width:145px;max-height:145px; margin-right: 21%;" src="/images/trophy5.png" alt="">
      </div>
      </div>
      </div>
  </div>

  
       
        <h2 class="title-book">أحدث الكتب</h2>
    <div class="full-new-book">
      <div class="new-book">
        <div class="new-story-container">
          <div class="new-img-container"
          v-for="book in books" 
          :key="book.id">
              <img class="new-story-img"  :src="`/images/${book.image}`" :alt="book.name">
              <div class="new-overlay">
                  <div class="new-text">
                    <h5>اسم الكتاب</h5>
                    <p>{{book.name}}</p>
                    <h5>لمحة عن الكتاب</h5>
                    <p>{{book.description}}</p>
                    <button class="new-btn"> تحميل</button>
                  </div>
              </div>
      
          </div>  
       
      </div>      
        <img class="new-book-left-img" src="/images/course.png">

      </div>
      <button class="go-book" @click="library">عرض الكل</button>

    </div>

    <h2 class="title-div">شهادات نعتز بها </h2>
      
      <div class="testimonials">
        <div class="row">

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar7.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">ماهر السعدي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar8.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">خلود اللحام</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar5.png"  alt="">
          <div class="testimonials-div-text">
          <div style="display:flex">
                <h4 style="margin-bottom:0%">سمير الحمصي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>

        </div>

        <div class="row">

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar9.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">شادي القاري</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar3.png"  alt="">
          <div class="testimonials-div-text">
          <div style="display:flex">
                <h4 style="margin-bottom:0%">خالد الرازي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar4.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">أحمد الطبل</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked" ></span>
                    <span class="fa fa-star checked"></span>
                </div>
          </div>
          <p>منذ ان بدأ ابني باستخدام منصة أجيال وقد تغيرت طباعه وتصرفاته للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكه واهتماماماته</p>
          </div>

        </div>


        </div>
      </div>


      <div class="contact-us">
        <div class="up">
            <h2 class="title-contact">تواصل معنا</h2>
            <p style="margin:auto;">نحن سعداء جدا بتواصلك معنا ،يمكنك ارسال ما تشاء متى تشاء</p>
            <div class="down"></div>
            <div class="div-contact-input">
            <input id="user-name" name="user-name" placeholder="اسم المستخدم" type="text">
            <input id="email" name="email" placeholder="البريد الالكتروني" type="email" >
            <textarea id="message" name="message" placeholder="رسالتك" type="text"></textarea>
            </div>
            <button class="send">ارسال</button>
        </div>
      </div>

      <footer>
        <div class="footer-div">
          <img src="/images/footer.png" alt="ajial" style="margin-top:5%; width:130px;height:130px;">
        </div>
        <div class="footer-div">
          <p>سورية،دمشق<br>963993716304+<br></p>
          <div class="social">
            <img class="social-img" src="/images/twitter5.png" alt="social">
            <img class="social-img" src="/images/linkedin9.png" alt="social">
            <img class="social-img" src="/images/facebook9.png" alt="social">

          </div>
        </div>
        <div class="footer-div">
          <p class="reference" @click="courses">الكورسات</p>
          <p class="reference" @click="library">الكتب</p>
          <p class="reference" @click="games">الألعاب</p>
        </div>

        <div class="footer-div" id="footer-end">
          <p>منصة أجيال <br>جميع الحقوق محفوظة2022</p>
        </div>
      </footer>
   <main>
     <router-view></router-view>
   </main>
</template>

<script>
import TheHeader from'./components/layout/TheHeader.vue';
import sourceData from './library.json'

export default {
  components:{
    TheHeader,
  }, 
  data(){
    return{
      books:sourceData.books, 
      slider:2,
    };
  },
  methods:{
    learnMore(){
      this.$router.push('/courses/scratch')
    },
    courses(){
      this.$router.push('/courses')
    },
    library(){
      this.$router.push('/library')
    },
    games(){
      this.$router.push('/games')
    },
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
.checked {
  color: orange;
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
  color: #25da75;
}
.title-course,.title-book,.title-div,.title-contact{
  text-align: center;
  font-size: 30px;
}
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
.title-div{
  background: rgb(121, 131, 208);
 padding-top: 4rem;
 padding-bottom: 4rem;
  margin-bottom: -5%;
  margin-top: -1%;
  color: #fff;
}
.title-book{
  background:rgb(19, 198, 191);
 padding-top: 4rem;
 padding-bottom: 4rem;
  margin-bottom: -5%;
  margin-top: -1%;
  color: #fff;
}
.title-course{
  margin-bottom: 2rem;
  margin-top: -1rem;
  display: flex;
  margin-left: 40%;
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
.slider,
.hello{
  color: #fff;
  background: rgba(255, 255, 255, 0.102);
  backdrop-filter: blur( 20px );
  border-radius: 25px;
  padding: 2rem;
}
.arrow{
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
}
.send,.start{
  cursor: pointer;
  background-color: #ffffff;
}
.send{
  border: 2px solid rgb(175,58, 164);
  margin: auto;
  color: rgb(175,58, 164);
  font-size: 20px;
  min-width: 95px;
  font-weight: bold;
  border-radius:12px;
}
.send:hover{
  border: 2px solid #fff;
  background: rgb(175,58, 164);
  color: #fff;
}
.go-course{
  border: 2px solid rgb(225, 97, 37);
  border: 2px solid #fff;
  background-color: rgb(225, 97, 37);
  font-size: 17px;
  padding:2%;
}
.go-book{
  background-color: rgb(19, 198, 191);
  border: 2px solid #fff;
  position:absolute;
  top: 65%;
  left: 45%;
  font-size: 20px;
  padding:1%;

}
.go-book,.go-course{
  color: #fff;
  font-weight: bold;
  margin: auto;
  cursor: pointer;
  border-radius:5px;
  min-width: 150px;
}
.go-book:hover,.go-course:hover{
  background: #fff;
}
.go-course:hover{
  border: 2px solid rgb(225, 97, 37);
  color: rgb(225, 97, 37);
}
.go-book:hover{
  border: 2px solid rgb(19, 198, 191);
  color: rgb(19, 198, 191);
}

.arrow,.slider,.social{
  display: flex;
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
footer img{
      height: 140px;
      width: 140px;
      margin:2rem 3rem 2rem 1rem;
}
.social-img{
      height: 30px;
      width: 30px;
      margin: 2%;
      border: none;
      cursor: pointer;
}
.dot-container{
  text-align:center;
  margin-top: -5rem;
  margin-right: 8rem;
  max-height: 5rem;
}
.avatar{
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin-bottom: -25%;
    margin-right: 72%;
    background-color: rgb(121, 131, 208);
}
.testimonials h4{
  margin-top: 0;
   color: rgb(121, 131, 208);
   font-size: 17px;
}
.testimonials{
  background-color: rgb(121, 131, 208);
 color: rgb(121, 131, 208);
  height: 40rem;
  padding-left: 14%;
  padding-right: 9%;
  padding-top: 5%;
}
.row{
  height: 50%;
  display: flex;
  margin-top: -5%;
  margin-bottom: 0%;
  border-radius: 18px;
}
.row-course{
  height: 45%;
  display: flex;
  margin-bottom: -3%;
  margin-left: 16%;
}
.testimonials-div{
  width: 32%;
  direction: rtl;
}

.testimonials-div-text{
  background: rgb(255, 255, 255);
  padding: 3% 3.5% 2% 2.5%;
  margin: 8% 8% 0% 8%;
  border-radius: 12px;
  font-size: 14px;
}
.contact-us{
  border-top:41px solid rgb(175,58, 164);
  height: 34.5rem;
  direction: rtl;
}
.up{
  padding:0% 0% 22% 2%;
  background-color: #fff;
  height: 100%;
  color: rgb(175,58, 164);
  display: grid;
}
.div-contact-input{
  margin-top: -2%;
}
.up input,.up textarea{
  border-radius: 18px;
  border:1.5px solid #ffffff;
  width: 25%;
  margin-bottom: 1%;
  font-size: 16px;
  padding:0.5%;
  margin-right:37%;
  }

.up input:focus,.up textarea:focus{
  background-color: rgba(255, 255, 255, 0.4);
  outline: none;
}
.up textarea{
  height: 5rem;
}
.down{
  width: 0;
  height: 0;
  margin-top: 1%;
  margin-bottom: -15%;
	border-left: 700px solid transparent;
	border-right: 700px solid transparent;
	border-bottom: 350px solid rgb(175,58, 164);
}

footer{
  background-color:#7d52a0;
  display: flex;
  direction: rtl;
  color: #fff;
  border-bottom:60px solid #7d52a0;
}
.footer-div{
  width: 17%;
  padding-top: 1%;

}
.footer-end p{
  padding-top: 8%;
}
.reference{
  margin-bottom: -5%;
  cursor: pointer;
}
#footer-end{
  margin-right: 37%;
  padding-top: 6%;
  font-size: 12px;
  text-align: center;
}
/* The dots/bullets/indicators */
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

.new-courses{
  height: 48rem;
  padding:5% 10% 5% 10%;
  background-color: rgb(225, 97, 37);
  color: #fff;
}
.new-courses h3{
  text-align: center;
  color: #fff;;


}
.new-courses p{
  text-align: center;
  margin: auto;
  width: 100%;
}

.new-courses img{
  margin-top:2%;
  margin-bottom:2%;
  border: none;
  max-width: 40%;

}
.course-row-img{
  box-shadow: 0 6px 14px rgba(255, 255, 255, 0.9);
  border-radius: 15px;
}
.full-new-book{
  height: 40rem;
  background:rgb(19, 198, 191);
  display: grid;
  position: relative;

}
.new-book{
  display: flex;
  position: relative;
}
.new-book-left-img{
  width: 26%;
  height: 80%;

}


.new-story-container{
  width: 75%;
  height: 37%;
  display:flex;
  padding-left: 16%;
  padding-top: 3%;
  margin-top: 6%;

}
.new-one-story-container{
  margin-top: 8%;
  width: 100%;
  height: 40%;
  display:flex;
}
.new-story-img{
  object-fit: cover;
  width: 100%;
  margin: 1%;
  border-radius: 5%;
  height: 99%;
}


.new-img-container {
  position: relative;
  width: 23%;
  margin: 1%;
  height: 100%;
}

.new-img-container-icon {
  position: relative;
  width: 23%;
  margin-top: 6%;
  height: 100%;
  margin-right:35% ;
}

.new-overlay {
  border-radius: 5%;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba( 255, 255, 255, 0.05 );
  backdrop-filter: blur( 18px );
  overflow: hidden;
  width: 101%;
  height:0;
  transition: .5s ease;
}

.new-img-container:hover .new-overlay {
  bottom: 0;
  height: 100%;
}

.new-text {
  direction: rtl;
  position: absolute;
  height: 130%;
  top: 68%;
  left: 40%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.new-text p{
  color: #fff;
  font-size: 10px;
  margin: 0;
}
.new-text h5{
  color: rgb(19, 198, 191);
  margin: 0;
}
.new-btn {
  color: #fff;
  border: 1px solid #fff;
  background-color: rgb(19, 198, 191);
  border-radius: 5px;
  border:none;
  padding: 2px 15px;
  cursor: pointer;
  font-size: 15px;
  font-weight:bold;
}
.new-btn:hover {
  color: rgb(19, 198, 191);
  border: 1px solid rgb(19, 198, 191);
  background-color: #fff;
}

.member{
  display: grid;
  background-color: rgb(244, 210, 65);
  color: #fff;
}
.circle {
  height: 150px;
  width: 150px;
  margin-top:8%;
  margin-right:11%;
  border-radius: 50%;

}
.member-paragraph{
  margin-left: 4%;
  margin-right: 7%;
  min-width: 45%;
  font-size: 18px;
}
</style>
