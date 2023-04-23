<template>
    <div class="bg-white border-b border-gray-200 dark:border-gray-700">
        <ul class="grid grid-cols-3 -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="mr-2">
                <a
                    @click="changeShowContentsType('proposal')" :class="{'active': show == 'proposal'}"
                    class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    提案
                </a>
            </li>
            <li class="mr-2">
                <a
                    @click="changeShowContentsType('tester')" :class="{'active': show == 'tester'}"
                    class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    テスター
                </a>
            </li>
            <li class="mr-2">
                <a
                    @click="changeShowContentsType('survey')" :class="{'active': show == 'survey'}"
                    class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                     </svg>
                    アンケート
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'app-headrer',
  data() {
    return {
        show: "proposal",
    };
  },
  methods: {
    changeShowContentsType : function (type) {
        this.select(type);
        this.setShowContentsType();
    },
    select: function (type) {
      this.show = type;
    },
    setShowContentsType : function(){
      this.$store.commit('setShowContentsType', this.show);
    },
  },
}

</script>

<style scoped>
.active {
    border-color: rgb(245 158 11);
    color: rgb(245 158 11);
}

.active path {
    color :rgb(245 158 11);
}

</style>