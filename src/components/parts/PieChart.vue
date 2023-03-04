<template>
    <div class="chartBox text-center">
        <Pie :data="this.chart" :options="this.options" :styles="myStyles" />
        <!--<div class="pie-chart-100 top-left"></div>-->
        <div class="font-bold mt-2">あと30人の投票が必要です</div>
    </div>

</template>
<script>
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend, // 凡例
} from 'chart.js'
import { Pie } from 'vue-chartjs'
Chart.register(
  ArcElement,
  Tooltip,
  Legend
  );

export default {
components: {
    Pie ,
  },
  props: {
    termRange: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      height: 500,
      chart: {
        labels: ['賛成', '反対'],
        datasets: [
          {
            data: [30,70],
            backgroundColor: ['rgb(251 191 36)', '#a9a9a9'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
  methods: {
    myRenderChart(startDate, endDate) {
      (this.chart.labels = []), (this.chart.datasets[0].data = []);
      this.$store
        .dispatch('memberRateStore/getMemberRate', { startDate, endDate })
        .then(() => {
          const memberRate = this.$store.state.memberRateStore.memberRate;
          const totalPoint = memberRate.reduce(
            (sum, mr) => sum + mr.sum_point,
            0
          );
          for (const idx in memberRate) {
            this.chart.labels.push(memberRate[idx].member_name);
            this.chart.datasets[0].data.push(
              (memberRate[idx].sum_point / totalPoint).toFixed(4)
            );
          }
          this.renderChart(this.chart, this.options);
        });
    },
  },
  computed:{
    myStyles(){
      return{
        height: `${this.height}px`,
        position:'relative'
      }
    }
  },
  updated() {
    this.renderChart(this.chart, this.options);
  },
};
</script>
<style>
.chartBox {
    position: relative;
    width: 80%;
    margin: 0 auto;
}

.top-left {
  position: absolute;
  top: 0px;
  left: 0px;
}

.pie-chart-100 {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    border: #dce5eb 1px solid;
}

</style>
