<template>
    <AppHeaderPropose />
    <div class="horizontal-list">
    <div v-for="proposal in proposalLists" :key=proposal.index class="p-3 item">
        <!--{{ proposal }}-->
        <ProposalCards
        :proposalId = proposal.proposal_id
        :title = proposal.title
        :descriptions = proposal.descriptions
        :filePath = proposal.filePath
        :targetAmount = proposal.target_amount
        :isRecruitingTeammates = proposal.is_recruiting_teammates
        :otherContents = proposal.other_contents
        :tags = proposal.tags
        :proposerWalletAddress = proposal.proposer_wallet_address
        :nftTokenId = proposal.nft_token_id
        />
    </div>
</div>
</template>

<script>
import ProposalCards from '../components/ProposalCards.vue'
import AppHeaderPropose from '../components/AppHeaderPropose.vue'

export default {
  name: 'proposa-list',
  components: {
    ProposalCards,
    AppHeaderPropose,
  },
  data() {
    return {
    };
  },
  computed: {
    proposalLists() {
        // getterの値をファイルで扱いやすくする
        return this.$store.getters['proposalStore/proposalLists'];
    }
  },
  created() {
    // メソッドを実行する
    this.getProposalLists()
  },
  methods: {
    // storeのactionsをたたきにいく
    getProposalLists() {
        return this.$store
        .dispatch('proposalStore/getProposalList')
        .then(() => {});
    },
  }
}
</script>

<style>
.horizontal-list {
	overflow-x: auto;
	white-space: nowrap;
}
.item {
	display: inline-block;
	/*width: 60%;*/
	/*height: 400px;*/
	/*margin: 16px;*/
	/*font-size: 48px;*/
	/*color: #fff;*/
}

</style>
