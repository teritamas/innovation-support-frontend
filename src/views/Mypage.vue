<template>

<LoginStep v-if="!user.user_id"/>
<MypageProfile v-if="user.user_id"/>

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
    user() {
        return this.$store.getters['userStore/user'];
    },
  },
}

</script>
