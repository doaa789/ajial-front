<template>
  <teleport to="body">
     <base-dialog open v-if="dialogClose">
<template v-slot:form >
    <div class="container">
    <div class="part-right">
      <p class="title">تصنيف الدورات</p>
      <div class="right-center">

        <label class="container-radio" @click="searching">البحث عن اسم الدورة
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>

        <label class="container-radio" v-for="classifier in classifiers"
         :key="classifier.id">{{classifier.name}}
        <input type="radio" name="radio" @click="techniqe">
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">
      <div class="stories" >
        <div class="routing">الدورات > {{title}}</div>
          
            <div class="container-course" >
              <div class="course-container">
                <div class="course-right">
                    <p class="title"> {{this.firstCourse.name}}</p>
                    <p>{{this.firstCourse.description}}</p>
                    <p class="title"> الفئة المستهدفة</p>
                     <ul class="who">
                         <li> الأطفال الراغبون حيث (تبدأ أعمارهم من 7-8 سنوات)</li>
                         <li>أي شخص لديه شغف في تعلم البرمجة وعلوم الكمبيوتر </li>
                     </ul>
                     <p class="title">أهداف الدورة:</p>
                     <ul class="list">
                         <li><img  class="true" src="/images/true.png" alt="true">
                             إنشاء الألعاب الممتعة والشيقة</li>
                         <li><img  class="true" src="/images/true.png" alt="true">
                         تعلم بعض لغات البرمجة بسرعة وسهولة.</li>
                         <li><img  class="true" src="/images/true.png" alt="true">
                           تنفيذ البرامج وكتابتها بطريقة سلسة
                         </li>
                          <li><img  class="true" src="/images/true.png" alt="true">
                             رسم اشكال و تحريكها بمؤثرات البصرية الرائعة</li>
                     </ul>
                    
                </div>
                <div class="course-left">
                    <img v-if="this.$store.state.goToNewCourse==1" class="image" src="/images/scratch.png" alt="course">
                    <img v-if="this.$store.state.goToNewCourse==0" class="image" src="/images/arduino.jpg" alt="course">
                     <div class="set-icon">
                         <base-card class="icon-card">
                            <img class="image-icon" src="/images/1.png" alt="certificate" style="min-width:40px;min-height:45px;display: absolute;">    
                            <p style="margin-top:-21%;display: relative;">شهادة مصدقة</p>
                         </base-card>
                         <base-card class="icon-card">
                            <img class="image-icon" src="/images/4.png" alt="author" style="min-width:35px;min-height:35px;display: absolute;margin-top: 6%;">    
                            <p style="margin-top:-11%;display: relative;">{{this.firstCourse.teacher_id}}</p>
                         </base-card>
                         <base-card class="icon-card">
                            <img class="image-icon" src="/images/2.png" alt="session" style="min-width:40px;min-height:45px;display: absolute;">    
                            <p style="margin-top:-21%;display: relative;">5 دروس</p>
                         </base-card>
                     </div>
                     <base-button class="enter" @click="enterCourse">البدء بالتعلم</base-button>
                </div>
              </div>
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
        radio:null,
         enroll:{
        course_id: "1"
        },
        dialogClose:true,
        courseDetails:'list',
        classifiers:null,
        courses:null,
        title:null,
        firstCourse:null
          }
      },
      created () {
        this.getCourses()
      },
      methods:{
        async getCourses () {
          const {data} = await repository.getCourses();
          this.classifiers=data.data;            
          this.title=data.data[0].name;
              this.courses = data.data[0].courses;
          if(this.$store.state.goToNewCourse==1){ 
              this.firstCourse=data.data[0].courses[1];
          }
          else if(this.$store.state.goToNewCourse==0){ 
              this.firstCourse=data.data[0].courses[0];
          }
        },
        searching(){
               this.$router.push('/courses')
            },
        techniqe(){
               this.$router.push('/courses/courseType1')
            },
        enterCourse(){
               this.$router.push('/courses/courseType1/courseNum1/joiningCourse1');
               this.$store.dispatch('postEnrollments',this.enroll);
               console.log(this.enroll)
        },
        submitForm(){
              console.log('Username: ' +this.userName);
              this.userName='';
              console.log('radio buttons: '+this.radio);
              this.radio=null;
              this.dialogClose=false;
        },
        validateName(){
          if (this.userName ===''){
            this.userNameValidity='invalid';
          }
          else{
            this.userNameValidity='valid';
          }
        },
      },
    computed:{
      filteredCourses(){
        return this.courses.filter(course => course.name.includes(this.search))
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

.story-container{
  width: 100%;
  height: 60%;
  display:flex;
}
.one-story-container{
  margin-top: 8%;
  width: 100%;
  height: 40%;
  display:flex;
}
.story-img{
  object-fit: cover;
  width: 100%;
  margin: 1%;
  border-radius: 5%;
  height: 99%;
}


.img-container {
  position: relative;
  width: 23%;
  margin: 1%;
  height: 100%;
}

.img-container-icon {
  position: relative;
  width: 35%;
  margin-top: 6%;
  height: 100%;
  margin-right:33% ;
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

.container-course{
    width: 100%;
    display: grid;
    }

.image-icon{
 margin-right: 17%;
    max-width: 1.75rem;
    max-height: 1.75rem;
}

.icon{
  margin-right: 7%;
  text-align: center;
  display: grid;
  padding: 0;
}

li,p{
    font-size: 12px;
    color: #7d52a0;
}
.icon-card p,
.icon p{
    font-weight: bold;
    color: #7d52a0;
    margin: 0;
}
.title{
    font-size: 20px;
    color: #7d52a0;
    }
.btn {
  background-color: #fff;
  font-size: 15px;
  border: 1.5px solid #25da75;
}
.btn-active{
  background-color: #25da75;
  font-size: 15px;
  color: #7d52a0;
  border:none;
}

.course-container{
    display: flex;
    height: 100%;
    width: 100%;

}
.course-right{
  height:57%;  
  width: 50%;
  margin-left: 1%;
}
.list,.list-session{
    list-style: none;
    padding: 0;

}
.who{
padding: 0 20px 0 0;
  list-style: none;

}

.who li::before {
  content: "\2022";
  color: #25da75;
  font-size: 20px;
  display: inline-block; 
  width: 0.75em;
  margin-right: -1em;
}

.true{
    border: 1px solid #25da75;
    padding: 2px;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
}
.course-left{
  width: 44%;
  margin-top: 4%;
  margin-right: 5%;
}
.image{
    width: 100%;
    height: 30%;
    border-radius:12%;
}
.set-icon{
    margin-top: 10%;
    width: 100%;
    display: flex;

}
.icon-card{
    height: 10%;
    margin: 2%;
    width: 33%;
    padding:2%;
}
.enter{
    margin-top: 45%;
    margin-right: 25%;
}
  </style>