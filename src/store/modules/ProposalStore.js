import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    newProposal: {},
    registeredProposalId : '',
    file : '',
    proposalLists : '',
    proposal: {},
    newVote : {
        user_id: '',
        judgement: false,
        judgement_reason : ''
    }
  },
  getters: {
    registeredProposalId(state) {
        return state.registeredProposalId;
    },
    newProposal(state) {
        return state.newProposal;
    },
    proposal(state) {
        return state.proposal;
    },
    file(state) {
        return state.file;
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
    setRegisteredProposalId(state, registeredProposalId) {
        state.registeredProposalId = registeredProposalId;
    },
    setNewProposal(state, newProposal) {
        state.newProposal = newProposal;
    },
    setProposal(state, proposal) {
        state.proposal = proposal.proposal;
    },
    setProposalLists(state, proposalLists) {
        state.proposalLists = proposalLists.proposals;
    },
    setNewVote(state, newVote) {
        state.newVote = newVote;
    },
    setFile(state, file) {
        state.file = file;
    },
  },
  actions: {
    getProposalList(state) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'proposal';
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
    getProposal(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'proposal/' + commit;
          return client
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
                Authorization: state.getters.token,
            },
          })
          .then(response => {
            state.commit('setProposal', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    getProposalFile(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'proposal/' + commit + '/attachment';
          return client
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
                Authorization: state.getters.token,
            },
          })
          .then(response => {
            state.commit('setFile', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    storeNewProposal(state, commit) {
        state.commit('setNewProposal', commit.newProposal);
    },
    storeFile(state, commit) {
        state.commit('setFile', commit);
    },
    registerProposal(state, commit) {
        const termRequestUri = process.env.VUE_APP_API_ENDPOINT +'proposal';
        const client = applyCaseMiddleware(axios.create());
        const form = new FormData();
        const newProposal = commit.newProposal;
        // jsonにしたためapplyCaseMiddlewareで変換されなかったのでべた書き
        const request = {
            "title": newProposal.title,
            "description": newProposal.description,
            "target_amount": newProposal.targetAmount,
            "is_recruiting_teammates": newProposal.isRecruitingTeammates,
            "other_contents": newProposal.otherContents,
            "tags": [],
            "user_id": newProposal.userId,
            "slack_notification_channels": [
              "string"
            ]
          }
        form.append('request', JSON.stringify(request));
        form.append('file', commit.file);
        state.commit('setRegisteredProposalId', '');
        return client
          .post(
            termRequestUri,
            form,
            {
              headers: {
                Authorization: state.getters.token,
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json',
              },
            }
          )
          .then((response) => {
            state.commit('setRegisteredProposalId', response.data.proposalId);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
  },
}
