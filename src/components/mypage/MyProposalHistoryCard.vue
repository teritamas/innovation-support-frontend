<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700"
    style="max-width: 663px"
  >
    <router-link
      :to="{ name: 'proposalDetail', params: { proposalId: proposalId } }"
      class="grid grid-cols-3"
    >
      <img
        class="rounded-t-sm pdf-image"
        alt="product image"
        :src="thumbnailImageUrl"
        @error="imageError = true"
      />
      <div class="col-span-2">
        <h4
          class="text-xl py-2 font-bold tracking-tight text-gray-900 dark:text-white p-5"
        >
          {{ title }}
        </h4>
        <div class="pt-1 px-5">
          <div class="hidden lg:block">
            <div class="flex justify-between">
              <span class="text-rose-700 text-bold mb-2 text-lg">{{
                limitDateMessage
              }}</span>
              <div class="text-gray-700 text-bold mb-2">
                調達目標トークン
                <span class="text-lg font-bold">{{
                  procurementTokenAmount
                }}</span>
                pts
              </div>
            </div>
          </div>
          <div class="prog-bar">
            <p class="bar" :style="{ width: prog-barSize }"></p>
          </div>
          <small>{{ progressBarFooterMessage }}</small>
        </div>
        <div class="hidden lg:block">
          <voters-comment-list :voteList="voteList"></voters-comment-list>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
  <script>
import VotersCommentList from "../parts/VotersCommentList.vue";
import moment from "moment";
export default {
  name: "MyProposalHistoryCard",
  components: {
    VotersCommentList,
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
    targetAmount: Number,
    proposalStatus: String,
    fundraisingCondition: Object,
    createdAt: String,
    voteList: Array,
  },
  computed: {
    thumbnailImageUrl() {
      return this.imageError
        ? this.defaultImage
        : `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.proposalId}/thumbnail`;
    },
    isVoting() {
      // 提案が投票中の場合True
      return this.proposalStatus === "voting";
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
      if (this.limitDate === 0 || !this.isVoting) {
        return this.proposalStatus === "accept" ? "可決" : "否認";
      } else {
        return `あと ${this.limitDate} 日`;
      }
    },
    progressBarFooterMessage() {
      const remainingVotesCount = this.minVoterCount - this.voteList.length;
      const requiredVotesCount =
        remainingVotesCount < 0 ? 0 : remainingVotesCount;
      if (this.isVoting) {
        return `資金調達の判断まであと ${requiredVotesCount}票 !`;
      } else {
        return "投票期間は終了しました";
      }
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
    progBarSize() {
      const voteRate = this.voteList.length / this.minVoterCount;
      return (voteRate > 1 ? 1 : voteRate) * 100 + "%";
    },
  },
};
</script>
  
  <style lang=scss scoped>
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
.prog-bar {
  height: 16px;
  background-color: #ececec;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.prog-bar .bar {
  position: absolute;
  height: 100%;
  background-color: #ffca28;
}
</style>
  