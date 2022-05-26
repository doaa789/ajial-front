<template>
<teleport to="body">
 <dialog open v-if="dialogClose">
 <div class="dialog-form">
      <div class="dialog-container">

        <button class="btn">وحش الرياضيات</button>
        <button @click="openGame">ابدأ اللعب</button>
        <div class="image">
            <img class="player" src="/images/solider5.gif" alt="solider">
            <div class="div-math">
                <img  class="mathBig" src="/images/math.png" alt="math">
                <div class="image">
                <img  class="math" src="/images/math.png" alt="math">
                <img  class="math" src="/images/math.png" alt="math">
                <img  class="math" src="/images/math.png" alt="math">
                </div>
            </div>
            <img class="monster" src="/images/monster1.gif" alt="solider">
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
 
            dialogClose:true
        };
    },
      methods:{
        openGame(){
               this.$router.push('/PlayGame')
            }
            }
} 
</script>

<style scoped>

dialog{
    cursor: none;
  border: none;
  background: none;
  width: 80%;
  top: 17%;
    background-image:url('/images/back14.gif');
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
.image{
    /*margin-top: 20%;*/
    display: flex;
}
.div-math{
    margin-right: 2rem;
}
.btn{
  margin-right: 12rem; 
    cursor:none;
    color: #494746;
    border: 8px solid #494746;
    width: 18rem;
}
button {
  background: rgba( 255, 255, 255, 0.1);
  backdrop-filter: blur( 4px );
  margin-top: 3%;
  font-family: "NotoSansArabic-SemiBold";
  font-size: 24px;
  color:#494746;
  border: 8px solid #494746;
  margin-right: 15rem; 
  border-radius: 12px;
  width: 10rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background: rgba( 255, 255, 255, 0.4);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}
.math{
    margin-top: 1rem;
    height: 48px;
    width: 48px;
}
.mathBig{
    margin-top: 8rem;
    margin-right: 1rem;
    height: 100px;
    width: 100px; 
}
img{
    height: 16rem;
}
.monster{
    height: 24rem;
    width: 30rem;
    }
/*
.monster{
    margin-right: 9rem;
    margin-top: 3rem;
    width: 7rem;
    height: 7rem;
}
.player{
    width: 9.5rem;
    height: 9.5rem;
}*/
</style>