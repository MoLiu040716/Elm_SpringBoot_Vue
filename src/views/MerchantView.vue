

<script setup>

import Footer from "@/components/Footer.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
          <p>商家列表</p>
      </el-header>
      <el-main class="main0">
        <div class="main">
          <ul >
            <li class="merchant">
                <div class="num">
                  <p>1</p>
                </div>
                <router-link to="/businessInfo"><img src="src/assets/image/sj01.png"></router-link>

                <h3>万家饺子（软件园E18店）</h3>
                <img src="src/assets/image/star.svg" class="star">
                <p class="p1"> 3.2</p>
                <p class="p3">$15起送 | $3配送</p>
                <p class="p5">多种饺子</p>
            </li>
            <li class="merchant">
              <div class="num">
                <p>1</p>
              </div>
              <img src="src/assets/image/sj02.png">
              <h3>小锅豆腐馆（全运店）</h3>
              <img src="src/assets/image/star.svg" class="star">
              <p class="p1"> 4.0</p>
              <p class="p3">$15起送 | $3配送</p>
              <p class="p5">特色美食</p>
            </li>
            <li class="merchant">
              <div class="num">
                <p>1</p>
              </div>
              <img src="src/assets/image/sj03.png">
              <h3>麦当劳麦乐送（全运路店）</h3>
              <img src="src/assets/image/star.svg" class="star">
              <p class="p1"> 4.5</p>
              <p class="p3">$15起送 | $3配送</p>
              <p class="p5">汉堡薯条</p>
            </li>
            <li class="merchant">
              <div class="num">
                <p>1</p>
              </div>
              <img src="src/assets/image/sj04.png">
              <h3>米村拌饭（浑南店）</h3>
              <img src="src/assets/image/star.svg" class="star">
              <p class="p1"> 4.0</p>
              <p class="p3">$15起送 | $3配送</p>
              <p class="p5">各种炒菜拌饭</p>
            </li>
            <li class="merchant">
              <div class="num">
                <p>1</p>
              </div>
              <img src="src/assets/image/sj05.png">
              <h3>申记串道（中海康城店）</h3>
              <img src="src/assets/image/star.svg" class="star">
              <p class="p1"> 4.0</p>
              <p class="p3">$15起送 | $3配送</p>
              <p class="p5">烤串炸串</p>
            </li>

          </ul>

        </div>
      </el-main>
      <el-footer class="foot">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<style scoped>

.header{
  background-color: rgba(86, 86, 224, 0.96);
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header p{
  font-size: 1.5rem;
  color: white;
}
.main0{
  height: 47rem;
}
.main{
  height: auto;
}
.main ul{
  display: flex;
  flex-direction: column;
  padding-left: 0rem;
  margin-left: 0rem;
  margin-top: 0rem;
  width: 90vw;
  height: auto;
}
.merchant{
  display: flex;
  flex-direction: row;
  margin-left: 0rem;
  margin-top: 1rem;
}
.merchant h3{
  position: absolute;
  margin-left: 9rem;
  margin-top: 1rem;
  font-size: 1.1rem;
}
.merchant .star{
  width: 5rem;
  margin-left: 1rem;
}
.merchant .p1{
  margin-top: 3.5rem;
  margin-left: 0.5rem;
}

.merchant .p3{
  position: absolute;
  margin-top: 5.5rem;
  margin-left: 9rem;
}

.merchant .p5{
  position: absolute;
  margin-top: 7rem;
  margin-left: 9rem;
}
.num{
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 7rem;
  position: absolute;
  border-radius: 50%;
  background-color: red;
}
.num p{
  position: absolute;
  margin-top: 0rem;
  margin-left: 0.4rem;
}
</style>