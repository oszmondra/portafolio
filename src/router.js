import { createRouter, createWebHistory } from "vue-router";
import Inicio from "./pages/Inicio.vue";
import Introduccion from "./pages/Introduccion.vue";
import Contenidos from "./pages/Contenidos.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;