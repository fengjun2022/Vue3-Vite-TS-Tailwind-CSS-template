<template>
  <div>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>

  </div>
</template>

<script setup lang="ts">
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
// const selectedKeys2 = ref<string[]>(['1']);
// const openKeys = ref<string[]>(['sub1']);
import {ref} from "vue";

const selectedKeys1 = ref<string[]>(['2']);

</script>

<style scoped>

</style>
