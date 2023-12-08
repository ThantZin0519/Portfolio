import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'; // Import your home view component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
