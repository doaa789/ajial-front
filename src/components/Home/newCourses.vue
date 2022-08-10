<template>
       <div class="new-courses">
      <h2 class="title-course">أحدث الدورات </h2>
      <div class="row-course">
        <div>
            <h3>البرمجة بلغة سكراتش</h3>
            <p style="padding-bottom:8%;">تحتوي على مجموعة من الأوامر  يتم تركيبها<br> لتسهل يتم تركيبها لتسهل استخدام التكنولوجيا</p>
            <button class="go-course" style="margin-left:30%;" @click="learnMoreScratch">الذهاب للكورس</button>
        </div>
        <img class="course-row-img" src="/images/scratch2.jpg" alt="scratch" style="margin-left:6%;" >
      </div>
            
      <div class="row-course">
          <img class="course-row-img" src="/images/arduino3.jpg" alt="arduino"  style="margin-right:6%;">
          <div>
            <h3 style="padding-top:8%;">الاردوينو ببساطة</h3>
            <p style="padding-bottom:8%;">هو عبارة عن لوحة الدوائر المادية القابلة للبرمجة<br> IDE (بيئة التطوير المتكاملة) والقسم الثاني هو</p>
            <button class="go-course" style="margin-left:25%;" @click="learnMoreArduino">الذهاب للكورس</button>
          </div>
      </div>
   </div>
</template>


<script>
export default{
    methods:{
        learnMoreScratch(){
      this.$router.push('/courses/courseType1/courseNum1');
      this.$store.state.goToNewCourse=1
    },
    learnMoreArduino(){
      this.$router.push('/courses/courseType1/courseNum1');
      this.$store.state.goToNewCourse=0
    },
    }
}
</script>

<style>
.title-course{
  margin-bottom: 2rem;
  margin-top: -1rem;
  display: flex;
  margin-left: 40%;
  color: #fff;
  text-align: center;
  font-size: 30px;
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
.row-course{
  height: 45%;
  display: flex;
  margin-bottom: -3%;
  margin-left: 16%;
}

.go-course{
  border: 2px solid rgb(225, 97, 37);
  border: 2px solid #fff;
  background-color: rgb(225, 97, 37);
  font-size: 17px;
  padding:2%;
  color: #fff;
  font-weight: bold;
  margin: auto;
  cursor: pointer;
  border-radius:5px;
  min-width: 150px;
}
.go-course:hover{
  border: 2px solid rgb(225, 97, 37);
  color: rgb(225, 97, 37);
  background: #fff;
}
</style>