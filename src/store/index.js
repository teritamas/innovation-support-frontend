import { createStore } from 'vuex'
import ProposalStore from './modules/ProposalStore';
import UserStore from './modules/UserStore';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [
    createPersistedState({
        key: 'innoSuppo',
        paths: ['permission.token'],
        storage: window.sessionStorage,
    }),
  ],
  state: {
    showContentsType: 'propose',
    showContentsGiftType: 'study',
  },
  getters: {
  },
  mutations: {
    setShowContentsType(state, showContentsType) {
        state.showContentsType = showContentsType;
    },
    setShowContentsGiftType(state, showContentsGiftType) {
        state.showContentsGiftType = showContentsGiftType;
    },
  },
  actions: {
    },
  modules: {
    proposalStore: ProposalStore,
    userStore: UserStore,
  }
})
