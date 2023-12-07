
<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import {CloseBold, Edit} from "@element-plus/icons-vue";

const name = ref("王先生")
const phone =ref (13140263099)
const place =ref("云南大学呈贡校区")
const home = ref("楸院三栋")

function edit(){
  console.log("修改资料")
}
function close(){
  console.log("删除")
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
        <div class="address">
          <p class="p1">{{name}} {{phone}}</p>
          <div class="update">
            <p class="p2">{{place}}</p>
            <router-link to="/editAddress" class="router-link">
              <el-icon class="edit" @click="edit"><Edit /></el-icon>
            </router-link>
            <el-icon class="close" @click="close"><CloseBold /></el-icon>
          </div>
          <p class="p3">{{home}}</p>
        </div>
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
.address .edit{
  margin-top: 0.4rem;
  margin-left: 11rem;

}
.address .close{
  margin-top: 0.4rem;
  margin-left: 0.5rem;
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
</style>