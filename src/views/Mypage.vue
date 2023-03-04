<template>

<LoginStep v-if="!token"/>
<MypageProfile
  v-if="token"
  :token="token"  
/>

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
    };
  },
  computed: {
    token() {
        return this.$store.getters['userStore/token'];
    },
  },
}

</script>
