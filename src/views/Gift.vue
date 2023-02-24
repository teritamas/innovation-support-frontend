<template>
    <AppHeaderGift />
    <div class="bg-white">
        <h2 class="p-2 title-font flex">人気の研修</h2>
        <div class="grid grid-cols-3">
            <div v-for="i in 9" :key="i" class="p-1">
            <GiftCards
                img="25340787_s.jpg"
                points="30,000"
                title="【統計学】アナリティクス入門"
                :stars="Number(5)"
                evaluation="5.0"
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
}
</script>

<style>
h2 {
    letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
</style>
