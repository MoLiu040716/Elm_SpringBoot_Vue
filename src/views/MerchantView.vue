

<script setup>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import {ref} from "vue";
import {useFoodStore} from "@/stores/food";
import {useBusinessStore} from "@/stores/business";
const businessList = ref([])
const foodStore = useFoodStore()
const businessStore = useBusinessStore()
axios({
  url:'http://localhost:8082/elm_api/getbusinessinfo',
  method:"get"
}).then(res=>{
  businessList.value = res.data;
})


</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
          <p>商家列表</p>
      </el-header>
      <el-main class="main">
          <ul >
            <li class="merchant" v-for="(item,index) in businessList" key="item.businessId">
              <router-link to="/businessInfo"><img :src="item.businessImg"></router-link>
              <div class="num">
                <p>{{businessStore.businessTotal[index]}}</p>
              </div>
              <div class="content">
                <div class="name">
                  <h3>{{item.businessName}}</h3>
                </div>
                <div class="info">
                  <img src="src/assets/image/star.svg" class="star">
                  <p class="p1"> 3.2</p>
                  <p class="p3">${{item.starPrice}}起送 | ${{item.deliveryPrice}}配送</p>
                </div>
                <p class="p5">{{item.businessExplain}}</p>
              </div>
            </li>
          </ul>


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
.main{
  height: 43rem;
  padding-top: 0rem;
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
.merchant .content{
  display: flex;
  flex-direction: column;
}
.merchant .name{
  width: 14rem;
  height: 2rem;
}
.merchant h3{
  margin-left: 1rem;
  width: 14rem;
  margin-top: 1rem;
  font-size: 1.1rem;
}
.merchant .info{
  height: 4rem;
  display: flex;
  flex-direction: row;
}
.merchant .star{
  width: 5rem;
  margin-left: 0.4rem;
}
.merchant .p1{
  font-size: 0.8rem;
 margin-top: 1.4rem;
  margin-left: 0.5rem;
}

.merchant .p3{
  font-size: 0.8rem;
  margin-top: 1.4rem;
  margin-left: 0.5rem;
}

.merchant .p5{

  margin-top: 0rem;
  margin-left: 1rem;
}
.num{
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: red;
}
.num p{
  margin-top: 0rem;
  margin-left: 0.3rem;
}
</style>