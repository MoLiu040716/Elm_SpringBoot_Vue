
<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import {Check, CloseBold, Edit} from "@element-plus/icons-vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useAddressStore} from "@/stores/address";

const name = ref("王先生")
const home = ref("楸院三栋")
const placeList = ref([])
const router = useRouter()

const addressStore = useAddressStore()
function edit(item){
  console.log("修改资料")
  router.push('/editAddress')
  addressStore.contactPlace=item
}
function close(){
  console.log("删除")
}

axios({
  url:'http://localhost:8082/elm_api/pushAddress',
  method:"get"
}).then(res=>{
  placeList.value=res.data
})

function changeAddress(item){
  addressStore.newContactPlace=item
  router.push('/verify')
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
          <div class="title">
            <p>地址管理</p>
          </div>
      </el-header>
      <el-main class="main">
        <ul>
          <li v-for="item in placeList" key="item.da_id">
            <div class="address" >
              <p class="p1">{{item.contactName}} {{item.contactTel}}</p>
              <div class="update">
                <p class="p2">{{item.address}}</p>
                <el-icon class="check" @click="changeAddress(item)"><Check /></el-icon>
                <el-icon class="edit" @click="edit(item)" ><Edit /></el-icon>
                <el-icon class="close" @click="close"><CloseBold /></el-icon>
              </div>
              <p class="p3">{{home}}</p>
            </div>

          </li>
        </ul>
        <div class="button">
          <router-link to="/newAddress">
            <el-button type="primary">新增收货地址</el-button>
          </router-link>
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
  padding-right: 0rem;
}
.main{
  height: 40rem;
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

.address{
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 0rem;
  font-weight: lighter;
  border: 2px gray;
}
.address .check{
   position: absolute;
   margin-top: 0.4rem;
   margin-left: 19em;

 }
.address .edit{
  position: absolute;
  margin-top: 0.4rem;
  margin-left: 20rem;

}
.address .close{
  position: absolute;
  margin-top: 0.4rem;
  margin-left: 21rem;
}
.update{
  margin-top: 0rem;
  height:1.2rem;
  display: flex;
  flex-direction: row;
}
.address .p1{
  height: 0.5rem;

}
.address .p2{
  height: 0.5rem;
  margin-top: 0rem;
 }
.address .p3{
  margin-top: 0.3rem;
}
.button{
  margin-left: 8rem;
}
.router-link{
  text-decoration: none;
  color: black;
}
ul{
  padding-left: 0rem;
}
li{
  list-style: none;
  margin-left: 0rem;
}
</style>