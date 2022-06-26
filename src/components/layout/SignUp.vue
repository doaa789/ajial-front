<template>
<teleport to="body">
 
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="signup">   
    <p class="title22">أهلا بك في منصة اجيال</p>
    <div class="container">
     <div class="part-right">
    <p class="pragraph">نحن سعيدون جدا باشتراكك معنا,من فضلك أدخل معلوماتك
        <br> لكي تحصل على تجربة استخدام صممت خصيصا لك</p>
      <div class="right-center">
  <div class="the-input">
    <div class="form-control" :class="{invalid:userNameValidity==='invalid'}">
      <input id="user-name" name="user-name" placeholder="اسم المستخدم" type="text" v-model.trim="userName" @blur="validateName" />
      <p v-if="userNameValidity==='invalid'" class="validate">الرجاء التأكد من صحة الاسم</p>
    </div>
    
    <div class="form-control" :class="{invalid:userEmailValidity==='invalid'}">
      <input id="email" name="email" placeholder="البريد الالكتروني" type="email" v-model.trim="email" @blur="validateEmail"/>
      <p v-if="userEmailValidity==='invalid'" class="validate">الرجاء التأكد من صحة البريد الالكتروني</p>
    </div>
    
    <div class="form-control" :class="{invalid:userPassValidity==='invalid'}">
      <input id="password" name="password" placeholder="كلمة المرور" type="password" v-model.trim="password" @blur="validatePassword" />
      <p v-if="userPassValidity==='invalid'" class="validate">الرجاء التأكد من صحة كلمة المرور</p>
    </div>

</div>

<div style="display:grid;color:#7d52a0;">
  <img class="add" src="/images/add6.gif">
    أدخل صورتك:
</div>
    
    </div>

    <base-button class="btn" @click="signup">انشاء حساب</base-button>
    <p class="note">هل أنت مستخدم قديم؟
      <br>بامكانك تسجيل الدخول من 
      <a href="#" @click="logIn">هنا</a></p>
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
        userName:'',
        email:'',
        password:'',
        how:null,
        userNameValidity:'pending',
        userEmailValidity:'pending',
        userPassValidity:'pending',
        dialogClose:true,
error:false,
loading:false,
        user:{
          "name": "ffffffff",
          "email": "sddwd@gmail.co",
          "password": "hjdyt224bb",
          "age": 12,
          "bio": "hthty",
          "images": "dd.png"
          }
        };

    },
     methods:{
        logIn(){
              this.$router.push('/signin');
            },   

          async signup(){
          this.error=null;
          try{
            await this.$store.dispatch('signup',this.user);
            await this.$router.push({path:"/courses"});

          }
          catch(error) {this.error=error;}
          finally{this.loading=false;}
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
          validateEmail(){
          if (this.email ===''){
            this.userEmailValidity='invalid';
          }
          else{
            this.userEmailValidity='valid';
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
  max-width: 65%;
}
.container{
  margin-right: 25%;
    width: 100%;
    display: flex;
    }
.part-right{
  width: 52%;
}
.title22{
    text-align: center;
    margin: 1rem 0rem;
    font-size: 30px;
    color: #7d52a0;
;
    }
.pragraph{
    text-align: center;
    margin-top: 0rem ;
    margin-bottom: 1.5rem ;
    font-size: 15px;
    color: #7d52a0;  
    }
input{
  border-radius: 18px;
  border:1.5px solid #25da75;
  width: 90%;
  margin-bottom: 7%;
  font-size: 16px;
  padding:2% 5%;
  }

  input:focus {
  background-color: rgba(37, 218, 117, 0.9);
  outline: none;
}
.form-control.invalid input{
  border-color: #25da75;
}
.validate{
  text-align: right;
  color: #25da75;
  font-size: 12px;
}

.note{
  margin-left: 18%;
  text-align: center;
  color: #7d52a0;
  font-size: 12px;
}
 a{
   font-size: 17px;
  text-decoration: none;
     color: #25da75;
}
.right-center{
  display: flex;
  width: 100%;
}
.the-input{
  width: 70%;
  margin-left: 0%;
}
.add{
  cursor: pointer;
  height:90px; 
  width:100%;
  background-color: #7d52a0;
  border-radius:50%;
  border:1px solid #25da75 ;
}
.btn{
  margin-right: 25%;
  margin-top: 2%;
}

/*
.part-left{
    display:grid;
    border-right: 1px solid #7d52a0;
    border-right-width: 2px;
    padding-right: 5%;
    width: 40%;
}

.add img{
     float: right;
     width:200%;
     height: 200%;
     
  }
  label {
    color:#fff;
    font-size: 15px;
  
}

input[type='radio'] {
  cursor: pointer;
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}


input[type='radio'] + label {
  font-weight: normal;
}
        submitForm(){
              console.log('Username: ' +this.userName);
              this.userName='';
              console.log('email: ' +this.email);
              this.email='';
              console.log('password: ' +this.password);
              this.password='';
              console.log('radio buttons: '+this.how);
              this.how=null;
              this.dialogClose=false;
        },
*/

</style>