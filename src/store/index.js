import { createStore } from "vuex";
import ProposalStore from "./modules/ProposalStore";
import UserStore from "./modules/UserStore";
import DisplayStore from "./modules/DisplayStore";
import createPersistedState from "vuex-persistedstate";
import ProposalVoteStore from "./modules/ProposalVoteStore";
import TimelineStore from "./modules/TimelineStore";
import GiftStore from "./modules/GiftStore";
import Web3Store from "./modules/Web3Store";

export default createStore({
  plugins: [
    createPersistedState({
      key: "inno",
      paths: ["permission.token"],
      storage: window.sessionStorage,
    }),
  ],
  state: {
    showContentsType: "proposal",
    showContentsGiftType: "study",
    permission: {
      token: "",
    },
  },
  getters: {
    token(state) {
      return state.permission.token;
    },
  },
  mutations: {
    setShowContentsType(state, showContentsType) {
      state.showContentsType = showContentsType;
    },
    setShowContentsGiftType(state, showContentsGiftType) {
      state.showContentsGiftType = showContentsGiftType;
    },
    setToken(state, token) {
      state.permission.token = token;
    },
  },
  actions: {},
  modules: {
    proposalStore: ProposalStore,
    userStore: UserStore,
    displayStore: DisplayStore,
    proposalVoteStore: ProposalVoteStore,
    timelineStore: TimelineStore,
    giftStore: GiftStore,
    web3Store: Web3Store,
  },
});
