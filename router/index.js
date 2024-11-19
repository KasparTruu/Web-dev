import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/views/HomePage.vue';
import Contact from '../src/views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: Contact },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
