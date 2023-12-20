
<script setup>
import {Minus, Plus} from "@element-plus/icons-vue";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import { useRouter} from "vue-router";
import axios from "axios";
import {useFoodStore} from "@/stores/food";
import {useOrderStore} from "@/stores/order";
import {useBusinessStore} from "@/stores/business";

const foodList = ref([])
const router = useRouter()
const userStore = useUserStore()
const foodStore = useFoodStore()
const orderStore = useOrderStore()
const businessStore = useBusinessStore()
axios({
  url:'http://localhost:8082/elm_api/foodInfo',
  method:"get"
}).then(res =>{
  foodList.value=res.data
})
function add(item){
  if (userStore.userId === ''){
    router.push({
      path:'/login'
    })
  }
  else{
    foodStore.carList[item.foodId-1]=item.foodId
    foodStore.foodNum[item.foodId-1]=foodStore.foodNum[item.foodId-1]+1
    foodStore.total=foodStore.total+1
    foodStore.price=foodStore.price+item.foodPrice
    businessStore.businessTotal[0]=foodStore.total
  }

}

function reduce(item){
  if (userStore.userId === ''){
    router.push({
      path:'/login'
    })
  }
  else{
    foodStore.foodNum[item.foodId-1]=foodStore.foodNum[item.foodId-1]-1
    foodStore.total=foodStore.total-1
    foodStore.price=foodStore.price-item.foodPrice
    businessStore.businessTotal[0]=foodStore.total
  }

}

function account(){
  const x =0
  if (userStore.userId === ''){
    router.push({
      path:'/login'
    })
  }
  else {
    axios({
      url:'http://localhost:8082/elm_api/saveOrder',
      method:"post",
      data:{
        businessId:10001,
        orderTotal:foodStore.price,
        userId:userStore.userId,
        orderState:0
      }
    }).then(res =>{
      orderStore.orderId=res.data
    })
    router.push('/verify')
    console.log(userStore.userId)
    }


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
            <li v-for="item in foodList" key="item.foodId">
              <img :src="item.foodImg">
              <div class="food">
                <h3>{{ item.foodName }}</h3>
                <p>{{item.foodExplain}}</p>
                <p>${{item.foodPrice}}</p>
              </div>
              <div class="num">
                <el-icon @click="add(item)" class="add"><Plus /></el-icon>
                <p>{{foodStore.foodNum[item.foodId-1]}}</p>
                <el-icon @click="reduce(item)" class="reduce"><Minus /></el-icon>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer class="foot">
        <div class="car">
          <img src="src/assets/image/car.svg">
          <div class="number">
              <p>{{foodStore.total}}</p>
          </div>
          <div class="money">
            <p class="p1">${{foodStore.price}}</p>
            <p class="p2">另需配送费3元</p>
          </div>
        </div>
        <div class="pay">
          <p @click="account">去结算</p>
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
  height: 42rem;
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
  margin-left: 0rem;
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
  background-color: #1fc01f;
  justify-content: center;
  align-items: center;
  display: flex;
}
.pay p{
  font-size: 1.3rem;

}
.router-link{
  text-decoration: none;
}
</style>