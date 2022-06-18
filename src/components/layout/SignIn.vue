<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="logIn">   
    <p class="title">مرحبا بك مجددا</p>
    
    <div class="form-control" :class="{invalid:emailValidity==='invalid'}"> 
      <input  placeholder="بريد المستخدم" type="text" v-model.trim="user.email" @blur="validateEmail"/>
      <p v-if="emailValidity==='invalid'" class="validate">الرجاء التأكد من صحة البريد</p>
    </div>
    <div class="form-control" :class="{invalid:userPassValidity==='invalid'}">
      <input id="password" name="password" placeholder="كلمة المرور" type="password" v-model.trim="user.password" @blur="validatePassword"/>
      <p v-if="userPassValidity==='invalid'" class="validate">الرجاء التأكد من صحة كلمة المرور</p>
    </div>

      <p style="color:red" v-if="error">{{error}}</p>
      <p v-if="loading">.....الرجاء الانتظار قليلا</p>


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

export default {
  components:{
    baseDialog
  },
  data(){
        return{
        emailValidity:'pending',
        userPassValidity:'pending',
        dialogClose:true,

        user:{
          email:null,
          password:null,
        },
        loading: false,
        error:false,
        isSuccess:false
        };
    },
     methods:{
             validateEmail(){
          if (this.email ===''){
            this.emailValidity='invalid';
          }
          else{
            this.emailValidity='valid';
          }
        },
          validatePassword(){
          if (this.password ===''){
            this.userPassValidity='invalid';
          }
          else{
            this.userPassValidity='valid';
          }

        },
        logUp(){
               this.$router.push('/signup')
            },

          async logIn(){
          this.error=null;
          try{
            await this.$store.dispatch('login',this.user);
            await this.$router.push({name:"posts"});
          }
          catch(error) {this.error=error;}
          finally{this.loading=false;}
           this.$store.commit('change');
           this.dialogClose=false;
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
    width: 50%;
    margin-right: 25%;
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
/*   
import axios from "axios";


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



              async logIn(){
          this.error=null;
          try{
            await this.$store.dispatch(type:'login',this.user);
            await this.$router.push({name:posts});
          }
          catch(error) {this.error=error;}
          finally{this.loading=error;}
           this.$store.commit('change');
           this.dialogClose=false;
           }

 */
</style>