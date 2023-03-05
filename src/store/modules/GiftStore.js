import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export default {
  namespaced: true,
  state: {
    gifts: [],
  },
  getters: {
    gifts(state) {
      return state.gifts;
    },
    token(state, getters, rootState, rootGetters) {
      return rootGetters['token'];
    },
  },
  mutations: {
    setGifts(state, commit) {
      state.gifts = commit.prizes;
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
  },
};
