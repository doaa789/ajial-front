<template>
          <footer>
        <div class="footer-div">
          <img src="/images/footer.png" alt="ajial" style="margin-top:5%; width:130px;height:130px;">
        </div>
        <div class="footer-div">
          <p>سورية،دمشق<br>963993716304+<br></p>
          <div class="social">
            <img class="social-img" src="/images/twitter5.png" alt="social">
            <img class="social-img" src="/images/linkedin9.png" alt="social">
            <img class="social-img" src="/images/facebook9.png" alt="social">

          </div>
        </div>
        <div class="footer-div">
          <p class="reference" @click="courses">الكورسات</p>
          <p class="reference" @click="library">الكتب</p>
          <p class="reference" @click="games">الألعاب</p>
        </div>

        <div class="footer-div" id="footer-end">
          <p>منصة أجيال <br>جميع الحقوق محفوظة2022</p>
        </div>
      </footer>
</template>

<script>
export default {
      methods:{

    courses(){
      this.$router.push('/courses')
    },
    library(){
      this.$router.push('/library')
    },
    games(){
      this.$router.push('/games')
    },
  }
}
</script>

<style>
footer img{
      height: 140px;
      width: 140px;
      margin:2rem 3rem 2rem 0rem;
}
.social-img{
      height: 30px;
      width: 30px;
      margin: 2%;
      border: none;
      cursor: pointer;
}
footer{

  height: 200px;
  background-color:#7d52a0;
  display: flex;
  direction: rtl;
  color: #fff;
  border-bottom:60px solid #7d52a0;
}
.footer-div{
  width: 17%;
  padding-top: 2%;

}
.footer-end p{
  padding-top: 8%;
}
.reference{
  margin-bottom: -5%;
  cursor: pointer;
}
#footer-end{
  margin-right: 37%;
  padding-top: 6%;
  font-size: 12px;
  text-align: center;
}


.social{
  display: flex;
}
</style>