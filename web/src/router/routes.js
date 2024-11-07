import { createRouter, createWebHistory } from 'vue-router';
import BookList from './components/BookList.vue';
import EditBook from './components/EditBook.vue';

const routes = [
  {
    path: '/',
    component: BookList
  },
  {
    path: '/edit/:id',
    component: EditBook
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
