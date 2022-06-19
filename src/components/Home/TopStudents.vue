<template>
<div class="member">
      <h2 class="titleTop">لوحة طلابنا المتميزين </h2>
      <div style="display:flex;padding-right:11%;">
      <div style="padding-left:5%;">
      <div class="topStudents" style="padding-left:36%;">
        <img class="circle" src="/images/member6.jpg" style="background-color:darkgrey">
        <img class="circle" src="/images/member7.jpg">
        <img class="circle" src="/images/member.jpg" style="background-color:lightsalmon">

      </div>
      <div class="order" style="padding-left:40%;">
          <div class="member-paragraph" style="margin-right: 19%;">اسماء العابد<br>المرتبة الأولى</div>
          <div class="member-paragraph" style="margin-right: 13%;">حسني الأشقر<br>المرتبة الثانية</div>
          <div class="member-paragraph" style="margin-right: 21%;">نور الحموي<br>المرتبة الثالثة</div>

      </div>

        <div style="display:flex;padding-bottom:9%;padding-left:55%">
      <img class="trophy1" src="/images/trophy1.png" alt="">
      <img class="trophy3" src="/images/trophy3.png" alt="">
      <img class="trophy5" src="/images/trophy5.png" alt="">
      </div>
      </div>

      <div style="width:40%;">
          <h2 class="part" style="padding-right:6%;">قسم الكورسات</h2>
          <img src="/images/top1.png" style="height:32rem;margin-top: -25%;">
      </div>
      
      </div>

      <div style="display:flex;margin-right: 5%;">
      <div style="width:40%;">
          <h2 class="part" style="padding-right:11%;">قسم الكتب</h2>
          <img src="/images/top1.png" style="height:32rem;margin-top: -25%;">
      </div>
      <div>
      <div class="topStudents" style="padding-left:46%;">
        <img class="circle" src="/images/avatar.png" style="background-color:darkgrey">
        <img class="circle" src="/images/member5.jpg">
        <img class="circle" src="/images/avatar6.png" style="background-color:lightsalmon">

      </div>
      <div  class="order" style="padding-left:20%">
          <div class="member-paragraph" style="margin-right: 12%;">حسناء العابد<br>المرتبة الأولى</div>
          <div class="member-paragraph" style="margin-right: 3%;">حمدية الأشقر<br>المرتبة الثانية</div>
          <div class="member-paragraph" style="margin-right: 3%;">نور الحموي<br>المرتبة الثالثة</div>

      </div>

        <div style="display:flex;padding-bottom:9%;padding-left:55%">
      <img class="trophy1" src="/images/trophy1.png" alt="">
      <img class="trophy3" src="/images/trophy3.png" alt="">
      <img class="trophy5" src="/images/trophy5.png" alt="">
      </div>
      </div>
      </div>
  </div>
</template>

<style>
.order{
    display:flex;
    padding-top:2%;
    color:rgb(95,110,189);
    }
.trophy3,.trophy5{
    max-width:145px;
    max-height:145px;
    margin-right: 21%;
}
.trophy1{
    max-width:135px;
    max-height:130px; 
    margin-right: 12%;
    margin-top: 1%;
}
.trophy3{
      margin-top: 1%;
}
.titleTop{
    margin-right: 37%;
    margin-bottom: 5%;
    margin-top: 5%;
    font-size: 30px;
    color:rgb(95,110,189);
    margin-left:37%;
    padding-right:3%;
}
.part{
    margin-right:30%;
    margin-left:25%;
    color:rgb(95,110,189);
    border: 5px solid rgb(215,195,204);
    border-radius:15px;
    background-color: rgb(215,195,204);
}
.member{
  direction:rtl;
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
.topStudents{
    display:flex;
    margin-top: -5%;
}
</style>