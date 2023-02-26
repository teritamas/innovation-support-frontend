<template>

<LoginStep v-if="!detail.userId"/>
<MypageProfile v-if="detail.userId"/>

</template>

<script>
import LoginStep from '../components/LoginStep.vue'
import MypageProfile from '../components/MypageProfile.vue'

export default {
  name: 'mypage-',
  components: {
    MypageProfile,
    LoginStep,
  },
  data() {
    return {
      newProposal: this.$store.state.newProposal
    };
  },
  computed: {
    detail() {
        return this.$store.getters['userStore/detail'];
    },
  },
}

</script>
