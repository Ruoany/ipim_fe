const parentRoute = "/personal";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "機構認證"
        },
        component: () => import("@/views/personal/index")
    }
];

export default router;
