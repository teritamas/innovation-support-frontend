import axios from 'axios';

export default {
  namespaced: true,
  state: {
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
    walletAddress : '',
    chainId : '',
    hasBrowserExtension: '',
    user: {}, // いのさぽのニックネーム
    userId: '', // いのさぽのID
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
    user(state) {
        return state.user;
    },
    userName(state) {
        return state.userName;
    },
  },
  mutations: {
    setAccount(state, account) {
        state.account = account;
    },
    setChainId(state, chainId) {
        state.chainId = chainId;
    },
    setUser(state, user) {
        state.user = user;
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
    getUser(state, commit) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT + 'user/wallet_address/'
          + commit.walletAddress;
          return axios
          .get(termRequestUri, {
            withCredentials: false,
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
    getWalletAddress : async function (state) {
        try {
            const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (account.length > 0) {
                return state.commit('setWalletAddress', account[0]);
            } else {
                return "";
            }
        } catch (err) {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
            return "";
        }
    },
    registUserName(state, commit) {
        const termRequestUri =
          process.env.VUE_APP_API_ENDPOINT +'/user';
          const userInfo = {
            "user_name": commit.userName,
            "wallet_address": commit.walletAddress,
          };
          state.commit('setUserName', commit.userName);
          return axios
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
            state.commit('setUserId', response.data.user_id);
          })
          .catch(err => {
            (this.errored = true), (this.error = err);
          });
        },
  },
}
