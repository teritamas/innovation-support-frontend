<template>
    <AppHeaderProposal />
        <div class="content-center">
            <div class="card card-one mt-10">
                <h2 class="font-bold text-center pt-5 pb-3">提案登録フォーム</h2>
                <ProposalInnocations v-if="showContentsType == 'proposal'" />
                <ProposalInnocations v-if="showContentsType == 'survey'" />
                <ProposalInnocations v-if="showContentsType == 'tester'" />
        </div>
    </div>
</template>

<script>
import AppHeaderProposal from '../components/AppHeaderProposal.vue'
import ProposalInnocations from '../components/ProposalInnovations.vue'

export default {
  name: 'proposal-form',
  components: {
    AppHeaderProposal,
    ProposalInnocations,
  },
  data() {
    return {
     showContentsType: this.$store.state.showContentsType,
    };
  },
  computed: {
  },
  methods: {
    showConfirmView : function () {
        this.setNewProposal();
        this.$router.push('/proposalConfirm');
    },
    setNewProposal : function(){
      this.$store.commit('setNewProposal', this.newProposal);
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      this.newProposal.fileName = files[0].name;
    },
    // アップロードした画像を表示
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.newProposal.filePath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove() {
      this.newProposal.filePath = false;
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
</style>
