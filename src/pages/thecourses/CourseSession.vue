<template>
  <teleport to="body">
     <base-dialog open v-if="dialogClose">
<template v-slot:form>
    <div class="container">
    <div class="part-right">
      <p class="title">تصنيف الدورات</p>
      <div class="right-center">

        <label class="container-radio" @click="searching">البحث عن اسم الدورة
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>

        <label class="container-radio" v-for="classifier in classifiers"
         :key="classifier.id" @click="$store.state.classifierSelectCourse=classifier.name">{{classifier.name}}
        <input type="radio" name="radio" @click="techniqe">
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">

      <div class="stories">
        <div class="routing">الدورات > {{title}}</div>
          
            <div class="container-video">
                <video v-if="session==0" src="/images/session/11.mp4" controls width="550"></video>
                <video v-else-if="session==1" src="/images/session/15.mp4" controls width="550"></video>
                <video v-else-if="session==2" src="/images/session/12.mp4" controls width="550"></video>
                <video v-else-if="session==3" src="/images/session/13.mp4" controls width="550"></video>
                <video v-else src="/images/session/14.mp4" controls width="550"></video>

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
                     <div v-if="session=='4'" class="dash"></div>
                     <div v-if="session=='4'" style="display:flex;">
                        <img style="margin-top: -6px;width: 40px;height: 40px;background-color: #25da75;
                          border-radius:50%;border:3px solid rgb(39, 39, 39);" src="/images/check.png" alt="">                                          
                        <img style="margin-top: -16px;width: 70px;height: 70px;" src="/images/reward9.png" alt="">                                          
                     </div>
                     </div>

                      <ul class="list-session">
                        <li class="activevideo">
                          <img  class="video" src="/images/video1.png" alt="video">
                             {{lecture0.title}}
                          <img  class="lock" src="/images/open-lock.png" alt="lock">
                        </li>

                         <li :class="{clickSession:true,activevideo:session=='1'}" @click="this.question='0'">
                           <img  class="video" src="/images/video1.png" alt="video">
                             {{lecture1.title}}
                           <img v-if="session===0" class="lock" src="/images/close-lock.png" alt="lock">
                           <img v-else class="lock" src="/images/open-lock.png" alt="lock">
                           <br>
                           <div class="yes-no" v-if="question==='0'&& session<='0'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="activeSession">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>
                        </li>

                         <li :class="{clickSession:true,activevideo:session=='2'}" @click="this.question='1'">
                           <img  class="video" src="/images/video1.png" alt="video">
                              {{lecture2.title}}
                           <img v-if="this.session >'1'"  class="lock" src="/images/open-lock.png" alt="lock">
                           <img v-else  class="lock" src="/images/close-lock.png" alt="lock">
                           <br>
                           <div class="yes-no" v-if="question==='1'&& session<='1'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="activeSession">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>                        
                        </li>

                         <li :class="{clickSession:true,activevideo:session=='3'}" @click="this.question='2'">
                           <img  class="video" src="/images/video1.png" alt="video">
                              {{lecture3.title}}
                           <img v-if="this.session >'2'"  class="lock" src="/images/open-lock.png" alt="lock">
                           <img v-else  class="lock" src="/images/close-lock.png" alt="lock">
                           <br>
                           <div class="yes-no" v-if="question==='2'&& session<='2'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="activeSession">
                                <img  class="false" src="/images/dislike3.png" alt="false">
                              </div>
                            </div>
                        </li>

                         <li :class="{clickSession:true,activevideo:session=='4'}" @click="this.question='3'">
                           <img  class="video" src="/images/video1.png" alt="video">
                              {{lecture4.title}}
                           <img v-if="this.session >'3'"  class="lock" src="/images/open-lock.png" alt="lock">
                           <img v-else  class="lock" src="/images/close-lock.png" alt="lock">
                           <br>
                           <div class="yes-no" v-if="question==='3'&& session<='3'">
                              <p class="aquestion">هل أتممت الدرس السابق؟</p>
                              <div class="true-false">
                                <img class="false" src="/images/like3.png" alt="true" @click="activeSession">
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
import repository from '../../api/repository'

export default {
      data(){
          return{
        searchCourse:'noSearch',
        radio:null,
        dialogClose:true,
        question:false,
        session:0,
        classifiers:null,
        lecture0:null,
        lectures:null,
        lecture1:null,
        lecture2:null,
        lecture3:null,
        lecture4:null,
        lecture5:null,
        title:null,
          }
      },
      created () {
        this.getCourses()
      },
      methods:{
        async getCourses () {
          const {data} = await repository.getCourses();
          this.classifiers=data.data;
          this.lectures=data.data[0].courses[2].lectures;
          this.lecture0=data.data[0].courses[2].lectures[0];
          this.lecture1=data.data[0].courses[2].lectures[1];
          this.lecture2=data.data[0].courses[2].lectures[2];
          this.lecture3=data.data[0].courses[2].lectures[3];
          this.lecture4=data.data[0].courses[2].lectures[4];
          this.title=data.data[0].name;
        },
        searching(){
               this.$router.push('/courses')
            },
        techniqe(){
               this.$router.push('/courses/courseType1')
            },
        enterCourse(){
               this.$router.push('/courses/courseType1/courseNum1/joiningCourse1')
        },
        activeSession(){
          if(this.question==this.session){
          this.session+=1
          if(this.session==4){
            this.$store.state.courseReward+=1 
          }
          }

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



                        <li class="active">
                          <img  class="video" src="/images/video1.png" alt="video">
                             المقدمة: التعريف ببرنامج سكراتش وميزاته
                          <img  class="lock" src="/images/open-lock.png" alt="lock">
                        </li>

                         
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
    cursor: pointer; 
}

.yes-no{
    display: inline-block;
    width: 50%;
}
.activevideo{
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