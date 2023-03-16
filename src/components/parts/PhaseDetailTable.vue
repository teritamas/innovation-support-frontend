<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-yellow dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-4 py-3"></th>
          <th scope="col" class="px-4 py-3 font-bold">シード</th>
          <th scope="col" class="px-4 py-3 font-bold">アーリー</th>
          <th scope="col" class="px-4 py-3 font-bold">ミドル</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            class="p-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            調達金額
          </th>
          <td class="p-2.5">
            {{ phaseDetail("seed").procurementTokenAmount }}千円
          </td>
          <td class="p-2.5">
            {{ phaseDetail("early").procurementTokenAmount }}千円
          </td>
          <td class="p-2.5">
            {{ phaseDetail("middle").procurementTokenAmount }}千円
          </td>
        </tr>
        <tr class="border-b bg-beige dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="p-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            投票数
          </th>
          <td class="p-2.5">{{ phaseDetail("seed").minVoterCount }}票以上</td>
          <td class="p-2.5">{{ phaseDetail("early").minVoterCount }}票以上</td>
          <td class="p-2.5">{{ phaseDetail("middle").minVoterCount }}票以上</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            class="p-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            賛成率
          </th>
          <td class="p-2.5">{{ phaseDetail("seed").minAgreementCount }}以上</td>
          <td class="p-2.5">
            {{ phaseDetail("early").minAgreementCount }}以上
          </td>
          <td class="p-2.5">
            {{ phaseDetail("middle").minAgreementCount }}以上
          </td>
        </tr>
        <tr class="border-b bg-beige dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="p-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            投票期間
          </th>
          <td class="p-2.5">{{ phaseDetail("seed").limitDate }}日</td>
          <td class="p-2.5">{{ phaseDetail("early").limitDate }}日</td>
          <td class="p-2.5">{{ phaseDetail("middle").limitDate }}日</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
import { phaseStatus } from "@/plugins/proposalPhase";
export default {
  name: "phaseStatus",
  data() {
    return {
      showContentsType: this.$store.state.showContentsType,
      proposalPhase: String,
    };
  },
  computed: {
    phaseDetail: function () {
      return function (selectPhase) {
        return phaseStatus(selectPhase);
      };
    },
  },
};
</script>
  