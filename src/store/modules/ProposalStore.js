import axios from 'axios';

export default {
  namespaced: true,
  state: {
    newProposal: {
        title: '',
        descriptions: '',
        targetAmount: '',
        fileName: '',
        filePath: '',
        isRecruitingTeammates: false,
        otherContents: '',
    },
    proposalLists : []
  },
  getters: {
    newProposal(state) {
        return state.newProposal;
    },
    proposalLists(state) {
        return state.proposalLists;
    },
    token(state, getters, rootState, rootGetters) {
        return rootGetters['token'];
      },
  },
  mutations: {
    setNewProposal(state, newProposal) {
        state.newProposal = newProposal;
    },
    setProposalLists(state, proposalLists) {
        state.proposalLists = proposalLists;
    },
  },
  actions: {
    getProposalList(state) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + '/proposal';
          return axios
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
              Authorization: state.getters.token,
            },
          })
          .then(response => {
            state.commit('setMembers', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
  },
}
