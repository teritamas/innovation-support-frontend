<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
    <button @click="moveDetailPage(giftId, gift, img)">
        <div class="relative">
            <img class="rounded-t-sm" :src="require(`@/assets/img/${img}`)" alt="product image" />
            <div class="absolute flex items-center">
                <svg
                    v-for="i in stars"
                    :key="i"
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            </div>
        </div>
        <div class="p-1">
            <div class="justify-between">
                <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h1>
                <span class="text-xs font-semibold text-gray-900 dark:text-white inline-block mx-2">必要なトークン： {{ points }} pts</span>
                <span class="bg-gray text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 inline-block mx-2">難易度：{{ evaluation }}</span>
            </div>
        </div>
    </button>
</div>
</template>

<script>
export default {
  name: 'giftCards',
  props: {
    gift: {},
    giftId: String,
    img: String,
    title : String,
    description: String,
    stars : Number,
    points: String,
    evaluation: String,
  },
  methods : {
    moveDetailPage(giftId, gift, img) {
        this.$router.push({name: "giftDetail", params: { giftId: giftId, img:img, gift:gift}})
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  top:0px;
  right: 0;
  color:#000;
  background: rgba(255,255,255,.8);
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border-radius: 0 0 0 10px;
}
</style>
