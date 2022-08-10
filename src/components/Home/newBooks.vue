<template>
        <h2 class="title-book">أحدث الكتب</h2>
    <div class="full-new-book">
      <div class="new-book">
        <div class="new-story-container">
          <div class="new-img-container"
           v-for="book in books" 
          :key="book.name" >
              <img class="new-story-img"  :src="`/images/${book.image}`" :alt="book.name">
              <div class="new-overlay">
                  <div class="new-text">
                    <h5>اسم الكتاب</h5>
                    <p>{{book.name}}</p>
                    <h5>اسم المؤلف</h5>
                    <p>{{book.author}}</p>
                    <button class="new-btn">قراءة</button>
                    <button class="new-btn"> اختبار</button>

                  </div>
              </div>
      
          </div>  
       
      </div>      
        <img class="new-book-left-img" src="/images/course.png">

      </div>
      <button class="go-book" @click="library">عرض الكل</button>

    </div>
</template>

<script>
export default{
    data(){
        return{
        books:[
                {
                    name:"قصص تعتز بها",
                    image:"fox.jpg",
                    title: "أسلوب بسيط طفولي ومشوق ",
                    author: "أحمد الشقيري",
                    link: "https://www.i-know-python.com/computer-vision-game-using-mediapipe-and-python",
                    pdf: "https://glacial-garden-81387.herokuapp.com//storage/1/عدالة-السماء.pdf"
                },

                {
                    name: "امير المياه",
                    title: " يحوي حكايات ممتعة تحمل الفائدة  ",
                    author:"محمد العوضي" ,
                    image:"water.png",
                    link: "https://www.bing.com/search?q=%D9%83%D8%AA%D8%A7%D8%A8+%D8%B9%D8%AF%D8%A7%D9%84%D8%A9+%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1&cvid=688bf3de57f4414e86c37b82f6563021&aqs=edge..69i57j69i65.5994j0j1&pglt=297&FORM=ANNTA1&PC=DCTS",
                    pdf: "https://glacial-garden-81387.herokuapp.com//storage/10/يوم-عرفة.pdf"
                },
                {
                    "name":"قصص الاطفال",
                    "title": " يحوي حكايات تحمل الاثارة بأسلوب",
                    "image":"duck1.jpg",
                    "author": "أدهم شرقاوي",
                    "link": "https://glacial-garden-81387.herokuapp.com//storage/7/blob.png",
                    "pdf": "https://glacial-garden-81387.herokuapp.com//storage/12/2يوم-عرفة.pdf"
                },
                {
                    name: "ابنة السلطان",
                    title: "يحوي حكايات تحمل الفائدة والاثارة",
                    author: "طه حسين",
                    image:"son1.jpg",
                    link: "https://www.bing.com/search?q=%D9%83%D8%AA%D8%A7%D8%A8+%D8%B9%D8%AF%D8%A7%D9%84%D8%A9+%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1&cvid=688bf3de57f4414e86c37b82f6563021&aqs=edge..69i57j69i65.5994j0j1&pglt=297&FORM=ANNTA1&PC=DCTS",
                    pdf: "https://glacial-garden-81387.herokuapp.com//storage/11/2يوم-عرفة.pdf"
                },
        ]
        };
    },
    methods:{
        library(){
            this.$router.push('/library')
    },
    }
}
</script>

<style>
.title-book{
  background:rgb(19, 198, 191);
 padding-top: 4rem;
 padding-bottom: 4rem;
  margin-bottom: -5%;
  margin-top: -1%;
  color: #fff;
  text-align: center;
  font-size: 30px;
}

.full-new-book{
  height: 40rem;
  background:rgb(19, 198, 191);
  display: grid;
  position: relative;

}
.new-book{
  display: flex;
  position: relative;
}
.new-book-left-img{
  width: 26%;
  height: 80%;

}

.new-story-container{
  width: 70%;
  height: 34%;
  display:flex;
  padding-left: 16%;
  margin-top: 8%;

}
.new-one-story-container{
  margin-top: 8%;
  width: 100%;
  height: 40%;
  display:flex;
}
.new-story-img{
  object-fit: cover;
  width: 100%;
  margin: 1%;
  border-radius: 5%;
  height: 99%;
}


.new-img-container {
  position: relative;
  width: 23%;
  margin: 1%;
  height: 100%;
}

.new-img-container-icon {
  position: relative;
  width: 23%;
  margin-top: 6%;
  height: 100%;
  margin-right:35% ;
}

.new-overlay {
  border-radius: 5%;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba( 255, 255, 255, 0.05 );
  backdrop-filter: blur( 18px );
  overflow: hidden;
  width: 101%;
  height:0;
  transition: .5s ease;
}

.new-img-container:hover .new-overlay {
  bottom: 0;
  height: 100%;
}

.new-text {
  direction: rtl;
  position: absolute;
  height: 130%;
  top: 78%;
  left: 35%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.new-text p{
  color: #fff;
  font-size: 10px;
  margin: 0;
}
.new-text h5{
  color: rgb(19, 198, 191);
  margin: 0;
}
.new-btn {
    color: rgb(19, 198, 191);
  border: 1px solid rgb(19, 198, 191);
  background-color: #fff;

  border-radius: 5px;
  border:none;
  padding: 2px 15px;
  cursor: pointer;
  font-size: 15px;
  font-weight:bold;
}
.new-btn:hover {
  color: #fff;
  border: 1px solid #fff;
  background-color: rgb(19, 198, 191);
}
.go-book{
  background-color: rgb(19, 198, 191);
  border: 2px solid #fff;
  position:absolute;
  top: 65%;
  left: 45%;
  font-size: 20px;
  padding:1%;
  color: #fff;
  font-weight: bold;
  margin: auto;
  cursor: pointer;
  border-radius:5px;
  min-width: 150px;
}

.go-book:hover{
  border: 2px solid rgb(19, 198, 191);
  color: rgb(19, 198, 191);
  background: #fff;
}
</style>