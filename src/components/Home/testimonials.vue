<template>
        <h2 class="title-div">آراء طلابنا بمنصتنا </h2>
      
      <div class="testimonials">
        <div class="row">

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar2.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">ماهر السعدي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
          <p>انها منصة رائعة! منذ ان بدأت وقد تغيرت للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكي واهتماماماتي </p>
          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar8.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">خلود اللحام</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
                   <p>انها منصة رائعة! منذ ان بدأت وقد تغيرت للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكي واهتماماماتي </p>

          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar12.png"  alt="">
          <div class="testimonials-div-text">
          <div style="display:flex">
                <h4 style="margin-bottom:0%">زهير النابلسي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
                    <p>انها منصة رائعة! منذ ان بدأت وقد تغيرت للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكي واهتماماماتي </p>

          </div>

        </div>

        </div>

        <div class="row">

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar9.png"  alt="">
          <div class="testimonials-div-text">
            <div style="display:flex">
                <h4 style="margin-bottom:0%">شادي القاري</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
                    <p>انها منصة رائعة! منذ ان بدأت وقد تغيرت للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكي واهتماماماتي </p>

          </div>

        </div>

        <div class="testimonials-div">

          <img class="avatar" src="/images/avatar11.png"  alt="">
          <div class="testimonials-div-text">
          <div style="display:flex">
                <h4 style="margin-bottom:0%">منير الرازي</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star" ></span>
                    <span class="fa fa-star"></span>
                </div>
          </div>
                   <p>انها منصة رائعة! منذ ان بدأت وقد تغيرت للأفضل،حيث لاحظت تغيرا ايجابيا في سلوكي واهتماماماتي </p>

          </div>

        </div>



        <div class="testimonials-div" v-if="$store.state.contact.name">

          <img class="avatar"  :src="$store.state.contact.image"  alt="">
          <div class="testimonials-div-text">
          <div style="display:flex">
                <h4 style="margin-bottom:0%">{{$store.state.contact.name}}</h4>
                <div style="margin-right:7%;margin-top:2%;max-height: 5px;;">
                    <span v-if="$store.state.ratingStar!=null" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                    <span v-if="$store.state.ratingStar>1" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                    <span v-if="$store.state.ratingStar>2" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                    <span v-if="$store.state.ratingStar>3" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                    <span v-if="$store.state.ratingStar>4" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                </div>
          </div>
                    <p>{{$store.state.contact.letter}}</p>

          </div>

        </div>

        </div>
      </div>
</template>

<style>
.testimonials-div{
  width: 32%;
  direction: rtl;
}

.testimonials-div-text{
  background: rgb(255, 255, 255);
  padding: 3% 3.5% 2% 2.5%;
  margin: 8% 8% 0% 8%;
  border-radius: 12px;
  font-size: 14px;
}
.row{
  height: 50%;
  display: flex;
  margin-top: -5%;
  margin-bottom: 0%;
  border-radius: 18px;
}
.avatar{
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin-bottom: -25%;
    margin-right: 72%;
    background-color: rgb(121, 131, 208);
}
.testimonials h4{
  margin-top: 0;
   color: rgb(121, 131, 208);
   font-size: 17px;
}
.testimonials{
  background-color: rgb(121, 131, 208);
 color: rgb(121, 131, 208);
  height: 40rem;
  padding-left: 14%;
  padding-right: 9%;
  padding-top: 5%;
}
.title-div{
  background: rgb(121, 131, 208);
 padding-top: 4rem;
 padding-bottom: 4rem;
  margin-bottom: -5%;
  margin-top: -1%;
  color: #fff;
}
.title-div{
  text-align: center;
  font-size: 30px;
}
.checked {
  color: orange;
}
</style>