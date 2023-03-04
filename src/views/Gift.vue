<template>
    <AppHeaderGift />
    <div class="bg-white">
        <h2 class="p-2 title-font flex">人気の研修</h2>
        <div class="grid grid-cols-3">
            <div v-for="gift in gifts" :key="gift.index" class="p-1">
            <GiftCards
                img="25340787_s.jpg"
                :points="gift.requiredTokenAmount"
                :title="gift.name"
                :stars="gift.recommendationScore"
                :evaluation="gift.level"
            />
        </div>
        </div>
    </div>
</template>

<script>
import GiftCards from '../components/GiftCards.vue'
import AppHeaderGift from '../components/AppHeaderGift.vue'

export default {
  name: 'proposa-list',
  components: {
    GiftCards,
    AppHeaderGift,
  },
  computed: {
    gifts() {
      return this.$store.getters['giftStore/gifts'];
    }
  },
  created() {
    this.$store.dispatch('giftStore/getGift')
  }
}
</script>

<style>
h2 {
    letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
</style>
