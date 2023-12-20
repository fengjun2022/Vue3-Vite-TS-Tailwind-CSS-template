/// <reference types="vite/client" />
//  配置.d.ts TypeScript 配置要求有显式的类型声明 ,否则会出现ES报错找不到模块
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
