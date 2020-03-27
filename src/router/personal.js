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
                    title: "機構信息",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/record`,
                component: () => import("@/views/personal/record"),
                meta: {
                    key: "record",
                    title: "參會/參團紀錄",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/funding`,
                component: () => import("@/views/personal/funding"),
                meta: {
                    key: "funding",
                    title: "資助與財務鼓勵",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/setting`,
                component: () => import("@/views/personal/setting"),
                meta: {
                    key: "setting",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/mine`,
                component: () => import("@/views/personal/mine"),
                meta: {
                    key: "mine",
                    title: "個人信息",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/mechanism`,
                component: () => import("@/views/personal/mechanism"),
                meta: {
                    key: "info",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/sub_account`,
                component: () => import("@/views/personal/subAccount"),
                meta: {
                    key: "info",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/con_user`,
                component: () => import("@/views/personal/conUser"),
                meta: {
                    key: "info",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/picture`,
                component: () => import("@/views/personal/picture"),
                meta: {
                    key: "record",
                    case: "personal"
                }
            },
            {
                path: `${parentRoute}/attest`,
                component: () => import("@/views/personal/attest"),
                meta: {
                    key: "info",
                    case: "personal"
                }
            }
        ]
    }
];

export default router;
