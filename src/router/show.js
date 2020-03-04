import LayOut from "@/views/layout/index";
const router = [
    {
        component: LayOut,
        path: "/",
        meta: { title: "首页" },
        children: [
            {
                path: "index",
                meta: {
                    title: "首页"
                },
                component: () => import("@/views/show/index/index")
            }
        ]
    },
    {
        component: LayOut,
        path: "/show",
        children: [
            {
                path: "index",
                meta: {
                    title: "展會"
                },
                component: () => import("@/views/show/list/index")
            },
            {
                path: "rep_index",
                meta: {
                    title: "代表團展會"
                },
                component: () => import("@/views/show/list/repIndex")
            },
            {
                path: "all_index",
                meta: {
                    title: "全部展會"
                },
                component: () => import("@/views/show/list/allIndex")
            },
            {
                path: "detail",
                meta: {
                    title: "展會詳情"
                },
                component: () => import("@/views/show/detail/index")
            },
            {
                path: "rep_detail",
                meta: {
                    title: "代表團詳情"
                },
                component: () => import("@/views/show/detail/repIndex")
            }
        ]
    }
];

export default router;
