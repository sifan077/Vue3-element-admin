<template>
  <div>
    <br>
    <h2>报修统计</h2>

    <div id="chartthree" class="three">

    </div>
  </div>
</template>

<script setup>
import {inject, onMounted} from "vue";
import link from "../api/Link.js";

let echarts = inject("echarts");
onMounted(() => {
  let myChart = echarts.init(document.getElementById("chartthree"));
  link("chartDataThree").then((res) => {
    // console.log(res.data);
    let option = {
      legend: {top:"bottom"},
      series: [
        {
          type: "pie",
          data: res.data,
          radius: [10, 100],
          center: ["50%", "45%"],
          roseType: "area"
        },
      ]
    }
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

.three {
  height: 280px;

}
</style>