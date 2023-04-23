<template>
  <AppHeaderProposal />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="max-width: 1200px; margin: 0 auto;">
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
        :createdAt="proposal.createdAt"
        :tags="proposal.tags"
        :proposalOwnType="proposal.proposalOwnType"
        :proposalStatus="proposal.proposalStatus"
        :nftTokenId="proposal.nft_token_id"
        :fundraisingCondition="proposal.proposalFundraisingCondition"
        :voteList="proposal.votes"
      />
    </div>
  </div>
</template>

<script>
import ProposalCards from "../../components/ProposalCards.vue";
import AppHeaderProposal from "../../components/AppHeaderProposal.vue";

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
      this.$store.dispatch("proposalStore/getProposalList").then(() => {});
    },
  },
};
</script>

<style>
.item {
  display: inline-block;
}
</style>
