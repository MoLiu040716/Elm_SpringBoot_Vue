<script setup>
import {ArrowRightBold, Location, Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
const place = ref("昆明市呈贡区云南大学")
const input = ref('')
const businessList = ref([])
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
          <div class="headerplace">
            <el-icon size="30" color="white" class="icon"><Location /></el-icon>
            <p class="headerplace1">{{place}}</p>
          </div>
          <div class="input">
            <el-input size="large" placeholder="搜索饿了么商家、商品名称" v-model="input"></el-input>
          </div>
        </el-header>
        <el-main class="main">
          <div class="sort">
            <ul >
              <li>
                <router-link to="/merchant" class="router-link">
                  <img  src="src/assets/image/dcfl01.png"  alt="食品1">
                  <p>美食</p>
                </router-link>

              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl02.png"  alt="食品2">
                <p>早餐</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl03.png"  alt="食品3">
                <p>跑腿代购</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl04.png"  alt="食品4">
                <p>汉堡披萨</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl05.png"  alt="食品5">
                <p>甜品饮品</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl06.png"  alt="食品6">
                <p>速食简餐</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl07.png"  alt="食品7">
                <p>地方小吃</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl08.png"  alt="食品8">
                <p>米粉面馆</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl09.png"  alt="食品9">
                <p>包子粥铺</p>
                </router-link>
              </li>
              <li>
                <router-link to="/merchant" class="router-link">
                <img  src="src/assets/image/dcfl10.png"  alt="食品10">
                <p>炸鸡炸串</p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="advertisement">
            <p class="p1">品质套餐</p>
            <p class="p2">搭配齐全吃的好</p>
            <p class="p3">立即抢购</p>
            <el-icon class="icon1"><ArrowRightBold /></el-icon>
            <img src="src/assets/image/index_banner.png">
          </div>
          <div class="vip">
            <img src="src/assets/image/super_member.png">
            <p class="p1">超级会员</p>
            <p class="p4">.</p>
            <p class="p2">每月享超值优惠</p>
            <p class="p3">立即开通</p>
            <el-icon class="icon2"><ArrowRightBold /></el-icon>
          </div>
          <div class="Recommended">
            <p class="p1">—— 推荐商家 ——</p>
            <div class="head">
              <Menu></Menu>
            </div>
          </div>
          <div class="merchant" v-for="item in businessList">
            <img :src="item.businessImg">
            <div class="content">
              <div class="name">
                <h3>{{item.businessName}}</h3>
              </div>
              <div class="evaluate">
                <img src="src/assets/image/star.svg" class="star">
                <p class="p1"> 3.2</p>
                <p class="p2">月售350单</p>
                <img src="src/assets/image/kuaidi.svg" class="kuaidi">
              </div>
              <div class="info">
                <p class="p3">${{item.starPrice}}起送 | ${{item.deliveryPrice}}配送</p>
                <p class="p4">4km | 30分钟</p>

              </div>
              <p class="p5">{{item.businessExplain}}</p>
            </div>
          </div>
        </el-main>
        <el-footer class="foot">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </div>
</template>
<style scoped>
.common-layout{
}
.header{
  background-color: rgba(86, 86, 224, 0.96);
  height: 8rem;
  margin-left: 0rem;
  width: 100vw;
}
.headerplace{
  display: flex;
  flex-direction: row;
}
.icon{
  margin-top: 0.5rem;
}
.headerplace1{
  margin-left: 0.3rem;
  margin-top: 0.6rem;
  color: white;
  font-size: 1.2rem;
}
.input{
  margin-top: 1rem;
  margin-left: 2rem;
  width: 22rem;
}
.main{
  padding-left: 0rem;
  height: 40rem;
}
.sort{

  height: 10rem;
  margin-top: 0.1rem;
  padding-left: 0rem;
}
.sort ul{
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 8rem;
  padding-left: 0.2rem;
  flex-wrap: wrap;
}
.sort li{
  list-style: none;
  width: 18vw;
  height: 10vh;
  margin-left: 0rem;
}
.sort p{
  font-size: 0.8rem;
  margin-left: 1.5rem;
  text-decoration: none;
}
.sort img{
  width: 4rem;
  margin-left: 1rem;
}

.router-link {
  text-decoration: none;
  color: black;
}
.advertisement{
  position: relative;
  height: 8rem;

}
.advertisement .p1{
  position: absolute;
  margin-left: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.advertisement .p2{
  position: absolute;
  margin-left: 2rem;
  margin-top: 2.2rem;
  font-size: 0.8rem;
}
.advertisement .p3{
  position: absolute;
  margin-left: 2rem;
  margin-top: 3.8rem;
  font-size: 0.8rem;
  color: #c2c037;
}
.icon1{
  position: absolute;
  margin-left: 5.2rem;
  margin-top: 4rem;
  font-size: 0.8rem;
  color: #c2c037;
}
.advertisement img{
  height: 8rem;
  width: 95vw;
}
.vip{
  height: 3rem;
  background-color: #faf782;
  display: flex;
  flex-direction: row;
}
.vip img{
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.5rem;

}
.vip .p1{
  margin-left: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.vip .p2{
  margin-left: 0.4rem;
  font-size: 0.8rem;
  margin-top: 1rem;
}
.vip .p3{
  font-size: 0.8rem;
  margin-top: 1rem;
  margin-left: 4.5rem;
}
.vip .p4{
  font-size: 1.5rem;
  margin-left: 0.7rem;
  margin-top: 0rem;
}
.icon2{
  margin-top: 1.1rem;
  color: #c2c037;
}
.Recommended{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.Recommended .p1{
  margin-top: 2rem;
  font-weight: bold;
}
.merchant{
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin-left: 1rem;
  margin-top: 2rem;
}
.merchant .content{
  display: flex;
  flex-direction: column;
}
.merchant .name{
  display: flex;
  flex-direction: row;
  width: 18rem;
  height: 0.8rem;
  margin-left: 1rem;
}
.merchant h3{
  margin-top: 0rem;
  width: 18rem;
  font-size: 1.1rem;
}
.merchant .evaluate{
  display: flex;
  flex-direction: row;
  height: 2.5rem;
}
.merchant .star{
  width: 5rem;
  height: 4rem;
  margin-left: 0.5rem;

}
.merchant .p1{
  margin-top: 1.3rem;
  margin-left: 0.5rem;
}
.merchant .p2{
  margin-top: 1.3rem;
  margin-left: 0.5rem;
}

.merchant .kuaidi{
  width: 3.8rem;
  margin-top: 1.6rem;
  margin-left: 1rem;
}
.merchant .info{
  display: flex;
  flex-direction: row;
  height: 2rem;
}
.merchant .p3{
  width: 12rem;
  margin-top: 0.3rem;
  margin-left: 1rem;

}
.merchant .p4{
  width: 8rem;
  margin-top: 0.3rem;

}
.merchant .p5{
  margin-left: 1rem;
  margin-top: 0rem;

}
.foot{

}

</style>