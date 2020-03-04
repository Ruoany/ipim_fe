import Vue from "vue";
import VueRouter from "vue-router";
import show from "./show";
import personal from "./personal";

Vue.use(VueRouter);

const routes = [...show, ...personal];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    scrollTo(0, 0);
    next();
});

export default router;
