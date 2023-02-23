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
    showContentsType: 'propose',
    showContentsGiftType: 'study',
  },
  getters: {
  },
  mutations: {
    setNewProposion(state, newProposion) {
        state.newProposion = newProposion;
    },
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
  }
})
