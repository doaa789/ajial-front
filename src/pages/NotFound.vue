<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="logIn">   
    <p class="title11">عذرا ....</p>
    <div style="display:flex;margin-right: 27% ;"> 
     <img class="notFound" src="../../public/images/notfound.png">
     <img class="notFound" src="../../public/images/thinking.png">
    </div>
    <p class="pragraph">عليك تسجيل الدخول أولا<br>للوصول لهذا القسم</p>
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import baseDialog from '../components/ui/BaseDialog.vue';

export default {
  components:{
    baseDialog
  },
  data(){
        return{
        dialogClose:true,
        };
    },
     methods:{
        
    }
}
</script>

<style scoped>
dialog{
  max-width: 45%;
}
.title11{
    text-align: center;
    font-size: 30px;
    color: #7d52a0;
    width: 50%;
    margin-right: 27%;
    }
.pragraph{
    text-align: center;
    margin-top: 0rem ;
    margin-bottom: 1.5rem ;
    font-size: 15px;
    color: #7d52a0;  
    }
.notFound{
height:8rem ;
width:8rem ;
margin-bottom: 1rem;
}
</style>