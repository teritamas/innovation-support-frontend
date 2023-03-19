<template>
  <LoginStep v-if="!token" />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-5" style="max-width:1200px; margin:0 auto;">
    <MyProfile v-if="token" :token="token"/>
    <MyProposals v-if="token" :token="token" class='md:col-span-2' />
    <MyVotes v-if="token" :token="token" class='md:col-span-2' />
    <MyGifts v-if="token" :token="token" />
    <div v-if="token" class="md:col-span-3">
        <div v-for="contract in contracts" :key="contract.index">
        <button
            @click="registerMetamask(contract)"
            class="text-center form-btn mb-1"
        >
            トークンをMetamaskと連携
        </button>
        </div>
    </div>
  </div>
</template>

<script>
import LoginStep from "../components/LoginStep.vue";
import MyProfile from "../components/mypage/MyProfile.vue";
import MyProposals from "../components/mypage/MyProposals.vue";
import MyVotes from "../components/mypage/MyVotes.vue";
import MyGifts from "../components/mypage/MyGifts.vue";

export default {
  name: "MyPage",
  components: {
    MyProfile,
    MyProposals,
    LoginStep,
    MyVotes,
    MyGifts,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("web3Store/getWeb3Info").then(() => {});
  },
  computed: {
    token() {
      return this.$store.getters["userStore/token"];
    },
    contracts() {
      const contracts = this.$store.getters["web3Store/getContracts"];
      return contracts.filter((m) => m.type == "ERC20");
    },
  },
  methods: {
    async registerMetamask(contract) {
      const type = contract.type;
      const tokenAddress = contract.address;
      const tokenSymbol = contract.symbol;
      const tokenDecimals = contract.decimals;
      const tokenImage = contract.image;

      try {
        const wasAdded = await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: type, // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          },
        });

        if (wasAdded) {
          console.log("Thanks for your interest!");
        } else {
          console.log("Your loss!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
