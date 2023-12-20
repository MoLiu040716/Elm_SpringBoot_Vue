
<script setup>
import {ref} from "vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

const router = useRouter()
const input =ref()
const passWord =ref("")
const userStore = useUserStore()
function login(){
  console.log("登录")
  axios({
    url:'http://localhost:8082/elm_api/login',
    method:"post",
    data:{
      userId:input.value,
      passWord:passWord.value
    }
  }).then(res =>{
    console.log(res.data)
    userStore.token=res.data
    if (res.data != null){
      userStore.userId=input.value
      userStore.userPsw=passWord.value

      router.go(-1)
    }
  })
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <div class="title">
          <p>用户登录</p>
        </div>
      </el-header>
      <el-main class="main">
        <div class="phone">
          <p>手机号码:</p>
          <el-input v-model="input" class="input" placeholder="手机号码" />
        </div>
        <div class="password">
          <p>密码:</p>
          <el-input v-model="passWord" class="input" placeholder="密码" type="password"/>
        </div>
        <div class="button">
            <el-button type="success" @click="login" class="login">登录</el-button>
          <router-link to="/register">
            <el-button type="info" class="register" >注册</el-button>
          </router-link>

        </div>

      </el-main>
      <el-footer class="foot">
        <Footer class="item"></Footer>
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
  margin-left: 0rem;
  width: 100vw;
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
.button{

  margin-top: 1rem;
  display: flex;
  flex-direction: column;
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
.login{
  margin-left: 9rem;
  width: 8rem;
}
.register{
  margin-left: 9rem;
  margin-top: 1rem;
  width: 8rem;
}
.foot{
  padding-left: 0rem;
}
.foot .item{
  margin-left: 1rem;
}

</style>