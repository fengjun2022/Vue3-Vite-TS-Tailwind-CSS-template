import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "@/store/index"
import "@/assets/base/Tailwind.css"
import "@/assets/base/base.css"
import {router} from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
