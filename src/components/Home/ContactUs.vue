<template>
    <div class="contact-us">
        <div class="up">
            <h2 class="title-contact">تواصل معنا</h2>
            <p style="margin:auto;">نحن سعداء جدا بتواصلك معنا ،يمكنك ارسال ما تشاء متى تشاء</p>
            <div class="down"></div>
            <div class="div-contact-input">
            <input id="user-name" name="user-name" placeholder="اسم المستخدم" type="text">
            <input id="email" name="email" placeholder="البريد الالكتروني" type="email" >
            <textarea id="message" name="message" placeholder="رسالتك" type="text"></textarea>
            </div>
            <button class="send">ارسال</button>
        </div>
      </div>
</template>

<style>
    .title-contact{
  text-align: center;
  font-size: 30px;
}
.contact-us{
  border-top:41px solid rgb(175,58, 164);
  height: 34.5rem;
  direction: rtl;
}
.up{
  padding:0% 0% 22% 2%;
  background-color: #fff;
  height: 100%;
  color: rgb(175,58, 164);
  display: grid;
}
.div-contact-input{
  margin-top: -2%;
}
.up input,.up textarea{
  border-radius: 18px;
  border:1.5px solid #ffffff;
  width: 25%;
  margin-bottom: 1%;
  font-size: 16px;
  padding:0.5%;
  margin-right:37%;
  }

.up input:focus,.up textarea:focus{
  background-color: rgba(255, 255, 255, 0.4);
  outline: none;
}
.up textarea{
  height: 5rem;
}
.down{
  width: 0;
  height: 0;
  margin-top: 1%;
  margin-bottom: -15%;
	border-left: 700px solid transparent;
	border-right: 700px solid transparent;
	border-bottom: 350px solid rgb(175,58, 164);
}
.send{
  border: 2px solid rgb(175,58, 164);
  margin: auto;
  color: rgb(175,58, 164);
  font-size: 20px;
  min-width: 95px;
  font-weight: bold;
  border-radius:12px;
  cursor: pointer;
  background-color: #ffffff;
}
.send:hover{
  border: 2px solid #fff;
  background: rgb(175,58, 164);
  color: #fff;
}

</style>