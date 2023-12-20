
<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
const  sex = ref("")
const phone = ref()
const password = ref("")
const name = ref("")
const password1 = ref("")
function save(){
  if (password.value !== password1.value){
    alert("密码不一致")
    return
  }
  axios({
    url:'http://localhost:8082/elm_api/register',
    method:"post",
    data:{
      userId:phone.value,
      userName:name.value,
      userSex:sex.value,
      passWord:password.value
    }
  }).then(res =>{
    console.log("注册")
    if(res.data != null){
      console.log("注册成功")
    }
  })
  console.log("保存")
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="title">
          <p>用户注册</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="phone">
          <p>手机号码:</p>
          <el-input v-model="phone" class="input" placeholder="手机号码" />
        </div>
        <div class="password">
          <p>密码:</p>
          <el-input v-model="password" class="input" placeholder="密码" type="password"/>
        </div>
        <div class="password1">
          <p>确认密码:</p>
          <el-input v-model="password1" class="input" placeholder="确认密码" type="password"/>
        </div>
        <div class="phone">
          <p>用户姓名:</p>
          <el-input v-model="name" class="input" placeholder="用户姓名" />
        </div>
        <div class="sex">
          <p>性别：</p>
          <el-radio-group v-model=sex class="selected">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </div>


        <div class="button">
          <router-link to="/login">
            <el-button type="success" @click="save">注册</el-button>
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
}
.main{
  height: 43rem;
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
  width: 100vw;
}

.phone{
  margin-top: 0rem;
  display: flex;
  flex-direction: row;
  height: 2rem;
}
.phone p{
  width: 6rem;
}
.phone .input{
  margin-top: 1rem;
  height: 1.5rem;
}
.password{

  display: flex;
  flex-direction: row;
  height: 2rem;

}
.password p{
  width: 4rem;
}
.password .input{
  margin-top: 1rem;
  height: 1.5rem;
}
.password1{

  display: flex;
  flex-direction: row;
  height: 2rem;

}
.password1 p{
  width: 6rem;
}
.password1 .input{
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


</style>