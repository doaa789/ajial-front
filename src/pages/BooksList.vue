<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose">
  <template v-slot:form @submit.prevent="submitForm">
    <div class="container">
     <div class="part-right">
      <p class="title">تصنيف الكتب</p>
      <div class="right-center">

        <label class="container-radio" @click="this.searchBook='yesSearch'">البحث عن اسم الكتاب<input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
        </label>

        <label class="container-radio" >قصص
        <input type="radio" name="radio" @click="this.searchBook='noSearch'">
        <span class="checkmark"></span>
        </label>
        
        <label class="container-radio" v-for="type in types" :key="type.id">{{type}}
        <input type="radio" name="radio" >
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">

      <div v-if="searchBook==='yesSearch'">
        <p class="note">اختر تصنيف الكتاب الذي تريده<br> او ابحث عن اسمه هنا
           <img class="search-img" src="/images/search.png" alt="search">
         </p>
        
        <div class="form-control" :class="{invalid:userNameValidity==='invalid'}">
          <div class="search-section">
            <input id="search-name" name="search-name" placeholder="اسم الكتاب" type="text" v-model.trim="userName" @blur="validateName" v-model="search"/>

          </div>
         <p v-if="userNameValidity==='invalid'" class="validate">الرجاء التأكد من صحة اسم الكتاب</p>
        </div>

        <div class="one-story-container" v-if="search">
          <div class="img-container"
            v-for="book in filteredBooks" 
            :key="book.id">
            <img class="story-img"  :src="`/images/${book.image}`" :alt="book.name">
            <div class="overlay">
              <div class="text">
                <h5>اسم الكتاب</h5>
                <p>{{book.name}}</p>
                <h5>لمحة عن الكتاب</h5>
                <p>{{book.description}}</p>
                <button class="btn"> تحميل</button>
              </div>
            </div>
          </div>            
        </div>

        <div v-else>
          <img  class="img-container-icon" src="/images/book5.png" alt="book">
        </div>

      </div>

      <div class="stories" v-else-if="searchBook==='noSearch'">
        <div class="routing">الكتب > قصص</div>
        <div class="story-container">
          <div class="img-container"
          v-for="book in books" 
          :key="book.id">
              <img class="story-img"  :src="`/images/${book.image}`" :alt="book.name">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{book.name}}</p>
                    <h5>لمحة عن الكتاب</h5>
                    <p>{{book.description}}</p>
                    <button class="btn"> تحميل</button>
                  </div>
              </div>
          </div>            
      </div>

    </div>
    </div>
    </div>
  </template>
 </base-dialog>
</teleport>
</template>

<script>
import sourceData from '../library.json'
export default {

  data(){
        return{
        types:['لغات','روبوتيك','حساب ذهني','برمجة'],
        books:sourceData.books, 
        search:'',        
        searchBook:'yesSearch',
        userName:'',
        radio:null,
        userNameValidity:'pending',
        dialogClose:true
        };
    },
     methods:{  
        submitForm(){
              console.log('Username: ' +this.userName);
              this.userName='';
              console.log('radio buttons: '+this.radio);
              this.radio=null;
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
    },
    computed:{
      filteredBooks(){
        return this.books.filter(book => book.name.includes(this.search))
      }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    }

.part-right{
    width: 25%;
}

.title{
    padding-right: 1.5%;
    margin: 1rem 0rem;
    font-size: 20px;
    color: #7d52a0;
    }

.part-left{
    display:grid;
    border-right: 1px solid #7d52a0;
    border-right-width: 2px;
    padding-right: 5%;
    width: 70%;
}

.search-section{
 display: flex;
}
.search-img{
 margin-right: 2%;
 margin-top: 2%;

}
/*
span{
 cursor: pointer;
 margin-right: 2%;
 border: 1px solid #25da75;
 border-radius: 50%;
 padding-top: 2%;
 padding-right: 2%;
 padding-left:2%;
}

span:hover{
 border: 4px solid #25da75;

}
*/
.note{
  text-align: center;
  color: #7d52a0;
  font-size: 20px;
}
#search-name{
  margin-right: 15%;
  border-radius: 18px;
  border:1px solid #25da75;
  width: 65%;
  font-size: 16px;
  padding:2% 5%;
  }

  #search-name:focus {
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

.stories{
  display: grid;
  height: 100%;
  width: 100%;
}

.routing,label {
    color:#7d52a0;
    font-size: 15px;
}

.story-container{
  width: 100%;
  height: 60%;
  display:flex;
}
.one-story-container{
  margin-top: 8%;
  width: 100%;
  height: 40%;
  display:flex;
}
.story-img{
  object-fit: cover;
  width: 100%;
  margin: 1%;
  border-radius: 5%;
  height: 100%;
}


.img-container {
  position: relative;
  width: 23%;
  margin: 1%;
  height: 100%;
}

.img-container-icon {
  position: relative;
  width: 33%;
  margin-top: 1%;
  height: 145%;
  margin-right:30% ;
}

.overlay {
  border-radius: 5%;
  position: absolute;
  bottom:100%;
  left: 0;
  right: 0;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 18px );
  overflow: hidden;
  width: 101%;
  height:0%;
  transition: .5s ease;
}

.img-container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  position: absolute;
  height: 100%;
  top: 58%;
  left: 42%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text p{
  color: #fff;
  font-size: 10px;
  margin: 0;
}
.text h5{
  font-size: 12px;
  color: #7d52a0;
  margin:0;
}
.btn {
  background-color: #fff;
  border-radius: 5px;
  border:none;
  color: #7d52a0;
  padding: 2px 15px;
  cursor: pointer;
  font-size: 15px;
  font-weight:bold;
}

/* Darker background on mouse-over */
.btn:hover {
  font-size: 20px;
  background-color: #25da75;
}
/* The container */
.container-radio {
  display: block;
  position: relative;
  padding-right: 17%;
  margin-bottom: 12%;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
.container-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1%;
  right: 0;
  height: 20px;
  width: 20px;
  background-color: #25da75;
  border-radius: 50%;
}

/* On mouse-over, add  so green background color */
.container-radio:hover input ~ .checkmark {
  background-color: rgba(3, 167, 121, 0.9);
}

/* When the radio button is checked, add a green background */
.container-radio input:checked ~ .checkmark {
  background-color: #25da75;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container-radio .checkmark:after {
  left: 5.5px;
  bottom: 6px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #7d52a0;
}
</style>