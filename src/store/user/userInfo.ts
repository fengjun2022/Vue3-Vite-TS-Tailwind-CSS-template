import {defineStore} from "pinia";
import {StoreName} from "@/constant/StoreName.ts";
import {ref} from "vue";



/**
 * 组合式 Setup Store 写法，每个模块应为独立仓库
 * 推荐这样使得模块具有更好的扩展性
 * StoreName 类，定义模块名称
 */
export const userInfo = defineStore( StoreName.userInfo,()=> {
 const token = ref("")


    const setToken = (parm:string)=>{
        token.value = parm
    }

    const delToken = ()=>{
        token.value = ""
    }




    return { setToken,token,delToken }
})
