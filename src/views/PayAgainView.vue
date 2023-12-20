
<script setup>
import {ref} from "vue";
import {ArrowRightBold} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import {useOrderStore} from "@/stores/order";
import {useAddressStore} from "@/stores/address";
const shop = ref("万家饺子 （软件园E18店）")
const router = useRouter()
const orderStore = useOrderStore()
const addressStore = useAddressStore()

function goPay(){
  router.push("/payAgain")
}

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
            <p>{{addressStore.newContactPlace.address}}</p>
            <router-link to="/address">
              <el-icon class="icon"><ArrowRightBold /></el-icon>
            </router-link>
          </div>
          <p>{{addressStore.newContactPlace.contactName}} {{addressStore.newContactPlace.contactTel}}</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="name">
          <p>{{shop}}</p>
        </div>
        <ul>
          <li v-for="item in orderStore.unPayOrder">
            <div class="item1">
              <img :src="item.foodImg">
              <p class="p1">{{item.foodName}} ✖{{ item.quantity}}</p>
              <p class="p2">${{item.foodPrice}}</p>
            </div>
          </li>
        </ul>
        <div class="delivery">
          <p class="p1">配送费</p>
          <p class="p2">$3</p>
        </div>
      </el-main>
      <el-footer class="foot">
        <div class="money">
          <p>${{orderStore.unPayOrder[0].orderTotal}}</p>
        </div>
        <div  class="pay">
          <router-link to="/pay" class="router-link" @click="goPay"> <p>去支付</p></router-link>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout{
  width: 100vw;

}
.head{
  height: 8rem;
  width: 100vw;
  padding-left: 0rem;
  margin-top: 0rem;
}
.verify{
  background-color:  rgba(86, 86, 224, 0.96);
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-left: 0rem;
}

.place{
  width: 100vw;

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
  width: 8rem;
}
.change .icon{
  width: 1rem;
  margin-left: 17rem;
  margin-top: 0.5rem;
}
.main{
  height: 41rem;
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
  font-size: 0.8rem;
}
.item1 .p2{
  font-size: 0.8rem;
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
  width: 100vw;
  padding-left: 0rem;
  padding-right: 0rem;
}
.money{
  width: 24rem;
  background-color: gray;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0rem;
}
.money p{
  color: white;
  font-size: 1.5rem;
}
.pay{
  height: 3rem;
  width: 14rem;
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
ul{
  padding-left: 0rem;
}
li{
  list-style: none;
  margin-left: 0rem;
}

</style>