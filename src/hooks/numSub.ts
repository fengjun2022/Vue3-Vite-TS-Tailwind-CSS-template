
// 这是一个hooks简单示例你只需要在vue内引入即可使用
/**
 *  import { useSub } from './useSub.js' //引入自动hook
 *
 *  const num1 = ref(2)
 *  const num2 = ref(1)
 *  //加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
 *  //减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
 *  const { subNum, subFn } = useSub({ num1, num2 })
 *  subFn(num1.value, num2.value)
 */

//减法功能-Hook
import {Ref, ref, watch} from 'vue';

interface option {
    num1:Ref<number>,
    num2:Ref<number>,

}

export function useSub  ({ num1, num2 }:option){
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1:number, num2:number) => {
        subNum.value = num1 - num2
    }
    return {
        subNum,
        subFn
    }
}
