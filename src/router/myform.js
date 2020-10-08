const parentRoute = "/myform";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "申請表",
            key: "myform",
            case: "form"
        },
        component: () => import("@/views/myform/index")
    },
    {
        path: `${parentRoute}/special`,
        meta: {
            title: "支持申請表",
            key: "special",
            case: "form"
        },
        component: () => import("@/views/myform/special")
    }
];

export default router;
