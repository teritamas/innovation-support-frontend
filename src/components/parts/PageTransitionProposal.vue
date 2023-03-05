<template>
    <div class="fullview">
    <div class="card bg-yellow">
        <div class="bg-orange">
            <h3 class="font-bold text-center py-10">提案の投稿が完了しました！</h3>
            <div class="desc">
                こちらのURLを共有してみんなに投票してもらいましょう！
                <button class="mt-2 btn-copy font-small" @click="copyToClipboard(url)">{{ url }}</button>
                <small class="text-center block">{{ copy }}</small>
            </div>
            <div class="sankaku1"></div>
        </div>
        <div class="bg-yellow pb-10">
            <router-link class="mt-1 form-return-btn btn-font text-center text-gray-600" :to="`/proposal/${this.registeredProposalId}`">
              投稿した提案を確認する
            </router-link>
            <router-link class="mt-3 form-return-btn btn-font text-center text-gray-600" to="/">
              タイムラインに移動する
            </router-link>
        </div>
    </div>
    <div class="confetti"><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
	</div>
    </div>
  </template>

<script>
//import LoadingCheck from './LoadingCheck.vue'

  export default {
    name: 'loading-',
    data() {
        return {
            copy: '',
        }
    },
    computed : {
        url() {
        return `${process.env.VUE_APP_API_ENDPOINT}proposal/${this.registeredProposalId}`
        }
    },
    props : {
        registeredProposalId : {}
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
  height: 400px;
}
}


.confetti {
	position: absolute;
	width: 100%;
	height: 100%;
}

.confetti span {
	position: absolute;
	top: -10%;
	left: 0;
	width: 1.5vw;
	height: 1vw;
	background: #FFF;
}

/* add animation */
.confetti span:nth-child(2n+1) {
	animation: confetti-anim-1 10s 0s linear infinite;
}

.confetti span:nth-child(2n+2) {
	animation: confetti-anim-2 10s 0s linear infinite;
}

/* side position */
.confetti span:nth-child(1) {
	left: 0%;
}

.confetti span:nth-child(2) {
	left: 2%;
}

.confetti span:nth-child(3) {
	left: 4%;
}

.confetti span:nth-child(4) {
	left: 6%;
}

.confetti span:nth-child(5) {
	left: 8%;
}

.confetti span:nth-child(6) {
	left: 10%;
}

.confetti span:nth-child(7) {
	left: 12%;
}

.confetti span:nth-child(8) {
	left: 14%;
}

.confetti span:nth-child(9) {
	left: 16%;
}

.confetti span:nth-child(10) {
	left: 18%;
}

.confetti span:nth-child(11) {
	left: 20%;
}

.confetti span:nth-child(12) {
	left: 22%;
}

.confetti span:nth-child(13) {
	left: 24%;
}

.confetti span:nth-child(14) {
	left: 26%;
}

.confetti span:nth-child(15) {
	left: 28%;
}

.confetti span:nth-child(16) {
	left: 30%;
}

.confetti span:nth-child(17) {
	left: 32%;
}

.confetti span:nth-child(18) {
	left: 34%;
}

.confetti span:nth-child(19) {
	left: 36%;
}

.confetti span:nth-child(20) {
	left: 38%;
}

.confetti span:nth-child(21) {
	left: 40%;
}

.confetti span:nth-child(22) {
	left: 42%;
}

.confetti span:nth-child(23) {
	left: 44%;
}

.confetti span:nth-child(24) {
	left: 46%;
}

.confetti span:nth-child(25) {
	left: 48%;
}

.confetti span:nth-child(26) {
	left: 50%;
}

.confetti span:nth-child(27) {
	left: 52%;
}

.confetti span:nth-child(28) {
	left: 54%;
}

.confetti span:nth-child(29) {
	left: 56%;
}

.confetti span:nth-child(30) {
	left: 58%;
}

.confetti span:nth-child(31) {
	left: 60%;
}

.confetti span:nth-child(32) {
	left: 62%;
}

.confetti span:nth-child(33) {
	left: 64%;
}

.confetti span:nth-child(34) {
	left: 66%;
}

.confetti span:nth-child(35) {
	left: 68%;
}

.confetti span:nth-child(36) {
	left: 70%;
}

.confetti span:nth-child(37) {
	left: 72%;
}

.confetti span:nth-child(38) {
	left: 74%;
}

.confetti span:nth-child(39) {
	left: 76%;
}

.confetti span:nth-child(40) {
	left: 78%;
}

.confetti span:nth-child(41) {
	left: 80%;
}

.confetti span:nth-child(42) {
	left: 82%;
}

.confetti span:nth-child(43) {
	left: 84%;
}

.confetti span:nth-child(44) {
	left: 86%;
}

.confetti span:nth-child(45) {
	left: 88%;
}

.confetti span:nth-child(46) {
	left: 90%;
}

.confetti span:nth-child(47) {
	left: 92%;
}

.confetti span:nth-child(48) {
	left: 94%;
}

.confetti span:nth-child(49) {
	left: 96%;
}

.confetti span:nth-child(50) {
	left: 98%;
}

/* colors */
.confetti span:nth-child(5n+1) {
	background: red;
}

.confetti span:nth-child(5n+2) {
	background: blue;
}

.confetti span:nth-child(5n+3) {
	background: green;
}

.confetti span:nth-child(5n+4) {
	background: pink;
}

.confetti span:nth-child(5n+5) {
	background: yellow;
}


/* animation-duration */
.confetti span:nth-child(4n+1) {
	animation-duration: 5s;
}

.confetti span:nth-child(4n+2) {
	animation-duration: 12s;
}

.confetti span:nth-child(4n+3) {
	animation-duration: 8s;
}

.confetti span:nth-child(4n+4) {
	animation-duration: 6s;
}


/* animation-delay */
.confetti span:nth-child(11n+1) {
	animation-delay: 0s;
}

.confetti span:nth-child(11n+2) {
	animation-delay: 9s;
}

.confetti span:nth-child(11n+3) {
	animation-delay: 2s;
}

.confetti span:nth-child(11n+4) {
	animation-delay: 5s;
}

.confetti span:nth-child(11n+5) {
	animation-delay: 6s;
}

.confetti span:nth-child(11n+6) {
	animation-delay: 7s;
}

.confetti span:nth-child(11n+7) {
	animation-delay: 3s;
}

.confetti span:nth-child(11n+8) {
	animation-delay: 1s;
}

.confetti span:nth-child(11n+9) {
	animation-delay: 2s;
}

.confetti span:nth-child(11n+10) {
	animation-delay: 11s;
}

.confetti span:nth-child(11n+11) {
	animation-delay: 10s;
}

/* animation */

@keyframes confetti-anim-1 {
	0% {
		top: -10%;
		transform: translateX(0) rotateX(0) rotateY(0);
	}

	100% {
		top: 100%;
		transform: translateX(20vw) rotateX(180deg) rotateY(360deg);
	}
}

@keyframes confetti-anim-2 {
	0% {
		top: -10%;
		transform: translateX(0) rotateX(0) rotateY(0);
	}

	100% {
		top: 100%;
		transform: translateX(-20vw) rotateX(180deg) rotateY(360deg);
	}
}

  </style>
