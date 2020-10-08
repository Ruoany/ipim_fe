const parentRoute = "/show";
const router = [
    {
        path: `${parentRoute}/host`,
        meta: {
            title: "主辦展會",
            key: "host"
        },
        component: () => import("@/views/show/host/index")
    },
    {
        path: `${parentRoute}/overseas`,
        meta: {
            title: "境外之展會",
            key: "overseas"
        },
        component: () => import("@/views/show/overseas/index")
    },
    {
        path: `${parentRoute}/all`,
        meta: {
            title: "全部展會",
            key: "show"
        },
        component: () => import("@/views/show/all/index")
    },
    {
        path: `${parentRoute}/detail`,
        meta: {
            title: "展會詳情",
            key: "show"
        },
        component: () => import("@/views/show/detail/index")
    }
];

export default router;
