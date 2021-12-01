const routes = [
  {
    path: '/cqui',
    component: () => import('layouts/Login.vue'),
  },
  { path: '/', redirect: '/calendrier' },
  {
    path: '/calendrier',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue'),
        children: [
          { 
            path: '/cadeau/:id', 
            component: () => import('pages/Cadeau.vue'),
          }
        ]
      },
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
