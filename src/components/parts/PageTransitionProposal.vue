<template>
  <div class="fullview">
    <div class="card bg-yellow">
      <div class="bg-orange">
        <h3 class="font-bold text-center py-10">提案の投稿が完了しました！</h3>
        <div class="desc">
          こちらのURLを共有してみんなに投票してもらいましょう！
          <button
            class="mt-2 btn-copy font-small"
            @click="copyToClipboard(url)"
          >
            {{ url }}
          </button>
          <small class="text-center block">{{ copy }}</small>
        </div>
        <div class="sankaku1"></div>
      </div>
      <div class="bg-yellow pb-10">
        <router-link
          class="mt-1 form-return-btn btn-font text-center text-gray-600"
          :to="`/proposal/${this.registeredProposalId}`"
        >
          投稿した提案を確認する
        </router-link>
        <router-link
          class="mt-3 form-return-btn btn-font text-center text-gray-600"
          to="/"
        >
          一覧に移動する
        </router-link>
      </div>
    </div>
    <CommonHanafubuki />
  </div>
</template>

<script>
import CommonHanafubuki from "../parts/CommonHanafubuki.vue";

export default {
  name: "loading-",
  data() {
    return {
      copy: "",
    };
  },
  computed: {
    url() {
      return `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.registeredProposalId}`;
    },
  },
  props: {
    registeredProposalId: {},
  },
  components: {
    CommonHanafubuki,
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      this.copy = "コピーしました！";
      setTimeout(() => {
        this.copy = "";
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.font-small {
  font-size: 0.8rem;
}
.desc {
  padding: 1rem;
  font-size: 0.9rem;
  text-align: center;
  color: #534e4e;
}
.sankaku1 {
  padding-top: 40px;
  overflow: hidden; //スクロールバー対策
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 0 0 50vw;
    border-color: transparent transparent transparent #ffefbb;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 40px 50vw;
    border-color: transparent transparent #ffefbb transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
}

h3 {
  position: relative;
  text-align: center;
  font-size: larger;
  &::after {
    content: "";
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 1px;
    background: #000;
  }
}

.fullview {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 3px;
  z-index: 200;
}

.btn-copy {
  border-radius: 6px;
  background: lightslategrey;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}
.form-return-btn {
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  background: white;
  color: gray;
}

.btn-font {
  letter-spacing: 0.05em;
  font-size: 20px;
  font-weight: bold;
}
@media screen and (max-width: 480px) {
  .form-return-btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
  }

  .btn-font {
    font-size: 16px;
  }
  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 400px;
  }
}
</style>
