<template>
  <div class="bg-glass">
    <h2 class="title-underline text-center text-white font-bold text-xl mt-2.5">提案履歴</h2>
    <div class="proposal-contents horizontal-list">
      <div 
        v-if="userProposals.length === 0"
        class="text-white p-5 text-center">
        <p>
            提案の履歴がありません。<br>
            ぜひ提案をしてみてください！
        </p>
        <img class="w-full img-to-display-if-not" src="@/assets/img/noProposalImage.png" alt="提案がないときの画像">
      </div>
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
      if (this.detail.proposals === undefined) return [];
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

@media only screen and (max-width: 100%) {
  .horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
  }
  .proposal-contents {
    max-width: 100%;
  }
}
</style>