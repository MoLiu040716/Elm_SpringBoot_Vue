

<script setup>


</script>
<template>
  <div class="foot">
    <router-link to="/">
      <img src="src/assets/image/foot1.svg">
      <p class="p1">首页</p>
    </router-link>
    <router-link to="/">
      <img src="src/assets/image/foot2.svg">
      <p class="p2">发现</p>
    </router-link>
    <router-link to="/order">
      <img src="src/assets/image/foot3.svg">
      <p class="p3">订单</p>
    </router-link>
   <router-link to="/individual">
     <img src="src/assets/image/foot4.svg">
     <p class="p4">我的</p>
   </router-link>

  </div>
</template>
<style scoped>
.foot{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img{
  width: 2rem;
  height: 2rem;
}
.p1{
  position: absolute;
  margin-top: 0rem;
}
.p2{
  position: absolute;
  margin-top: 0rem;
}
.p3{
  position: absolute;
  margin-top: 0rem;
}
.p4{
  position: absolute;
  margin-top: 0rem;
}
</style>