<template>
  <div>
    <br>
    <h2>车位统计</h2>

    <div id="chartfour" class="four">

    </div>
  </div>
</template>

<script setup>
import {inject, onMounted} from "vue";
import link from "../api/Link.js";

let echarts = inject("echarts");
onMounted(() => {
  let myChart = echarts.init(document.getElementById("chartfour"));
  link("chartDataFour").then((res) => {
    // console.log(res.data);
    let option = {
      xAxis: {
        type: "category",
        data: res.data.day,
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      series: [
        {
          type: "bar",
          data: res.data.num.一般用户,
          stack: "total"
        },
        {
          type: "bar",
          data: res.data.num.月租用户,
          stack: "total"
        },
        {
          type: "bar",
          data: res.data.num.特殊用户,
          stack: "total"
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

.four {
  height: 300px;

}
</style>