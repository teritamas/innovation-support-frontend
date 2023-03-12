<template>
    <div style="max-width: 660px">
        <h2 class="text-center text-white font-bold text-xl mt-2.5">投票履歴</h2>
        <div class="proposal-contents horizontal-list">
        <div
            v-for="proposal in userProposals"
            :key="proposal.index"
            class="p-3 item"
        >
            <MyVoteHistoryCard
            :proposalId="proposal.proposalId"
            :title="proposal.title"
            :description="proposal.description"
            :filePath="proposal.filePath"
            :targetAmount="proposal.targetAmount"
            :isRecruitingTeammates="proposal.isRecruitingTeammates"
            :otherContents="proposal.otherContents"
            :tags="proposal.tags"
            :proposalrWalletAddress="proposal.proposalrWalletAddress"
            :fundraisingCondition="proposal.proposalFundraisingCondition"
            :voteList="proposal.votes"
            />
        </div>
        </div>
    </div>
      <!--<table>
      <thead></thead>
      <tbody>
        <tr>
          <th>投票</th>
          <th>投票のレスポンスボディ</th>
        </tr>
  
        <tr v-for="proposalVote in userProposalVotes" :key="proposalVote.index">
          <td>{{ proposalVote.title }}</td>
          <td>{{ proposalVote }}</td>
        </tr>
      </tbody>
    </table>-->
  </template>
  
  
  <script>
  import MyVoteHistoryCard from '@/components/mypage/MyVoteHistoryCard.vue'
  
  export default {
    name: "proposal-form",
    components: {
      MyVoteHistoryCard
    },
    data() {
      return {
      };
    },
    props: {
      token: String
    },
    computed: {
      detail() {
        return this.$store.getters["userStore/detail"];
      },
      proposalCount() {
        if (!this.detail.proposals){
          return 0
        }
        return this.detail.proposals.length;
      },
      proposalVoteCount() {
        if (!this.detail.proposalVotes){
          return 0
        }
        return this.detail.proposalVotes.length;
      },
      userProposals() {
        return this.detail.proposals;
      },
      userProposalVotes() {
        return this.detail.proposalVotes;
      },
    },
    created() {
      // メソッドを実行する
      this.getUserDetail();
    },
    methods: {
      // storeのactionsをたたきにいく
      getUserDetail() {
        this.$store
          .dispatch("userStore/getDetail", this.token)
          .then(() => {});
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