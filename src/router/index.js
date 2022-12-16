import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"home",
        component: () => import('../Pages/Vue_home.vue')
    },
    {
        path:"/skill",
        name:"myskill",
        component: () => import('../Pages/Vue_skill.vue')
    },
    {
        path:"/dream",
        name:"dream",
        component: () => import('../Pages/Vue_dream.vue')
    },
    {
        path:"/blogs",
        name:"blogs",
        component: () => import('../Pages/Vue_blogs.vue')
    },

]

export default createRouter({
    history: createWebHistory('/'),
    routes
})