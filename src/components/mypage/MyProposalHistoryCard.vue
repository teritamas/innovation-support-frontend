<template>
    <div
      class="w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700"
      style="max-width: 663px;"
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
                        <span class="text-rose-700 text-bold mb-2 text-lg"
                            >あと {{ limitDate }} 日</span
                        >
                        <div class="text-gray-700 text-bold mb-2">
                            調達目標トークン
                            <span class="text-lg font-bold">{{ procurementTokenAmount }}</span>
                            pts
                        </div>
                    </div>
                </div>
            <div class="progBar">
                <p class="bar" :style="{ width: progBarSize }"></p>
            </div>
            <small>資金調達の判断まであと {{ requiredVotesCount }}票 !</small>
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
    name: "proposalCards",
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
      filePath: String,
      targetAmount: String,
      isRecruitingTeammates: Boolean,
      createdAt: Date,
      tags: String,
      nftTokenId: String,
      fundraisingCondition: Object,
      voteList: Object,
    },
    computed: {
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
  
        const startDate = moment(this.createdAt);
        const expiredDate = startDate.clone().add(limitDate, "days");
        const duration = moment(expiredDate).diff(startDate, "days");
        console.log(expiredDate, startDate, duration, limitDate);
        return duration > -1 ? duration : 0;
      },
      requiredVotesCount() {
        const remainingVotesCount = this.minVoterCount - this.voteList.length;
        return remainingVotesCount < 0 ? 0 : remainingVotesCount;
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
  .progBar {
    height: 16px;
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
  </style>
  