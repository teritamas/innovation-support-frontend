<template>
  <AppHeaderGift />
  <div class="grid grid-cols-2 md:grid-cols-3">
    <div v-for="gift in showGifts" :key="gift.index" class="p-1">
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
</template>

<script>
import GiftCards from "../components/GiftCards.vue";
import AppHeaderGift from "../components/AppHeaderGift.vue";

export default {
  name: "proposa-list",
  components: {
    GiftCards,
    AppHeaderGift,
  },
  computed: {
    showGifts() {
      const showGiftType = this.$store.getters["displayStore/showGiftType"];

      return this.gifts.filter((x) => {
        if (x.type === showGiftType) {
          return x;
        }
      });
    },
    gifts() {
      return this.$store.getters["giftStore/gifts"];
    },
  },
  created() {
    this.$store.dispatch("giftStore/getGift");
  },
};
</script>

<style>
h2 {
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
</style>
