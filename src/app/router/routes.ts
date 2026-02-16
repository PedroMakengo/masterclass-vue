import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/shared/layouts/AppLayout.vue'
import HomePage from '@/modules/sample/pages/HomePage.vue'
import AuthPage from '@/modules/auth/pages/AuthPage.vue'
import CounterPage from '@/modules/sample/pages/CounterPage.vue'
import CounterPiniaPage from '@/modules/sample/pages/CounterPiniaPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: AuthPage,
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'counter',
        component: CounterPage,
      },
      {
        path: 'counter/pinia',
        component: CounterPiniaPage,
      },
    ],
  },
]
