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

</style>
