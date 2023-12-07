
<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";

const input =ref("")
const  sex = ref("男")
const phone = ref()
const address =ref("")

function save(){
  console.log("保存")
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="title">
          <p>编辑送货地址</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="name">
          <p>联系人:</p>
          <el-input v-model="input" class="input" placeholder="联系人姓名" />
        </div>
        <div class="sex">
          <p>性别：</p>
          <el-radio-group v-model=sex class="selected">
            <el-radio :label="男">男</el-radio>
            <el-radio :label="6">女</el-radio>
          </el-radio-group>
        </div>
        <div class="phone">
          <p>电话:</p>
          <el-input v-model="phone" class="input" placeholder="电话" />
        </div>
        <div class="address">
          <p>收货地址:</p>
          <el-input v-model="address" class="input" placeholder="收获地址" />
        </div>
        <div class="button">
          <router-link to="/address">
            <el-button type="success" @click="save">更新</el-button>
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
  font-weight: lighter;
  padding-left: 2rem;
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

.name{

  display: flex;
  flex-direction: row;
  height: 2rem;
}
.name p{
  width: 4rem;
}
.name .input{
  margin-top: 1rem;
  height: 1.5rem;
}
.sex{
  height: 2rem;
  display: flex;
  flex-direction: row;
}
.sex .selected{
  margin-left: 2rem;
  margin-top: 0.8rem;
}
.button{
  margin-left: 8rem;
  margin-top: 1rem;
}
.phone{
  margin-top: 0rem;
  display: flex;
  flex-direction: row;
  height: 2rem;
}
.phone p{
  width: 4rem;
}
.phone .input{
  margin-top: 1rem;
  height: 1.5rem;
}
.address{

  display: flex;
  flex-direction: row;
  height: 2rem;
}
.address p{
  width: 6rem;
}
.address .input{
  margin-top: 1rem;
  height: 1.5rem;
}
</style>