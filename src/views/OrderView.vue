

<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import {Document} from "@element-plus/icons-vue";

const place = ref("万家饺子 （软件原E18店）")
const money = ref(49)

function pay(){
  console.log("pay")
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="title">
          <p >我的订单</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="unpay">
          <p class="p1">未支付订单信息</p>
          <div >
            <div class="name">
              <p>{{place}}</p>
              <p class="money">${{money}}</p>
              <div class="pay" @click="pay">
                <p>去支付</p>
              </div>
            </div>
            <div class="item1">
              <p class="p1">纯肉水饺（水饺）✖ 2</p>
              <p class="p2">$15</p>
            </div>
            <div class="drive">
              <p>配送费</p>
              <p class="p2">$3</p>
            </div>
          </div>
        </div>
        <div class="pay">
          <p>已支付的订单信息</p>
        </div>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.head{
  width: 100vw;
  height: 3rem;

}
.main{
  height: 40rem;
  padding-left: 1rem;
}
.title{
  background-color:  rgba(86, 86, 224, 0.96);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  color: white;
  padding-top: 0rem;
}
.unpay{
  padding-left: 1rem;
}
.unpay .p1{
  font-weight: lighter;
}

.unpay .name{
  display: flex;
  flex-direction: row;
  font-weight: lighter;
  height: 2.4rem;
}
.unpay .name .money{
  margin-left: 4rem;
}
.unpay .name .pay{
  margin-left: 1rem;
  margin-top: 1rem;
  height: 1.3rem;
  background-color: orange;
}
.unpay .name .pay p{
  margin-top: 0rem;
  color: white;
}
.unpay .item1{
  font-weight: lighter;
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
}
.unpay .item1 .p1{
  margin-top: 0rem;
  height: 0.5rem;
}
.unpay .item1 .p2{
  margin-top: 0rem;
  margin-left: 10rem;
  height: 0.5rem;
}
.drive{
  font-weight: lighter;
  display: flex;
  flex-direction: row;
}
.drive p{
  margin-top: 0rem;
}
.drive .p2{
  margin-left: 17rem;
}
.pay{
  font-weight: lighter;
  margin-top: 5rem;
  padding-left: 1rem;
}
</style>