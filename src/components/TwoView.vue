<template>
  <div>
    <br>
    <h2>每日访问统计</h2>

    <div id="charttwo" class="two">

    </div>
  </div>
</template>

<script setup>
import {inject, onMounted} from "vue";
import link from "../api/Link.js";

let echarts = inject("echarts");
onMounted(() => {
  let myChart = echarts.init(document.getElementById("charttwo"));
  link("chartDataTwo").then((res) => {
    // console.log(res.data);
    let option = {
      xAxis: {
        type: "category",
        data: res.data.day
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          name: "外卖",
          data: res.data.num.外卖,
          stack: "total",
          smooth: true,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128,255,165)"
              },
              {
                offset: 1,
                color: "rgb(1,191,236)"
              }
            ])
          },
          lineStyle: {
            width: 0
          }
        },
        {
          type: "line",
          name: "快递",
          data: res.data.num.快递,
            stack: "total",
          smooth: true,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(141,176,150)"
              },
              {
                offset: 1,
                color: "rgb(133,174,183)"
              }
            ])
          },
          lineStyle: {
            width: 0
          }
        },
        {
          type: "line",
          name: "一般访客",
          data: res.data.num.一般访客,
            stack: "total",
          smooth: true,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(64,128,134)"
              },
              {
                offset: 1,
                color: "rgb(55,86,66)"
              }
            ])
          },
          lineStyle: {
            width: 0
          }
        },
        {
          type: "line",
          name: "授权访客",
          data: res.data.num.授权访客,
            stack: "total",
          smooth: true,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(125,40,131)"
              },
              {
                offset: 1,
                color: "rgb(199,167,193)"
              }
            ])
          },
          lineStyle: {
            width: 0
          }
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

.two {
  height: 300px;

}
</style>