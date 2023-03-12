<template>
    <div>
      <h2 class="text-center text-white font-bold text-xl mt-2.5">交換したギフト</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 p-2">
            <div v-for="gift in gifts" :key="gift.index" class="p-1">
            <GiftCards
                :gift="gift"
                img="25340787_s.jpg"
                :giftId="gift.prizeId"
                :title="gift.name"
                :description="gift.description"
                :stars="gift.recommendationScore"
                :points="gift.requiredTokenAmount"
                :evaluation="gift.level"
            />
        </div>
    </div>
    </div>
</template>

<script>
import GiftCards from '@/components/GiftCards.vue'

export default {
  name: 'proposa-list',
  components: {
    GiftCards,
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
