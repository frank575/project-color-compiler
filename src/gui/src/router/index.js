import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  // {
  //   path: '/project/:index',
  //   name: 'project',
  //   component: () => import('../views/project.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
