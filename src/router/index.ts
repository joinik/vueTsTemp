import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/Demo1.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
