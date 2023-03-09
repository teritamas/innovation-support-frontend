<template>
    <LoginStep v-if="!token"/>
    <MyProfile
      v-if="token"
      :token="token"
    />
    <MyProposals
      v-if="token"
      :token="token"
    />
</template>

<script>
import LoginStep from '../components/LoginStep.vue'
import MyProfile from '../components/mypage/MyProfile.vue'
import MyProposals from '../components/mypage/MyProposals.vue'

export default {
  name: 'mypage-',
  components: {
    MyProfile,
    MyProposals,
    LoginStep,
  },
  data() {
    return {
    };
  },
  computed: {
    token() {
        return this.$store.getters['userStore/token'];
    },
  },
}

</script>
