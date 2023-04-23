<template>
  <div class="bg-glass" style="max-width: 800px">
    <h2 class="title-underline text-center text-white text-xl mt-2.5">投票履歴</h2>
    <div class="proposal-contents horizontal-list">
      <div 
        v-if="userProposalVotes.length == 0"
        class="text-white p-5 text-center">
        <p>
            投票の履歴がありません。<br>
            提案一覧から投票をしてみてください！
        </p>
        <img class="w-full img-to-display-if-not" src="@/assets/img/noVoteImage.png" alt="投票がないときの画像">
      </div>
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
      if (this.userDetail.proposalVotes === undefined) return [];
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
  .proposal-contents {
    max-width: 100%;
  }
}
</style>