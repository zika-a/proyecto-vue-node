import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Agregar from '../views/Agregar.vue'
import Editar from '../views/Editar.vue'
import Detalle from '../views/Detalle.vue'
import Visualizar from '../views/Visualizar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: Agregar
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: Detalle
  },
  {
    path: '/visualizar',
    name: 'Visualizar',
    component: Visualizar
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
