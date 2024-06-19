<template>
<div></div>

</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, onBeforeMount, onBeforeUpdate, onUpdated, watch} from 'vue';

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




</script>


<style scoped>

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

@media (max-width: 1300px) {
  .kk {
    font-size: 16px;
    line-height: 22px;
  }
}


</style>
