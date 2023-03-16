//import axios from 'axios';
//import applyCaseMiddleware from 'axios-case-converter';

export default {
  namespaced: true,
  state: {
    showContentsType: "proposal",
    showContentsGiftType: "Training",
  },
  getters: {
    showGiftType(state) {
      return state.showContentsGiftType;
    },
    //loading(state) {
    //    return state.loading;
    //},
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setShowContentsType(state, showContentsType) {
      state.showContentsType = showContentsType;
    },
    setShowContentsGiftType(state, showContentsGiftType) {
      state.showContentsGiftType = showContentsGiftType;
    },
  },
  actions: {
    //getLoading(state, commit) {
    //    console.log(commit);
    //    state.commit('setLoading', commit);
    //},
  },
};
