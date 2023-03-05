import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export default {
  namespaced: true,
  state: {
    gifts: [],
    detail: {},
    balance: 0,
  },
  getters: {
    gifts(state) {
      return state.gifts;
    },
    detail(state) {
      return state.detail;
    },
    token(state, getters, rootState, rootGetters) {
      return rootGetters["token"];
    },
  },
  mutations: {
    setGifts(state, commit) {
      state.gifts = commit.prizes;
    },
    setDetail(state, commit) {
      state.detail = commit;
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
    detailGift(state, giftId) {
      const client = applyCaseMiddleware(axios.create());
      let termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}prize/${giftId}`;

      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {},
        })
        .then((response) => {
          state.commit("setDetail", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
    /**
     * 研修一覧取得
     */
    purchaseGift(state, giftId) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}prize/${giftId}/trade`;

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
