<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="closeProfile">   
    <div class="profile-container">
        <div class="right">
            <div class="row">           
                <div class="my-courses" style=" margin-top:-3%">
                    <h4 style="margin-right: 15%;margin-top:-15%">دوراتي:</h4>
                    <div class="card"  style="margin-top:-8%;">سكراتش 
                        <img style="width:110px;height:90px" src="/images/scratch.jpg" alt="">
                    </div>
                    <h4  style="margin-right:-2%; margin-top:-11%;margin-right: 4%;">أوسمتي :</h4>
                    <div class="achivment" style="margin-top:-8%">
                        <img class="reward" src="/images/reward9.png" >
                        <div class="rewardNumber">{{$store.state.courseReward}}</div>
                    </div>

                 <h4 style="margin-top:-3%;">أوائل الدورات:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:-3%">
                            <img class="top-icon" :src="$store.state.exellentStudentsCourses[0].trophy">
                            <img class="top" :src="$store.state.exellentStudentsCourses[0].image">
                            <p>{{$store.state.exellentStudentsCourses[0].firstName}}</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" :src="$store.state.exellentStudentsCourses[1].trophy">
                            <img class="top" :src="$store.state.exellentStudentsCourses[1].image">
                            <p>{{$store.state.exellentStudentsCourses[1].firstName}}</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" :src="$store.state.exellentStudentsCourses[2].trophy">
                            <img class="top" :src="$store.state.exellentStudentsCourses[2].image">
                            <p>{{$store.state.exellentStudentsCourses[2].firstName}}</p>
                        </div>
                    </div>
            </div> 
                <div class="my-books" style="margin-top:-3%">
                    <h4 style="margin-right: 25%;margin-top:-15%">كتبي:</h4>
                    <div class="card" style="margin-top:-8%">ابنة السلطان
                        <img style="width:110px;border-radius: 5px;height:90px" src="/images/son1.jpg">
                    </div>
                    
                    <h4 style="margin-top:-11%">أوسمتي :</h4>
                    <div class="achivment" style="margin-top:-8%">
                        <img class="reward" src="/images/reward10.png" >
                        <div class="rewardNumber">{{$store.state.bookReward}}</div>

                    </div>

                    <h4 style="margin-right:7%;margin-top:-3%" >أوائل الكتب:</h4>
                    <div class="card">
                        <div class="row" style="margin-top:-3%">
                            <img class="top-icon" :src="$store.state.exellentStudentsBooks[0].trophy">
                            <img class="top" :src="$store.state.exellentStudentsBooks[0].image" style="background-color:darkgrey">
                        <p>{{$store.state.exellentStudentsBooks[0].firstName}}</p>
                        </div>
                         <div class="row" style="margin-top:-12%">
                            <img class="top-icon" :src="$store.state.exellentStudentsBooks[1].trophy">
                            <img class="top" :src="$store.state.exellentStudentsBooks[1].image">
                        <p>{{$store.state.exellentStudentsBooks[1].firstName}}</p>
                        </div>
                        <div class="row" style="margin-top:-12%">
                            <img class="top-icon" :src="$store.state.exellentStudentsBooks[2].trophy">
                            <img class="top" :src="$store.state.exellentStudentsBooks[2].image" style="background-color:peru">
                        <p>{{$store.state.exellentStudentsBooks[2].firstName}}</p>
                        </div>
                    </div>
                </div>
           


            </div>
        </div>
        <div class="left">
            <div class="profileBack">
            <img class="circle" :src="$store.state.contact.image" alt="">
            <h2>{{this.myname}}</h2>
            <p>أنا ذكية وأحب حل الألغاز كثيرا</p>
            <p>{{this.mybio}}</p>
        </div></div>
    </div>
    
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import repository from '../../api/repository';
import baseDialog from '../ui/BaseDialog.vue'
export default {
  components:{
    baseDialog
  },
  data(){
        return{
        dialogClose:true,
        myname:null,
        mybio:null,
        myage:null,
        };
    },
      created () {
        this.getProfile()
      },
      methods:{
        async getProfile () {
          const {data} = await repository.getProfile();
          this.myname=data.data.name;
          this.mybio=data.data.student.bio;
        },
         closeProfile(){
           this.dialogClose=false;    
        },      
    }
}
</script>

<style scoped>
dialog{
    cursor:default;
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
    color:#7d52a0;
    text-align: center;
    background-image: url('../../assets/back1.png');
    background-position-x: 50%;
    background-position-y: 7%;
    background-repeat: no-repeat;
    background-size: 65rem;
    width: 50%;
    height:120%;
    margin-top: -4%;
    border-radius: 15px;
}
.profileBack{
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur(19px );
    height:101%;border-radius: 15px;
    box-shadow:0 3px 6px rgb(107, 93, 93);
}
.circle {
  height: 205px;
  width: 205px;
  margin-top:11%;
  margin-right:3%;
  border-radius: 50%;   
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur(28px );
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
    color:#7d52a0;

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
    margin-right:21%;
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
    color:#7d52a0;

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
.rewardNumber{
    border:2px solid #25da75;
    color:#7d52a0;
    background:rgba(189, 181, 181, 0.302);
    font-size:10px;
    font-weight: bold;
    border-radius: 50%;
    height: 42%;
    padding: 0% 4%;
    margin-right: -45%;
}
/*
background-image: url('../../assets/2.png');
    background-position-x: 52%;
    background-position-y: 70%;
        background-image: url('../../assets/3.png');
    background-position-x: 74%;
    background-position-y: 60%;
*/ 
</style>