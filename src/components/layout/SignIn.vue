<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="logIn">   
    <p class="title">مرحبا بك مجددا</p>
    
    <div class="form-control" :class="{invalid:userNameValidity==='invalid'}">
      <input id="user-name" name="user-name" placeholder="اسم المستخدم" type="text" v-model.trim="email" @blur="validateName"/>
      <p v-if="userNameValidity==='invalid'" class="validate">الرجاء التأكد من صحة الاسم</p>
    </div>
    <div class="form-control" :class="{invalid:userPassValidity==='invalid'}">
      <input id="password" name="password" placeholder="كلمة المرور" type="password" v-model.trim="password" @blur="validatePassword"/>
      <p v-if="userPassValidity==='invalid'" class="validate">الرجاء التأكد من صحة كلمة المرور</p>
    </div>

      <div class="alert alert-success" v-if="isSuccess">تم تسجيل الدخول بنجاح</div>
  <div class="alert alert-success" v-if="loading">الرجاء الانتظار قليلا.....</div>


    <div>
      <base-button class="btn" @click="logIn">تسجيل الدخول</base-button>
    </div>
    <p class="note">هل انت مستخدم جديد؟<br>بامكانك انشاء حسابك من 
    <a href="#" @click="logUp">هنا</a></p>
    
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import baseDialog from '../ui/BaseDialog.vue';
import axios from "axios";

export default {
  components:{
    baseDialog
  },
  data(){
        return{

        userNameValidity:'pending',
        userPassValidity:'pending',
        dialogClose:true,

              loading: false,
      email:'',
      password:'',
      isSuccess:false
        };
    },
     methods:{
        logUp(){
               this.$router.push('/signup')

            },

        logIn(){
    this.loading= true,
    axios.post('https://glacial-garden-81387.herokuapp.com/api/v1/login', {
    email: this.email,
    password: this.password,
    })
      .then((response) => {
        this.isSuccess=true;
        this.loading= false,
        console.log(response);})
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
           this.$store.commit('change');
           this.dialogClose=false;
      
  }, 

       validateName(){
          if (this.userName ===''){
            this.userNameValidity='invalid';
          }
          else{
            this.userNameValidity='valid';
          }
        },
          validatePassword(){
          if (this.password ===''){
            this.userPassValidity='invalid';
          }
          else{
            this.userPassValidity='valid';
          }

        }
    }
}
</script>

<style scoped>
dialog{
  max-width: 50%;
}
.title{
    text-align: center;
    font-size: 30px;
    color: #7d52a0;
    }

input{
  margin-right: 34%;
  border-radius: 18px;
  border: 1px solid #25da75;
  padding: 1%;
  margin-bottom: 3%;
  font-size: 16px;
  }

  input:focus {
  background-color: rgba(37, 218, 117, 0.9);
  outline: none;
}
.form-control.invalid input{
  border-color: #25da75;
}
.validate{
  text-align: center;
  color: #25da75;
  font-size: 12px;
}
.note{
  text-align: center;
  color: #7d52a0;
  font-size: 12px;   
}

 a{
   font-size: 17px;
   text-decoration: none;
   color: #25da75;
}
.btn{
  margin-top: 1%;
  margin-right: 37%;
}
</style>