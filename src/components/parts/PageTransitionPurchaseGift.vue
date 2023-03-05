<template>
    <div class="fullview">
    <div class="card bg-yellow">
        <div class="bg-orange">
            <h3 class="font-bold text-center py-10">購入しました！</h3>
            <div class="sankaku1"></div>
        </div>
        <div class="bg-yellow pb-10">
            <router-link class="mt-1 form-return-btn btn-font text-center text-gray-600" to="/mypage">
                購入した研修をマイページで確認する
            </router-link>
            <router-link class="mt-3 form-return-btn btn-font text-center text-gray-600" to="/gift">
                他のギフトを確認する
            </router-link>
        </div>
    </div>
    <CommonHanafubuki />
    </div>
  </template>

<script>
import CommonHanafubuki from '../parts/CommonHanafubuki.vue'

  export default {
    name: 'loading-',
    data() {
        return {
            copy: '',
        }
    },
    props : {
        proposalId : String,
        reward: String
    },
    components: {
        CommonHanafubuki,
    },
    mounted() {

    },
    updated() {
    },
    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
            this.copy='コピーしました！';
            setTimeout(() => {
                this.copy='';
            }, 2000);
        }
    },
  }
</script>

<style lang="scss" scoped>
.font-small {
    font-size: .8rem
}
  .desc{
    padding: 1rem;
    font-size: .9rem;
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
    &:after{
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

h3{
    position: relative;
    text-align: center;
    font-size: larger;
    &::after{
      content: '';
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
transform: translate(-50%,-50%);
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
    width: 300px;

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
transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border-radius: 40% 70% 60% 40%/40% 40% 60% 70%;
}
}

  </style>
