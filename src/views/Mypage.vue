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
    <div class="lg:flex">
        <MyVotes
      v-if="token"
      :token="token"
    />
    <MyGifts
      v-if="token"
      :token="token"
    />
    </div>
</template>

<script>
import LoginStep from '../components/LoginStep.vue'
import MyProfile from '../components/mypage/MyProfile.vue'
import MyProposals from '../components/mypage/MyProposals.vue'
import MyVotes from '../components/mypage/MyVotes.vue'
import MyGifts from '../components/mypage/MyGifts.vue'

export default {
  name: 'mypage-',
  components: {
    MyProfile,
    MyProposals,
    LoginStep,
    MyVotes,
    MyGifts,
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
