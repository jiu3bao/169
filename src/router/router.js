import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '*',
    name: 'index',
    component: () => import('../views/index.vue')
  },
]
let router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  if(to.name != 'index'&& to.name != 'login'&& to.name != 'help') {
    const token = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
    if(token && token.length>0 && user && user.name) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
