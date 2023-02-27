import { createRouter, createWebHistory } from "vue-router";
import Inicio from "./pages/Inicio.vue";
import Introduccion from "./pages/Introduccion.vue";
import Contenidos from "./pages/Contenidos.vue";
import Jornalizacion from "./pages/Jornalizacion.vue";
import Calendarizacion from "./pages/Calendarizacion.vue";
import Apuntes from "./pages/Apuntes.vue";
//import Guias from "./pages/Guias.vue";
//import Casos from "./pages/Casos.vue";
import Tareas from "./tareas/Tareas.vue";
import Calificaciones from "./pages/Calificaciones.vue";
//import Proyecto from "./pages/Proyecto.vue";
import Main from "./proyecto/Main.vue";
import BarradeCarga from "./proyecto/BarradeCarga.vue";
import Semana2 from "./tareas/Semana2.vue";
import Semana3 from "./tareas/Semana3.vue";




const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/introduccion",
    name: "Introduccion",
    component: Introduccion,
  },
  {
    path: '/contenidos',
    name: 'Contenidos',
    component: Contenidos
  },
  {
    path: '/jornalizacion',
    name: 'Jornalizacion',
    component: Jornalizacion
  },
  {
    path: '/calendarizacion',
    name: 'Calendarizacion',
    component: Calendarizacion
  },
  {
    path: '/apuntes',
    name: 'Apuntes',
    component: Apuntes
  },
 //{
 //   path: '/guias',
 //   name: 'Guias',
 //   component: Guias
 // },
 // {
 //   path: '/casos',
 //   name: 'Casos',
 //   component: Casos
 //},
  {
    path: '/tareas',
    name: 'Tareas',
    component: Tareas
  },
  {
    path: '/calificaciones',
    name: 'Calificaciones',
    component: Calificaciones
  },
  //{
  //  path: '/proyecto',
  //  name: 'Proyecto',
  //  component: Proyecto
  //},
  {
    path: '/main',
    name: 'Main',
    component: Main

  },
  {
    path: '/BarradeCarga',
    name: 'barradecarga',
    component: BarradeCarga
  },
  {
    path: '/Semana2',
    name: 'Semana2',
    component: Semana2
  },
  {
    path: '/Semana3',
    name: 'Semana3',
    component: Semana3
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;