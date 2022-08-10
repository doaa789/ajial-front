<template>
<teleport to="body">
 <base-dialog open v-if="dialogClose && $store.getters.authenticated">
  <template v-slot:form>
    <div class="container">
     <div class="part-right">
      <p class="title">تصنيف الكتب</p>
      <div class="right-center">

        <label class="container-radio" @click="this.searchBook='yesSearch'">البحث عن اسم الكتاب
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
        </label>
 
        
        <label class="container-radio" v-for="classifier in classifiers" :key="classifier.id"  @click="this.classifierSelect=classifier.name">{{classifier.name}}
        <input type="radio" name="radio" @click="this.searchBook='noSearch'">
        <span class="checkmark"></span>
        </label>

    </div>
    </div>

    <div class="part-left">

      <div v-if="searchBook==='yesSearch'">
        <p class="note">اختر تصنيف الكتاب الذي تريده<br> او ابحث عن اسمه هنا
           <img class="search-img" src="/images/search.png" alt="search">
         </p>
        
        <div class="form-control" :class="{invalid:userNameValidity=='invalid'}">
          <div class="search-section">
            <input id="search-name" name="search-name" placeholder="اسم الكتاب" type="text"  @blur="validateName" v-model="search"/>

          </div>
         <p v-if="userNameValidity==='invalid'" class="validate">الرجاء التأكد من صحة اسم الكتاب</p>
        </div>

        <div class="one-story-container" v-if="search">
        <div style="display:flex">
          <div class="img-container"
            v-for="book in filteredBooks" 
            :key="book.title">
            <img style="object-fit: cover;width: 100%;border-radius: 5%;height: 100%;margin-left: 5%;"  :src="`/images/book1.png`" :alt="book.name">
            <div class="overlay11">
              <div class="text11">
                <h5>اسم الكتاب</h5>
                <p>{{book.title}}</p>
                <h5>اسم المؤلف</h5>
                <p>{{book.author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${book.pdf}`">
                  قراءة</a>
                </button>
                <button class="btn"> اختبار</button>

              </div>
            </div>
</div>
          </div>            
        </div>

        <div v-else>
          <img  class="img-container-icon" src="/images/book5.png" alt="book">
        </div>

      </div>

      <div class="stories" v-else-if="searchBook==='noSearch'" >
        <div class="routing" >الكتب > {{classifierSelect}}</div>


        <div class="story-container">
          <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='قصص'" class="story-img"  :src="`/images/${bookRaw0[4]}`">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[0]}`">
              <img  v-if="this.classifierSelect=='إسلامي'" class="story-img"  :src="`/images/${bookRaw1[5]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p v-if="this.classifierSelect=='إسلامي'">{{this.books2[1].title}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[2].title}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[0].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p v-if="this.classifierSelect=='إسلامي'">{{this.books2[1].author}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[0].author}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[0].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books2[1].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">

              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[1]}`">
              <img  v-if="this.classifierSelect=='إسلامي'" class="story-img"  :src="`/images/${bookRaw1[4]}`">
              <img v-if="this.classifierSelect=='قصص'"  class="story-img"  :src="`/images/${bookRaw0[2]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p v-if="this.classifierSelect=='إسلامي'">{{this.books2[0].title}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[4].title}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[1].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p v-if="this.classifierSelect=='إسلامي'">{{this.books2[0].author}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[1].author}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[1].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[1].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[2]}`">
              <img  v-if="this.classifierSelect=='اسلامي'" class="story-img"  :src="`/images/${bookRaw1[5]}`">
              <img v-if="this.classifierSelect=='قصص'" class="story-img" :src="`/images/${bookRaw[3]}`">
              <div v-if="this.classifierSelect=='قصص'|| this.classifierSelect=='تنمية'" class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[2].title}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[2].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[2].author}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[2].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[2].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[3]}`">
              <img v-if="this.classifierSelect=='قصص'" class="story-img"  :src="`/images/${bookRaw[1]}`">
              <div v-if="this.classifierSelect=='قصص'|| this.classifierSelect=='تنمية'" class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[3].title}}</p>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[3].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p v-if="this.classifierSelect=='تنمية'">{{this.books1[3].author}}</p>
                    <p v-if="this.classifierSelect=='قصص'">{{this.books[3].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[3].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>


              <div  class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='قصص'" class="story-img" :src="`/images/${bookRaw[0]}`" >
              <div v-if="this.classifierSelect=='قصص'" class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books[4].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books[4].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[4].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div>             
          </div>   
        </div>


        <div class="story-container">
          <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[2]}`">
              <img v-if="this.classifierSelect=='قصص'" class="story-img"  :src="`/images/${bookRaw0[0]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books1[2].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books1[2].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[0].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[3]}`">
              <img  v-if="this.classifierSelect=='قصص'" class="story-img"  :src="`/images/${bookRaw[4]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books1[3].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books1[3].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[1].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[0]}`">
              <img v-if="this.classifierSelect=='قصص'" class="story-img" :src="`/images/${bookRaw0[1]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books1[0].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books1[0].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[2].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>

              <div class="img-container" style="margin-left: 3%;">
              <img  v-if="this.classifierSelect=='تنمية'" class="story-img"  :src="`/images/${bookRaw1[1]}`">
              <img  v-if="this.classifierSelect=='قصص'" class="story-img"  :src="`/images/${bookRaw[2]}`">
              <div class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books1[1].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books1[1].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[3].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div></div>


              <div class="img-container" style="margin-left: 3%;">
              <img v-if="this.classifierSelect=='قصص'" class="story-img" :src="`/images/${bookRaw0[3]}`" >
              <div v-if="this.classifierSelect=='قصص'" class="overlay">
                  <div class="text">
                    <h5>اسم الكتاب</h5>
                    <p>{{this.books[4].title}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{this.books[4].author}}</p>
                <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" :href="`${this.books[4].pdf}`">
                  قراءة</a>
                </button>
                    <button class="btn">
                  <a style="text-decoration: none;  color: #7d52a0;" href="https://forms.gle/2AWfQysrwQBJV86m7">
                       اختبار</a></button>
                  </div>
              </div>             
          </div>   
        </div>

    </div>
    </div>
    </div>
  </template>
 </base-dialog>
<not-found v-else></not-found>
</teleport>
</template>

<script>
import repository from '../api/repository.js';
import NotFound from './NotFound.vue';
export default {
  components:{
    NotFound
  },
  data(){
        return{
        classifiers:null,
        books:null,
        classifierSelect:null,
        search:'',        
        searchBook:'yesSearch',
        bookRaw:['son1.jpg','water.png','girl.jpg','fox.jpg','duck1.jpg'],
        bookRaw0:['book4.jpg','book1.png','book6.jpg','book3.png','book2.png'],
        bookRaw1:['11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'],
        userName:'',
        radio:null,
        userNameValidity:'pending',
        dialogClose:true
        };
    },
      created () {
        this.getBooks()
      },
      methods:{
        async getBooks () {
          const {data} = await repository.getBooks();
          this.classifiers=data.data;
          this.books = data.data[0].books;
          this.books1 = data.data[1].books;
          this.books2 = data.data[2].books;

        },

        validateName(){
          if (this.userName==''){
            this.userNameValidity='invalid';
          }
          else{
            this.userNameValidity='valid';
          }
        },
    },
    computed:{
      filteredBooks(){
        return this.books.filter(book => book.title.includes(this.search))
      },
      
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
.routing{
  margin-bottom: 6%;
}
.routing,label {
    color:#7d52a0;
    font-size: 15px;
}

.story-container{
    max-height: 3rem;
  width: 100%;
  max-height: 82%;
  display:flex;

}
.one-story-container{
  margin-top: 8%;
  width: 100%;
  height: 40%;
}
.story-img{
  object-fit: cover;
  width: 115%;
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

.overlay,.overlay11 {
  border-radius: 5%;
  position: absolute;
  left: 0;
  right: 0;
  bottom:101%;

  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 18px );
  overflow: hidden;
  height:0%;
  transition: .5s ease;
}
.overlay{
  width: 116%;
}
.overlay11 {
  width: 103%;
}
.img-container:hover .overlay {
  bottom: 0;
  height: 100%;
}
.img-container:hover .overlay11 {
  bottom: 0;
  height: 100%;
}
.text,.text11 {
  position: absolute;
  height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.text{
  top: 52%;
  left: 40%;
}
.text11 {
  top: 56%;
  left: 45%;
}
.text p,.text11 p{
  color: #fff;
  margin: 0;
}
.text p{
  font-size: 10px;
}
.text11 p{
  font-size: 12px;
}
.text h5,.text11 h5{
  color: #7d52a0;
  margin:0;
}
.text h5{
  font-size: 12px;
}
.text11 h5{
  font-size: 15px;
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
/*{
    "books":[
        {
            "Id":1,
            "name":"قصص تعتز بها",
            "image":"fox.jpg",
            "description":"أسلوب بسيط طفولي ومشوق ",
            "url":"https://www.jarir.com/jarir-publication-478136.html"
           },
        {
            "Id":2,
            "name":"امير المياه",
            "image":"water.png",
            "description":" يحوي حكايات ممتعة تحمل الفائدة  "
           },
        {
            "Id":3,
            "name":"ابنة السلطان",
            "image":"son1.jpg",
            "description":" يحوي حكايات تحمل الفائدة والاثارة "
           },
        {
            "Id":4,
            "name":"قصص للبنات",
            "image":"girl.jpg",
            "description":" يحوي حكايات تحمل الاثارة بأسلوب"
           },
           {
            "Id":5,
            "name":"قصص الاطفال",
            "image":"duck1.jpg",
            "description":" يحوي حكايات ممتعة تحمل الفائدة "
           }
          
          ],
          "firstbooks":[
            {
                "Id":1,
                "name":"قصص تعتز بها",
                "image":"fox.jpg",
                "description":"أسلوب بسيط طفولي ومشوق ",
                "url":"https://www.jarir.com/jarir-publication-478136.html"
               },
            {
                "Id":2,
                "name":"امير المياه",
                "image":"water.png",
                "description":" يحوي حكايات ممتعة تحمل الفائدة  "
               },
            {
                "Id":3,
                "name":"ابنة السلطان",
                "image":"son1.jpg",
                "description":" يحوي حكايات تحمل الفائدة والاثارة "
               }

              ],

              "secondbooks":[
                {
                    "Id":4,
                    "name":"قصص للبنات",
                    "image":"girl.jpg",
                    "description":" يحوي حكايات تحمل الاثارة بأسلوب"
                   },
                   {
                    "Id":5,
                    "name":"قصص الاطفال",
                    "image":"duck1.jpg",
                    "description":" يحوي حكايات ممتعة تحمل الفائدة "
                   }
                  
                  ]
} */
</style>