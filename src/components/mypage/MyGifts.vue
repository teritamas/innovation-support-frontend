<template>
  <div class="bg-glass">
    <h2 class="title-underline text-center text-white font-bold text-xl mt-2.5">
      交換したギフト
    </h2>
    <div 
        v-if="userPurchasedGifts.length === 0"
        class="text-white p-5 text-center">
        <p>
            交換したギフトはありません！<br>
            トークンを貯めてギフト交換しましょう！
        </p>
        <img class="w-full img-to-display-if-not" src="@/assets/img/noGiftImage.png" alt="投票がないときの画像">
    </div>
    <div class="p-2">
      <div v-for="gift in userPurchasedGifts" :key="gift.index" class="p-1">
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
import GiftCards from "@/components/GiftCards.vue";

export default {
  name: "MyGift",
  components: {
    GiftCards,
  },
  computed: {
    userPurchasedGifts() {
      const userDetail = this.$store.getters["userStore/detail"];
      if (userDetail.purchasedPrizes === undefined) return [];
      return userDetail.purchasedPrizes;
    },
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
