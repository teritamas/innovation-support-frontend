<template>
    <div class="p-3 pt-0 mb-10 bg-white">
        <div class="Form mb-10">
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-List"></span>事業名（30字以内）</p>
                <p>{{ proposal.title }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-List"></span>事業概要（300字以内）</p>
                <p>{{ proposal.description }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-List"></span>目標金額</p>
                <p>{{ proposal.targetAmount }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-List"></span>添付資料（PDF）</p>
                <div class="preview-item w-100 mt-2">
                <embed
                    v-show="proposal.filePath"
                    class="preview-item-file"
                    :src="proposal.filePath"
                    alt=""
                />
                <div v-show="proposal.filePath" class="preview-item-btn">
                    <p class="preview-item-name isMsg py-2">ファイル名：{{ proposal.fileName }}</p>
                </div>
                </div>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label mb-2"><span class="Form-Item-List"></span>仲間募集</p>
                <p v-if="proposal.isRecruitingTeammates">募集する</p>
                <p v-if="!proposal.isRecruitingTeammates">募集しない</p>
             </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-List"></span>その他（500字以内）</p>
                <p>{{ proposal.otherContents }}</p>
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
                    v-model="judgement_reason"
                    class="Form-Item-Textarea"
                    @input="onDelayAction"
                ></textarea>
                <div class="item">{{judgementReasonScore}}</div>
            </div>
            <!--≪TODO≫すぐvoteじゃなくて、確認画面＋ログイン確認してから投票-->
            <button class="Form-Btn" @click="vote()">投票する</button>
            <button class="Form-Retern-Btn mb-10" @click="returnProposalLists()">戻る</button>
            </div>
        </div>

</template>

<script>
//import AppHeaderProposal from '../components/AppHeaderProposal.vue'
import { debounce } from 'lodash';

export default {
  name: 'proposal-form',
  components: {
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
    proposal() {
      return this.$store.getters['proposalStore/proposal'];
    },
    detail() {
      return this.$store.getters['userStore/detail'];
    },
    judgementReasonScore(){
      const score = this.$store.getters['proposalVoteStore/getJudgementReason']
      const baseMessage = `獲得予定トークン: ${score}`;
      if( score == 1){
        return `${baseMessage} 内容が充実しており良いメッセージです！` 
      }
      else if (score >= 0.6){
        return `${baseMessage} もうひといき！提案者のためにもう少し詳細に書きましょう！` 
      }else if (score >= 0.1){
        return `${baseMessage} 内容が少なく、獲得できるトークンが少ないです。` 
      }
      return ''
    }
  },
  created() {
    // メソッドを実行する
    this.getProposal()
  },
  methods: {
    onDelayAction: debounce(function() {
      this.voteJudgementEnrichment()
    }, 2000),
    getProposal() {
        const proposalId = this.proposal_id;
        return this.$store
        .dispatch('proposalStore/getProposal', proposalId)
        .then(() => {});
    },
    returnProposalLists : function () {
        this.$router.push('/lists');
    },
    vote() {
        const vote = {
            judgement: this.judgement,
            judgement_reason : this.judgement_reason,
        }; 
        const proposalId = this.$route.params['proposal_id'];
        this.$store
          .dispatch('proposalVoteStore/vote', {proposalId, vote})
          .then(() => {});
    },
    voteJudgementEnrichment(){
      this.$store.commit('proposalVoteStore/setVoteJudgementEnrichmentRequest', {judgement_reason: this.judgement_reason})
      this.$store
          .dispatch('proposalVoteStore/verifyVoteEnrichment', )
          .then(() => {});
    }
  }
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

.Form-Item-List {
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
