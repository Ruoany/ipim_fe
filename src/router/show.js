const parentRoute = "/show";
const router = [
    {
        path: "/index",
        meta: {
            title: "展會"
        },
        component: () => import("@/views/show/index/index")
    },
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "展會"
        },
        component: () => import("@/views/show/list/index")
    },
    {
        path: `${parentRoute}/rep_index`,
        meta: {
            title: "代表團展會"
        },
        component: () => import("@/views/show/list/repIndex")
    },
    {
        path: `${parentRoute}/all_index`,
        meta: {
            title: "全部展會"
        },
        component: () => import("@/views/show/list/allIndex")
    },
    {
        path: `${parentRoute}/detail`,
        meta: {
            title: "展會詳情"
        },
        component: () => import("@/views/show/detail/index")
    },
    {
        path: `${parentRoute}/rep_detail`,
        meta: {
            title: "代表團詳情"
        },
        component: () => import("@/views/show/detail/repIndex")
    }
];

export default router;
