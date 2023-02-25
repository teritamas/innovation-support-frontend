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
    proposalLists : '',
  },
  getters: {
    newProposal(state) {
        return state.newProposal;
    },
    proposalLists(state) {
        return state.proposalLists;
    },
  },
  mutations: {
    setNewProposal(state, newProposal) {
        state.newProposal = newProposal;
    },
    setProposalLists(state, proposalLists) {
        state.proposalLists = proposalLists.proposals;
    },
  },
  actions: {
    getProposalList(state) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + '/proposal';
          return axios
          .get(termRequestUri, {
            withCredentials: false,
          })
          .then(response => {
            state.commit('setProposalLists', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
  },
}
