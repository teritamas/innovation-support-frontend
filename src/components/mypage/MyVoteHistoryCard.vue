<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700"
    style="max-width: 663px"
  >
    <router-link
      :to="{ name: 'proposalDetail', params: { proposalId: proposalId } }"
      class="grid grid-cols-3"
    >
      <img
        class="rounded-t-sm pdf-image"
        alt="product image"
        :src="thumbnailImageUrl"
        @error="imageError = true"
      />
      <div class="col-span-2">
        <h4
          class="text-xl py-2 font-bold tracking-tight text-gray-900 dark:text-white p-5"
        >
          提案名: {{ title }}
        </h4>
        <div class="">
          <!--吹き出しはじまり-->
          <div class="balloon5 text-center hidden lg:block">
            <div class="faceicon">
              <img
                class="avatar"
                src="@/assets/img/2754574_business_people_person_man_male_avatar_face_user.png"
                alt=""
              />
              <small>{{ judgementText }}</small>
            </div>
            <div class="chatting">
              <div class="says">
                <p>{{ judgementReason }}</p>
              </div>
            </div>
          </div>
          <div class="bg-yellow p-3 block lg:hidden">
            <p class="p-3 radius-sm font-xs bg-white whitespace-normal">
              {{ judgementReason }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  name: "MyVoteHistoryCard",
  components: {},
  data() {
    return {
      imageError: false,
      defaultImage: require("@/assets/img/proposalList/no_images.webp"),
    };
  },
  props: {
    proposalId: String,
    title: String,
    judgement: Boolean,
    judgementReason: String,
  },
  computed: {
    thumbnailImageUrl() {
      return this.imageError
        ? this.defaultImage
        : `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.proposalId}/thumbnail`;
    },
    judgementText() {
      return this.judgement ? "賛成" : "反対";
    },
  },
};
</script>
  
<style lang=scss scoped>
.comment {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  background: white;
  font-size: 0.9rem;
  white-space: normal;
  display: inline-block;
}
.horizontal-list {
  overflow-x: auto;
  white-space: nowrap;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: #00416a;
  transition: 0.5s;
}
.text-rose-700 {
  color: rgb(190 18 60);
  font-weight: bold;
}
.balloon1-left {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
}

.balloon1-left:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #e0edff;
}

.balloon1-left p {
  margin: 0;
  padding: 0;
}

.balloon5 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
}

.balloon5 .faceicon {
  float: left;
  margin-right: -90px;
  width: 80px;
}

.balloon5 .faceicon img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.balloon5 .chatting {
  width: 100%;
}

.says {
  display: inline-block;
  position: relative;
  margin: 5px 5px 0 105px;
  padding: 17px 13px;
  border-radius: 12px;
  background: #ffefbb;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 18px;
  left: -24px;
  border: 12px solid transparent;
  border-right: 12px solid #ffefbb;
}

.says p {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}
</style>
  