import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export default {
  namespaced: true,
  state: {
    gifts: [],
    balance: 0,
  },
  getters: {
    gifts(state) {
      return state.gifts;
    },
    token(state, getters, rootState, rootGetters) {
      return rootGetters["token"];
    },
  },
  mutations: {
    setGifts(state, commit) {
      state.gifts = commit.prizes;
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
  },
  actions: {
    /**
     * 研修一覧取得
     */
    getGift(state) {
      const client = applyCaseMiddleware(axios.create());
      let termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}prize`;

      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {},
        })
        .then((response) => {
          state.commit("setGifts", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
    /**
     * 研修一覧取得
     */
    purchaseGift(state, proposalId) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}prize/${proposalId}/trade`;

      return client
        .post(
          termRequestUri,
          {},
          {
            withCredentials: false,
            headers: {
              Authorization: state.getters.token,
            },
          }
        )
        .then((response) => {
          state.commit("setBalance", response.data.balance);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
  },
};
