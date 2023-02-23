<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="require(`@/assets/img/${img}`)" alt="product image" />
        <div class="p-1">
            <div class="justify-between">
            <span class="text-xs font-semibold text-gray-900 dark:text-white">{{ points }} pts</span>
            <h5 class="text-xs font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
                <div class="flex items-center">
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
                    <span class="bg-gray text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ evaluation }}</span>
                </div>
            </div>
        </div>
    </a>
</div>
</template>

<script>
export default {
  name: 'giftCards',
  props: {
    img: String,
    points: String,
    title : String,
    stars : Number,
    evaluation: String,
  },
}
</script>