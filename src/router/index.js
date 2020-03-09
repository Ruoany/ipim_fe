import Vue from "vue";
import VueRouter from "vue-router";
import show from "./show";
import personal from "./personal";
import myform from "./myform";

Vue.use(VueRouter);

// const routes = [...show, ...personal];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", redirect: "/index" },
        {
            path: "/",
            meta: {
                title: "首页"
            },
            component: () => import("@/views/layout/index"),
            children: [...show, ...personal, ...myform]
        }
    ]
});

router.afterEach(() => {
    scrollTo(0, 0);
});

export default router;
