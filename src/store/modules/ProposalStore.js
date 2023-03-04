import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    newProposal: {},
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
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'proposal/' + commit;
          return axios
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
    storeNewProposal(state, commit) {
        state.commit('setNewProposal', commit.newProposal);
    },
    storeFile(state, commit) {
        state.commit('setFile', commit);
    },
    registProposal(state, commit) {
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
            console.log(response);
            //state.commit('setUserId', response.data.user_id);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    vote(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
            process.env.VUE_APP_API_ENDPOINT +'proposal/'+ commit.proposalId + '/vote';
            const newProposal = commit.vote;
        //  state.commit('setUser', commit.userName);
            return client
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
