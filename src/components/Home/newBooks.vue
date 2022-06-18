<template>
        <h2 class="title-book">أحدث الكتب</h2>
    <div class="full-new-book">
      <div class="new-book">
        <div class="new-story-container">
          <div class="new-img-container"
          v-for="book in books" 
          :key="book.id">
              <img class="new-story-img"  :src="`/images/${book.image}`" :alt="book.name">
              <div class="new-overlay">
                  <div class="new-text">
                    <h5>اسم الكتاب</h5>
                    <p>{{book.name}}</p>
                    <h5>لمحة عن الكتاب</h5>
                    <p>{{book.description}}</p>
                    <button class="new-btn"> تحميل</button>
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
import sourceData from '../../library.json';
export default{
    data(){
        return{
            books:sourceData.books,   
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
  width: 75%;
  height: 37%;
  display:flex;
  padding-left: 16%;
  padding-top: 3%;
  margin-top: 6%;

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
  top: 68%;
  left: 40%;
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
  color: #fff;
  border: 1px solid #fff;
  background-color: rgb(19, 198, 191);
  border-radius: 5px;
  border:none;
  padding: 2px 15px;
  cursor: pointer;
  font-size: 15px;
  font-weight:bold;
}
.new-btn:hover {
  color: rgb(19, 198, 191);
  border: 1px solid rgb(19, 198, 191);
  background-color: #fff;
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