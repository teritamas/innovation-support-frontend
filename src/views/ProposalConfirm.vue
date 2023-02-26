<template>
    <AppHeaderProposal />
    <div class="p-3 pt-0 mb-10 bg-white">
        <div class="Form mb-10">
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>事業名（30字以内）</p>
                <p>{{ newProposal.title }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>事業概要（300字以内）</p>
                <p>{{ newProposal.descriptions }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>目標金額</p>
                <p>{{ newProposal.targetAmount }}</p>
            </div>
            {{  file }}
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>添付資料（PDF）</p>
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
                </div>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label mb-2"><span class="Form-Item-Label-Option">任意</span>仲間募集</p>
                <p v-if="newProposal.isRecruitingTeammates">募集する</p>
                <p v-if="!newProposal.isRecruitingTeammates">募集しない</p>
             </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>その他（500字以内）</p>
                <p>{{ newProposal.otherContents }}</p>
            </div>
            <button class="Form-Btn" @click="registProposal()">上記の内容で投稿する</button>
            <button class="Form-Retern-Btn mb-10" @click="returnProposalView()">入力画面に戻る</button>
            </div>
        </div>
</template>

<script>
import AppHeaderProposal from '../components/AppHeaderProposal.vue'

export default {
  name: 'proposal-form',
  components: {
    AppHeaderProposal
  },
  data() {
    return {
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
        const file = this.file;
        const newProposal = this.newProposal;
        return this.$store
        .dispatch('proposalStore/registProposal', {newProposal, file})
        .then(() => {});
    },
  },
}

</script>

<style scoped>
.preview-item {
    width: 100%;
}
.preview-item-file {
    width: 100%;
    min-height: 300px;
}

.Form {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.Form-Item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}

.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
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

.Form-Item-Label-Option {
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
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }

  .Form-Item-Label-Option {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}

.Form-Btn {
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

.Form-Retern-Btn {
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
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }

  .Form-Retern-Btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
}
}
</style>
