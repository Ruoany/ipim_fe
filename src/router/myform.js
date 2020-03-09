const fromRoute = "/myform";
const router = [
    {
        path: `${fromRoute}/index`,
        meta: {
            title: "代表團申請表"
        },
        component: () => import("@/views/myform/index")
    }
];

export default router;
