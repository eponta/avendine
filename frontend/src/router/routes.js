const routes = [
  {
    path: '/cqui',
    component: () => import('layouts/CQui.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      isAuth: true,
    }
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
