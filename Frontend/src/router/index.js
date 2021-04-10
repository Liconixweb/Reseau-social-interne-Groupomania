import { createRouter, createWebHistory,  } from "vue-router";
import Accueil from '@/views/Accueil.vue';

 
const routes = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import(/*weppackChunkName: "signup"*/ '@/views/Signup.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/*weppackChunkName: "login"*/ '@/views/Login.vue')
    },
    {
        path: "/deconnect",
        name: "Deconnect",
        component: () => import(/*weppackChunkName: "deconnect"*/ '@/views/Deconnect.vue')
    },
    {
        path: "/confidential",
        name: "Confidential",
        component: () => import(/*weppackChunkName: "confidential"*/ '@/views/Confidential.vue')
    },
    {
        path: "/reglement",
        name: "Reglement",
        component: () => import(/*weppackChunkName: "reglement"*/ '@/views/Reglement.vue')
    },
    {
        path: "/unsubscribe",
        name: "Unsubscribe",
        component: () => import(/*weppackChunkName: "unsubscribe"*/ '@/views/Unsubscribe.vue')
    },
    {
        path: "/forum",
        name: "Forum",
        component: () => import(/*weppackChunkName: "forum"*/ '@/views/Forum.vue')
    },
    {
        path: "/forum-texte",
        name: "ForumTexte",
        component: () => import(/*weppackChunkName: "forumTexte"*/ '@/views/ForumTexte.vue')
    },
    {
        path: "/forum-multimedia",
        name: "ForumMultimedia",
        component: () => import(/*weppackChunkName: "forumMultimedia"*/ '@/views/ForumMultimedia.vue')
    },
    {
        path: "/post",
        name: "Post",
        component: () => import(/*weppackChunkName: "commentaire"*/ '@/views/Post.vue')
    },
    {
        path: "/commentaire/:id",
        name: "Commentaire",
        component: () => import(/*weppackChunkName: "commentaire"*/ '@/views/Commentaire.vue')
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;