import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/privatPage.vue')},
      { path: 'geschaeftlich', component: () => import('pages/geschaeftlichPage.vue')},
      { path: 'nachhaltig', component: () => import('pages/nachhaltigPage.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFoun.vue'),
  },
];

export default routes;
