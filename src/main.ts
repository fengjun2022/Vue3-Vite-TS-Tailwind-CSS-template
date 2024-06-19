import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/index"
import "@/styles/base/Tailwind.css"
import "@/styles/base/base.css"
import {router} from "@/router";
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

createApp(App)
    .use(store)
    .use(router)
    .use(Antd)
    .mount('#app')
