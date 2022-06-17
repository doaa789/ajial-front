<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="closeProfile">   
    <div class="profile-container">
        <div class="right">
            <div class="row">           
                <div class="my-courses" style=" margin-top:-3%">
                    <h4 style="margin-right: 15%;margin-top:-15%">كورساتي:</h4>
                    <div class="card"  style="margin-top:-8%;">سكراتش 
                        <img style="width:110px;height:90px" src="/images/scratch.jpg" alt="">
                    </div>
                    <h4  style="margin-right:-2%; margin-top:-11%;margin-right: 4%;">انجازتي :</h4>
                    <div class="achivment" style="margin-top:-8%">
                        <img class="reward" src="/images/reward1.png" >
                    </div>

                 <h4 style="margin-top:-3%;">أوائل الكورسات:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:-3%">
                            <img class="top-icon" src="/images/trophy1.png" alt="">
                            <img class="top" src="/images/member6.jpg" alt="">
                            <p>حسنية</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" src="/images/trophy3.png" alt="">
                            <img class="top" src="/images/member7.jpg" alt="">
                            <p>ياسر</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" src="/images/trophy2.png" alt="">
                            <img class="top" src="/images/member.jpg" alt="">
                            <p>زهرة</p>
                        </div>
                    </div>
            </div> 
                <div class="my-books" style="margin-top:-3%">
                    <h4 style="margin-right: 25%;margin-top:-15%">كتبي:</h4>
                    <div class="card" style="margin-top:-8%">ابنة السلطان
                        <img style="width:110px;border-radius: 5px;height:90px" src="/images/son1.jpg" alt="">
                    </div>
                    
                    <h4 style="margin-top:-11%">انجازي في الكتب:</h4>
                    <div class="achivment" style="margin-top:-8%">
                        <img class="reward" src="/images/reward10.png" >
                        <img class="reward" src="/images/reward9.png" >
                    </div>

                    <h4 style="margin-right:7%;margin-top:-3%" >أوائل الكتب:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:-3%">
                            <img class="top-icon" src="/images/trophy1.png" alt="">
                            <img class="top" src="/images/avatar.png" style="background-color:darkgrey">
                        <p>اسماء</p>
                        </div>
                         <div class="row" style="margin-top:-12%">
                            <img class="top-icon" src="/images/trophy3.png" alt="">
                            <img class="top" src="/images/member5.jpg" alt="">
                        <p>حمدية</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" src="/images/trophy2.png" alt="">
                            <img class="top" src="../../../public/images/avatar6.png"  style="background-color:lightsalmon">
                        <p>نوري</p>
                        </div>
                    </div>
                </div>
           


            </div>
        </div>
        <div class="left">
            <img class="circle" src="./Logo/avatar10.png" alt="">
            <h2>سارة العوا</h2>
            <p>أنا ذكية جدا وأستطيع حل الألغاز بسهولة<br>أحب الرياضيات والعمليات الحسابية</p>
        </div>
    </div>
    
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import baseDialog from '../ui/BaseDialog.vue'
export default {
  components:{
    baseDialog
  },
  data(){
        return{
        dialogClose:true
        };
    },
     methods:{
         closeProfile(){
           this.dialogClose=false;    
        },      
    }
}
</script>

<style scoped>
dialog{
  max-width: 70%;
}
.profile-container{
    padding:6% 2% 6% 2%;
  display: flex;
  height: 30rem;

}
.right{
    display: grid;
    width: 50%;
}
.left{
    box-shadow:0 3px 6px rgb(107, 93, 93);
    color:#7d52a0;
    text-align: center;
    background-image: url('../../assets/2.png');
    background-position-x: 52%;
    background-position-y: 70%;
    background-repeat: no-repeat;
    background-size: 65rem;
    width: 50%;
    height:120%;
    margin-top: -4%;
    border-radius: 15px;
}
.circle {
  height: 200px;
  width: 200px;
  margin-top:11%;
  margin-right:3%;
  border-radius: 50%;
    background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 18px );
  padding: 3%;
}
.left p{
    margin-top: 0;
    font-size: 18px;

}
.left h2{
    margin-top: 1%;
    margin-bottom: 0;
}
.right h4{
    color: #7d52a0;
    margin-top:3%;
    margin-bottom: 0%;
    margin-right:5%;
    max-height: 50px;
}
.my-courses,.my-books{
    height:224%;
    margin: 6% 0% 3% 5%;
    padding:8%;
    box-shadow:0 1px 6px rgb(116, 97, 97);
    border-radius: 15px;
    width: 50%;
    display: grid;

}
.achivment,.row{
    display: flex;
}
.reward{
    margin-right: 1%;
    height: 50px;
    width: 50px;
}
.card{
    text-align: center;
    font-size: 15px;
    margin:2%;
    padding: 0%;
    width: 70%;
    height: 100%;
    color: #7d52a0;
}
.top{
    border:2px solid #7d52a0;
}
.top,.top-icon{
    width:42px;
    height:42px;
    border-radius:50%;
    padding:1%;
    margin-left: 3%;
}
.card p{
    margin-top: 0%;
    margin-right: 8%;
}
</style>