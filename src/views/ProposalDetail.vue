<template>
    <div class="p-3 pt-0 mb-10 bg-white">
        {{ proposalLists }}
        <div class="Form mb-10">
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required"></span>事業名（30字以内）</p>
                <p>{{ newProposal.title }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required"></span>事業概要（300字以内）</p>
                <p>{{ newProposal.descriptions }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required"></span>目標金額</p>
                <p>{{ newProposal.targetAmount }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option"></span>添付資料（PDF）</p>
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


            <div class="Form-Item">
                <p class="Form-Item-Label mb-2"><span class="Form-Item-Label-Required">必須</span>賛否</p>
                <div class="radio-button-group mts w-100">
                    <div class="item">
                        <div class="item">
                        <input
                            type="radio"
                            v-model="judgement"
                            class="radio-button"
                            value=true
                            id="button1"
                        />
                        <label for="button1">賛成</label>
                    </div>
                        <input
                            type="radio"
                            v-model="judgement"
                            class="radio-button"
                            value=false
                            id="button2"
                        />
                        <label for="button2">反対</label>
                    </div>
                </div>
             </div>
             <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>賛否の理由</p>
                <textarea
                    v-model="newProposal.descriptions"
                    class="Form-Item-Textarea"
                ></textarea>
            </div>
            <!--≪TODO≫すぐvoteじゃなくて、確認画面＋ログイン確認してから投票-->
            <button class="Form-Btn" @click="vote()">投票する</button>
            <button class="Form-Retern-Btn mb-10" @click="returnProposalLists()">戻る</button>
            </div>
        </div>

</template>

<script>
//import AppHeaderProposal from '../components/AppHeaderProposal.vue'

export default {
  name: 'proposal-form',
  components: {
    //AppHeaderProposal
  },
  data() {
    return {
        judgement: '',
        judgement_reason: '',
    };
  },
  computed: {
    proposal_id() {
      return this.$route.params['proposal_id'];
    },
    newProposal() {
      return this.$store.getters['proposalStore/newProposal'];
    },
    proposalLists() {
      return this.$store.getters['proposalStore/proposalLists'];
    },
    newVote() {
      return this.$store.getters['proposalStore/newVote'];
    },
    user() {
      return this.$store.getters['userStore/user'];
    },
  },
  created() {
    // メソッドを実行する
    this.getProposalLists()
  },
  methods: {
    getProposalLists() {
        return this.$store
        .dispatch('proposalStore/getProposalList')
        .then(() => {});
    },
    returnProposalLists : function () {
        this.$router.push('/lists');
    },
    vote() {
        const newVote = {
            user_id: this.user.user_id,
            judgement: this.judgement,
            judgement_reason : this.judgement_reason,
        };
        const proposal_id = this.$route.params['proposal_id'];
        return this.$store
        .dispatch('proposalStore/vote', {proposal_id, newVote})
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
