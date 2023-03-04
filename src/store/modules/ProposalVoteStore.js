import applyCaseMiddleware from "axios-case-converter";
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
    voteDetail: {
        is_proposer: true,
        voted: true,
        vote_content: {
          proposal_id: "",
          user_id: "",
          judgement: false,
          judgement_reason: "",
          created_at: "2023-03-04T15:02:01.646609+09:00",
          updated_at: "2023-03-04T15:02:01.646622+09:00",
          nft_uri: "",
          nft_token_id: ""
        }
    },
    voteStatus: {
        vote_action: false,
        positive_proposal_votes: [
          {
            proposal_id: "",
            user_id: "",
            judgement: false,
            judgement_reason: "",
            created_at: "2023-03-04T15:02:01.646609+09:00",
            updated_at: "2023-03-04T15:02:01.646622+09:00",
            nft_uri: "",
            nft_token_id: ""
          }
        ],
        negative_proposal_votes: [
          {
            proposal_id: "",
            user_id: "",
            judgement: false,
            judgement_reason: "",
            created_at: "2023-03-04T15:02:01.646609+09:00",
            updated_at: "2023-03-04T15:02:01.646622+09:00",
            nft_uri: "",
            nft_token_id: ""
          }
        ]
    }
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
  },
  mutations: {
    setVoteJudgementEnrichmentRequest(state, commit) {
      state.extension.request.judgement_reason = commit.judgement_reason;
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
            console.log(response);
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
