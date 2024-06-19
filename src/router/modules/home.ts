const LAYOUT = () => import("@/layout/index.vue");

export default [
    {
        path: "/",
        name: "Home",
        component: LAYOUT,
        redirect: "/index",
        children: [
            {
                path: "/index",
                name: "Index",
                component: () => import("@/views/home/index.vue"),

            },
        ],
    },




];

