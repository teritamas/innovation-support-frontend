<template>
    <div class="context">
        <div class="card card-one">
            <div class="bg-orange">
                <h3 class="title py-5">ご利用までのステップ</h3>
                <div class="desc">
                イノベーションサポートをご利用いただくには、<br>
                MetaMaskのアカウント作成とログインが必要です。
                </div>
                <div class="sankaku1"></div>
            </div>
            <div class="bg-yellow">
                <h4 class="title py-5">ステップ１</h4>
                <div class="desc">
                イノベーションサポートをご利用いただくには、<br>
                MetaMaskのアカウント作成とログインが必要です。
                </div>
                <div class="sankaku2"></div>
            </div>

            <div class="bg-white">
                <h4 class="title py-5">ステップ2</h4>
                <div class="desc">
                イノベーションサポートをご利用いただくには、<br>
                MetaMaskのアカウント作成とログインが必要です。
                </div>
            </div>
    </div>
    </div>
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    <div>
        <h2></h2>
        <div v-if="!hasBrowserExtension">
            <h3>Account</h3>
            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </a>
            <button class="btn" id="GetAccountButton" @click="initializeAccount()">Get Account</button>
            <p id="account">Address: {{account}}</p>
            <p id="account">Chain ID: {{chainId}}</p>
            <p id="account">Chain Name: {{Chains[chainId]}}</p>
        </div>
        <div v-if="!hasBrowserExtension">
            <h3>Account</h3>
            <button class="btn" id="GetAccountButton" @click="initializeAccount()">Get Account</button>
            <p>ログインするためには、以下の対応が必要です。</p>
            <li>1.MetaMaskのブラウザ拡張機能の追加</li>
            <li>2.アカウントの作成</li>
            <a href="https://metamask.io/">公式サイト</a> からインストール
        </div>
    </div >
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
        Chains: {
            1: "Mainnet",
            3: "Ropsten",
            4: "Rinkeby",
            42: "Kovan",
            1337: "Geth private chain(default )",
            61: "Ethereum Classic Mainnet",
            62: "Morden",
        },
        Wei: 1000000000000000000,
        account : '',
        chainId : '',
        hasBrowserExtension: true,
        //btnDisabled : false,
    }
  },
  methods: {
    initializeAccount :async function () {
        if (typeof window.ethereum !== 'undefined') {
            this.hasBrowserExtension = true;
        } else {
            this.hasBrowserExtension = false;
            return false;
        }

        const account = this.getAccount();
        this.chainId = this.getChainID();
        console.log('account');
        console.log(account);
        console.log('account');
        if (account != "") {
            this.handleAccountChanged(account, this.account, this.chainId);
        }
    },
    getAccount : async function () {
        try {
            const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (account.length > 0) {
                return account[0];
            } else {
                return "";
            }
        } catch (err) {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
            return "";
        }
    },
    handleAccountChanged : async function () {
        this.account = await this.getAccount();
        this.chainId = await this.getChainID();
    },
    getChainID  : async function(){
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        return parseInt(chainId);
    },
    mounted() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('koko');
            window.ethereum.on("accountsChanged", () => this.handleAccountChanged());
            window.ethereum.on("chainChanged", () => this.handleAccountChanged());
        } else {
            console.log('else');
        }
    },
  },
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

/*** GENERAL STYLES ***/

body{
  font-family: 'Dosis', sans-serif;
  background: $back-col;
  text-align: center;
}

.bg-orange {
    background: #ffe364;
}

.bg-yellow {
    background: #ffefbb;
}

/*** CARD STLES ***/
.card {
  float: left;
  margin: 3rem;
}

.card-one {
  position: relative;
  width: 85vw;
  background: white;
//  background: #ffe364;
box-shadow: 0 10px 7px -5px rgba(#000,.4);

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

// bg
.context {
    width: 100%;
    position: absolute;
}

.area{
    background: rgb(251 191 36);  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height: 94vh; // 100vh
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.step1 {
    //position: relative;
    //width: 100%;
    //height: 300px;
    background-color: #ffefbb;
}

.step2 {
    background-color: white;
}
</style>
