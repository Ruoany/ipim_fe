const parentRoute = "/personal";
const router = [
    {
        path: `${parentRoute}/index`,
        meta: {
            title: "個人中心"
        },
        component: () => import("@/views/personal/index"),
        children: [
            {
                path: `${parentRoute}/info`,
                component: () => import("@/views/personal/info"),
                meta: {
                    key: "info",
                    title: "機構信息"
                }
            },
            {
                path: `${parentRoute}/record`,
                component: () => import("@/views/personal/record"),
                meta: {
                    key: "record",
                    title: "參會/參團紀錄"
                }
            },
            {
                path: `${parentRoute}/funding`,
                component: () => import("@/views/personal/funding"),
                meta: {
                    key: "funding",
                    title: "資助與財務鼓勵"
                }
            },
            {
                path: `${parentRoute}/setting`,
                component: () => import("@/views/personal/setting"),
                meta: {
                    key: "setting"
                }
            },
            {
                path: `${parentRoute}/mine`,
                component: () => import("@/views/personal/mine"),
                meta: {
                    key: "mine",
                    title: "個人信息"
                }
            },
            {
                path: `${parentRoute}/mechanism`,
                component: () => import("@/views/personal/mechanism"),
                meta: {
                    key: "info"
                }
            },
            {
                path: `${parentRoute}/con_user`,
                component: () => import("@/views/personal/conUser"),
                meta: {
                    key: "info"
                }
            },
            {
                path: `${parentRoute}/picture`,
                component: () => import("@/views/personal/picture"),
                meta: {
                    key: "record"
                }
            }
        ]
    }
];

export default router;
