import {defineStore} from "pinia";
import {ref} from "vue";


export const useFoodStore = defineStore('food',()=>{
    const foodNum = ref([0,0,0,0,0,0,0,0,0,0,0,0])
    const carList = ref([0,0,0,0,0,0,0,0,0,0,0,0])
    let total = ref(0)
    let price = ref(3)
    function reset(){
        price=3;
        total=0;
    }
    return{foodNum,price,carList,reset,total}
})