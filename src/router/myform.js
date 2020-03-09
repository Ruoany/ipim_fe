const fromRoute = "/myform";
const router = [
    {
        path: `${fromRoute}/delegation`,
        meta: {
            title: "代表團申請表"
        },
        component: () => import("@/views/myform/index")
    }
];

export default router;
