<template>
<footer class="text-gray-600 body-font fixed bottom-2 shadow w-full">
  <div class="bg-footer grid grid-cols-5">
        <router-link class="footer-item block text-gray-500" to="/">
            <div class="p-1 py-2 grid justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <small>ホーム</small>
            </div>
        </router-link>
        <router-link class="footer-item block text-gray-500" to="/proposal">
            <div class="p-1 py-2 grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clip-rule="evenodd" />
                </svg>
                <small>提案する</small>
            </div>
        </router-link>
        <router-link class="footer-item block text-gray-500" to="/lists">
            <div class="p-1 py-2 grid justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
              <small>提案一覧</small>
            </div>
        </router-link>
        <router-link class="footer-item block text-gray-500" to="/mypage">
            <div class="p-1 py-2 grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
              <small>マイページ</small>
            </div>
        </router-link>
        <router-link class="footer-item block text-gray-500" to="/gift">
            <div class="p-1 py-2 grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
            </svg>
              <small>ギフト交換</small>
            </div>
        </router-link>
  </div>
</footer>
</template>

<script>
export default {
  name: 'app-Footer',
}
</script>

<style scoped>
footer {
    border-radius: 30px;
    z-index: 10000;
}
.router-link-active {
    background: rgb(251 191 36);
    color: white;
    border-radius: 30px;
}

.router-link-active path {
    fill: white;
}
.bg-footer {
    background: white;
    border-radius: 30px;
    box-shadow: 10px;
}
.footer-item:hover {
    background: rgb(251 191 36);
    color: white;
    border-radius: 30px;
}
path {
  fill: gray;
  stroke: transparent;
}
 
.footer-item:hover path {
  -webkit-animation: stroke 2s ease-in-out forwards; 
  animation: stroke 2s ease-in-out forwards; 
  stroke: white;
  stroke-dasharray: 1800;
  stroke-dashoffset: 0;
  stroke-width: 1;
}
 
@-webkit-keyframes stroke {
  0% {
    fill: #eee;
    stroke-dashoffset: 1800;
  }
  10% {
    fill: transparent;
  }
  80% {
    fill: transparent;
  }
  100% {
    fill: white;
    stroke-dashoffset: 0;
  }
}
 
@keyframes stroke {
  0% {
    fill: #eee;
    stroke-dashoffset: 1800;
  }
  10% {
    fill: transparent;
  }
  80% {
    fill: transparent;
  }
  100% {
    fill: white;
    stroke-dashoffset: 0;
  }
}
</style>