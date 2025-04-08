import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes,
  },
  {
    path: '/edit-note/:id',
    name: 'editNote',
    component: ViewEditNote,
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats,
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation gaurd
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.user.uid && to.name !== 'auth') {
    return { name: 'auth'}
  }

  if (authStore.user.uid && to.name === 'auth') {
    return false;
  }
})

export default router;
