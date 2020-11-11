import Vue from "vue";
import VueRouter from "vue-router";
import show from "./show";
import personal from "./personal";
import myform from "./myform";
import report from "./report";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
    return routerPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            meta: {
                title: "首页",
                key: "home",
            },
            component: () => import("@/views/layout/index"),
            children: [
                {
                    path: "/",
                    redirect: "/index",
                },
                {
                    path: "/index",
                    component: () => import("@/views/home/index"),
                    meta: {
                        title: "首頁",
                        key: "home",
                        case: "index",
                    },
                },
                {
                    path: "/download_personal",
                    component: () => import("@/views/dowPer/index"),
                    meta: {
                        title: "下載中心",
                        key: "download_personal",
                        case: "download_personal",
                    },
                },
                {
                    path: "/help_center",
                    component: () => import("@/views/helCen/index"),
                    meta: {
                        title: "幫助中心",
                        key: "help_center",
                        case: "help_center",
                    },
                },
                {
                    path: "/helCen_details",
                    component: () => import("@/views/helCen/details"),
                    meta: {
                        title: "幫助中心詳情",
                        key: "helCen_details",
                        case: "helCen_details",
                    },
                },
                ...show,
                ...personal,
                ...myform,
                ...report,
            ],
        },
        {
            path: "/login",
            meta: {
                title: "登錄",
                key: "login",
            },
            component: () => import("@/views/login/index"),
        },
        {
            path: "/register",
            meta: {
                title: "註冊",
                key: "register",
            },
            component: () => import("@/views/register/index"),
        },
        {
            path: "/reset",
            meta: {
                title: "重置密碼",
                key: "reset",
            },
            component: () => import("@/views/reset/index"),
        },
    ],
});

router.afterEach(() => {
    scrollTo(0, 0);
});

export default router;
