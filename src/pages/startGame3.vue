<template>
    <div class="container" v-if="page==1">
<img class="title" src="/images/newGame/title.png" alt="title">
        <div class="center">
            <p class="text">
               مرحبا بكم أيها الأبطال<br>اسمي فارس...<br>بطل من أبطال جزيرة الأسرار <br>أريد مساعدتكم في الوصول<br>الى الكنز
            </p>
            <div class="character">
            <img src="/images/newGame/character.png" alt="title">

        <div class="dot-container">
        <span :class="{dot:true,activedot:slider===1}" @click="slider=1"></span> 
        <span :class="{dot:true,activedot:slider===2}" @click="slider=2"></span> 
        <span :class="{dot:true,activedot:slider===3}" @click="slider=3"></span> 
      </div>
            </div>
        </div> 
        <img class="btn" src="/images/newGame/button.png" alt="title" @click="page=2">
    </div>

    <div class="container" v-if="page==2">
<img class="title" src="/images/newGame/title.png" alt="title">
        <div class="center">
            <p class="text">
               لقد حصلت على الخريطة للوصول <br>الى الكنز لكني بحاجة بطل مثلك<br>ليساعدني على حل الألغاز <br>في الطريق
            </p>
            <img class="character" src="/images/newGame/character.png" alt="title">
        </div> 
        <img class="btn" src="/images/newGame/button1.png" alt="title" @click="page=3">

    </div>
        <div class="container" v-if="page==3">
<img class="title" src="/images/newGame/title.png" alt="title">
        <div class="center">
            <p class="text">
               سنتعاون على حل الأسئلة<br>والتحديات التي سنواجهها<br>معا لكني واثق بقدرتك على <br>حلها جميعا
            </p>
            <img class="character" src="/images/newGame/character.png" alt="title">
        </div> 
        <img class="btn" src="/images/newGame/button2.png" alt="title" @click="page=4">

    </div>

    <div class="container2" v-else-if="page==4">
        <div class="center2">
            <img class="boyorgirl" src="/images/newGame/boy.png" @click="page=5">
            <img  class="boyorgirl" src="/images/newGame/girl.png" @click="page=5">
        </div>
    </div>

        <div class="container3" v-else-if="page==5">
        <div class="center2">
            <img class="boyorgirl" src="/images/newGame/level1.png" @click="page=6">
            <img  class="boyorgirl" src="/images/newGame/level2.png" @click="page=6">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            page:1,
        };
    },
}
</script>

<style scoped>

.container3{
    background-image:url('/images/newGame/background12.png');
  background-repeat: no-repeat;
  height: 43em;
  direction: rtl;
}
/*                  <div class="game-slider">
                <img class="slider-button" src="/images/newGame/s3.png" alt="">
                <img class="slider-button" src="/images/newGame/s1.png" alt="">
                <img class="slider-button" src="/images/newGame/s4.png" alt="">
                <img class="slider-button" src="/images/newGame/s5.png" alt="">
                <img class="slider-button" src="/images/newGame/s2.png" alt="">
            </div>  
            .game-slider{
    display:flex;
    margin-right: 22%;
    margin-top: 5%;

}
.slider-button{
    margin-right: 10%;
    width: 3%;
}*/
.boyorgirl{
    margin-right:27%;
    margin-top:32%;
    cursor: pointer;
}
.center2{
    display: flex;
    position:absolute;
}
.container2{
  background-image:url('/images/newGame/background11.png');
  background-repeat: no-repeat;
  height: 43em;
  direction: rtl;
}
.container{
    background-image:url('/images/newGame/background2.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 43em;
  direction: rtl;

}
.title{
    max-width: 45%;
    margin-right: 34%;
    margin-top: 2%;
    max-height:8rem;

}
.center{
    display: flex;
    width: 50%;
    margin-right: 5%;
    margin-bottom: 0%;

}
.character{
    margin-top: 5%;
    margin-right: 10%;
    min-width: 55%;
    min-height: 55%;
}
.text{
    margin-bottom: 0%;
    position: relative;
font-size: 28px;
color: #fff;
    min-width: 55%;

    }
    .btn{
        cursor: pointer;
        width: 13%;
        margin-right: 5%;
position:absolute;
margin-top: -5%;
    }

    /* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin:2rem 0.25rem 19rem;
  background-color: #70d2a3;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.dot:hover,
.activedot {
  height: 26px;
  width: 26px;
  border: 5px solid #70d2a3;
  background-color: #70d2a3;

}
</style>