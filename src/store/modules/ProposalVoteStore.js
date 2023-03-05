import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    extension: {
      request: {
        judgementReason: "",
      },
      response: {
        score: 0,
      },
    },
    voteDetail: {
        isProposer: true,
        voted: true,
        voteContent: {
          proposalId: "",
          userId: "",
          judgement: false,
          judgementReason: "",
          createdAt: "2023-03-04T15:02:01.646609+09:00",
          updatedAt: "2023-03-04T15:02:01.646622+09:00",
          nftUri: "",
          nftTokenId: ""
        }
    },
    voteStatus: {
        voteAction: false,
        positiveProposalVotes: [
          {
            proposalId: "",
            userId: "",
            judgement: true,
            judgementReason: "",
            createdAt: "2023-03-04T15:02:01.646609+09:00",
            updatedAt: "2023-03-04T15:02:01.646622+09:00",
            nftUri: "",
            nftTokenId: ""
          }
        ],
        negativeProposalVotes: [
          {
            proposalId: "",
            userId: "",
            judgement: false,
            judgementReason: "",
            createdAt: "2023-03-04T15:02:01.646609+09:00",
            updatedAt: "2023-03-04T15:02:01.646622+09:00",
            nftUri: "",
            nftTokenId: ""
          }
        ]
    },
    reward : 0,
    balance: 0,
  },
  getters: {
    token(state, getters, rootState, rootGetters) {
      return rootGetters['token'];
    },
    getJudgementReason(state) {
      return state.extension.response.score;
    },
    getVoteJudgementEnrichmentRequest(state){
      return state.extension.request
    },
    getVoteDetail(state) {
        return state.voteDetail
    },
    getVoteStatus(state) {
        return state.voteStatus
    },
    getReward(state) {
        return state.reward
    },
    getBalance(state) {
      return state.balance
  },
  },
  mutations: {
    setVoteJudgementEnrichmentRequest(state, commit) {
      state.extension.request.judgementReason = commit.judgementReason;
    },
    setVoteScore(state, commit) {
      state.extension.response.score = commit.score;
    },
    setVoteDetail(state, commit) {
        state.voteDetail = commit;
    },
    setVoteStatus(state, commit) {
        state.voteStatus = commit;
    },
    setVoteResponse(state, commit) {
        console.log(commit)
        state.reward = commit.reward;
        state.balance = commit.balance;
    },
  },
  actions: {
    /**
     * 投票詳細取得
     */
    getVoteDetail(state, commit) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'proposal/'+ commit + '/vote';
      return client
          .get(
          termRequestUri,
          {
              headers: {
              Authorization: state.getters.token,
              },
          }
          )
          .then((response) => {
            state.commit('setVoteDetail', response.data);
          })
          .catch(err => {
          (this.errored = true), (this.error = err);
          });
    },
    /**
     * 投票状況取得
     */
    getVoteStatus(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
            process.env.VUE_APP_API_ENDPOINT +'proposal/'+ commit + '/vote_status';
        return client
            .get(
            termRequestUri,
            {
                headers: {
                Authorization: state.getters.token,
                },
            }
            )
            .then((response) => {
                state.commit('setVoteStatus', response.data);
            })
            .catch(err => {
            (this.errored = true), (this.error = err);
            });
      },
    /**
     * 投票
     */
    vote(state, commit) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'proposal/'+ commit.proposalId + '/vote';
          const body = commit.vote;
          state.commit('setVoteResponse', { "reword": 0, "balance": 0});
      return client
          .post(
          termRequestUri,
          body,
          {
              headers: {
              Authorization: state.getters.token,
              },
          }
          )
          .then((response) => {
            state.commit('setVoteResponse', response.data);
          })
          .catch(err => {
          (this.errored = true), (this.error = err);
          });
    },
    /**
     * 判断理由の充実度をAIで評価する
     */
    verifyVoteEnrichment(state) {
      const termRequestUri =
        process.env.VUE_APP_API_ENDPOINT + "extension/vote/enrichment";
      const body = state.getters['getVoteJudgementEnrichmentRequest'];

      return axios
        .post(termRequestUri, body, {
          withCredentials: false,
          headers: {},
        })
        .then((response) => {
          state.commit("setVoteScore", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
  },
};
