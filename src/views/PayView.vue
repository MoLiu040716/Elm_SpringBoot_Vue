
<script setup>
import {ref} from "vue";
import {CircleCheckFilled} from "@element-plus/icons-vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import {useOrderStore} from "@/stores/order";
import {useFoodStore} from "@/stores/food";
import router from "@/router";
import {useBusinessStore} from "@/stores/business";

const place = ref("万家饺子 （软件园E18店）")
const money =ref(33)
const foodList= ref([])
const orderStore = useOrderStore()
const foodStore = useFoodStore()
const businessStore = useBusinessStore()
const alicolor = ref("")
const wechatcolor = ref("")
axios({
  url:'http://localhost:8082/elm_api/getFood',
  method:"post",
  data: foodStore.carList
}).then(res =>{
  foodList.value=res.data
})
function ali(){
  alicolor.value= "green"
  wechatcolor.value = "default"
}
function wechat(){
  wechatcolor.value= "green"
  alicolor.value="default"
}

function pay(){
  foodStore.total=0
  foodStore.price=3
  businessStore.businessTotal[0]=0
  foodStore.carList=[0,0,0,0,0,0,0,0,0,0,0,0]
  axios({
    url:'http://localhost:8082/elm_api/payOrder',
    method:"post",
    data:{
      orderId:orderStore.orderId,
      orderState: 1
    }
  }).then(res =>{
    console.log(res)
  })
  for (let i=0; i<foodStore.foodNum.length; i++){
    foodStore.foodNum[i]=0
  }
  router.push('/order')
  console.log(foodStore.foodNum)
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="title">
          <p>在线支付</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="pay">
          <p class="p1">订单信息:</p>
          <div class="place">
            <p class="p1">{{place}}</p>
            <p class="p2"> ${{money}}</p>
          </div>
          <ul>
            <li v-for="item in foodList ">
              <div class="item1">
                <p class="p1">{{item.foodName}} ✖{{foodStore.foodNum[item.foodId-1]}} </p>
                <p class="p2">${{item.foodPrice}}</p>
              </div>
            </li>
          </ul>
          <div class="delivery">
            <p class="p1">配送费</p>
            <p class="p2">$3</p>
          </div>
          <div class="ali">
            <img src="src/assets/image/alipay.png.png">
            <el-icon class="icon1" @click="ali" :color="alicolor"><CircleCheckFilled /></el-icon>
          </div>
          <div class="wechat">
            <img src="src/assets/image/wechat.png">
            <el-icon class="icon1" @click="wechat" :color="wechatcolor"><CircleCheckFilled /></el-icon>
          </div>
          <el-button type="success" round class="button" @click="pay">确认支付</el-button>
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
  padding-left: 0rem;
}
.title{
  background-color:  rgba(86, 86, 224, 0.96);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  width: 100vw;
}
.title p{
  color: white;
  font-size: 1rem;
}
.main{
  height: 43rem;
}
.pay{

}
.pay .p1{
  margin-top: 0rem;
}

.pay .place{
  display: flex;
  flex-direction: row;
}
.place .p2{
  margin-left: 9rem;
  margin-top: 0rem;
}
ul{
  padding-left: 0rem;
}
li{
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;
}
.item1{
  display: flex;
  flex-direction: row;
  margin-top: 0rem;
  margin-left: 0rem;
}
.item1 .p1{
  margin-left: 0rem;
  margin-top: 0rem;
  font-size: 1rem;
}
.item1 .p2{
  margin-top: 0rem;
  font-size: 0.8rem;
  margin-left: 11.5rem;
}
.delivery{
  display: flex;
  flex-direction: row;

}
.delivery .p2{
  margin-left: 18rem;
  margin-top:0rem ;
}
.ali{
  margin-top: 1rem;
  height: 4.5rem;
  padding-top: 0rem;
}
.ali img{
  margin-top: 1rem;
}
.ali .icon1{
  margin-top: 0rem;
  margin-left: 14rem;
}
.wechat{
  padding-top: 0rem;
}
.wechat .icon1{
  margin-top: 0rem;
  margin-left: 14rem;
}
.button{
  margin-top: 1rem;
  margin-left: 1.5rem;
  width: 20rem;
}
</style>