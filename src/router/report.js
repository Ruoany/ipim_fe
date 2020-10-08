const parentRoute = "/report";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "展后報告",
            key: "report"
        },
        component: () => import("@/views/report/index")
    }
];

export default router;
