<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="closeProfile">   
    <div class="profile-container">
        <div class="right">
            <div class="row">           
                <div class="my-courses">
                    <h4 style="margin-right: 15%;">كورساتي:</h4>
                    <div class="card">سكراتش للاطفال
                        <img style="width:110px;height:90px" src="/images/scratch.jpg" alt="">
                    </div>
                </div>

                <div class="my-books">
                    <h4 style="margin-right: 25%;">كتبي:</h4>
                    <div class="card">ابنة السلطان
                        <img style="width:130px;height:90px" src="/images/son.jpg" alt="">
                    </div>
                </div>
            </div> 

            <div class="row">
                <div class="my-courses">
                    <h4  style="margin-right:-2%;">انجازي في الكورسات:</h4>
                    <div class="achivment">
                        <img class="reward" src="/images/reward1.png" >
                    </div>

                 <h4>بطل الكورسات:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:3%">
                            <img class="top-icon" src="/images/trophy.png" alt="">
                            <img class="top" src="/images/avatar.png" alt="">
                            <p>عمر</p>
                        </div>
                    </div>

                </div>

                <div class="my-books">

                    <h4>انجازي في الكتب:</h4>
                    <div class="achivment">
                        <img class="reward" src="/images/reward10.png" >
                        <img class="reward" src="/images/reward9.png" >
                    </div>

                    <h4 style="margin-right:10%;">بطل الكتب:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:3%">
                            <img class="top-icon" src="/images/trophy5.png" alt="">
                            <img class="top" src="/images/avatar8.png" alt="">
                        <p>سالي</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="left">
            <img class="circle" src="../components/layout/Logo/avatar10.png" alt="">
            <h3>سارة العوا</h3>
            <p>أنا ذكية جدا وأستطيع حل الألغاز بسهولة<br>أحب الرياضيات والعمليات الحسابية</p>
        </div>
    </div>
    
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import baseDialog from '../components/ui/BaseDialog.vue'
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
    padding: 4%;
  display: flex;
  height: 30rem;

}
.right{
    display: grid;
    width: 50%;
}
.left{
    box-shadow:0 3px 6px rgb(107, 93, 93);
    color:#fff;
    text-align: center;
    background-image: url('../assets/2.png');
    background-position-x: 52%;
    background-position-y: 70%;
    background-repeat: no-repeat;
    background-size: 65rem;
    width: 50%;
    border-radius: 15px;
}
.circle {
  height: 150px;
  width: 150px;
  margin-top:18%;
  margin-right:3%;
  border-radius: 50%;
  background-color: #fff;
  border:15px solid #fff;
}
.left p{
    margin-top: 0;
    font-size: 15px;

}
.left h3{
    color: #25da75;
    margin-top: 0;
    margin-bottom: 0;
}
.right h4{
    color: #25da75;
    margin-top:3%;
    margin-bottom: 0%;
    margin-right:5%;
    max-height: 50px;
}
.my-courses,.my-books{
    height:180%;
    margin: 6% 0% 0% 5%;
    padding-right:6%;
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
    border:2px solid #25da75;
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