<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <LeftMenu/>
      </el-aside>
      <el-container>
        <el-header>
          <RightTop/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LeftMenu from "../../components/LeftMenu.vue";
import RightTop from "../../components/RightTop.vue";

</script>

<style>
.common-layout .el-aside {
  background-color: #555c63;
}

.common-layout .el-header {
  background-color: #f7f7f7;
}

.common-layout .el-main {
  background-color: #dcdcdc;
}

.el-header {
  line-height: 60px;
}

/* 撑满行高100% */
.el-aside, .el-container, .common-layout, #app, body, html {
  height: 100%;
}

LeftMenu, RightTop {
  height: 100%;
}

</style>