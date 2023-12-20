import {defineStore} from "pinia";
import {ref} from "vue";

export const useOrderStore = defineStore('order',()=>{
    const orderId = ref(0)
    const unPayOrder = ref([{},{},{},{}])
    const unPayOrderId = ref(0)
    return{orderId, unPayOrder,unPayOrderId}

})

