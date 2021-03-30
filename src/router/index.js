import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复路由跳转报错！
// VueRouter.prototype.push = function push(location) {
//     return VueRouter.prototype.push.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import(/* webpackChunkName: "login" */ '@/views/account/login'), meta: { title: '登录' }},
    { path: '*', component: () => import(/* webpackChunkName: "404" */ '@/views/layout/404') },
    { path: '/home', name: 'Home', component: () => import(/* webpackChunkName: "index" */ '@/views/layout/index') }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (localStorage.token) {
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    }
})

// 导出路由实例
export default router
