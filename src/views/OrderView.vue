

<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import {CaretBottom, Document} from "@element-plus/icons-vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useOrderStore} from "@/stores/order";

const place = ref("万家饺子 （软件原E18店）")
const unPayList = ref([])
const payList = ref([])
const itemList = ref([])
const foodList = ref([])
const router = useRouter()
const showItem = ref(new Array(100).fill(false))
const orderStore = useOrderStore()
axios({
  url:'http://localhost:8082/elm_api/pushPayOreder',
  method:"get"
}).then(res =>{
  payList.value=res.data
  console.log(res.data)
})
axios({
  url:'http://localhost:8082/elm_api/pushUnPayOrder',
  method:"get"
}).then(res =>{
  unPayList.value=res.data
})


function pay(item){
  axios({
    url:'http://localhost:8082/elm_api/unPayOrder',
    method:"post",
    data:{
      orderId:item.orderId
    }
  }).then(res =>{
    orderStore.unPayOrder=res.data
  })
  orderStore.unPayOrderId=item.orderId
  router.push('/unPayOrder')
}
function show(index,item){
  if (showItem.value[index]===true){
    showItem.value[index]=false
  }
  else{
    showItem.value[index]=true
  }
  axios({
    url:'http://localhost:8082/elm_api/pushUnPayItem',
    method:"post",
    data:{
      orderId:item.orderId
    }
  }).then(res =>{
    itemList.value=res.data
    console.log(res.data)
  })

  for (let i=0;i<itemList.value.length;i++){
    axios({
      url:'http://localhost:8082/elm_api/pushFood',
      method:"post",
      data:{
        foodId:itemList.value[i].foodId
      }
    }).then(res =>{
      foodList.value[i]=res.data
      console.log(res.data)
      console.log("test")
    })
  }


}

function selectItem(item){
  axios({
    url:'http://localhost:8082/elm_api/pushFood',
    method:"post",
    data:{
      foodId:item.foodId
    }
  }).then(res =>{
    foodList.value=res.data
    console.log(res.data)
  })
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
          <div>
            <ul>
              <li v-for="(item,index) in unPayList">
                <div class="name">
                  <p>{{place}}</p>
                  <el-icon class="icon" @click="show(index,item)" ><CaretBottom /></el-icon>
                  <p class="money">${{item.orderTotal}}</p>
                  <div class="pay" @click="pay(item)">
                    <p>去支付</p>
                  </div>
                </div>
                <div class="item1" v-show="showItem[index]" v-for="(i,index1) in itemList"  >
                  <p class="p1">{{foodList[index1].foodName}}✖ {{i.quantity}}</p>
                  <p class="p2">${{foodList[index1].foodPrice}}</p>
                </div>

                <div class="drive" v-show="showItem[index]">
                  <p>配送费</p>
                  <p class="p2">$3</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pay">
          <p>已支付的订单信息</p>
          <div>
            <ul>
              <li v-for="item in payList">
                <div class="name">
                  <p>{{place}}</p>
                  <p class="money">${{item.orderTotal}}</p>
                </div>
              </li>
            </ul>
          </div>
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
.main{
  height: 44rem;
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
  width: 100vw;
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
  margin-left: 2rem;
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
ul{
  padding-left: 0rem;
}
li{
  list-style: none;
  margin-left: 0rem;
}
.pay .name{
  display: flex;
  flex-direction: row;
  font-weight: lighter;
  height: 2.4rem;
}

.pay .name .money{
  margin-left: 8rem;
}
.icon{
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>