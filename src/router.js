import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/Home.vue'
import ProposalListsView from './views/ProposalLists.vue'
import ProposalView from './views/Proposal.vue'
import ProposalDetailView from './views/ProposalDetail.vue'
import ProposalConfirmView from './views/ProposalConfirm.vue'
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
      path: '/lists',
      name: 'lists',
      component: ProposalListsView
    },
    {
        path: '/proposal',
        name: 'proposal',
        component: ProposalView
    },
    {
        path: '/proposal/:proposalId',
        name: 'proposalDetail',
        component: ProposalDetailView
    },
    {
        path: '/proposalConfirm',
        name: 'proposalConfirm',
        component: ProposalConfirmView
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
