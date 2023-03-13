<template>
  <div style="">
    <h2 class="text-center text-white font-bold text-xl mt-2.5">提案履歴</h2>
    <div class="proposal-contents horizontal-list">
      <div
        v-for="proposal in userProposals"
        :key="proposal.index"
        class="p-3 item"
      >
        <ProposalCards
          :proposalId="proposal.proposalId"
          :title="proposal.title"
          :description="proposal.description"
          :targetAmount="proposal.targetAmount"
          :proposalStatus="proposal.proposalStatus"
          :fundraisingCondition="proposal.proposalFundraisingCondition"
          :createdAt="proposal.createdAt"
          :voteList="proposal.votes"
        />
      </div>
    </div>
  </div>
</template>


<script>
import ProposalCards from "@/components/mypage/MyProposalHistoryCard.vue";

export default {
  name: "MyProposal",
  components: {
    ProposalCards,
  },
  data() {
    return {};
  },
  props: {
    token: String,
  },
  computed: {
    detail() {
      return this.$store.getters["userStore/detail"];
    },
    proposalCount() {
      if (!this.detail.proposals) {
        return 0;
      }
      return this.detail.proposals.length;
    },
    proposalVoteCount() {
      if (!this.detail.proposalVotes) {
        return 0;
      }
      return this.detail.proposalVotes.length;
    },
    userProposals() {
      return this.detail.proposals;
    },
  },
  created() {
    // メソッドを実行する
    this.getUserDetail();
  },
  methods: {
    // storeのactionsをたたきにいく
    getUserDetail() {
      this.$store.dispatch("userStore/getDetail", this.token).then(() => {});
    },
  },
};
</script>

<style>
.proposal-contents {
  overflow-y: scroll;
}

@media only screen and (max-width: 810px) {
  .horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
  }
  .proposal-contents {
    max-width: 330px;
  }
}
</style>