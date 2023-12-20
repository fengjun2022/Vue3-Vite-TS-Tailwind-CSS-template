
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import  home from "@/router/modules/home.ts"
export const publicRoutes: Array<RouteRecordRaw> = [
    ...home
];

export const dynamicRouter:Array<RouteRecordRaw> = []





// 定义一个工厂函数，用于创建新的 router 实例
 function createMyRouter() {
    return createRouter({
        history: createWebHashHistory(),
        routes: [...publicRoutes,...dynamicRouter]
    });
}

export let router = createMyRouter()

// 定义一个函数，用于重置路由
export function resetRouter() {
    // 创建一个新的 router 实例
    const newRouter = createMyRouter();

    // 重置路由的实际操作
    // 这里通常你会移除/添加路由，或者替换整个 router 实例
    // 本示例中我们假设是替换整个实例
    router = newRouter;
}
