<template>
    <AppHeaderProposal />
    <div class="content-center">
        <div class="card card-one">
            <div class="form mb-10">
                <div class="form-Item">
                    <p class="form-Item-Label"><span class="form-Item-Label-Required">必須</span>事業名（30字以内）</p>
                    <p>{{ newProposal.title }}</p>
                </div>
                <div class="form-Item">
                    <p class="form-Item-Label isMsg"><span class="form-Item-Label-Required">必須</span>事業概要（300字以内）</p>
                    <p>{{ newProposal.description }}</p>
                </div>
                <div class="form-Item">
                    <p class="form-Item-Label"><span class="form-Item-Label-Required">必須</span>目標金額</p>
                    <p>{{ newProposal.targetAmount }}</p>
                </div>
                <div class="form-Item">
                    <p class="form-Item-Label isMsg"><span class="form-Item-Label-Option">任意</span>添付資料（PDF）</p>
                    <div class="preview-item w-100 mt-2">
                    <embed
                        v-show="newProposal.filePath"
                        class="preview-item-file"
                        :src="newProposal.filePath"
                        alt=""
                    />
                    <div v-show="newProposal.filePath" class="preview-item-btn">
                        <p class="preview-item-name isMsg py-2">ファイル名：{{ newProposal.fileName }}</p>
                    </div>
                    <div class="form-Item">
                        <p class="form-Item-Label mb-2"><span class="form-Item-Label-Option">任意</span>仲間募集</p>
                        <p v-if="newProposal.isRecruitingTeammates">募集する</p>
                        <p v-if="!newProposal.isRecruitingTeammates">募集しない</p>
                    </div>
                    <div class="form-Item">
                        <p class="form-Item-Label isMsg"><span class="form-Item-Label-Option">任意</span>その他（500字以内）</p>
                        <p>{{ newProposal.otherContents }}</p>
                    </div>
                    <button class="form-btn" @click="registProposal()">上記の内容で投稿する</button>
                    <button class="form-return-btn mb-10" @click="returnProposalView()">入力画面に戻る</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loading v-show="loading"/>
</template>

<script>
import AppHeaderProposal from '../components/AppHeaderProposal.vue'
import Loading from '../components/parts/Loading.vue'

export default {
  name: 'proposal-form',
  components: {
    AppHeaderProposal,
    Loading,
  },
  data() {
    return {
        loading: false,
    };
  },
  computed: {
    newProposal() { // dataの値と一緒
        return this.$store.getters['proposalStore/newProposal'];
    },
    userId() {
        return this.$store.getters['userStore/userId'];
    },
    file() {
        return this.$store.getters['proposalStore/file'];
    },
  },
  methods: {
    returnProposalView : function () {
        this.$router.push('/proposal');
    },
    registProposal () {
        this.setLoading(true);
        const file = this.file;
        const newProposal = this.newProposal;
        return this.$store
        .dispatch('proposalStore/registProposal', {newProposal, file})
        .then(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        this.inCheck('regist-check');
                }, 2000);
                this.inCheck('nft-check');
            }, 4000);
            this.setLoading(false);
            this.outCheck('regist-check');
            this.outCheck('nft-check');
            // 【prpposal_idを渡す】
            this.$router.push('/proposal/test_proposal_id')
            }, 5000);
        });
    },
    setLoading(bool) {
        this.loading = bool;
    },
    loadCheck (checkTarget, time) {
        setTimeout(() => {
            this.inCheck(checkTarget)
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
}

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
  box-shadow: 0 10px 7px -5px rgba(#000,.4);
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
.form-Item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}

.form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.form-Item-Label-Required {
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

.form-Item-Label-Option {
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
  .form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }

  .form-Item-Label-Option {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}

.form-btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: rgb(251 191 36);
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

.form-return-btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #555;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .form-btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }

  .form-return-btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
}
}
</style>
