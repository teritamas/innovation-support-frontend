<template>
    <div class="content-center">
        <div class="card card-one">
            <div class="form mb-10">
                <ProposalInfo :proposal=proposal :proposalFile=file />
            </div>
                <!--ProposalVote コンポーネントに分けたい-->
                <!-- 投票コンポーネント：自分が提案者じゃないかつ提案していないかつ投票受付中-->
                <div class="bg-beige pb-10" v-if="showVoteArea">
                    <div class="form-Item">
                    <p class="form-Item-Label mb-2"><span class="form-Item-Label-Required">必須</span>賛否</p>
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
                <div class="form-Item">
                    <p class="form-Item-Label isMsg"><span class="form-Item-Label-Option">任意</span>賛否の理由</p>
                    <textarea
                        v-model="judgement_reason"
                        class="form-Item-Textarea"
                        @input="onDelayAction"
                    ></textarea>
                    <div class="item">{{judgementReasonScore}}</div>
                </div>
                <!--≪TODO≫すぐvoteじゃなくて、確認画面＋ログイン確認してから投票-->
                <button class="form-btn" @click="vote()">投票する</button>
                </div>
                <!--ProposalVote コンポーネントに分けたい-->

            <!--pytestの実行サンプルがaccept-->
            <div class="bg-beige p-5" v-if="!showVoteArea">
                <ProposalVoteStatus
                    :proposal=proposal
                 />
            </div>
            <div class="">
                <button class="form-Return-btn mb-10" @click="returnProposalLists()">戻る</button>
            </div>
        </div>
    </div>
</template>

<script>
import ProposalInfo from '../components/proposalDetails/ProposalInfo.vue'
//import ProposalVote from '../components/proposalDetails/ProposalVote.vue'
import ProposalVoteStatus from '../components/proposalDetails/ProposalVoteStatus.vue'
import { debounce } from 'lodash';

export default {
  name: 'proposal-form',
  components: {
    ProposalInfo,
    //ProposalVote,
    ProposalVoteStatus,
  },
  data() {
    return {
        judgement: '',
        judgement_reason: '',
    };
  },
  computed: {
    showCongratulationArea() {
        // 投票エリアを表示する条件
        return this.proposal.proposal_status == 'voting' && !this.voteDetail.isProposer && !this.voteDetail.voted
    },
    showVoteArea() {
        // 投票エリアを表示する条件
        return this.proposal.proposal_status == 'voting' && !this.voteDetail.isProposer && !this.voteDetail.voted
    },
    proposal_id() {
      return this.$route.params['proposal_id'];
    },
    proposal() {
      return this.$store.getters['proposalStore/proposal'];
    },
    detail() {
      return this.$store.getters['userStore/detail'];
    },
    file() {
        return this.$store.getters['proposalStore/file'];
    },
    voteDetail() {
        // 提案詳細
      return this.$store.getters['proposalVoteStore/getVoteDetail'];
    },
    voteStatus() {
        // vote_action：投票を受け付けているか
        // positive_proposal_votes：肯定派意見
        // negative_proposal_votes：反対派意見
      return this.$store.getters['proposalVoteStore/getVoteStatus'];
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
    this.getProposal();
    this.getVoteDetail();
    this.getVoteStatus();
    this.getFile();
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
    getVoteDetail() {
        const proposalId = this.proposal_id;
        return this.$store
        .dispatch('proposalVoteStore/getVoteDetail', proposalId)
        .then(() => {});
    },
    getVoteStatus() {
        const proposalId = this.proposal_id;
        return this.$store
        .dispatch('proposalVoteStore/getVoteStatus', proposalId)
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
    },
    getFile() {
        const proposalId = this.proposal_id;
        return this.$store
        .dispatch('proposalStore/getProposalFile', proposalId)
        .then(() => {});
    },
  }
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

.form-Item-List {
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

.form-Return-btn {
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

  .form-Return-btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
}
}
</style>
