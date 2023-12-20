import {defineStore} from "pinia";
import {ref} from "vue";

export const useBusinessStore = defineStore('business',()=>{
    const businessTotal = ref([0,0,0,0,0,0,0,0,0])
    return{businessTotal}
})