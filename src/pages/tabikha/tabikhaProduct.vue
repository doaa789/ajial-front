<template>
    <div class="product">
      <the-header></the-header>
      <div style="display:flex">
        <div class="prudectRight">
            <p class="shop" style="margin-top:15%;">المحل الأول: </p>
            <p class="site">دمشق -الشعلان بجانب مستشفى التوفيق</p>
            <p class="shop">المحل الثاني: </p>
            <p class="site">حلب -ساحة الشهباء-مقابل الاطفائية</p>
        </div>
        <div class="productLeft">
            <img class="mobileImg6" src="../../../public/images/map.png" >
        </div>
    </div>
    </div>
</template>
<script>
  import TheHeader from "../../components/layout/TheHeader.vue";
export default{
    components:{
    TheHeader
  },}
</script>
<style>
.product{
    width: 100%;
      height: 56rem;
  direction: rtl;
  background-color:#fcad02;
}
.mobileImg6{
  margin-right: 15%;
  margin-top: 10%;
  height: 400px;
  width: 300px;
animation-name: example122;
  animation-duration: 3s;
  animation-iteration-count: 1;
   animation-direction: alternate;
}
@keyframes example122 {
  0%   {left:0px; top:-80px;}
  25%  { left:0px; top:0px;}
  from {opacity: .05; margin-top: 22%;} 
  to {opacity: 1 ;margin-top: 10%;}

}
.shop{
    font-size: 34px;
}
.site{
    margin-top:-2%;
    font-size: 28px;
}
.shop,.site{
    color: #fff;
    margin-right:15%;
    margin-bottom:1%;
    
}
.prudectRight{
    margin-right:15%;
    width: 50%;
}

</style>