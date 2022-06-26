<template>
  <teleport to="body">
     <base-dialog open v-if="dialogClose">
<template v-slot:form @submit.prevent="submitForm">
    <div class="container">
    <div class="part-right">
      <p class="title">تصنيف الكورسات</p>
      <div class="right-center">

        <label class="container-radio" @click="searching">البحث عن اسم الكورس
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>

        <label class="container-radio" >تكنولوجيا
        <input type="radio" checked="checked" name="radio" @click="techniqe">
        <span class="checkmark"></span>
        </label>
        
        <label class="container-radio" v-for="type in types" :key="type.id">{{type}}
        <input type="radio" name="radio" >
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">

      <div class="stories">
        <div class="routing">الكورسات > تكنولوجيا</div>
          
            <div class="container-video">
                <video v-if="session===0" src="/images/computer.mp4" controls width="550"></video>
                <video v-else src="/images/session1.mp4" controls width="550"></video>

                     <div class="course-progress">
                     <div :class="{videoCircle:true,fullCircle:session>=0}"></div>
                     <div class="dash"></div>
                     <div :class="{videoCircle:true,fullCircle:session>='1'}"></div>
                     <div class="dash"></div>
                     <div :class="{videoCircle:true,fullCircle:session>='2'}"></div>
                     <div class="dash"></div>
                     <div :class="{videoCircle:true,fullCircle:session>='3'}"></div>
                     <div class="dash"></div>
                     <div :class="{videoCircle:true,fullCircle:session>='4'}"></div>
                     <div class="dash"></div>
                     <div :class="{videoCircle:true,fullCircle:session>='5'}"></div>
                     <div v-if="session==='5'" class="dash"></div>
                     <div v-if="session==='5'" style="display:flex;">
                        <img style="margin-top: -6px;width: 40px;height: 40px;background-color: #25da75;
                          border-radius:50%;border:3px solid rgb(39, 39, 39);" src="/images/check.png" alt="">                                          
                        <img style="margin-top: -16px;width: 70px;height: 70px;" src="/images/reward1.png" alt="">                                          
                     </div>
                     </div>

                <ul class="list-session">

                        <li class="active">
                          <img  class="video" src="/images/video1.png" alt="video">
                             المقدمة: التعريف ببرنامج سكراتش وميزاته
                          <img  class="lock" src="/images/open-lock.png" alt="lock">
                        </li>

                         <li :class="{clickSession:true,active:session==='1'}" @click="this.question='1'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             الدرس الاول: تثبيت برنامج سكراتش
                           <img v-if="session===0" class="lock" src="/images/close-lock.png" alt="lock">
                           <img v-else class="lock" src="/images/open-lock.png" alt="lock">
                           <div class="yes-no" v-if="question==='1'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="this.session='1'">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>
                        </li>

                         <li :class="{clickSession:true,active:session==='2'}" @click="this.question='2'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             الدرس الثاني: شرح واجهة سكراتش وتعليم الرسم
                           <img  class="lock" src="/images/close-lock.png" alt="lock">
                           <div class="yes-no" v-if="question==='2'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="this.session='2'">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>                        
                        </li>

                         <li :class="{clickSession:true,active:session==='3'}" @click="this.question='3'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             الدرس الثالث:شرح الاحداث في سكراتش والتطبيق عليها
                        <img  class="lock" src="/images/close-lock.png" alt="lock">
                           <div class="yes-no" v-if="question==='3'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="this.session='3'">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>
                        </li>

                         <li :class="{clickSession:true,active:session==='4'}" @click="this.question='4'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             الدرس الرابع: شرح اوامر الحركة في سكراتش والتطبيق عليها
                        <img  class="lock" src="/images/close-lock.png" alt="lock">
                           <div class="yes-no" v-if="question==='4'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="this.session='4'">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>                        
                        </li>

                         <li :class="{clickSession:true,active:session==='5'}" @click="this.question='5'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             الدرس الخامس: شرح اوامر المظاهر في سكراتش والتطبيق عليها
                        <img  class="lock" src="/images/close-lock.png" alt="lock">
                           <div class="yes-no" v-if="question==='5'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="this.session='5'">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>                        
                        </li>
                     </ul>

            </div>

      </div>
    </div>
    </div>
  </template>
   </base-dialog>
</teleport>
</template>

<script>
export default {
      data(){
          return{
        types:['لغات','روبوتيك','حساب ذهني','برمجة'],
        searchCourse:'noSearch',
        radio:null,
        dialogClose:true,
        question:false,
        session:0
          }
      },
      methods:{
        searching(){
               this.$router.push('/courses')
            },
        techniqe(){
               this.$router.push('/courses/techniqe')
            },
        enterCourse(){
               this.$router.push('/courses/joiningScratch')
        },
        submitForm(){
              this.dialogClose=false;
        }
      }
  }
  </script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    }

.part-right{
    width: 25%;
}

.title{
    padding-right: 1.5%;
    margin: 1rem 0rem;
    font-size: 20px;
    color: #7d52a0;
    }

.part-left{
    display:grid;
    border-right: 1px solid #7d52a0;
    border-right-width: 2px;
    padding-right: 5%;
    width: 70%;
}


/*
 وهو أحد لغات البرمجة (التي طورها معهد ماساتشوستس للتكنولوجيا) 
ولتكون في متناول الجميع بسهولة ويسر، 
 لأنها تحتوي على مجموعة من الأوامر التي يتم تركيبها لتسهل استخدام التكنولوجيا
  في التعامل مع الصور، الرسومات، الصوت والفيديو، والموسيقى بطرق تفاعلية سهلة الإنشاء
  ، والفهم والتطوير لألعاب وقصص وبرامج تطبيقية متنوعة
<li>أولياء الأمور أو المعلمون الراغبون في منح أطفالهم أفضل المهارات البرمجية وأكثرها متعة.</li>
<li><img  class="true" src="/images/true.png" alt="true">
                             كتابة التعليمات أو الرموز على شكل كود باستخدام لغات البرمجة، وهي من أهم مهارات التعلم.</li>
*/
.routing,label {
    color:#7d52a0;
    font-size: 15px;
    margin-bottom:3% ;
}

/* The container */
.container-radio {
  display: block;
  position: relative;
  padding-right: 17%;
  margin-bottom: 12%;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
.container-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1%;
  right: 0;
  height: 20px;
  width: 20px;
  background-color: #25da75;
  border-radius: 50%;
}

/* On mouse-over, add  so green background color */
.container-radio:hover input ~ .checkmark {
  background-color: rgba(3, 167, 121, 0.9);
}

/* When the radio button is checked, add a green background */
.container-radio input:checked ~ .checkmark {
  background-color: #25da75;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container-radio .checkmark:after {
  left: 5.5px;
  bottom: 6px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #7d52a0;
}

.list-session{
    list-style: none;
    padding: 0;
    font-size: 15px;
    color: #7d52a0;
}

.container-video{
    margin-right: 10%;

}

video{
    margin-top: 2%;
    border-radius: 12px;
}
.video{
    margin-top: 2%;
    width: 1rem;
    height: 1rem;
}

.lock{
    float: left;
    margin-left: 8%;
    margin-top: 2%;
    width: 1.25rem;
    height: 1.25rem;
}
.clickSession{
    cursor: pointer;
}
.true-false{
    display: flex;
}

.false{
  /*box-shadow: 0 1px 6px rgba(37, 218, 118, 0.7);
    padding: 2px;*/
    margin-right: 6%;
    margin-left: 6%;
    width: 2rem;
    height: 2rem; 
}

.yes-no{
    display: inline-block;
    width: 50%;
}
.active{
    color: #25da75;
}
.course-progress{
  display:flex;
  margin-top: 7%;
}
.videoCircle{
  border-radius:50%;
  border:3px solid rgb(39, 39, 39);
  width: 30px;
  height: 30px;
}
.fullCircle{
  background: #25da75;
  padding: 3%;
  margin-top: -1%;
}
.dash{
margin-top: 15px;
margin-right: -1px;
margin-left: -1px;
border-radius:5%;
border:2px solid rgb(39, 39, 39);
width: 40px;
height: 1px;
}
  </style>