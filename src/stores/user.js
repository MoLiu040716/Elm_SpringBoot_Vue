import {defineStore} from "pinia";
import {ref} from "vue";


export const useUserStore = defineStore('user',()=>{
    let userId = ref("")
    let userName = ref("")
    let userSex = ref("")
    let userPsw = ref("")
    let userOldPsw = ref("")
    let token = ref("")
    function reset(){
        userId = ""
        userName=""
        userSex = ""
        userPsw = ""
        userOldPsw = ""
        token=""
    }
    return{userId,userName,userSex,userPsw,userOldPsw,token,reset}
})