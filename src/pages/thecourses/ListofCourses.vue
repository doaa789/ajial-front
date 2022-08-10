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
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">
      <div class="stories">
        <div class="routing">الدورات > {{this.$store.state.classifierSelectCourse}}</div>
        <div class="container-course" v-if="courseDetails==='list'&& this.$store.state.classifierSelectCourse=='برمجة'">
            <base-card v-for="course in courses" :key="course.id">
                <div class="part-course-left">
                    <base-card class="icon">
                        <img class="image-icon" src="/images/clock.png" alt="search">
                        <p>{{mycourse.time}}</p>
                    </base-card>
                    <base-card class="icon">
                        <img class="image-icon" src="/images/calender.png" alt="search">
                        <p>ابتداء من <br>{{mycourse.date}}</p>
                    </base-card>
                </div>

                <div class="part-course-right">
                    <p class="title">{{course.name}}</p>
                    <p>{{course.description}}</p>
                </div>
                <div class="bottom">
                <base-button  class="btn" @click="learnMore">معرفة المزيد</base-button>
                <base-button class="btn-active" @click="enterCourse">البدء بالتعلم</base-button>
                </div>
            </base-card>
            </div>



          <div class="container-course" v-if="courseDetails==='list'&& this.$store.state.classifierSelectCourse=='لغات'">
            <base-card v-for="course in courses1" :key="course.id">
                <div class="part-course-left">
                    <base-card class="icon">
                        <img class="image-icon" src="/images/clock.png" alt="search">
                        <p>{{mycourse.time}}</p>
                    </base-card>
                    <base-card class="icon">
                        <img class="image-icon" src="/images/calender.png" alt="search">
                        <p>ابتداء من <br>{{mycourse.date}}</p>
                    </base-card>
                </div>

                <div class="part-course-right">
                    <p class="title">{{course.name}}</p>
                    <p>{{course.description}}</p>
                </div>
                <div class="bottom">
                <base-button  class="btn" @click="learnMore">معرفة المزيد</base-button>
                <base-button class="btn-active" @click="enterCourse">البدء بالتعلم</base-button>
                </div>
            </base-card>
            </div>



          <div class="container-course" v-if="courseDetails==='list'&& this.$store.state.classifierSelectCourse=='ذكاء'">
            <base-card v-for="course in courses2" :key="course.id">
                <div class="part-course-left">
                    <base-card class="icon">
                        <img class="image-icon" src="/images/clock.png" alt="search">
                        <p>{{mycourse.time}}</p>
                    </base-card>
                    <base-card class="icon">
                        <img class="image-icon" src="/images/calender.png" alt="search">
                        <p>ابتداء من <br>{{mycourse.date}}</p>
                    </base-card>
                </div>

                <div class="part-course-right">
                    <p class="title">{{course.name}}</p>
                    <p>{{course.description}}</p>
                </div>
                <div class="bottom">
                <base-button  class="btn" @click="learnMore">معرفة المزيد</base-button>
                <base-button class="btn-active" @click="enterCourse">البدء بالتعلم</base-button>
                </div>
            </base-card>
            </div>



          <div class="container-course" v-if="courseDetails==='list'&& this.$store.state.classifierSelectCourse=='تصميم'">
            <base-card v-for="course in courses3" :key="course.id">
                <div class="part-course-left">
                    <base-card class="icon">
                        <img class="image-icon" src="/images/clock.png" alt="search">
                        <p>{{mycourse.time}}</p>
                    </base-card>
                    <base-card class="icon">
                        <img class="image-icon" src="/images/calender.png" alt="search">
                        <p>ابتداء من <br>{{mycourse.date}}</p>
                    </base-card>
                </div>

                <div class="part-course-right">
                    <p class="title">{{course.name}}</p>
                    <p>{{course.description}}</p>
                </div>
                <div class="bottom">
                <base-button  class="btn" @click="learnMore">معرفة المزيد</base-button>
                <base-button class="btn-active" @click="enterCourse">البدء بالتعلم</base-button>
                </div>
            </base-card>
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
        search:'',  
        userName:'',
        radio:null,
        userNameValidity:'pending',
          userselect:null,

        title:null,
        title1:null,
        title2:null,
        title3:null,
        classifiers:null,
        courses:null,
        courses1:null,
        courses2:null,
        courses3:null,
        courses4:null,
        mycourse:
          {
            time:"15 ساعة",
            date:"10/12/2022"
          },

        dialogClose:true,
        courseDetails:'list',
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
          this.title1=data.data[1].name;
          this.title2=data.data[2].name;
          this.title3=data.data[3].name;
          this.title4=data.data[4].name;
          this.courses = data.data[0].courses;
          this.courses1 = data.data[1].courses;
          this.courses2 = data.data[2].courses;
          this.courses3 = data.data[3].courses;
          this.courses4 = data.data[4].courses;
        },
        searching(){
               this.$router.push('/courses')
            },
        learnMore(){
               this.$router.push('/courses/courseType1/courseNum1')
            },
        enterCourse(){
               this.$router.push('/courses/courseType1/courseNum1/joiningCourse1')
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

.search-section{
 display: flex;
}
.search-img{
 margin-right: 2%;
 margin-top: 2%;

}
/*
span{
 cursor: pointer;
 margin-right: 2%;
 border: 1px solid #25da75;
 border-radius: 50%;
 padding-top: 2%;
 padding-right: 2%;
 padding-left:2%;
}

span:hover{
 border: 4px solid #25da75;

}
 وهو أحد لغات البرمجة (التي طورها معهد ماساتشوستس للتكنولوجيا) 
ولتكون في متناول الجميع بسهولة ويسر، 
 لأنها تحتوي على مجموعة من الأوامر التي يتم تركيبها لتسهل استخدام التكنولوجيا
  في التعامل مع الصور، الرسومات، الصوت والفيديو، والموسيقى بطرق تفاعلية سهلة الإنشاء
  ، والفهم والتطوير لألعاب وقصص وبرامج تطبيقية متنوعة
<li>أولياء الأمور أو المعلمون الراغبون في منح أطفالهم أفضل المهارات البرمجية وأكثرها متعة.</li>
<li><img  class="true" src="/images/true.png" alt="true">
                             كتابة التعليمات أو الرموز على شكل كود باستخدام لغات البرمجة، وهي من أهم مهارات التعلم.</li>
*/
.note{
  text-align: center;
  color: #7d52a0;
  font-size: 20px;
}
#search-name{
  margin-right: 15%;
  border-radius: 18px;
  border:1px solid #25da75;
  width: 65%;
  font-size: 16px;
  padding:2% 5%;
  }

  #search-name:focus {
  background-color: rgba(37, 218, 117, 0.9);
  outline: none;
}
.form-control.invalid input{
  border-color: #25da75;
}
.validate{
  text-align: center;
  color: #25da75;
  font-size: 12px;
}


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
.part-course-left{
    margin-top: 1%;
    width: 30%;
    display: flex;
    float: left;
}
.image-icon{
    max-width: 1.75rem;
    max-height: 1.75rem;
    margin: auto;
}

.icon{
  margin-right: 7%;
  text-align: center;
  display: grid;
  padding: 0;
}
.part-course-right{
  width: 70%;
  float: right;
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
.bottom{
    width: 100%;
    display: flex;
}
/*
{
    "courses":[
        {
            "Id":1,
            "name":" سكراتش للاطفال",
            "description": "يقدم هذا الكورس اساسيات البرمجة بلغة سكراتش للاطفال مما يسهل فهم الانطلاق في عالم البرمجة وتعلم لغات اكثر تعقيدا في المستقبل",

           },
        {
            "Id":2,
            "name":"اردوينو لليافعين",
            "description":"يقدم هذا الكورس اساسيات الالكترةنيات البسيطة والعمل على لوحة الاردوينو مع القيام ببناء مشاريع بسيطة وممتعة مما يسهل فهم الانطلاق في عالم الالكترونيات وتعلم العمل على لوحات اكثر تعقيدا في المستقبل",

           }
          
          ]
}*/
  </style>