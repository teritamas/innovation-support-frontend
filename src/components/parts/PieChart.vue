<template>
  <div class="chart-box text-center">
    <Pie
      :data="this.chart"
      :options="this.options"
      :styles="myStyles"
      style="max-height: 400px"
    />
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend, // 凡例
} from "chart.js";
import { Pie } from "vue-chartjs";
Chart.register(ArcElement, Tooltip, Legend);

export default {
  components: {
    Pie,
  },
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    backgroundColors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        responsive: true,
      },
    };
  },
  methods: {},
  computed: {
    myStyles() {
      return {
        position: "relative",
      };
    },
    chart() {
      return {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.backgroundColors,
          },
        ],
      };
    },
  },
};
</script>
<style>
.chart-box {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
</style>
