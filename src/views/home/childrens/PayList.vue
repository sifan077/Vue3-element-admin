<template>
  <div class="content">
    <div class="inputDom">
      <el-input v-model="input" placeholder="请输入收款金额"/>
      <el-button type="success" @click="makeQrcode">生成二维码</el-button>
    </div>

    <div class="qrcode" ref="qrcodeDom"></div>
  </div>
</template>

<script setup>
import {nextTick, ref} from "vue";
import QRCode from "qrcodejs2-fix"
let input = ref("");

let qrcodeDom = ref(null);


let makeQrcode = () => {
  qrcodeDom.value.innerHTML = "";
  nextTick(() => {
    new QRCode(qrcodeDom.value, {
      text: input.value,// 生成的二维码内容
      colorDark: "#000",//二维码的颜色
      colorLight: "#fff",//二维码的背景色
    });
  })
}
</script>

<style scoped>
.qrcode {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.inputDom {
  width: 400px;
  margin: 0 auto;
}
</style>