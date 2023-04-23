<template>
  <AppHeaderProposal />
  <div class="content-center">
    <div class="card card-one">
      <div class="bg-orange">
        <h2 class="text-center pt-5 pb-5">プレビュー</h2>
      </div>
      <div class="form mb-10">
        <div class="form-item">
          <p class="form-item-label">
            <span class="form-item-label-required">必須</span>事業名（30字以内）
          </p>
          <p>{{ newProposal.title }}</p>
        </div>
        <div class="form-item">
          <p class="form-item-label is-msg">
            <span class="form-item-label-required">必須</span
            >事業概要（300字以内）
          </p>
          <p>{{ newProposal.description }}</p>
        </div>
        <div class="form-item">
          <p class="form-item-label">
            <span class="form-item-label-required">必須</span>提案フェイズ
          </p>
          <!---TODO: レイアウト入れる-->
          <p>
            {{ phaseDetail.phaseJpName }}<br />
            金額:{{ phaseDetail.procurementTokenAmount }}千円<br />条件:{{
              phaseDetail.minVoterCount
            }}人以上の投票{{ phaseDetail.minAgreementCount }}%の賛成
            <br />投票期間:{{ phaseDetail.limitDate }}日
          </p>
        </div>
        <div class="form-item">
          <p class="form-item-label is-msg">
            <span class="form-item-label-option">任意</span>添付資料（PDF）
          </p>
          <div class="preview-item w-full mt-2">
            <embed
              v-show="newProposal.filePath"
              class="preview-item-file"
              :src="newProposal.filePath"
              alt="添付資料"
            />
          </div>
        </div>
        <div class="form-item">
          <p class="form-item-label mb-2">
            <span class="form-item-label-option">任意</span>仲間募集
          </p>
          <p v-if="newProposal.isRecruitingTeammates">募集する</p>
          <p v-if="!newProposal.isRecruitingTeammates">募集しない</p>
        </div>
        <div class="form-item">
          <p class="form-item-label is-msg">
            <span class="form-item-label-option">任意</span>その他（500字以内）
          </p>
          <p>{{ newProposal.otherContents }}</p>
        </div>
        <button class="form-btn" @click="registerProposal()">
          上記の内容で投稿する
        </button>
        <button class="form-return-btn mt-3 mb-10" @click="returnProposalView()">
          入力画面に戻る
        </button>
      </div>
    </div>
  </div>
  <Loading v-show="loading" :loadingText="loadingText" />
  <PageTransition
    v-show="pageTransition"
    :registeredProposalId="registeredProposalId"
  />
</template>

<script>
import AppHeaderProposal from "../../components/proposal/AppHeaderProposal.vue";
import Loading from "../../components/parts/Loading.vue";
import PageTransition from "../../components/parts/PageTransitionProposal.vue";
import { phaseStatus } from "../../plugins/proposalPhase";

export default {
  name: "proposal-form",
  components: {
    AppHeaderProposal,
    Loading,
    PageTransition,
  },
  data() {
    return {
      loading: false,
      pageTransition: false,
      loadingText: [
        {
          checkTarget: "register-check",
          label: "登録完了",
        },
        {
          checkTarget: "nft-check",
          label: "NFT作成完了",
        },
      ],
    };
  },
  computed: {
    phaseDetail() {
      return phaseStatus(this.newProposal.proposalPhase);
    },
    newProposal() {
      // dataの値と一緒
      return this.$store.getters["proposalStore/newProposal"];
    },
    userId() {
      return this.$store.getters["userStore/userId"];
    },
    file() {
      return this.$store.getters["proposalStore/file"];
    },
    registeredProposalId() {
      return this.$store.getters["proposalStore/registeredProposalId"];
    },
  },
  methods: {
    returnProposalView: function () {
      this.$router.push("/proposal");
    },
    registerProposal() {
      this.setLoading(true);
      setTimeout(() => {
        this.inCheck("register-check");
      }, 2000);
      const file = this.file;
      const newProposal = this.newProposal;
      return this.$store
        .dispatch("proposalStore/registerProposal", { newProposal, file })
        .then(() => {
          this.inCheck("nft-check");
          setTimeout(() => {
            this.setLoading(false);
            this.outCheck("register-check");
            this.outCheck("nft-check");
            this.pageTransition = true;
            this.$store.commit("proposalStore/initialize");
          }, 5000);
        });
    },
    setLoading(bool) {
      this.loading = bool;
    },
    loadCheck(checkTarget, time) {
      setTimeout(() => {
        this.inCheck(checkTarget);
      }, time);
    },
    inCheck(checkTarget) {
      let checkbox = document.getElementById(checkTarget);
      checkbox.checked = true;
    },
    outCheck(checkTarget) {
      let checkbox = document.getElementById(checkTarget);
      checkbox.checked = false;
    },
  },
};
</script>

<style scoped>
.card {
  float: left;
  margin-top: 1rem;
  max-width: 900px;
}

.card-one {
  position: relative;
  overflow-y: scroll;
  overflow-x: none;
  height: 80vh;
  width: 90vw;
  background: white;
  box-shadow: 0 10px 7px -5px rgba(#000, 0.4);
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
.form-item-label-required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: rgb(251 191 36);
  color: #fff;
  font-size: 14px;
}

.form-item-label-option {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #545454;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .form-item-label-required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }

  .form-item-label-option {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}
</style>
