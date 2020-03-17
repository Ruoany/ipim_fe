import Vue from "vue";
import VueRouter from "vue-router";
import show from "./show";
import personal from "./personal";
import myform from "./myform";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
    return routerPush.call(this, location).catch(error => error);
};

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            meta: {
                title: "首页",
                key: "home"
            },
            component: () => import("@/views/layout/index"),
            children: [
                {
                    path: "/",
                    redirect: "/index"
                },
                {
                    path: "/index",
                    component: () => import("@/views/home/index"),
                    meta: {
                        title: "首頁",
                        key: "home"
                    }
                },
                ...show,
                ...personal,
                ...myform
            ]
        }
    ]
});

router.afterEach(() => {
    scrollTo(0, 0);
});

export default router;
