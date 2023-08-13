import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import zerowasteView from "../views/ZeroWaste.vue"
import mainDefault from "../Layout/MainDefault"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'zerowasteView',
    component: mainDefault,
    meta: { backgroundColor: "#F8FFF9" },
    children:[
      {
        path:"",
        component : zerowasteView,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
