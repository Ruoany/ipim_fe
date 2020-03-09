const parentRoute = "/myform";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "代表團申請表"
        },
        component: () => import("@/views/myform/index")
    }
];

export default router;
