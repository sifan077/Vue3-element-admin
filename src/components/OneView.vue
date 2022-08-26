<template>
  <div>
    <br>
    <h2>人数统计</h2>

    <div id="chartone" class="one">

    </div>
  </div>
</template>

<script setup>
import {inject, onMounted, reactive} from "vue";
import link from "../api/Link.js";



let xData = reactive([]);
let yData = reactive([]);

let echarts = inject("echarts");
onMounted(() => {
  let myChart = echarts.init(document.getElementById("chartone"));
  link("chartDataOne").then((res) => {
    xData = res.data.map(v => v.title);
    yData = res.data.map(v => v.num);
    // console.log(xData)
    // console.log(yData)
    let option = {
      title: {
        text: 'ECharts 入门'
      },
      tooltip: {},
      legend: {
        data: ['人数']
      },
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '人数',
          type: 'bar',
          data: yData
        }
      ]
    };
    myChart.setOption(option);
  });
});


</script>

<style scoped>
h2 {
  height: 0.6rem;
  color: white;
  line-height: 0.6rem;
  text-align: center;
  font-size: 15px;
}

.one {
  height: 300px;

}


</style>