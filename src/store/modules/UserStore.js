import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export default {
  namespaced: true,
  state: {
    userId: '', // いのさぽのID
    detail: {}, // いのさぽのニックネーム
    metamask : {
        walletAddress : '',
        chainId : '',
        Chains: {
            1: "Mainnet",
            3: "Ropsten",
            4: "Rinkeby",
            42: "Kovan",
            1337: "Geth private chain(default )",
            61: "Ethereum Classic Mainnet",
            62: "Morden",
        },
        Wei: 1000000000000000000,
    },
    hasBrowserExtension: '',
  },
  getters: {
    account(state) {
        return state.account;
    },
    walletAddress(state) {
        return state.metamask.walletAddress;
    },
    hasBrowserExtension(state) {
        return state.hasBrowserExtension;
    },
    detail(state) {
        return state.detail;
    },
    userId(state) {
        return state.userId;
    },
    token(state, getters, rootState, rootGetters) {
        return rootGetters['token'];
      },
  },
  mutations: {
    setAccount(state, account) {
        state.account = account;
    },
    setChainId(state, chainId) {
        state.chainId = chainId;
    },
    setDetail(state, detail) {
        state.detail = detail;
    },
    setWalletAddress(state, walletAddress) {
        state.metamask.walletAddress = walletAddress;
    },
    setHasBrowserExtension(state, hasBrowserExtension) {
        state.hasBrowserExtension = hasBrowserExtension;
    },
    setUserId(state, userId) {
        state.userId = userId;
    },
  },
  actions: {
    getDetail(state, token) {
        // キャメルケースとスネークケースの変換
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'user/'
          + token;
          return client
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
                Authorization: state.getters.token,
            },
          })
          .then(response => {
            state.commit('setDetail', response.data);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    getDetailByWalletAddress(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'login/wallet_address/'
          + commit.walletAddress;
          return client
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
                Authorization: state.getters.token,
            },
          })
          .then(response => {
            state.commit('setUserId', response.data.userId);
            // TODO: ハッカソン向の対応としてUserIdをトークンとする
            state.commit("setToken", response.data.userId, { root: true });
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
    },
    getHasBrowserExtension(state) {
        if (typeof window.ethereum !== 'undefined') {
            return state.commit('setHasBrowserExtension', true);
        } else {
            return state.commit('setHasBrowserExtension', false);
        }
    },
    getWalletAddress : async function (state, commit) {
        state.commit('setWalletAddress', commit.walletAddress);
    },
    registerUser(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'signup';
          const userInfo = {
            "user_name": commit.newUserName,
            "wallet_address": commit.walletAddress,
          };
          return client
          .post(
            termRequestUri,
            userInfo,
            {
              headers: {
                Authorization: state.getters.token,
              },
            }
          )
          .then((response) => {
            state.commit("setToken", response.data.userId, { root: true });
            state.commit('setUserId', response.data.userId);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
        },
  },
}
