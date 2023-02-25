import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/Home.vue'
import ProposalListsView from './views/ProposalLists.vue'
import ProposeView from './views/Propose.vue'
import ProposeConfirmView from './views/ProposeConfirm.vue'
import MypageView from './views/Mypage.vue'
import GiftView from './views/Gift.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ProposalListsView
    },
    {
        path: '/propose',
        name: 'propose',
        component: ProposeView
    },
    {
        path: '/proposeConfirm',
        name: 'proposeConfirm',
        component: ProposeConfirmView
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MypageView
    },
    {
        path: '/gift',
        name: 'gift',
        component: GiftView
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
})

export default router
