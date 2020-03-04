import LayOut from "@/views/layout/index";
const router = [
    {
        component: LayOut,
        path: "/personal",
        meta: { title: "個人中心" },
        children: [
            {
                path: "index",
                meta: {
                    title: "機構認證"
                },
                component: () => import("@/views/personal/index")
            }
        ]
    }
];

export default router;
