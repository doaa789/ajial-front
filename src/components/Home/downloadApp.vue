<template>
    <div class="app">
    <p class="titleApp">!حمل تطبيق أجيال الآن</p>
    <p class="paragraphApp">قم بتحميل التطبيق لأفضل تجربة تستكشف خلالها محتوى أجيال التعليمي الممتع</p>
    <img class="ajialPng" src="/images/footer.png" alt="">
    <div style="display:flex;margin-left:25rem">
        <div class="downloadButton" style="display:flex;">
       <img src="/images/appleStore.png" style="width:30px;height:30px;margin-top:5%;margin-right:15px;">
            متجر آبل</div>
       <div class="downloadButton" style="display:flex;">
       <img src="/images/googlePlay.png" style="width:30px;height:30px;margin-top:5%;margin-right:15px;">
       متجر غوغل</div>
    </div>
    </div>
</template>

<style>
.app{
  background:rgb(19, 198, 191);
  height: 44rem;
  margin-top: -2%;
}
.titleApp{
  font-size: 30px;
  padding-top: 8%;
}
.paragraphApp{
  font-size: 17px;
  margin-bottom: 3rem;
}
.downloadButton{
    border: 2px solid #fff;
    margin-left:3rem;
    border-radius: 30px;
    font-size: 20px;
    padding:0 2rem;
    cursor: pointer;
}

.titleApp,.downloadButton,.paragraphApp{
  color: #fff;
  text-align: center;

}
.ajialPng{
margin-left: 42%;
width: 180px;
height: 180px;
margin-bottom: 50px;
}
</style>