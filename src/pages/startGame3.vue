<template>


    <div class="container" v-if="page===1">
<img class="title" src="/images/newGame/title.png" alt="title">
        <div class="center">
            <p class="text" v-if="slider===1">
               مرحبا بكم أيها الأبطال<br>اسمي فارس...<br>بطل من أبطال جزيرة الأسرار <br>أريد مساعدتكم في الوصول<br>الى الكنز
            </p>
            <p class="text" v-else-if="slider===2">
               لقد حصلت على الخريطة للوصول <br>الى الكنز لكني بحاجة بطل مثلك<br>ليساعدني على حل الألغاز <br>في الطريق
            </p>
            <p class="text" v-else-if="slider===3">
               سنتعاون على حل الأسئلة<br>والتحديات التي سنواجهها<br>معا لكني واثق بقدرتك على <br>حلها جميعا
            </p>
            <div class="character">
            <img src="/images/newGame/character.png" >

        <div class="dot-container" style="margin-left:33%;margin-top:-8%">
        <span :class="{dotgame:true,activedotgame:slider===1}"  @click="slider=1" ></span> 
        <span :class="{dotgame:true,activedotgame:slider===2}" @click="slider=2"></span> 
        <span :class="{dotgame:true,activedotgame:slider===3}" @click="slider=3"></span> 
      </div>
            </div>
            <audio autoplay v-if="slider===2">
                <source src="/images/newGame/note.mp3" type="audio/mpeg">
            </audio>
            <audio autoplay v-if="slider==3">
                <source src="/images/newGame/note.mp3" type="audio/mpeg">
            </audio>
        </div> 
        <img  class="btn" src="/images/newGame/button.png" v-if="slider===1" @click="slider=2">

        <img class="btn" src="/images/newGame/button1.png"  v-if="slider===2" @click="slider=3">
        <img class="btn" src="/images/newGame/button2.png"  v-if="slider===3" @click="page=2">

    </div>

    <div v-if="page===2">
            <audio autoplay >
                <source src="/images/newGame/friend.mp3" type="audio/mpeg">
            </audio>
    <img src="/images/newGame/background11.png" style="height:43rem;width:100%">
        <div class="center2">
            <img  class="boyorgirl" src="/images/newGame/girl.png" @click="page=3">
            <img class="boyorgirl" src="/images/newGame/boy.png" @click="page=3">
        </div>
    </div>






<div v-if="page===3" style="height:43rem;width:100%">
    <audio autoplay >
        <source src="/images/newGame/collect.mp3" type="audio/mpeg">
    </audio>
    <img src="/images/newGame/background12.png" style="height:43rem;width:100%">

        <div class="center2">
            <img  class="boyorgirl" src="/images/newGame/level2.png" @click="page=4">
            <img class="boyorgirl" src="/images/newGame/level1.png" @click="page=4">
        </div>
    </div>



<div class="container4" v-else-if="page==4">
    <audio autoplay >
        <source src="/images/newGame/collect.mp3" type="audio/mpeg">
    </audio>
<div>
    <img src="/images/newGame/sea.jpg" style="height:43rem;width:100%">
</div>
<div class="letter">
    <img src="/images/newGame/letter.png">
</div>
<div class="start-question"  @click="page=5;forceRound=1">
    <img src="/images/newGame/start.png">
</div>
</div>

<div class="container4" v-else-if="page==5">
    <audio autoplay>
        <source src="/images/newGame/friend.mp3" type="audio/mpeg">
    </audio>
    <div>
        <img src="/images/newGame/sea.jpg" style="height:43rem;max-width:100%">
    </div>                                
    <audio autoplay>
            <source src="/images/newGame/beach.mp3" type="audio/mpeg">
    </audio>
    <div class="player">
        <img src="/images/newGame/happygirl.png">
    </div>


            <div style="display:flex;margin-top: 5%;">
              <img class="heart" src="/images/newGame/heart.png" >

              <div  id="healthbar" class="healthbar">
                <div class="healthbar__value" :style="playerBarStyles">
                    {{ playerHealth }}%</div>
                </div>
            </div>



    <div  v-if="forceRound>1 && forceRound<6" :class="{water1:forceRound===2,water2:forceRound===3,water3:forceRound===4,water4:forceRound===5}" style="display:grid">
        <img src="/images/newGame/arrowwater1.gif">
        <img src="/images/newGame/water.png" @click="appearQuestion='appearQuestion'">

    </div>
    <div :class="{ship:forceRound===1||forceRound>5,ship1:forceRound===2,ship2:forceRound===3,ship3:forceRound===4,ship4:forceRound===5}">
        <img  src="/images/newGame/ship3.png" style="width:170px;height:140px">
    </div>

    <div class="crab">
        <img  src="/images/newGame/crab2.png">
    </div>

    <div class="shell">
        <img  src="/images/newGame/shell3.png">
    </div>
    <div class="shark">
        <img  src="/images/newGame/shark2.png">
    </div>

    <div class="question-div" v-if="winner && appearQuestion==='appearfinal'">
        <img src="/images/newGame/question.png">
        <h1 class="nav-question" style="margin-left:11%;">انتهت اللعبة</h1>
                        <div style="cursor:default;">
                            <div v-if="winner=='monster'" style="color:#fff;direction:rtl;margin-right: 65%;margin-top: 14%;">
                                <div style="display: flex;margin-top: -11%;">
                                <img src="/images/newGame/pirot.png" style="width:110px;height:110px;margin-right: -8%;margin-top: 14%;">
                                <img src="/images/newGame/pirot1.png" style="width:190px;height:160px;margin-right: -16%;">
                                </div>
                                <br>للأسف لقد حصل القرصان على الكنز
                                <audio autoplay>
                                        <source src="/images/lose.wav" type="audio/mpeg">
                                </audio>
                            </div>
                            <div v-else-if="winner=='player'"  style="color:#fff;direction:rtl;margin-right: 65%;margin-top: 14%;">
                                <div style="display: flex;margin-top: -11%;" >
                                <img src="/images/newGame/treasure.png" style="width:190px;height:160px;margin-right: -16%;">
                                <img src="/images/newGame/happygirl.png" style="width:110px;height:110px;margin-right: -8%;margin-top: 1%;">
                                </div>
                                <br>مبارك وصولك للكنز يا بطل <br>لقد حققنا مرادنا أخيرا
                                <audio autoplay>
                                     <source src="/images/newGame/coins.mp3" type="audio/mpeg">
                                </audio>
                                <audio autoplay>
                                     <source src="/images/newGame/treasure.mp3" type="audio/mpeg">
                                </audio>
                                <audio autoplay>
                                     <source src="/images/newGame/win.mp3" type="audio/mpeg">
                                </audio>
                            </div>
                            <img src="/images/newGame/repeat.png" @click="repeatGame" style="margin-top:2%;margin-left:12%;cursor: pointer;">

                        </div>
    </div>

    <div class="question-div" v-if="appearQuestion==='appearQuestion'">
        <img src="/images/newGame/question.png">
        <h1 class="nav-question" style="margin-left:11%;">{{question}}</h1>
        <p  class="question-text">{{text}}</p>
        <h1 style="margin-left:10%;color: #fff;"> {{operation}}
        <input v-if="operation" type="number" v-model="theAnswer"></h1>
    </div>

    <div class="question-div" v-else-if="appearQuestion==='appearResult'">
        <img src="/images/newGame/question.png">
        <h1 v-if="trueRound" class="nav-question" style="margin-left:10%;">!اجابة صحيحة</h1>
                    <audio autoplay v-if="trueRound">
                        <source :src="truesound" type="audio/mpeg">
                    </audio>

        <h1 v-else class="nav-question" style="margin-left:10%;">!اجابة خاطئة</h1>
                    <audio autoplay v-if="falseRound">
                        <source :src="falsesound" type="audio/mpeg">
                    </audio>
                        <div style="cursor:default;">
                            <div v-if="trueRound" style="color:#fff;direction:rtl;margin-right: 65%;margin-top: 12%;">
                                <div style="display: flex;margin-top: -1%;" >
                                <img class="img" :src="image" alt="true">
                                <img src="/images/newGame/happygirl.png" style="width:110px;height:110px;margin-right: -1%;margin-top: 1%;">
                                </div>
                                <br>{{thanks}}
                            </div>
                            <div v-else  style="color:#fff;direction:rtl;margin-right: 65%;margin-top: 12%;">
                                <div style="display: flex;margin-top: -1%;" >
                                <img class="img" :src="falseimage" alt="true">
                                <img src="/images/newGame/sadgirl.png" style="width:110px;height:110px;margin-right: -1%;margin-top: 1%;">
                                </div>
                                <br>{{sorry}}
                            </div>
                            <img src="/images/newGame/next.png" @click="nextQuestion" style="margin-top:2%;margin-left:12%">

                        </div>
    </div>

    <div class="answer" v-if="operation"  @click="attackForce">
        <img  v-if="appearQuestion==='appearQuestion'" src="/images/newGame/answer.png" @click="appearQuestion='appearResult'" >
    </div>

</div>

</template>

<script>
export default {
    data(){
        return{
            page:1,
            slider:1,
            question:'',
            image:'',
            truesound:'',
            falsesound:'',
            falseimage:'',
            thanks:null,
            sorry:null,
            text :'',
            theAnswer:'',
            operation:null,
            forceRound:0,
            trueRound:0,
            falseRound:0,
            result:null,
            appearQuestion:'appearQuestion',
            playerHealth:100,
            monsterHealth:100,
            winner:null,

        };
    },
    watch:{
        playerHealth(value){
            if(value <= 0 ){
                this.winner='monster';
                this.appearQuestion='appearfinal'
            }
        },

        forceRound(value){
            if(value ===1){
                this.question='السؤال الأول'
                this.text='ستصل بسرعة اذا أجبت بشكل صحيح هيا أرنا مهارتك ياصديق';
                this.thanks=' أحسنت لقد انطلقت بقوة!';
                this.sorry=' هذا خاطئ!';
                this.image="/images/newGame/shell3.png";
                this.falseimage="/images/dislike3.png";
                this.truesound="/images/yes.wav";
                this.falsesound="/images/newGame/negative.mp3";


                this.operation='45 - 9 =';
                this.result=36;
            }
            else if(value === 2 ){
                this.question='السؤال الثاني'
                this.text='هل يمكنك حل اللغز التالي؟';
                this.thanks=' اجابتك صحيحة هيا بنا نلقنه درسا';
                this.image="/images/like3.png";
                this.sorry=' ياالهي هناك قراصنة قادمون!';
                this.falseimage="/images/newGame/ship3.png";
                this.truesound="/images/newGame/wow.mp3";
                this.falsesound="/images/newGame/ship.mp3";


                this.operation='4 + 13 =';
                this.result=17;
            }
            else if(value === 3 ){
                this.question='السؤال الثالث'
                this.text='أجب بسرعة لتكون أنت الفائز';
                this.thanks='أنت بطل!';
                this.image="/images/like1.png";
                this.sorry=' للأسف اجابتك الخاطئة جعلت الأشرار يقتربون منك!';
                this.falseimage="/images/dislike1.png";
                this.truesound="/images/yes.wav";
                this.falsesound="/images/newGame/shark.mp3";
                this.operation='8 * 7 =';
                this.result=56;
            }
            else if(value === 4 ){
                this.question='السؤال الرابع'
                this.text='لقد نصب لك الوحش الماكر فخا عليك ايجاد الحل بسرعة لتنجو منه';
                this.thanks='هذا رائع!';
                this.sorry=' انتبه اجابتك الخاطئة جعلتك تتأخر!';
                this.image="/images/like2.png";
                this.falseimage="/images/newGame/shark2.png";
                this.truesound="/images/newGame/wow.mp3";
                this.falsesound="/images/newGame/negative.mp3";
                this.operation='42 % 6 =';
                this.result=7;
            }
            else if(value === 5 ){
                this.question='السؤال الخامس'
                this.text='أنت على وشك الوصول الى الكنز';
                this.thanks='أنت عبقري بالفعل!';
                this.image="/images/check.png";
                this.sorry=' اتمنى لك حظا أوفر في المرة القادمة!';
                this.falseimage="/images/newGame/crab2.png";
                this.truesound="/images/yes.wav";
                this.falsesound="/images/newGame/shark.mp3";
                this.operation='18 + 6 =';
                this.result=24;
                
            }
            else{
                this.question='النهاية'
                this.text='لقد أنهيت جميع الأسئلة';
                this.operation=null;
                this.result=null;
            }
        },
},
methods:{

        attackForce(){

            const attackValue=Math.floor(Math.random()*(33-1))+10;
 
            if (this.theAnswer===this.result){
            this.trueRound++;
            this.falseRound=null;
            this.monsterHealth-=attackValue;
            }
            else{
            this.falseRound++; 
            this.trueRound=null;
            this.playerHealth-=2*attackValue;
            }
            this.appearQuestion='appearResult';
            this.theAnswer='';
           
        },
        nextQuestion(){
            this.appearQuestion='appearMap';
            this.forceRound++;
            if(this.forceRound>5){
               if(this.playerHealth>0){
                this.winner='player';
                this.appearQuestion='appearfinal'
               } 
            }

        },
        repeatGame(){
            this.page=1;
            this.slider=1;
            this.question='';
            this.image='';
            this.falseimage='';
            this.thanks=null;
            this.sorry=null;
            this.text ='';
            this.theAnswer='';
            this.operation=null;
            this.forceRound=0;
            this.trueRound=0;
            this.falseRound=0;
            this.result=null;
            this.appearQuestion='appearQuestion';
            this.playerHealth=100;
            this.monsterHealth=100;
            this.winner=null;
        }
},
    computed:{
        monsterBarStyles(){
            if (this.monsterHealth<0){
                return{width:'0%'}
            }
            return {
                width:this.monsterHealth+'%'
                }
        },
        playerBarStyles(){
            if (this.playerHealth<0){
                return{width:'0%'}
            }
            return {
                width:this.playerHealth+'%'
                }
        },
        }
}
</script>

<style scoped>

#healthbar {
  width: 20%;
}
.healthbar {
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 2px );
  max-width:15%;
  height: 35px;
  border: 8px solid rgb(159,94,55);
  border-radius: 20px;
  margin-top: 0.75rem;
  margin-left: -0.5rem;
  text-align: center;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
}

.healthbar__value {
  border-radius: 10px;
  background-color: rgb(224,62,65);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 102%;
  height: 100%;
}


.img{
    margin-top: 5%;
    width: 110px;
    height: 110px;
}
input{
    width: 60px;
    color: #494746;
    font-size: 30px;
    color: rgb(40, 57, 79);
    font-weight: bold;
}
.start-question{
    display:absolute;
    margin-top:-15%;
    margin-left:45%;
    cursor: pointer;
}
.letter{
    display:relative;
    margin-top:-49%;
    margin-left:30%;
}
.player{
    display:relative;
    margin-top:-46%;
    margin-left:8%;
}
/*
     animation-name: player;
    animation-duration: 4s;
@keyframes player {
  0%   { left:0rem; top:0rem;}
  25%  { left:200rem; top:0rem;}
  50%  { left:200rem; top:200rem;}
  75%  { left:0rem; top:200rem;}
  100% { left:0rem; top:0rem;}
}*/
.ship,.ship1,.ship2,.ship3,.ship4{
    display:relative;
    margin-left:52%;
}
.ship{margin-top:-25.5%;}
.ship1{margin-top:-10.5%;}
.ship2{margin-top:-29.5%;}
.ship3{margin-top:-20%;}
.ship4{margin-top:-37.5%;}
.ship img,.ship1 img,.ship2 img,.ship3 img,.ship4 img{
   width: 100px;
    height:100px;
}
.crab{
    display:relative;
    margin-top:25.5%;
    margin-left:30%;
}
.crab img{
   width: 155px;
    height:125px;
}
.shark{
    display:relative;
     margin-top:-26%;
    margin-left:81%;
}
.shark img{
   width: 150px;
    height:150px;
}
.water1{
    display:relative;
    margin-top:-24%;
    margin-left:36%;
}
.water2{
    display:relative;
    margin-top:-5%;
    margin-left:26%;
}
.water3{
    display:relative;
    margin-top:-15%;
    margin-left:63%;
}
.water4{
    display:relative;
    margin-top:3%;
    margin-left:68%;
}
.shell{
    display:relative;
    margin-top:-21%;
    margin-left:58%;
}
.shell img{
    width: 62px;
    height:62px;  
}


.water1 img,.water2 img,.water3 img,.water4 img{
    max-width: 60px;
    max-height:60px;
    cursor: pointer;
}
.question-div{
    display:relative;
    margin-top:-13%;
    margin-left:38%;
    font-weight: bold;
}
.nav-question{
    display:relative;
    margin-top:-63%;
    color: #fff;
}
.question-text{

    width: 18rem;
    color: #fff;
    font-size: 20px;
    margin-top:15%;
    margin-left:7%;
}
.answer{
    display:absolute;
    margin-top:3%;
    margin-left:46%;
    cursor: pointer;
}


.boyorgirl{
    margin-left:26%;
    margin-top:-54%;
    cursor: pointer;
    max-height: 23rem;

}
.center2{
    display: flex;
    position:absolute;
}

.container{
    background-image:url('/images/newGame/background2.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 43rem;
  direction: rtl;

}
.title{
    max-width: 45%;
    margin-right: 31%;
    margin-top: 2%;
    max-height:10rem;

}
.center{
    display: flex;
    width: 50%;
    margin-right: 5%;
    margin-bottom: 0%;

}
.character{
    margin-top: 3%;
    margin-right: 10%;
    min-width: 55%;
}
.text{
    font-family: "djadli_Tachkili";
    margin-bottom: 0%;
    position: relative;
    font-size: 35px;
    color: #fff;
    min-width: 55%;

    }
    .btn{
        cursor: pointer;
        width: 13%;
        margin-right: 5%;
position:absolute;
margin-top: -10%;
    }

    /* The dots/bullets/indicators */
.dotgame {
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin:2rem 0.25rem 19rem;
  border: 3px solid rgb(120,215,200);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.dotgame:hover,
.activedotgame {
  height: 26px;
  width: 26px;
  border: 5px solid rgb(165,255,229);
  background-color: rgb(165,255,229);

}
.heart{
    height: 45px;
    width: 50px;
    border: 8px solid rgb(159,94,55);
    border-radius: 50%;
    margin-left: 1.4%;
    margin-top: 0.4%;
}


 /*
            <div class="healthbar">
                <div class="healthbar__value" :style="monsterBarStyles">
                    {{ monsterHealth }}%</div>
                </div>
              <img src="/images/q6.jpg" style="margin-right: -1%;height: 75px;width: 65px;border-radius: 50%;border: 8px solid #494746;">



            if(this.trueRound ==1){
                this.question='السؤال الثاني'
                this.text='ستصل بسرعة اذا أجبت بشكل صحيح هيا أرنا مهارتك ياصديق';
                this.thanks=' أحسنت لقد انطلقت بقوة!';
                this.image="/images/like2.png";
            }
            else if(this.trueRound == 2 ){ 
                this.question='السؤال الثالث'
                this.text='هل يمكنك حل اللغز التالي؟';
                this.thanks=' اجابتك صحيحة هيا بنا نلقنه درسا';
                this.image="/images/like3.png";
            }
            else if(this.trueRound == 3 ){
                this.question='السؤال الرابع'
                this.text='أجب بسرعة لتكون أنت الفائز';
                this.thanks='أنت بطل!';
                this.image="/images/like1.png";
            }
            else if(this.trueRound == 4 ){
                this.question='السؤال الخامس'
                this.text='أنت على وشك الوصول الى الكنز';
                this.thanks='هذا رائع!';
                this.image="/images/like2.png";
            }
            else if(this.trueRound == 5 ){
                this.question='النهاية'
                this.text='لقد أنهيت جميع الأسئلة';
                this.thanks='أنت عبقري بالفعل!';
                this.image="/images/check.png";
            }*/
</style>