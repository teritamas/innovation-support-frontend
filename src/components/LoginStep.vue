<template>
    <div class="content-center">
        <div class="card card-one">
            <div class="bg-orange">
                <h3 class="title pb-5 pt-10">ご利用までの３ステップ</h3>
                <div class="desc">
                イノベーションサポートをご利用いただくには、<br>
                MetaMaskのアカウント作成とログインが必要です。
                </div>
            <!--<div v-if="hasBrowserExtension">
                <p id="account">Chain ID: {{chainId}}</p>
                <p id="account">Chain Name: {{Chains[chainId]}}</p>
            </div>-->
                <div class="sankaku1"></div>
            </div>
            <div class="bg-yellow">
                <h4 class="title pt-10">ステップ１ 拡張機能の追加</h4>
                <div v-if="hasBrowserExtension" class="desc align-middle">
                    <svg class="inline" role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="circleOkIconTitle" stroke="#2329D6" stroke-width="1.2857142857142858" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="circleOkIconTitle">OK</title> <polyline points="7 13 10 16 17 9"/> <circle cx="12" cy="12" r="10"/> </svg>
                    追加されています
                </div>
                <div v-if="!hasBrowserExtension" class="desc">
                    <p class="p-1">
                        お使いのブラウザにMetaMaskをダウンロードしてください。<br>
                        <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" class="text-blue-800">
                            公式サイト
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-blue-800 inline">
                            <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        を開き、<br>ダウンロードボタンを押してください。<br>
                        その後指示に従ってインストールをしてください。
                    </p>
                    <div class="text-center inline-block">
                                        </div>
                </div>
                <div class="sankaku2"></div>
            </div>

            <div class="bg-beige">
                <h4 class="title pt-10">ステップ２ MetaMaskへのログイン</h4>
                <div v-if="walletAddress" class="desc align-middle">
                    <svg class="inline" role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="circleOkIconTitle" stroke="#2329D6" stroke-width="1.2857142857142858" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="circleOkIconTitle">OK</title> <polyline points="7 13 10 16 17 9"/> <circle cx="12" cy="12" r="10"/> </svg>
                    ログイン中です
                </div>
                <div v-if="!walletAddress" class="desc">
                    <p class="p-1">
                        MetaMaskにログインをしてください。<br>
                        まだアカウントをお持ちでない方は<br>アカウントを作成してください。
                    </p>
                    <div class="text-center inline-block">
                        <button
                            v-if="hasBrowserExtension"
                            @click="initializeAccount()"
                            class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                            <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">別タブで開く</span>
                        </button>
                    </div>
                </div>
                <div class="sankaku3"></div>
            </div>
            <div class="bg-white">
                <h4 class="title pt-10">ステップ３ ニックネームの登録</h4>
                <div v-if="user.user_name" class="desc align-middle">
                    <svg class="inline" role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="circleOkIconTitle" stroke="#2329D6" stroke-width="1.2857142857142858" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="circleOkIconTitle">OK</title> <polyline points="7 13 10 16 17 9"/> <circle cx="12" cy="12" r="10"/> </svg>
                    {{ user.user_name }} さん、こんにちは！
                </div>
                <div v-if="!user.user_name" class="desc">
                    <p class="p-1">
                        システム上で利用するニックネームを登録してください。<br>
                        ニックネームはあとから変更することもできます。
                    </p>
                    <div class="text-center inline-block my-2">
                            <input
                                type="text"
                                class="Form-Item-Input"
                                placeholder="のむちん"
                                v-model="newUserName"
                            >
                        <button
                            v-if="hasBrowserExtension"
                            @click="registUserName()"
                            type="button"
                            class="mt-2 w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            登録をする
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Footer from './components/Footer.vue'

export default {
  name: 'app-top',
  components: {
    //Footer
  },
  data() {
    return {
        newUserName: '',
    }
  },
  computed: {
    hasBrowserExtension() {
        // getterの値をファイルで扱いやすくする
        return this.$store.getters['userStore/hasBrowserExtension'];
    },
    walletAddress() {
        return this.$store.getters['userStore/walletAddress'];
    },
    chainId() {
        return this.$store.getters['userStore/chainId'];
    },
    userId() {
        return this.$store.getters['userStore/userId'];
    },
    user() {
        return this.$store.getters['userStore/user'];
    },
  },
  created() {
    // メソッドを実行する
    this.getHasBrowserExtension();
  },
  mounted() {
        //var userAccount = window.ethereum.accounts[0];
        //this.userAccount = userAccount;
        //console.log(userAccount);
    },
  methods: {
    // storeのactionsをたたきにいく
    getWalletAddress() {
        return this.$store
        .dispatch('userStore/getWalletAddress')
        .then(() => {});
    },
    getChainId() {
        return this.$store
        .dispatch('userStore/getChainID')
        .then(() => {});
    },
    getHasBrowserExtension() {
        return this.$store
        .dispatch('userStore/getHasBrowserExtension')
        .then(() => {});
    },
    initializeAccount :async function () {
        await this.setWalletAddress();
        //await this.getChainID(); うまくいかないのでいったんコメントアウト
    },
    registUserName () {
        const userName = this.newUserName;
        const walletAddress = this.walletAddress;
        return this.$store
        .dispatch('userStore/registUserName', {userName, walletAddress})
        .then(() => {});
    },
  }
}
</script>


<style lang="scss" scoped>
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

.sankaku2 {
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
        border-color: transparent transparent transparent #fffbeb;
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
        border-color: transparent transparent #fffbeb transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
}

.sankaku3 {
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
        border-color: transparent transparent transparent white;
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
        border-color: transparent transparent white transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
}



/*** VARS ***/

$main-col: #fbde60;
//$main-col: rgb(251 191 36);
$sec-col: lighten(#303f9f, 20%);
$back-col: rgb(251 191 36);
//$back-col: #c5cae9;


/*** CARD STLES ***/
.card {
  float: left;
  margin-top: 1rem;
  max-width: 1200px;
}

.card-one {
  position: relative;
  width: 90vw;
  background: white;
  box-shadow: 0 10px 7px -5px rgba(#000,.4);
  overflow-x: none;
  overflow-y: scroll;
  height: 80vh;

  .title {
    position: relative;
    width: 100%;
    //height: 60px;
    //background-color: $main-col;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  h3{
    position: relative;
    text-align: center;
    &::after{
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 1px;
      background: #000;
    }
  }
  .desc{
    padding: 1.5rem 1rem;
    font-size: .9rem;
    text-align: center;
    color: #534e4e;
  }

  div.footer{
    position: relative;
    padding: 1rem;
    background-color: $sec-col;
    text-align: center;
    a{
      padding: 0 1rem;
      color: #e2e2e2;
      -webkit-transition: color .4s;
      -moz-transition: color .4s;
      -ms-transition: color .4s;
      -o-transition: color .4s;
      transition: color .4s;
      &:hover{
        color: $main-col;
      }
    }
    &::before{
      content: '';
      position: absolute;
      top: -27px;
      left: 50%;
      margin-left: -15px;
      border: 15px solid transparent;
      border-bottom-color: $sec-col;
    }
  }
}

/*** RESPONSIVE ***/

@media only screen and (max-width: 810px) {
  .card {
    float: none;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
  }
}


.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #fbfdff;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
</style>
