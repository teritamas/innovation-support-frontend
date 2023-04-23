<template>
  <div class="content-center">
    <div class="card card-one">
      <PurchasedStatusBadge 
        :purchasedUsers="giftDetail.purchasedUsers"
      />
      <img class="rounded-t-sm" :src="require(`@/assets/img/${giftImage}`)" alt="product image" />
      <div class="bg-orange">
        <h3 class="font-bold text-center py-4">
          {{ giftDetail.name }}
        </h3>
      </div>
      <div class="flex justify-around py-3">
        <span
          class="bg-gray text-blue-800 text-sm font-semibold rounded dark:bg-blue-200 dark:text-blue-800 mx-3"
          >難易度: {{ levelMessage }}</span
        >
        <div class="inline">
          <div class="flex items-center">
            <span class="text-sm font-semibold text-gray-900">評価：</span>
            <svg
              v-for="i in giftDetail.recommendationScore"
              :key="i"
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="p-3 desc">
        {{ giftDetail.description }}
      </div>

      <div class="text-center">
        <span class="text-lg font-semibold text-gray-900"
          >必要なトークン： {{ giftDetail.requiredTokenAmount }} pts</span
        >
        <button @click="purchaseGift()" class="text-center form-btn mb-3">
          購入する
        </button>
        <router-link to="/gift" class="text-center form-Return-btn mb-5"
          >戻る</router-link
        >
      </div>
    </div>
  </div>
  <Loading v-show="loading" :loadingText="loadingText" />
  <PageTransition v-show="PageTransition" />
  <PageTransitionRequiredLogin 
      v-show="token==''"
      :headerMessage="'研修を購入する場合はログインをしてください'"
    ></PageTransitionRequiredLogin>
</template>

<script>
import Loading from "../../components/parts/Loading.vue";
import PageTransition from "../../components/parts/PageTransitionPurchaseGift.vue";
import PageTransitionRequiredLogin from '../../components/parts/PageTransitionRequiredLogin.vue'
import PurchasedStatusBadge from "@/components/parts/PurchasedStatusBadge.vue";

export default {
  name: "proposal-form",
  components: {
    Loading,
    PageTransition,
    PageTransitionRequiredLogin,
    PurchasedStatusBadge,
  },
  data() {
    return {
      loading: false,
      PageTransition: false,
      loadingText: [
        {
          checkTarget: "purchase-check",
          label: "購入完了",
        },
      ],
    };
  },
  props: {
    img: String,
  },
  computed: {
    token() {
        return this.$store.getters['userStore/token'];
    },
    giftId() {
      return this.$route.params["giftId"];
    },
    giftDetail() {
      return this.$store.getters["giftStore/detail"];
    },
    levelMessage() {
      if (this.giftDetail.level === "Middle") {
        return "中";
      } else if (this.giftDetail.level === "Low") {
        return "低";
      } else {
        return "高";
      }
    },
    giftImage() {
        if (this.giftDetail.name === undefined) return '25340787_s.jpg';
        if (this.giftDetail.name.indexOf('休息') !== -1) return 'coffee.jpg';
        if (this.giftDetail.name.indexOf('データ分析入門') !== -1) return 'syoshinsya.jpg';
        if (this.giftDetail.name.indexOf('マーケティング') !== -1) return 'deskshiryou.jpg';
        if (this.giftDetail.name.indexOf('プロジェクト') !== -1) return 'puromane.jpg';
        if (this.giftDetail.name.indexOf('プレゼン') !== -1) return 'purezen.jpg';
      return '25340787_s.jpg';
    },
  },
  created() {
    this.$store.dispatch("giftStore/detailGift", this.giftId);
  },
  methods: {
    setLoading(bool) {
      this.loading = bool;
    },
    loadCheck(checkTarget, time) {
      setTimeout(() => {
        this.inCheck(checkTarget);
      }, time);
    },
    inCheck(checkTarget) {
      let checkbox = document.getElementById(checkTarget);
      checkbox.checked = true;
    },
    outCheck(checkTarget) {
      let checkbox = document.getElementById(checkTarget);
      checkbox.checked = false;
    },
    purchaseGift() {
      this.setLoading(true);
      setTimeout(() => {
        this.inCheck("purchase-check");
      }, 2000);
      const giftId = this.$route.params["giftId"];
      this.$store.dispatch("giftStore/purchaseGift", giftId).then(() => {
        setTimeout(() => {
          // this.setLoading(false);
          this.outCheck("purchase-check");
          this.PageTransition = true;
        }, 5000);
      });
    },
  },
};
</script>


<style scoped>
.desc {
  padding: 0 1rem 2rem;
  line-height: 1.5;
  color: #777;
}

.img-box {
  width: 100%;
  /*padding: 1rem;*/
}
.card {
  float: left;
  margin-top: 1rem;
  max-width: 600px;
}

.card-one {
  position: relative;
  overflow-y: scroll;
  overflow-x: none;
  height: 80vh;
  width: 90vw;
  background: white;
  box-shadow: 0 10px 7px -5px rgba(#000, 0.4);
}

.form-btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: rgb(251 191 36);
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

.form-Return-btn {
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #555;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .form-btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }

  .form-Return-btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }
}
</style>
