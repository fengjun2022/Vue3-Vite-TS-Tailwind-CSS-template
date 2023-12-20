<template>
  <div class="w-fit h-[70px] bg-blue-400 px-4 mr-[60px]">

    <div class="text-3xl text-orange-500 leading-loose">Hellow Word</div>

  </div>

  <el-button type="primary">Primary</el-button>

</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, onBeforeMount, onBeforeUpdate, onUpdated, watch} from 'vue';
import {user} from "@/services/user.ts";

// 创建响应式数据
const state = ref('Hello, Vue 3！');

// 生命周期钩子
onBeforeMount(() => {
  console.log('组件挂载前');
  // 在组件挂载前执行的代码
});

onMounted(() => {
  console.log('组件已挂载');
  // 在组件挂载后执行的代码
});

onBeforeUpdate(() => {
  console.log('组件更新前');
  // 在组件更新前执行的代码
});

onUpdated(() => {
  console.log('组件已更新');
  // 在组件更新后执行的代码
});

onUnmounted(() => {
  console.log('组件将卸载');
  // 在组件卸载前执行的代码
});

// 侦听器
watch(state, (newValue, oldValue) => {
  console.log(`state 值从 ${oldValue} 变更为 ${newValue}`);
  // 当 state 值变化时执行的代码
});


/**
 * 这只是一个接口调用使用案例
 */

interface a {
  name:string
  passWord:string
}


let get = async () =>{
 const ab =  await user<a>()

  ab.result.passWord
}
get()

</script>


<style scoped>

</style>
