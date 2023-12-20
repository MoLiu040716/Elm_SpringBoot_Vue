import {defineStore} from "pinia";
import {ref} from "vue";


export const useAddressStore = defineStore('address',()=>{
    const contactPlace = ref({})
    const newContactPlace = ref({})
    return{contactPlace,newContactPlace}
})