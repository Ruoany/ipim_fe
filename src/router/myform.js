const parentRoute = "/myform";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "申請表",
            key: "myform"
        },
        component: () => import("@/views/myform/index")
    },
    {
        path: `${parentRoute}/special`,
        meta: {
            title: "支持申請表",
            key: "special"
        },
        component: () => import("@/views/myform/special")
    }
];

export default router;
