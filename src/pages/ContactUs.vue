<template>
<teleport to="body">
 <dialog open v-if="dialogClose">
 <div class="dialog-form">
      <div class="dialog-container">
    <header><br><br></header>
    <div id="game">
        <div class="container-play">
      <section id="monster">
        <img src="/images/monster.gif" alt="monster">
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterBarStyles">
               {{ monsterHealth }}%</div>
        </div>
      </section>
      <section id="player">
        <img src="/images/solider3.gif" alt="solider">
        <div class="healthbar">
          <div class="healthbar__value" :style="playerBarStyles">
               {{ playerHealth }}%</div>
        </div>
      </section>
      </div>

        <section id="log" class="container" v-if="winner">
            <h2>انتهت اللعبة !</h2>

            <div v-if="winner=='monster'">
                <img  class="img" src="/images/dislike1.png" alt="true">
                <h3>للأسف لقد خسرت حظا أوفر في المرة القادمة</h3>
            </div>
            <div v-else-if="winner=='player'">
                <img  class="img" src="/images/like1.png" alt="true">
                <h3>تهانينا لقد فزت</h3>
            </div>

            <h3 v-else>حصل تعادل بينك وبين الوحش</h3>

            <button class="center" @click="startGame">العب مجددا</button>
        </section>

        <section v-else>
            <section id="controls" v-if="appearControls==='appearControls'">

                <button @click="attackMonster">
                    <img src="/images/gun3.gif" alt=""><br>
                </button>

                <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster">
                    <img id="rocket" src="/images/rocket.gif" alt=""><br>
                </button>


                <button :disabled="mayUseHeal" @click="healPlayer">
                    <img src="/images/heal2.gif" alt=""><br>
                </button>

                <button @click="surrender">
                    <img src="/images/surrender3.gif" alt=""><br>
                </button>
        </section>

        <section id="log" class="container" v-else-if="appearControls==='appearOperation'">
            <div class="btn">
                <p>
                    لقد نصب لك الوحش الماكر فخا <br>عليك ايجاد الحل بسرعة لتنجو منه وتضربه بقوة
                    <br><br>
                    {{operation}}
                        <input type="number" v-model="theAnswer">
                        <img  class="true" src="/images/check.png" alt="true" @click="attackForce">
                    </p>
            </div>
        </section>

        <section id="log" class="container" v-else>
                    <div class="btn">
                        <div v-if="trueAnswer">
                            <img  class="img" src="/images/like2.png" alt="true" @click="appearControls='appearControls'">
                            <br>هذا رائع!
                        </div>
                    </div>
        </section>
        </section>

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
            operation:null, 
            result:null,
            theAnswer:'',
            winner:null,
            currentRound:0,
            forceRound:0,
            playerHealth:100,
            monsterHealth:100,
            appearControls:'appearControls',
            trueAnswer:false,
            dialogClose:true
        };
    },
    watch:{
        forceRound(value){
            if(value ==1){
                this.operation='45 % 9 =';
                this.result=5
            }
            else if(value == 2 ){
                this.operation='4 + 13 =';
                this.result=17
            }
            else if(value == 3 ){
                this.operation='32 - 6 =';
                this.result=26
            }
            else if(value == 4 ){
                this.operation='8 * 7 =';
                this.result=56
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
            this.winner=null;
            this.currentRound=0;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.appearControls='appearControls';
            this.operation=null; 
            this.result=null;
            this.theAnswer='';
            this.currentRound=0;
            this.forceRound=0;
            this.trueAnswer=false;
        },
        attackMonster(){
            this.currentRound++;
            const attackValue=Math.floor(Math.random()*(12-5))+5;
            this.monsterHealth-=attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue=Math.floor(Math.random()*(15-8))+8;
            this.playerHealth-=attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            this.forceRound++;
            this.appearControls='appearOperation'

        },
        attackForce(){
            if (this.theAnswer===this.result){
            const attackValue=Math.floor(Math.random()*(25-10))+10;
            this.monsterHealth-=attackValue;
            this.trueAnswer=true;
            this.appearControls=false;
            this.theAnswer=''
            }
            this.attackPlayer();

        },
        healPlayer(){
            this.currentRound++;
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
    direction: ltr;
}
input{
    width: 40px;
    color: #7d52a0;
    font-size: 15px;
    font-weight: bold;
}
dialog{
  border: none;
  background: none;
  width: 80%;
  top: 7%;
}

.dialog-form{
  direction: rtl;
  margin: 4% auto;
  min-width: 50%;
  min-height: 50%;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5%;
  background: #fff;
  background-image:
                    url('/images/back1.gif');
  background-position:bottom,
      bottom right;
  background-repeat: no-repeat;
  background-size: 66rem;

}

.dialog-container{
    padding: 3%;
    margin: auto;
    width: 75%;
    color: #25da75;
}

header {
  color: #7d52a0;
  font-size: 25px;
  height: 5rem;
  padding: 0.5rem;
  text-align: center;
}

section {
  width: 95%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 5px solid #25da75;
  border-radius: 15px;
  margin: 1rem 0;
  text-align: center;
  font-size: 12px;
}

.healthbar__value {
  border: 6px solid #7d52a0;
  border-radius: 10px;
  background-color:#7d52a0;
  width: 100%;
  height: 100%;
}

.container {
  color: #7d52a0;
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
  width: 50%;
  background-image:url('/images/monsterback.gif');
    background-position:left bottom;
  
}

#player  {
  padding-top: 18px;
  background-image:url('/images/blood4.gif');
  background-repeat: no-repeat;
  float: right;
  width: 30%;
}
#monster img{
    height: 10rem;
    width: 25rem;
}
#player img{
    padding-right: 20px;
    height: 9rem;
    width: 11rem;
}
#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;

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
  padding-top: 4rem;

}
.btn{
    cursor:default;
}
button {
  border: 3px solid #7d52a0;
  background-color: #25da75;
  color: #7d52a0;
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
  background-color: #7d52a0;
  color: #fff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);

}

button:disabled {
  border: 3px solid #7d52a0;
  background-color: #c2bec5;
  color: #7d52a0;
  box-shadow: none;
  cursor: not-allowed;
}


</style>

