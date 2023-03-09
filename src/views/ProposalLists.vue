<template>
  <AppHeaderProposal />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="proposal in proposalLists"
      :key="proposal.index"
      class="p-3 item"
    >
      <ProposalCards
        :proposalId="proposal.proposalId"
        :title="proposal.title"
        :description="proposal.description"
        :filePath="proposal.filePath"
        :targetAmount="proposal.targetAmount"
        :isRecruitingTeammates="proposal.isRecruitingTeammates"
        :otherContents="proposal.otherContents"
        :tags="proposal.tags"
        :proposalrWalletAddress="proposal.proposalr_wallet_address"
        :nftTokenId="proposal.nft_token_id"
      />
    </div>
  </div>
</template>

<script>
import ProposalCards from "../components/ProposalCards.vue";
import AppHeaderProposal from "../components/AppHeaderProposal.vue";

export default {
  name: "proposa-list",
  components: {
    ProposalCards,
    AppHeaderProposal,
  },
  data() {
    return {};
  },
  computed: {
    proposalLists() {
      return this.$store.getters["proposalStore/proposalLists"];
    },
  },
  created() {
    // メソッドを実行する
    this.getProposalLists();
  },
  methods: {
    getProposalLists() {
      this.$store
        .dispatch("proposalStore/getProposalList")
        .then(() => {});
    },
  },
};
</script>

<style>
.item {
  display: inline-block;
}
</style>
