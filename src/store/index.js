import { createStore } from 'vuex'

export default createStore({
  state: {
    newProposion: {
        businessName: '',
        businessSummary: '',
        targetAmount: '',
        fileName: '',
        filePath: '',
        members: 'NO', // NO:募集しない, YES:募集する
        remarks: '',
      },
  },
  getters: {
  },
  mutations: {
    setNewProposion(state, newProposion) {
        state.newProposion = newProposion;
      },
  },
  actions: {
  },
  modules: {
  }
})
