import {createRouter, createWebHistory} from 'vue-router'

// Routes
import HomeView    from 'views/HomeView.vue'
import AboutView   from 'views/AboutView.vue'
import LayoutView  from 'views/LayoutView.vue'
import GridView    from 'views/GridView.vue'
import ResetView   from 'views/ResetView.vue'
import FormView    from 'views/FormView.vue'
import ElementView from 'views/ElementView.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/about',
        name: 'about',
        component: AboutView
    }, {
        path: '/layout',
        name: 'layout',
        component: LayoutView,
        children: [
            {
                path: 'grid',
                name: 'grid-layout',
                component: import('views/layouts/GridLayoutView.vue')
            }, {
                path: 'base',
                name: 'base-layout',
                component: import('views/layouts/BaseLayoutView.vue')
            }
        ]
    }, {
        path: '/grid',
        name: 'grid',
        component: GridView
    }, {
        path: '/reset',
        name: 'reset',
        component: ResetView
    }, {
        path: '/form',
        name: 'form',
        component: FormView
    }, {
        path: '/element',
        name: 'element',
        component: ElementView
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: import('views/NotFoundView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
