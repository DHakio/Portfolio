import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Infos from '../views/Infos.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Infos',
    component: Infos
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
