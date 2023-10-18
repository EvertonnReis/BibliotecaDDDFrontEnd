import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlunoView from '../views/AlunoView.vue';
import LivroView from '../views/AlunoView.vue';
import BibliotecariaView from '../views/AlunoView.vue';
import EmprestimoView from '../views/AlunoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/aluno',
      name: 'aluno',
      component: AlunoView
    },
    {
      path: '/livro',
      name: 'livro',
      component: LivroView
    },
    {
      path: '/bibliotecaria',
      name: 'bibliotecaria',
      component: BibliotecariaView
    },
    {
      path: '/emprestimo',
      name: 'emprestimo',
      component: EmprestimoView
    },
  ]
})

export default router
