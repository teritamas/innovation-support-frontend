import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export default {
  namespaced: true,
  state: {
    network: "",
    contracts: [],
  },
  getters: {
    getContracts(state) {
      return state.contracts;
    },
  },
  mutations: {
    setResponse(state, commit) {
      state.network = commit.network;
      state.contracts = commit.contracts;
    },
  },
  actions: {
    /**
     * タイムライン取得
     */
    getWeb3Info(state) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}web3`;

      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {},
        })
        .then((response) => {
          state.commit("setResponse", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
  },
};
