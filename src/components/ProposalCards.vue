<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <router-link
      :to="{ name: 'proposalDetail', params: { proposalId: proposalId } }"
    >
      <div class="proposal-status-badge-area proposal-card-img">
        <img
          class="rounded-t-sm"
          alt="product image"
          :src="thumbnailImageUrl"
          @error="imageError = true"
        />
        <ProposalStatusBadge 
            :proposalOwnType="proposalOwnType"
            :proposalStatus="proposalStatus"
        />
      </div>
      <h4
        class="text-xl py-2 font-bold tracking-tight text-gray-700 dark:text-white p-5"
      >
        {{ title }}
      </h4>
      <div class="pt-1 px-5">
        <div class="flex justify-between">
          <span class="text-rose-700 text-bold mb-2 text-lg">{{
            limitDateMessage
          }}</span>
          <div class="text-gray-700 text-bold mb-2">
            調達目標トークン
            <span class="text-lg font-bold">{{ procurementTokenAmount }}</span>
            pts
          </div>
        </div>
        <div class="progBar">
          <p class="bar" :style="{ width: progBarSize }"></p>
        </div>
        <small>{{ progressBarFooterMessage }}</small>
      </div>
    </router-link>
    <voters-comment-list v-if="showVoteResult" :voteList="voteMessageList">
    </voters-comment-list>
    <div
      v-if="!showVoteResult"
      class="not-show-vote-result mt-1 form-return-btn btn-font text-center text-gray-900"
    >
      {{ showVoteResultFalseMessage }}
    </div>
  </div>
</template>

<script>
import VotersCommentList from "./parts/VotersCommentList.vue";
import moment from "moment";
import ProposalStatusBadge from "@/components/parts/ProposalStatusBadge.vue";

export default {
  name: "proposalCards",
  components: {
    VotersCommentList,
    ProposalStatusBadge,
  },
  data() {
    return {
      imageError: false,
      defaultImage: require("@/assets/img/proposalList/no_images.webp"),
    };
  },
  props: {
    proposalId: String,
    title: String,
    description: String,
    filePath: String,
    targetAmount: Number,
    isRecruitingTeammates: Boolean,
    createdAt: String,
    tags: Array,
    proposalOwnType: String,
    proposalStatus: String,
    nftTokenId: String,
    fundraisingCondition: Object,
    voteList: Array,
  },
  computed: {
    hasVotes() {
      // 投票されている場合true
      return this.voteList.length > 0;
    },
    isVoting() {
      // 提案が投票中の場合True
      return this.proposalStatus === "voting";
    },
    showVoteResult() {
      // 投票ステータスの表示可否を判断する
      const role =
        this.proposalOwnType === "voted" || this.proposalOwnType === "owner";

      // 投票が終了している、または、投票結果が１件以上ありかつ自身が投票済みか提案者の場合、表示
      return !this.isVoting || (role && this.hasVotes);
    },
    showVoteResultFalseMessage() {
      if (this.proposalOwnType === "owner" && !this.hasVotes) {
        return "まだ投票されていません！周りの人に共有して投票を募りましょう！";
      } else if (!this.showVoteResult) {
        return "投票後、他の人の投票内容を確認できます。";
      } else {
        return "";
      }
    },
    progressBarFooterMessage() {
      if (this.isVoting) {
        return `資金調達の判断まであと ${this.requiredVotesCount}票 !`;
      } else {
        return "投票期間は終了しました";
      }
    },
    statusBadge() {
      // カードの右上のステータスバッジに掲載する内容
      let badge = "";
      if (this.isVoting) {
        if (this.proposalOwnType == "voted") {
          badge = "投票済み";
        } else if (this.proposalOwnType == "unvoted") {
          badge = "投票できます！";
        } else if (this.proposalOwnType == "owner") {
          badge = "あなたの提案が投票中です！";
        } else {
          badge = "投票受付中です！ログインして投票に参加しよう！";
        }
      } else {
        badge = "投票終了";
      }
      return badge;
    },
    thumbnailImageUrl() {
      return this.imageError
        ? this.defaultImage
        : `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.proposalId}/thumbnail`;
    },
    procurementTokenAmount() {
      return this.fundraisingCondition
        ? this.fundraisingCondition.procurementTokenAmount
        : "None";
    },
    minVoterCount() {
      if (this.fundraisingCondition === null) {
        return 10;
      }
      return this.fundraisingCondition.minVoterCount;
    },
    limitDate() {
      let limitDate = 7;
      if (this.fundraisingCondition !== null) {
        limitDate = this.fundraisingCondition.limitDate;
      }

      var startDate = moment.utc(this.createdAt);
      startDate.add(limitDate, "days");
      const duration = startDate.diff(moment(), "days");
      return duration > -1 ? duration : 0;
    },
    limitDateMessage() {
      if (this.limitDate === 0) {
        return this.proposalStatus === "accept" ? "可決" : "否認";
      } else {
        return `あと ${this.limitDate} 日`;
      }
    },
    requiredVotesCount() {
      const remainingVotesCount = this.minVoterCount - this.voteList.length;
      return remainingVotesCount < 0 ? 0 : remainingVotesCount;
    },
    progBarSize() {
      const voteRate = this.voteList.length / this.minVoterCount;
      return (voteRate > 1 ? 1 : voteRate) * 100 + "%";
    },
    voteMessageList() {
      var list = this.voteList;
      var rlist = list.reverse();
      return rlist.slice(0, 5);
    },
  },
};
</script>

<style lang=scss scoped>
.proposal-card-img {
    box-shadow: 0px 0px 5px 0px gray;
    margin-bottom: 1rem;
}

.bg-btn {
  background: rgb(251 191 36);
  border-radius: 30px;
  width: 160px;
  font-weight: bolder;
}
.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: #00416a;
  transition: 0.5s;
}
.text-rose-700 {
  color: rgb(190 18 60);
  font-weight: bold;
}
.progBar {
  height: 40px;
  background-color: #ececec;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.progBar .bar {
  position: absolute;
  height: 100%;
  background-color: #ffca28;
}
.proposal-status-badge-area {
  position: relative;
}
.not-show-vote-result {
  height: 90px;
  padding: 15px;
}
</style>
