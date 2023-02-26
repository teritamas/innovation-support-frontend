import applyCaseMiddleware from 'axios-case-converter';
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
        proposalr_wallet_address: "string", //仮おき
        otherContents: '',
    },
    proposalLists : '',
    newVote : {
        user_id: '',
        judgement: false,
        judgement_reason : ''
    }
  },
  getters: {
    newProposal(state) {
        return state.newProposal;
    },
    proposalLists(state) {
        return state.proposalLists;
    },
    newVote(state) {
        return state.newVote;
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
        state.proposalLists = proposalLists.proposals;
    },
    setNewVote(state, newVote) {
        state.newVote = newVote;
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
            state.commit('setProposalLists', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    registProposal(state, commit) {
          const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'/proposal';
          const client = applyCaseMiddleware(axios.create());
          const newProposal = commit
        //  state.commit('setUser', commit.userName);
          return client
          .post(
            termRequestUri,
            newProposal.newProposal,
            newProposal.file,
            {
              headers: {
                Authorization: state.getters.token,
              },
            }
          )
          .then((response) => {
            console.log(response);
            //state.commit('setUserId', response.data.user_id);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
        },
        vote(state, commit) {
            const termRequestUri =
              process.env.VUE_APP_API_ENDPOINT +'proposal/'+ commit.proposal_id;
              const newProposal = commit.newVote;
            //  state.commit('setUser', commit.userName);
              return axios
              .post(
                termRequestUri,
                newProposal,
                {
                  headers: {
                    Authorization: state.getters.token,
                  },
                }
              )
              .then((response) => {
                console.log(response);
                //state.commit('setUserId', response.data.user_id);
              })
              .catch(err => {
                (this.errored = true), (this.error = err);
              });
        },
    },
}
