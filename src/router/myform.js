const fromRoute = "/myform";
const router = [
    {
        path: `${fromRoute}/delegation`,
        meta: {
            title: "代表團申請表"
        },
        component: () => import("@/views/myform/b.vue")
    }
];

export default router;
