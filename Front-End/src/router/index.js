import { createRouter, createWebHistory } from 'vue-router'
import HomeForum from '@/views/HomeForum.vue'
import creerUnCompteForum from '@/views/creerUnCompteForum.vue'
import loginUnCompteForum from '@/views/loginUnCompteForum.vue'
import profilUtilisateursForum from '@/views/profilUtilisateursForum.vue'

import avatarsProfilUtilisateursForum from '@/views/avatarsProfilUtilisateursForum.vue'
import titreMessagesUtilisateursForum from '@/views/titreMessagesUtilisateursForum.vue'
import reponseMessagesUtilisateursForum from '@/views/reponseMessagesUtilisateursForum.vue'
import reponseTitreMessagesUtilisateursForum from '@/views/reponseTitreMessagesUtilisateursForum.vue'


import ProductForum from '@/views/ProductForum.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeForum,
        meta: {
            title: 'Accueil'
        }
    },

    {
        name: 'creerUnCompteForum',
        path: '/creerUnCompteForum',
        component: creerUnCompteForum,
        meta: {
            title: 'A propos'
        }
    },

    {
        name: 'loginUnCompteForum',
        path: '/loginUnCompteForum',
        component: loginUnCompteForum,
        meta: {
            title: 'A propos'
        }
    },

    {
        name: 'profilUtilisateursForum',
        path: '/profilUtilisateursForum',
        component: profilUtilisateursForum,
        meta: {
            
            title: 'A propos',
            reload: true,
            requiresAuth: true,
            
        }
    },

    {
        name: 'avatarsProfilUtilisateursForum',
        path: '/avatarsProfilUtilisateursForum',
        component: avatarsProfilUtilisateursForum,
        meta: {
            title: 'A propos',
            requiresAuth: true,
        }
    },

    {
        name: 'titreMessagesUtilisateursForum',
        path: '/titreMessagesUtilisateursForum',
        component: titreMessagesUtilisateursForum,
        meta: {
            title: 'A propos',
            requiresAuth: true,
        }
    },

    {
        name: 'reponseMessagesUtilisateursForum',
        path: '/reponseMessagesUtilisateursForum/:id',
        component: reponseMessagesUtilisateursForum,
        meta: {
            title: 'A propos',
            requiresAuth: true,
        }
    },

    {
        name: 'reponseTitreMessagesUtilisateursForum',
        path: '/reponseTitreMessagesUtilisateursForum/:id',
        component: reponseTitreMessagesUtilisateursForum,
        meta: {
            title: 'A propos',
            requiresAuth: true,
        }
    },

    {
        name: 'Product',
        path: '/product/:name',
        component: ProductForum,
        props: true,
        meta: {
            title: 'Produits'
        }
    },

    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        }


    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to) => {
    document.title = to.meta.title
})

export default router