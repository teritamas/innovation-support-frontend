<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
        <router-link
                :to="{ name: 'proposalDetail', params: {proposalId: proposalId } }"
        >
            <img 
            class="rounded-t-sm w-full"
            alt="product image" 
            :src="thumbnailImageUrl" 
            @error="imageError = true"/>
            <h4 class="text-xl py-2 font-bold tracking-tight text-gray-900 dark:text-white p-5">{{ title }}</h4>
            <div class="pt-1 px-5">
                <div class="flex justify-between">
                    <span class="text-rose-700 text-bold mb-2 text-lg">あと 1 週間</span>
                    <div class="text-gray-700 text-bold mb-2">獲得できるトークン <span class="text-lg font-bold">{{ targetAmount }}</span> pts</div>
                </div>
                <div class="progBar">
                    <p class="bar"></p>
                </div>
                <small>事業化まであと 25票 !</small>
            </div>
        </router-link>

            <div class="horizontal-list">
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754574_business_people_person_man_male_avatar_face_user.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754575_male_people_business_user_face_avatar_man_avatar.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754576_people_business_user_face_avatar_avatar_woman_female.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754578_face_user_avatar_male_man_avatar_user_business_people.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754581_avatar_business_user_face_avatar_woman_people_user_female.png" alt="">
                    <small>反対</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754583_user_people_business_user_face_avatar_man_avatar.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754574_business_people_person_man_male_avatar_face_user.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754575_male_people_business_user_face_avatar_man_avatar.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754576_people_business_user_face_avatar_avatar_woman_female.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754578_face_user_avatar_male_man_avatar_user_business_people.png" alt="">
                    <small>賛成</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754581_avatar_business_user_face_avatar_woman_people_user_female.png" alt="">
                    <small>反対</small>
                </div>
                <div class="text-center inline-block p-1">
                    <img class="avatar" src="@/assets/img/2754583_user_people_business_user_face_avatar_man_avatar.png" alt="">
                    <small>賛成</small>
                </div>
            </div>
        <div class="py-1 px-5 bg-yellow">
            <div class="comment">
                あやちんさんの新事業に賛成です！理由はあやちんさんがとてもすごいからです。いつもすごいので新事業もイケているに決まっています。
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'proposalCards',
  components: {
  },
  data() {
    return {
        imageError: false,
        defaultImage: require("@/assets/img/proposalList/no_images.webp"),
        progress: 70, // 進捗のカウント,
    };
  },
  props: {
    proposalId: String,
    title: String,
    description: String,
    filePath: String,
    targetAmount: String,
    isRecruitingTeammates: Boolean,
    otherContents: String,
    tags: String,
    proposalWalletAddress: String,
    nftTokenId: String,
  },
  computed: {
    thumbnailImageUrl() {
      return this.imageError ? this.defaultImage : `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.proposalId}/thumbnail`
    },
  }
  
}
</script>

<style lang=scss scoped>
.comment {
    margin: .5rem;
    padding: .5rem;
    border-radius: 5px;
    background: white;
    font-size: .9rem;
}
.horizontal-list {
  overflow-x: auto;
  white-space: nowrap;
}
.bg-btn {
    background: rgb(251 191 36);
    border-radius: 30px;
    width: 160px;
    font-weight: bolder;
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
.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.progBar{
    height:40px;
    background-color:#ececec;
    position:relative;
    border-radius:10px;
    overflow: hidden;
}
.progBar .bar{
    position:absolute;
    height:100%;
    background-color:#FFCA28;
    width: 70%
}
</style>
