<template>
  <div class="bg-nav border-b border-gray-200 dark:border-gray-700">
    <ul
      class="grid grid-cols-2 -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li class="mr-2">
        <a
          @click="changeShowContentsType('Training')"
          :class="{ active: show == 'Training' }"
          class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-2 text-gray-400 w-5 h-5"
          >
            <path
              d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
            />
          </svg>
          研修
        </a>
      </li>
      <li class="mr-2">
        <a
          @click="changeShowContentsType('Welfare')"
          :class="{ active: show == 'Welfare' }"
          class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          aria-current="page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-2 text-gray-400 w-5 h-5"
          >
            <path
              d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"
            />
          </svg>
          福利厚生
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeaderGift",
  data() {
    return {
      show: "Training",
    };
  },
  methods: {
    changeShowContentsType: function (type) {
      this.select(type);
      this.setShowContentsGiftType();
    },
    select: function (type) {
      this.show = type;
    },
    setShowContentsGiftType: function () {
      console.log(this.show);
      this.$store.commit("displayStore/setShowContentsGiftType", this.show);
    },
  },
};
</script>

<style scoped>
.bg-nav {
  background: white;
}

.active {
  border-color: rgb(245 158 11);
  color: rgb(245 158 11);
}

.active path {
  color: rgb(245 158 11);
}
</style>