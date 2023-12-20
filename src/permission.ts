import {router} from "@/router";


// @ts-ignore
const whiteList = ["/login", "/404"]; // 定义白名单  所有不受权限控制的页面
// @ts-ignore
router.beforeEach(async (to, from, next) => {

});

router.afterEach(() => {});
