import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export default {
  namespaced: true,
  state: {
    latestTimestamp: 0,
    timelines: [],
  },
  getters: {
    timelineContents(state) {
      return state.timelines;
    },
    latestTimestamp(state) {
      return state.latestTimestamp;
    },
  },
  mutations: {
    setResponse(state, commit) {
      state.latestTimestamp = commit.timestamp;
      state.timelines = commit.timelines.concat(state.timelines);
    },
  },
  actions: {
    /**
     * タイムライン取得
     */
    getTimeline(state) {
      const client = applyCaseMiddleware(axios.create());
      let termRequestUri = `${process.env.VUE_APP_API_ENDPOINT}timeline`;

      if (state.getters.latestTimestamp !== 0) {
        termRequestUri += `/?timestamp=${state.getters.latestTimestamp}`;
      }

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
