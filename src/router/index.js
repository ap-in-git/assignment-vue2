import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

 const routes = [
       {
            path:"/product/:slug",
            component: () => import("../pages/Product"),
            name:"Product"
        },
            {
                path: "/",
                name: "Index",

                component: ()=>import("../pages/Index"),
            },
            {
                path: "/product",
                name:"ProductPage",
                component: ()=>import("../pages/ProductPage"),
            },
            {
                path: "/checkout",
                name:"CheckoutPage",
                component: ()=>import("../pages/CheckoutPage"),
            }

];
const router = new VueRouter({
    mode: "history",
    routes: routes,
});


export default router;