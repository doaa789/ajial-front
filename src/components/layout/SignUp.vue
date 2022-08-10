<template>
<teleport to="body">
 
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="signUp">   
    <p class="title22">أهلا بك في منصة اجيال</p>
    <div class="container">
     <div class="part-right">
    <p class="pragraph">نحن سعيدون جدا باشتراكك معنا,من فضلك أدخل معلوماتك
        <br> لكي تحصل على تجربة استخدام صممت خصيصا لك</p>
      <div class="right-center">
        <div class="the-input" v-if="!next">
          <div class="form-control" :class="{invalid:userNameValidity==='invalid'}">
            <input class="largeInput" id="new-user-name" name="user-name" placeholder="اسم المستخدم" type="email" v-model.trim="user.name" @blur="validateEmail"/>
          </div>
          <div class="form-control" :class="{invalid:userEmailValidity==='invalid'}">
            <input class="largeInput" id="email" name="email" placeholder="بريد المستخدم" type="text" v-model.trim="user.email" @blur="validateName" />
          </div>
          <div class="form-control" :class="{invalid:userPassValidity==='invalid'}">
            <input class="largeInput" id="password" name="password" placeholder="كلمة المرور" type="password" v-model.trim="user.password" @blur="validatePassword" />
          </div>          
      </div>

      <div v-else>
        <div class="form-control" style="margin-right: 32%;
  margin-bottom: 3%;
        ">
          <label>أدخل عمرك الحالي :</label>
            <input class="smallInput" id="age" name="age" type="number" v-model.trim="user.age"/>
        </div>
          
          <div class="form-control" style="margin-right: 12%;">
          <textarea v-model.trim="user.bio" placeholder="عرفنا عن نفسك قليلا:" ></textarea>
          </div>
      </div>
     <div v-if="!next" style="width:25%">
      <div style="display:grid;color:#7d52a0;">
        <img class="add" src="/images/add6.gif">
          أدخل صورتك:
      </div>
      </div>
    </div>
      <p style="color:red" v-if="error">{{error}}</p>
      <img class="loading" v-if="loading" src="../../.././public/images/Loader.gif">

    <base-button class="btn" v-if="!next" @click="next=1">التالي</base-button>
    <base-button class="btn" v-else @click="signUp">انشاء حساب</base-button>
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
        next:0,
        userNameValidity:'pending',
        userEmailValidity:'pending',
        userPassValidity:'pending',
        dialogClose:true,
        error:false,
        loading:false,
        user:{
          name: null,
          email: null,
          password: null,
          age: null,
          bio: null,
          images:null
          },
        };

    },
     methods:{
        logIn(){
              this.$router.push('/signin');
            },   

          async signUp(){
          this.error=null;
          try{
            this.loading=true;
            await this.$store.dispatch('signUp',this.user);
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

  textarea{
 border-radius: 28px;
  width: 110%;
  height: 80px;
  margin-right:6%;
  }
  .largeInput,.smallInput,textarea{
  border-radius: 18px;
  border:1.5px solid #25da75;
  margin-bottom: 7%;
  font-size: 16px;
  padding:2% 5%;
  } 
.largeInput{
  width: 90%;
}
.smallInput{
  width: 26%;
  margin-right: 5%;
  }
  input:focus,textarea:focus {
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
label{
  color: #7d52a0;
  min-width:120px;
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
.loading{
  width:200px;
  height:120px;
  margin-right:30%;
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