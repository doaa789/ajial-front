<template>
<teleport to="body">
 <dialog open v-if="dialogClose">
 <div class="dialog-form">
      <div class="dialog-container">
    
    <div>
        <audio autoplay><source src="/images/monster.wav" type="audio/mpeg"></audio>

        <section id="monster" class="container-center" v-if="winner">
            <h2>انتهت اللعبة !</h2>

            <div class="game-over" v-if="winner=='monster'">
                <h3>للأسف لقد أكلك الوحش</h3>
                <img  class="img" src="/images/monster2.gif" alt="true">
                <audio autoplay>
                        <source src="/images/lose.wav" type="audio/mpeg">
                </audio>
            </div>

            <div class="game-over" v-else-if="winner=='player'">
                <h3>تهانينا! أيها البطل لقد استطعت القضاء على الوحش</h3>
                <img id="solider-right" class="img" src="/images/solider2.gif" alt="true">
                <audio autoplay>
                    <source src="/images/win.wav" type="audio/mpeg">
                </audio>
            </div>

            <div class="game-over" v-else>
            <h3 >حصل تعادل بينك وبين الوحش</h3>                
            <img class="img"  id="balance" src="/images/balance.gif" alt="true">
                <audio autoplay>
                    <source src="/images/balance.wav" type="audio/mpeg">
                </audio>             
            </div>

            <button class="center" @click="startGame">العب مجددا</button>
        </section>

        <section v-else >
            <div style="display:flex;width: 160%;margin-right: -30%;">
              <img src="/images/q1.jpg" style="margin-left:-1%;height: 75px;width: 65px;border-radius: 50%;border: 8px solid #494746;">

              <div  id="healthbar" class="healthbar" style="margin-left:25%;">
                <div class="healthbar__value" :style="playerBarStyles">
                    {{ playerHealth }}%</div>
                </div>

            <div class="healthbar">
                <div class="healthbar__value" :style="monsterBarStyles">
                    {{ monsterHealth }}%</div>
                </div>
              <img src="/images/q6.jpg" style="margin-right: -1%;height: 75px;width: 65px;border-radius: 50%;border: 8px solid #494746;">

</div>
            <section id="controls" v-if="appearControls==='appearControls'">




                <button @click="attackMonster">
                    <img src="/images/gun3.gif" alt=""><br>
                    <audio autoplay v-if="gun">
                        <source src="/images/gun.mp3" type="audio/mpeg">
                    </audio>
                    
                    <audio autoplay v-if="gun">
                        <source src="/images/man.wav" type="audio/mpeg">
                    </audio>
                </button>

                <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster">
                    <img id="rocket" src="/images/rocket.gif" alt=""><br>
                    <audio autoplay v-if="rocket">
                        <source src="/images/rocket2.wav" type="audio/mpeg">
                    </audio>
                    <audio autoplay v-if="rocket">
                        <source src="/images/rocket3.wav" type="audio/mpeg">
                    </audio>

                    <audio autoplay v-if="rocket">
                        <source src="/images/killmonster.wav" type="audio/mpeg">
                    </audio>
                </button>


                <button :disabled="mayUseHeal" @click="healPlayer">
                    <img src="/images/heal2.gif" alt=""><br>

                </button>

                <button @click="surrender">
                    <img src="/images/surrender3.gif" alt=""><br>
                    <audio autoplay v-if="heal">
                        <source src="/images/yes.wav" type="audio/mpeg">
                    </audio>
                </button>
        </section>

        <section id="log" class="container" v-else-if="appearControls==='appearOperation'">
            <div class="btn">
                <p>{{text}}<br>
                    {{operation}}
                        <input type="number" v-model="theAnswer">
                        <img  class="true" src="/images/check.png" alt="true" @click="attackForce">
                    </p>
            </div>
        </section>

        <section id="log" class="container" v-else>
                    <div class="btn">
                        <div v-if="trueRound">
                            <img class="img" :src="image" alt="true" @click="appearControls='appearControls'">
                            <br>{{thanks}}
                        </div>
                        <div v-else>
                            <img class="img" src="/images/dislike2.png" alt="true" @click="appearControls='appearControls'">
                            <br>اجابتك الخاطئة جعلت الوحش يفجر ذخائرك<br> أسرع بعلاج نفسك
                        </div>
                    </div>
        </section>
        </section>

    <div class="container-play" v-if="winner==null">
      <section id="monster">
        <img src="/images/monster3.gif" alt="monster">
 
      </section>
      <section id="player">
        <img src="/images/solider3.gif" alt="solider">

      </section>
      </div>

    </div>
    </div>
    </div>
 </dialog>
</teleport>
</template>

<script>
export default {
    data(){
        return{
            image:'',
            heal:false,
            rocket:false,
            gun:false,
            thanks:null,
            operation:null,
            text :'لقد نصب لك الوحش الماكر فخا عليك ايجاد الحل بسرعة لتنجو منه وتضربه بقوة',
            result:null,
            theAnswer:'',
            winner:null,
            currentRound:0,
            forceRound:0,
            trueRound:0,
            falseRound:0,
            playerHealth:100,
            monsterHealth:100,
            appearControls:'appearControls',
            dialogClose:true
        };
    },
    watch:{
        forceRound(value){
            if(value ==1){
                this.operation='45 % 9 =';
                this.result=5;
            }
            else if(value == 2 ){
                this.operation='4 + 13 =';
                this.result=17;
            }
            else if(value == 3 ){
                this.operation='32 - 6 =';
                this.result=26;
            }
            else{
                this.operation='8 * 7 =';
                this.result=56;
            }
        },
        playerHealth(value){
            if(value <= 0 && this.monsterHealth<=0){
                this.winner='draw'
            }
            else if(value <= 0 ){
                this.winner='monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth<=0){
                this.winner='draw'
            }
            else if(value <= 0 ){
                this.winner='player'
            }
        },
    },
    methods:{
        submitForm(){
            this.dialogClose=false;
        },
        startGame(){
            this.heal=false;
            this.winner=null;
            this.currentRound=0;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.appearControls='appearControls';
            this.operation=null;
            this.text='لقد نصب لك الوحش الماكر فخا عليك ايجاد الحل بسرعة لتنجو منه وتضربه بقوة'; 
            this.result=null;
            this.theAnswer='';
            this.currentRound=0;
            this.forceRound=0;
            this.trueRound=0;
            this.rocket=false,
            this.gun=false,
            this.thanks=null
        },
        attackMonster(){
            this.heal=false;
            this.gun=true;
            this.currentRound++;
            const attackValue=Math.floor(Math.random()*(12-5))+5;
            this.monsterHealth-=attackValue;
            this.playerHealth-=attackValue%2;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue=Math.floor(Math.random()*(15-8))+8;
            this.playerHealth-=attackValue;
        },
        specialAttackMonster(){
            this.heal=false;
            this.gun=false;
            this.currentRound++;
            this.forceRound++;
            this.appearControls='appearOperation';
        },
        attackForce(){
            const attackValue=Math.floor(Math.random()*(33-10))+10;
 
            if (this.theAnswer===this.result){
            this.trueRound++;
            this.monsterHealth-=attackValue;
            }
            else{
            this.falseRound++; 
            this.trueRound=null;
            this.playerHealth-=attackValue;
            }
            this.appearControls=false;
            this.theAnswer='';
            this.rocket=true
            if(this.trueRound ==1){
                this.text='ستكون ضربتك أقوى اذا أجبت بشكل صحيح هيا أرنا مهارتك';
                this.thanks=' أحسنت لقد انطلق صاروخك!';
                this.image="/images/like2.png"
            }
            else if(this.trueRound == 2 ){ 
                this.text='هل يمكنك حل اللغز التالي؟';
                this.thanks=' اجابتك صحيحة هيا بنا نلقنه درسا';
                this.image="/images/like3.png"
            }
            else if(this.trueRound == 3 ){
                this.text='أجب بسرعة لتكون أنت الفائز';
                this.thanks='أنت بطل!';
                this.image="/images/like1.png"
            }
            else if(this.trueRound == 4 ){
                this.thanks='هذا رائع!';
                this.image="/images/like2.png"
            }
        },
        healPlayer(){
            this.currentRound++;
            this.heal=true;
            const healValue=Math.floor(Math.random()*(20-8))+8;
            if (this.playerHealth+ healValue > 100){
                this.playerHealth=100;
            }
            else{
            this.playerHealth+=healValue;
            }
            this.attackPlayer();
        },
        surrender(){
            this.winner='monster'
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
        mayUseSpecialAttack(){
            return this.currentRound % 3 !==0
        },
        mayUseHeal(){
            return this.currentRound % 4 !==0
        },

    }
}
</script>

<style scoped>
#balance{
    padding-left: 9rem;
    max-height: 17rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.game-over{
    background-image: url('/images/backwin2.gif');
}
#solider-right{
    padding-left: 14rem;
}
.center{
    margin: auto;
}
.true{
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid #25da75;
    border-radius: 50%;
    margin-left:15px ;
}
.true:hover{
    border: 2px solid #25da75;

}

p{

    font-size: 20px;
    direction: ltr;
    margin: 1rem;
}
input{
    width: 40px;
    color: #494746;
    font-size: 15px;
    font-weight: bold;
}
dialog{
    cursor: none;
  border: none;
  background: none;
  width: 80%;
  top: 17%;
    background-image:url('/images/back13.gif');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  height: 40rem;

}

.dialog-form{

  direction: rtl;
  margin-left: 4%;
  margin-right: 4% ;

  min-width: 50%;
  min-height: 50%;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5%;

}

.dialog-container{
    padding: 3%;
    margin: auto;
    width: 75%;
    color: #fff;
}
/*
header {
  color: #7d52a0;
  font-size: 25px;
  height: 5rem;
  padding: 0.5rem;
  text-align: center;
}
*/
section {
  width: 95%;
  max-width: 40rem;
  margin: auto;
}
#healthbar {
  width: 75%;}
.healthbar {
      background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 2px );
  width: 150%;
  height: 40px;
  border: 8px solid #494746;
  border-radius: 15px;
  margin: 1rem 0;
  text-align: center;
  font-size: 12px;
}

.healthbar__value {
  border-radius: 10px;
  background-image:url('/images/orange.gif');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.container {
  color: #fff;
  text-align: center;
  padding: 0.5rem;
  border-radius: 12px;
}
.container-play{
    height: 100%;
    width: 100%;
}
#monster {
  float: left;
  width: 40%;
  /*
  background-image:url('/images/monsterback.gif');
  background-position: right;
  background-repeat: no-repeat;*/
}
.container-center{
    margin-left: 13rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 12px;
}
h2{
    margin-right: 1rem;
    }
.container-center img{
    padding-left: 5rem;
}

#player  {
  padding-top: 83px;
  /*background-image:url('/images/blood4.gif');
    background-position:right;
  background-repeat: no-repeat;*/
  float: right;
  width: 35%;
}
#monster img{
    height: 20rem;
    width: 26rem;
}
#player img{
    height: 15rem;
    width: 11rem;
}
#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

}
#controls img{
width: 100px;
height: 100px;
}
#rocket{
padding-top: 18px;
padding-left: 18px;
}

.img{
cursor: pointer;
width: 110px;
height: 110px;
}
#log{
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #494746;
}

.btn{
    cursor:default;
  border: 5px solid #494746;
      background: rgba( 255, 255, 255, 0.4 );
  backdrop-filter: blur( 18px );
  border-radius: 25px;
}
button {
 background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 4px );
  color:#fff;
  border: 5px solid #494746;
  font: inherit;
  margin: 1rem;
  border-radius: 12px;
  width: 7rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background: #a3652c;

  color: #fff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);

}

button:disabled {
  background: rgba(73, 71, 70,0.7);
  color: #7d52a0;
  box-shadow: none;
  cursor: not-allowed;
}


</style>