<template>
    <div class="card card-one">
    <div class="head">
    <div class="avatar">
        <img src="@/assets/img/mypic.png" alt="sayako" />
    </div>
    </div>

    <h3>{{ user.user_name }}</h3>
    <div class="stats px-5">
    <div class="stat text-center">
    <i>獲得したNFT</i>
    <i class="grid">5<span>tickets</span></i>
    </div>
    <div class="stat text-center">
    <i>獲得したトークン</i>
    <i class="grid">$300<span>points</span></i>
    </div>
    <div class="stat text-center">
    <i>貢献した回数</i>
    <i class="grid">22<span>activities</span></i>
    </div>
</div><!-- / .stats -->

<div class="desc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
    </div>
    <div class="footer">
        <p class="text-white">test</p>
    </div>
</div>

</template>

<script>
//import ProposalCards from '../components/ProposalCards.vue'

export default {
name: 'propose-form',
components: {
//ProposalCards
},
data() {
return {
  newProposal: this.$store.state.newProposal
};
},
computed: {
user() {
    return this.$store.getters['userStore/user'];
},
},
}

</script>

<style lang="scss" scoped>
/*** VARS ***/

$main-col: #fbde60;
//$main-col: rgb(251 191 36);
$sec-col: lighten(#303f9f, 20%);
$back-col: #c5cae9;

.stats {
  position: relative;
  margin: 20px 0;
  display: table;
  table-layout: fixed;
  font-size: .6rem;
  width:100%;
  border: 1px solid #ddd;
  border-left: 0; border-right: 0;
  border:0;
  
  .stat {
    
    width: 33.3333%;
    display: table-cell;
    padding: 10px 0;
    letter-spacing: .5px;
    line-height: 1.7;
    
    border-left: 1px solid #ddd;
    &:nth-child(1) { border-left: 0; }
    
    i:first-child { color: #888; }
    i:nth-child(2) {
      font-size: 0.9rem;
    //  font-weight: @font-normal;
      text-transform: uppercase;
      span { font-size: 0.55rem; display: block; color: #888; }
    }
  } // .stat
} // .stats


/*** GENERAL STYLES ***/

* {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
body{
font-family: 'Dosis', sans-serif;
background: $back-col;
text-align: center;
}


/*** CARD STLES ***/
.card{
float: left;
margin: 3rem;
}

.card-one{
position: relative;
width: 300px;
background: #fff;
box-shadow: 0 10px 7px -5px rgba(#000,.4);

div.head {
position: relative;
width: 100%;
height: 60px;
background-color: $main-col;
&::before, &::after{
  content: '';
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  background: inherit;
}
&::before{
  -webkit-transform: skewY(-8deg);
  -moz-transform: skewY(-8deg);
  -ms-transform: skewY(-8deg);
  -o-transform: skewY(-8deg);
  transform: skewY(-8deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  -o-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
&::after{
  -webkit-transform: skewY(8deg);
  -moz-transform: skewY(8deg);
  -ms-transform: skewY(8deg);
  -o-transform: skewY(8deg);
  transform: skewY(8deg);
  -webkit-transform-origin: 0 100%;
  -moz-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -o-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.avatar{
  position: absolute;
  left: 50%;
  top: 30px;
  margin-left: -50px;
  z-index: 5;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background: #ccc;
  border:3px solid #fff;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100px;
    height: auto;
  }
}
}

h3{
position: relative;
margin: 80px 0 30px;
text-align: center;
&::after{
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height: 1px;
  background: #000;
}
}
.desc{
padding: 0 1rem 2rem;
text-align: center;
line-height: 1.5;
color: #777;
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
</style>
