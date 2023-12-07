
<script setup>

import Footer from "@/components/Footer.vue";
import {Minus, Plus} from "@element-plus/icons-vue";
import {ref} from "vue";
const num = ref(0)
const total =num
function add(){
  num.value=num.value+1;
}

function reduce(){
  num.value=num.value-1;
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
          <p>商家信息</p>
      </el-header>
      <el-main class="main">
        <div class="info">
          <img src="src/assets/image/sj01.png">
          <p class="p1">万家饺子（软件园E18店）</p>
          <p class="p2">$15起送 | $3配送</p>
          <p class="p3">多种饺子</p>
        </div>
        <div class="item">
          <ul>
            <li>
              <img src="src/assets/image/sp01.png">
              <div class="food">
                <h3>纯肉鲜肉（水饺）</h3>
                <p>新鲜猪肉</p>
                <p>&#165;15</p>
              </div>
              <div class="num">
                <el-icon @click="add" class="add"><Plus /></el-icon>
                <p>{{num}}</p>
                <el-icon @click="reduce" class="reduce"><Minus /></el-icon>
              </div>
            </li>
            <li>
              <img src="src/assets/image/sp02.png">
              <div class="food">
                <h3>玉米鲜肉（水饺）</h3>
                <p>玉米鲜肉</p>
                <p>&#165;16</p>
              </div>
              <div class="num">
                <el-icon @click="add" class="add"><Plus /></el-icon>
                <p>{{num}}</p>
                <el-icon @click="reduce" class="reduce"><Minus /></el-icon>
              </div>
            </li>
            <li>
              <img src="src/assets/image/sp03.png">
              <div class="food">
                <h3>虾仁三鲜（水饺）</h3>
                <p>虾仁三鲜</p>
                <p>&#165;22</p>
              </div>
              <div class="num">
                <el-icon @click="add" class="add"><Plus /></el-icon>
                <p>{{num}}</p>
                <el-icon @click="reduce" class="reduce"><Minus /></el-icon>
              </div>
            </li>
            <li>
              <img src="src/assets/image/sp01.png">
              <div class="food">
                <h3>纯肉鲜肉（水饺）</h3>
                <p>新鲜猪肉</p>
                <p>&#165;15</p>
              </div>
              <div class="num">
                <el-icon @click="add" class="add"><Plus /></el-icon>
                <p>{{num}}</p>
                <el-icon @click="reduce" class="reduce"><Minus /></el-icon>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer class="foot">
        <div class="car">
          <img src="src/assets/image/car.svg">
          <div class="number">
              <p>{{total}}</p>
          </div>
          <div class="money">
            <p class="p1">$12.5</p>
            <p class="p2">另需配送费3元</p>
          </div>
        </div>
        <div class="pay">
          <router-link to="verify" class="router-link"> <p>去结算</p></router-link>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>


<style scoped>
.head{
  background-color: rgba(86, 86, 224, 0.96);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head p{
  color: white;
  font-size: 1.5rem;
}
.main{
  display: flex;
  flex-direction: column ;
  align-items: center;
}
.info img{
 margin-left: 5rem;
}
.info .p1{
  font-size: 1.5rem;
  font-weight: bold;
}
.info .p2{
  margin-left: 4rem;
}
.info .p3{
  margin-left: 4rem;
}
.item{
  width: 85vw;
  height: 25rem;
}

.item ul{
  padding-left: 0rem;
}
.item li{
  display: flex;
  flex-direction: row;
}
.food{
  margin-left: 1rem;
}
.num{
  display: flex;
  flex-direction: row;
}
.num p{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.add{
  margin-top: 1.1rem;
}
.reduce{
  margin-top: 1.1rem;
}
.foot{
  padding-left: 0rem;
  display: flex;
  flex-direction: row;
  padding-right: 0rem;
}
.car{
  margin-top: 2rem;
  width:16rem;
  height: 3.5rem;
  background-color: gray;
  display: flex;
  flex-direction: row;
}
.car img{
  width: 2rem;
}
.number{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: red;
  margin-top: 0.3rem;
}
.number p{
  margin-top: 0rem;
  margin-left: 0.2rem;
}
.money{
  margin-left: 1rem;
  padding-top: 0rem;
}
.money .p1{
  margin-top: 0rem;
  height: 0.6rem;
}
.money .p2{
  margin-top: 0rem;
}
.pay{
  width: 10rem;
  height: 3.5rem;
  margin-top: 2rem;
  background-color: green;
  justify-content: center;
  align-items: center;
  display: flex;
}
.pay p{
  color: white;
  font-size: 1.3rem;
}
.router-link{
  text-decoration: none;
}
</style>