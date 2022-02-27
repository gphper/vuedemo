/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-25 21:03:48
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
const About = ()=>import('../components/About.vue')
const Personal = ()=>import('../components/Personal.vue')
const Order = ()=>import("../components/Order.vue")
const Setting = ()=>import("../components/Setting.vue")

const routes = [
    {
        path:"/home",
        name:"Home",
        components:{
            show1:Home,
        }
    },
    {
        path:"/about",
        name:"About",
        component:About
    },
    {
        path:"/personal",
        name:"Personal",
        component:Personal,
        children:[
            {
                path:'',
                component:Order
            },
            {
                path:"order",
                component:Order,
            },
            {
                path:"setting",
                component:Setting,
            }
        ]
    }
];

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router