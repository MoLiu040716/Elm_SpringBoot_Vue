
<script setup>
import {ref} from "vue";
import {ArrowRightBold} from "@element-plus/icons-vue";
const person= ref("王先生 13140263099")
const place = ref("云南大学")
const shop = ref("万家饺子 （软件园E18店）")
const money =ref(33)
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="verify">
          <t2>确认订单</t2>
        </div>
        <div class="place">
          <p class="p1">订单配送至:</p>
          <div class="change">
            <p>{{place}}</p>
            <router-link to="/address">
              <el-icon class="icon"><ArrowRightBold /></el-icon>
            </router-link>

          </div>
          <p>{{person}}</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="name">
          <p>{{shop}}</p>
        </div>
        <div class="item">
          <div class="item1">
            <img src="src/assets/image/sp02.png">
            <p class="p1">玉米水饺 (水饺) ✖ 2</p>
            <p class="p2">$15</p>
          </div>
          <div class="delivery">
            <p class="p1">配送费</p>
            <p class="p2">$3</p>
          </div>
        </div>
      </el-main>
      <el-footer class="foot">
        <div class="money">
          <p>${{money}}</p>
        </div>
        <div  class="pay">
          <router-link to="/pay" class="router-link"> <p>去支付</p></router-link>

        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>

.head{
  height: 8rem;
  width: 100vw;
}
.verify{
  background-color:  rgba(86, 86, 224, 0.96);
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.place{

  padding-left: 0.5rem;
  height: 5.5rem;
  background-color: rgba(86, 86, 224, 0.96);
}
.place .p1{
  margin-top: 0rem;
  height: 0.1rem;
}
.change{
  display: flex;
  flex-direction: row;
  margin-top: 0rem;
  height: 1rem;
}
.change p{
  margin-top: 0.5rem;
  width: 6rem;
}
.change .icon{
  width: 1rem;
  margin-left: 17rem;
  margin-top: 0.5rem;
}
.main{
  height: 38rem;
}
.name{
}
.name p{
  margin-left: 1rem;
  margin-top: 0rem;
}

.item1{
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-left: 1rem;
}
.item1 .p1{
  margin-left: 0.5rem;
  margin-top: 4rem;
}
.item1 .p2{
  margin-top: 4rem;
  margin-left: 4rem;
}
.delivery{
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
}
.delivery .p2{
  margin-left: 17.5rem;
}
.foot{
  display: flex;
  flex-direction: row;
}
.money{
  width: 15rem;
  background-color: gray;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.money p{
  color: white;
  font-size: 1.5rem;
}
.pay{
  height: 3rem;
  width: 9rem;
  background-color: green ;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay p{
  color: white;
  font-size: 1.5rem;
}
.router-link{
  text-decoration: none;
}
</style>