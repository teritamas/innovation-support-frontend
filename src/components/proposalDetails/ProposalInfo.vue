<template>
  <h3 class="font-bold text-center p-2 ">{{ proposal.title }}</h3>
  <i class="block-explorer-badge"><a :href="blockExplorerUrl" target="_blank" rel="noopener noreferrer">ブロックエクスプローラーで確認する</a></i>
  <div class="form-item">
    <p class="form-item-label is-msg">
      <span class="form-item-list"></span>事業概要
    </p>
    <p style="max-width:430px;">{{ proposal.description }}</p>
  </div>
  <div class="form-item">
    <p class="form-item-label"><span class="form-item-list"></span>調達金額</p>
    <p>
      {{ phaseDetail.phaseJpName }}<br />
      金額:{{ phaseDetail.procurementTokenAmount }}千円<br />条件:{{
        phaseDetail.minVoterCount
      }}人以上の投票{{ phaseDetail.minAgreementCount }}の賛成 <br />投票期間:{{
        phaseDetail.limitDate
      }}日
    </p>
  </div>
  <div class="form-item">
    <p class="form-item-label is-msg">
      <span class="form-item-list"></span>添付資料
    </p>
    <div class="preview-item w-full mt-2">
      <embed
        v-show="proposalAttachmentFile.filePath"
        class="preview-item-file"
        :src="proposalAttachmentFile.filePath"
        alt=""
      />
    </div>
  </div>
  <div class="form-item">
    <p class="form-item-label mb-2">
      <span class="form-item-list"></span>仲間募集
    </p>
    <p v-if="proposal.isRecruitingTeammates">募集する</p>
    <p v-if="!proposal.isRecruitingTeammates">募集しない</p>
  </div>
  <div class="form-item">
    <p class="form-item-label is-msg">
      <span class="form-item-list"></span>その他
    </p>
    <p>{{ proposal.otherContents }}</p>
  </div>
</template>

<script>
import { phaseStatus } from "../../plugins/proposalPhase";

export default {
  name: "proposal-info",
  components: {},
  props: {
    proposal: {},
    proposalAttachmentFile: {},
  },
  computed: {
    phaseDetail() {
      return phaseStatus(this.proposal.proposalPhase);
    },
    thumbnailImageUrl() {
      if (this.proposal.proposalFundraisingCondition === null) {
        return this.proposal.targetAmount; // BEのバージョン差異の対応
      } else {
        return this.proposal.proposalFundraisingCondition
          .procurementTokenAmount;
      }
    },
    blockExplorerUrl() {
      return this.proposal.blockExplorerUrlPath;
    },
  },
};
</script>

<style lang="scss" scoped>


h3{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    text-align: center;
    &::after{
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 1px;
      background: orange;
    }
}

@media screen and (max-width: 480px) {
  h3{
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
}

.preview-item {
  width: 100%;
}
.preview-item-file {
  width: 100%;
  min-height: 300px;
}

.form {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.form-item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .form-item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}

.form-item-label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .form-item-label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.form-item-label.is-msg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .form-item-label.is-msg {
    margin-top: 0;
  }
}

.form-item-list {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 4px;
  display: inline-block;
  text-align: center;
  background: rgb(251 191 36);
  color: #fff;
  font-size: 14px;
}

.block-explorer-badge {
  font-size: 14px;
  position: absolute;
  right: 0;
  top:0;
  padding: 5px;
}
</style>
