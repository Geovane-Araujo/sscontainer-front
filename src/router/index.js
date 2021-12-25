import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import before from './beforeEach'

sessionStorage.setItem('token','')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'DashBoard', params: { name: 'DashBoard' } },
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('../views/pages/DashBoard/DashBoard.vue')
      },
      {
        path: '/empresa',
        name: 'Empresa',
        component: () => import('../views/pages/Empresa/list/Empresa.vue')
      },
      {
        path: '/formempresa',
        name: 'FormEmpresa',
        component: () => import('../views/pages/Empresa/form/Empresa.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../security/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../security/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(before)

export default router
