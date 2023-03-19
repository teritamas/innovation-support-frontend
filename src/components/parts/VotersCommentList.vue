<template>
  <div class="horizontal-list">
    <div
      v-for="(vote, index) in voteList"
      :key="vote.index"
      @click="showJudgementReason(index, vote)"
      class="text-center inline-block p-1"
    >
      <img
        class="avatar"
        :src="require(`@/assets/img/${avatarImage(vote.judgement)}`)"
        alt=""
      />
      <small>{{ convertedJudgement(vote.judgement) }}</small>
    </div>
  </div>
  <div v-if="showComment" class="py-1 px-5 bg-yellow">
    <div class="comment">
      {{ showCommentContent }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VotersCommentList",
  components: {},
  data() {
    return {
      showComment: false,
      showCommentIndex: -1,
      showCommentContent: "",
    };
  },
  props: {
    voteList: Object,
  },
  computed: {
    avatarImage() {
      return (judgement) => {
        return judgement ? "2754579_avatar_man_business man_avatar_face_user_business_people.png" : "2754580_people_female_business_user_face_avatar_woman_business_woman_avatar.png";
      };
    },
    convertedJudgement() {
      return (judgement) => {
        return judgement ? "賛成" : "反対";
      };
    },
  },
  methods: {
    showJudgementReason(index, vote) {
      if (this.showCommentIndex === index) {
        // 表示しているユーザと同じアイコンがクリックされたらコメントを非表示にする。
        this.showComment = false;
        this.showCommentIndex = -1;
        this.showCommentContent = "";
        return;
      }
      console.log(vote.judgementReason);
      this.showCommentContent = this.voteList[index].judgementReason;
      if (this.showCommentContent === "") {
        this.showCommentContent = "コメントはありません";
      }
      this.showCommentIndex = index;
      this.showComment = true;
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
</style>
