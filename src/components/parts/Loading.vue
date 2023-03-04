<template>
    <div class="fullview">
    <div class="loaders">
      <div class="loader">
        <div class="text-center loader-inner line-scale-pulse-out">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p class="font-bold text-gray-600">
            <LoadingCheck checkTarget="regist-check" lavel="登録完了" />
            <LoadingCheck checkTarget="nft-check" lavel="NET作成完了" />
          </p>
        </div>
      </div>
    </div>
    </div>
  </template>

<script>
import LoadingCheck from './LoadingCheck.vue'

  export default {
    name: 'loading-',
    data() {
        return {
            //loading: true,
        }
    },
    components: {
        LoadingCheck,
    },
    mounted() {
        this.loadCheck('regist-check', 4000);
        this.loadCheck('nft-check', 6000);
    },
    updated() {
        this.outCheck('regist-check');
        this.outCheck('nft-check');
    },
    methods: {
        loadCheck (checkTarget, time) {
                    // 最初チェック入っていない状態にしたい
            setTimeout(() => {
                this.inCheck(checkTarget)
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
    },
  }
</script>

  <style scoped>
.fullview {
  width: 100%;
  height: 100%;
  background: rgba(252, 255, 252, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 30%;
}

.loader-inner {
    position: absolute;
    top: 50%;
    left: 45%;
    color: orange;
}

@-webkit-keyframes line-scale-pulse-out {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

@keyframes line-scale-pulse-out {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

.line-scale-pulse-out > div {
  background-color: orange;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
          animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); }
  .line-scale-pulse-out > div:nth-child(2), .line-scale-pulse-out > div:nth-child(4) {
    -webkit-animation-delay: -0.4s !important;
            animation-delay: -0.4s !important; }
  .line-scale-pulse-out > div:nth-child(1), .line-scale-pulse-out > div:nth-child(5) {
    -webkit-animation-delay: -0.2s !important;
            animation-delay: -0.2s !important; }

@-webkit-keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  80% {
    -webkit-transform: scaley(0.3);
            transform: scaley(0.3); }
  90% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

@keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  80% {
    -webkit-transform: scaley(0.3);
            transform: scaley(0.3); }
  90% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

.line-scale-pulse-out-rapid > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
          animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78); }
  .line-scale-pulse-out-rapid > div:nth-child(2), .line-scale-pulse-out-rapid > div:nth-child(4) {
    -webkit-animation-delay: -0.25s !important;
            animation-delay: -0.25s !important; }
  .line-scale-pulse-out-rapid > div:nth-child(1), .line-scale-pulse-out-rapid > div:nth-child(5) {
    -webkit-animation-delay: 0s !important;
            animation-delay: 0s !important; 
}
  </style>
