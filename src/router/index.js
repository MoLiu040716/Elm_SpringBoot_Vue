import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import IndividualView from "@/views/IndividualView.vue";
import OrderView from "@/views/OrderView.vue";
import MerchantView from "@/views/MerchantView.vue";
import BusinessInfoView from "@/views/BusinessInfoView.vue";
import VerifyView from "@/views/VerifyView.vue";
import PayView from "@/views/PayView.vue";
import AddressView from "@/views/AddressView.vue";
import NewAdViwe from "@/views/NewAdViwe.vue";
import EditAdView from "@/views/EditAdView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:HomeView
    },
    {
      path:'/individual',
      name:'individual',
      component:IndividualView
    },
    {
      path:'/order',
      name:'order',
      component:OrderView
    },
    {
      path:'/merchant',
      name:'merchant',
      component:MerchantView
    },
    {
      path:'/businessInfo',
      name:'businessInfo',
      component:BusinessInfoView
    },
    {
      path:'/verify',
      name:'verify',
      component:VerifyView
    },
    {
      path:'/pay',
      name:'pay',
      component:PayView
    },
    {
      path:'/address',
      name:'address',
      component:AddressView
    },
    {
      path:'/newAddress',
      name:'newAddress',
      component:NewAdViwe
    },
    {
      path:'/editAddress',
      name:'editAddress',
      component:EditAdView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    }
  ]
})

export default router
