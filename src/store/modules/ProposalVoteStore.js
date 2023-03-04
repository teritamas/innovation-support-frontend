// import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    newVote: {
      user_id: "",
      judgement: false,
      judgement_reason: "",
    },
    extension: {
      request: {
        judgement_reason: "",
      },
      response: {
        score: 0,
      },
    },
  },
  getters: {
    getJudgementReason(state) {
      return state.extension.response.score;
    },
    getVoteJudgementEnrichmentRequest(state){
      return state.extension.request
    }
  },
  mutations: {
    setVoteJudgementEnrichmentRequest(state, commit) {
      state.extension.request.judgement_reason = commit.judgement_reason;
    },
    setVoteScore(state, commit) {
      state.extension.response.score = commit.score;
    },
  },
  actions: {
    /**
     * 判断理由の充実度をAIで評価する
     */
    verifyVoteEnrichment(state) {
      const termRequestUri =
        process.env.VUE_APP_API_ENDPOINT + "extension/vote/enrichment/";
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
