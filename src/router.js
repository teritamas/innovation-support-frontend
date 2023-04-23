import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from './views/Home.vue'
import ProposalListsView from './views/lists/ProposalLists.vue'
import ProposalView from './views/proposal/Proposal.vue'
import ProposalDetailView from './views/lists/ProposalDetail.vue'
import ProposalConfirmView from './views/proposal/ProposalConfirm.vue'
import MypageView from './views/mypage/Mypage.vue'
import GiftView from './views/gift/Gift.vue'
import GiftDetailView from './views/gift/GiftDetail.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/lists',
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
    {
        path: '/gift/:giftId',
        name: 'giftDetail',
        component: GiftDetailView,
        props: true,
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
