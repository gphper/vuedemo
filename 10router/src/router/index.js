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
const Article = ()=>import("../components/Article.vue")

const routes = [
    {
        path:"/",
        // redirect:"/home"
        // redirect:{name:"Home"}
        redirect: to=>{
            return {path:"/home",query:{name:to.query.id}}
        }
    },
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
        alias:"/gphper",
        meta:{
            title:"关于我们"
        },
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
            },
            {
                path:"article/:id",
                component:Article,
            }
        ]
    }
];

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next)=>{
    document.title=to.meta.title
    console.log(to.fullPath)
    console.log(from.fullPath)
    next()
})

router.afterEach((to,from)=>{
    console.log(to.fullPath)
    console.log(from.fullPath)
})

export default router