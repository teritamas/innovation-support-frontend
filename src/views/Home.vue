<template>
  <div class="content-center">
    <div class="card card-one">
      <div class="bg-orange">
        <h3 class="title pb-5 pt-10">タイムライン</h3>
        <div class="desc">
        直近のアクティビティが表示されます。
        </div>
        <div>
          <div v-for="content in timelines" :key="content.index">
            <ProposalCards
              v-if="hasKey(content, 'proposalStatus')"
              :proposalId="content.proposalId"
              :title="content.title"
              :description="content.description"
              :filePath="content.filePath"
              :targetAmount="content.targetAmount"
              :isRecruitingTeammates="content.isRecruitingTeammates"
              :otherContents="content.otherContents"
              :tags="content.tags"
              :proposalrWalletAddress="content.proposalr_wallet_address"
              :nftTokenId="content.nftTokenId"
            />
            <div v-if="hasKey(content, 'judgementReason')">
              <dt>投票のタイムラインコンテンツ</dt>
              <dd>
                {{content}}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProposalCards from "../components/ProposalCards.vue";

export default {
  name: "app-top",
  components: {
    ProposalCards,
  },
  data() {
    return {
      // timelines: [],
    };
  },
  computed: {
    timelines() {
      return this.$store.getters["timelineStore/timelineContents"];
    },
  },
  created() {
    this.getTimeline();
  },
  mounted() {
    setInterval(() => {
      this.getTimeline();
    }, 20000);
  },
  methods: {
    hasKey(obj, key){
      return Object.keys(obj).includes(key);
    },
    getTimeline() {
      this.$store.dispatch("timelineStore/getTimeline");
    },
  },
};
</script>


<style lang="scss" scoped>
/*** VARS ***/

$main-col: #fbde60;
//$main-col: rgb(251 191 36);
$sec-col: lighten(#303f9f, 20%);
$back-col: rgb(251 191 36);
//$back-col: #c5cae9;

/*** CARD STLES ***/
.card {
  float: left;
  margin-top: 1rem;
  max-width: 1200px;
}

.card-one {
  position: relative;
  width: 90vw;
  background: white;
  box-shadow: 0 10px 7px -5px rgba(#000, 0.4);
  overflow-x: none;
  overflow-y: scroll;
  height: 80vh;

  .title {
    position: relative;
    width: 100%;
    //height: 60px;
    //background-color: $main-col;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  h3 {
    position: relative;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 1px;
      background: #000;
    }
  }
  .desc {
    padding: 1.5rem 1rem;
    font-size: 0.9rem;
    text-align: center;
    color: #534e4e;
  }

  div.footer {
    position: relative;
    padding: 1rem;
    background-color: $sec-col;
    text-align: center;
    a {
      padding: 0 1rem;
      color: #e2e2e2;
      -webkit-transition: color 0.4s;
      -moz-transition: color 0.4s;
      -ms-transition: color 0.4s;
      -o-transition: color 0.4s;
      transition: color 0.4s;
      &:hover {
        color: $main-col;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: -27px;
      left: 50%;
      margin-left: -15px;
      border: 15px solid transparent;
      border-bottom-color: $sec-col;
    }
  }
}

/*** RESPONSIVE ***/

@media only screen and (max-width: 810px) {
  .card {
    float: none;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
  }
}
</style>
