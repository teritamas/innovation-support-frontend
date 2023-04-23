<template>
  <AppHeaderGift />
  <div class="grid grid-cols-2 md:grid-cols-3" style="max-width: 1200px; margin: 0 auto;">
    <div v-for="gift in showGifts" :key="gift.index" class="p-1">
      <GiftCards
        :gift="gift"
        :img=giftImage(gift.name)
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
import GiftCards from "../../components/gift/GiftCards.vue";
import AppHeaderGift from "../../components/gift/AppHeaderGift.vue";

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
  methods: {
    giftImage(name) {
        if (name === undefined) return '25340787_s.jpg';
        if (name.indexOf('休息') !== -1) return 'coffee.jpg';
        if (name.indexOf('データ分析入門') !== -1) return 'syoshinsya.jpg';
        if (name.indexOf('マーケティング') !== -1) return 'deskshiryou.jpg';
        if (name.indexOf('プロジェクト') !== -1) return 'puromane.jpg';
        if (name.indexOf('プレゼン') !== -1) return 'purezen.jpg';
      return '25340787_s.jpg';
    },
  }
};
</script>