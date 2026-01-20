import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/LibraryView.vue'),
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/WishlistView.vue'),
    },
    {
      path: '/games/:id',
      name: 'game-detail',
      component: () => import('../views/GameDetailView.vue'),
      props: true,
    },
  ],
})

export default router