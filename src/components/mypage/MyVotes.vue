<template>
  <div style="max-width: 660px">
    <h2 class="text-center text-white font-bold text-xl mt-2.5">投票履歴</h2>
    <div class="proposal-contents horizontal-list">
      <div
        v-for="userVote in userProposalVotes"
        :key="userVote.index"
        class="p-3 item"
      >
        <MyVoteHistoryCard
          :title="userVote.title"
          :proposalId="userVote.proposalId"
          :judgement="userVote.judgement"
          :judgementReason="userVote.judgementReason"
          :userVote="userVote"
        />
      </div>
    </div>
  </div>
</template>
  
  
  <script>
import MyVoteHistoryCard from "@/components/mypage/MyVoteHistoryCard.vue";

export default {
  name: "MyVotes",
  components: {
    MyVoteHistoryCard,
  },
  data() {
    return {};
  },
  props: {
    token: String,
  },
  computed: {
    userDetail() {
      return this.$store.getters["userStore/detail"];
    },
    userProposals() {
      return this.userDetail.proposals;
    },
    userProposalVotes() {
      return this.userDetail.proposalVotes;
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