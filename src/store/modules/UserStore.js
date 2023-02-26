import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export default {
  namespaced: true,
  state: {
    userId: '', // いのさぽのID
    detail: {}, // いのさぽのニックネーム
    walletAddress : '',
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
        return state.walletAddress;
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
        state.walletAddress = walletAddress;
    },
    setHasBrowserExtension(state, hasBrowserExtension) {
        state.hasBrowserExtension = hasBrowserExtension;
    },
    setUserId(state, userId) {
        state.userId = userId;
    },
  },
  actions: {
    getDetail(state, commit) {
        // キャメルケースとスネークケースの変換
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'user/'
          + commit.userId;
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
    getUser(state, commit) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'user/wallet_address/'
          + commit.walletAddress;
          return axios
          .get(termRequestUri, {
            withCredentials: false,
            headers: {
                Authorization: state.getters.token,
            },
          })
          .then(response => {
            console.log(response.data);
            state.commit('setUser', response.data);
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
        return state.commit('setWalletAddress', commit.walletAddress);
    },
    registUser(state, commit) {
        const client = applyCaseMiddleware(axios.create());
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'user';
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
            state.commit('setUserId', response.data.userId);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
        },
  },
}
