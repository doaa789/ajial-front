<template>
    <header v-if="this.$store.state.tabikha">
        <nav>
          <div class="logo">
            <img src="./Logo/logo2.png" >      
          </div>

           <ul>
             <li><router-link to="/tabikha">لماذا طابقها؟</router-link></li>
              <li><router-link to="/tabikha/HowToWork">كيف تعمل؟</router-link></li>
              <li><router-link to="/tabikha/ProductCenter">مراكز الشراء</router-link></li>
              <li><router-link to="/" @click="this.$store.state.tabikha=false">عودة الى أجيال</router-link></li>
           </ul>

            <div v-if="this.$store.state.enterd==='valid'" class="user-enter">
              <img src="./Logo/avatar10.png" style="cursor:pointer;" @click="appearProfile"> 
              <button @click="this.$store.state.enterd=''">تسجيل خروج</button>      
            </div>

        </nav>>
    </header>
    <header v-else>
        <nav>
          <div class="logo">
            <img src="./Logo/logo.png" >      
          </div>

           <ul>
             <li><router-link to="/">الرئيسية</router-link></li>
              <li><router-link to="/courses">كورسات</router-link></li>
              <li><router-link to="/library">كتب</router-link></li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">العاب</a>
                <div class="dropdown-content">
                    <router-link to="/TheSecretIsland">جزيرة الأسرار</router-link>
                    <router-link to="/games">وحش الرياضيات</router-link>
                    <router-link to="/tabikha" @click="this.$store.state.tabikha=true">طابقها</router-link>
                </div>
              </li>
           </ul>

            <div v-if="this.$store.state.enterd==='valid'" class="user-enter">
              <img src="./Logo/avatar10.png" style="cursor:pointer;" @click="appearProfile"> 
              <button @click="this.$store.state.enterd=''">تسجيل خروج</button>      
            </div>

             <div v-else class="user-sign-up">
              <img src="./Logo/hello.gif" > 
              <button  @click="logUp">انشاء حساب</button>      
            </div>
        </nav>


    </header>
</template>

<script>
export default {
     methods:{
        logUp(){
               this.$router.push('/signup');
            },
        appearProfile(){
          this.$router.push('/MyProfile');
        }
    }, 
}
</script>

<style scoped>
header{
  direction: rtl;
  height:10%;
}

nav{
  width: 100%;
  height: 100%;
  display: flex;
}

.logo{
  width: 10%;
  max-height: 100%; 
  margin:1.25% 3%;
  
}
.logo img{
  float: left;
  width: 100%;
  max-height: 200%;
  cursor: pointer;
}

ul{
  overflow: hidden;



  width: 40%;
  list-style: none;
  margin: 0%;
  padding-right: 1%;
  display: flex;
  justify-content:right;
  align-items: center;
  
}

li{
  min-width: 17%;
  margin-left: 5%;
  }
a{
  text-decoration-line:none ;
  background: transparent;
  cursor: pointer;
  color: #ffffff;

}
a:hover,
a:active,
a.active{
  color: #25da75;
  background-color: #ffffff;
  border-right:7px solid #ffffff;
  border-left:7px solid #ffffff;
  border-radius: 5px;
}


.user-sign-up,
.user-enter{
  width: 12%;
  display: grid;
  max-height: 100%; 
  margin:1% 35% 1% -12%;
  }
  .user-sign-up img,
  .user-enter img{
    height: 90%;
     width: 40%;
     border-radius: 50%;
  }
  .user-sign-up button,
  .user-enter button{
    margin-top: 0.5%;
    font-size: 10px;
    max-width: 40%;
    font-weight: bold;
  border: 1px solid #7d52a0;
  background-color: #ffffff;
  color: #25da75;
  cursor: pointer;
  border-radius: 30px;
  }

  .user-enter img{
    border:3px solid #ffffff;
  }
  
button:hover,
button:active {
  border-color: #25da75;
  background-color: #25da75;
  color: #7d52a0;
  
}


.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
}



li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 15px;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #25da75;
  border-radius: 15px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>