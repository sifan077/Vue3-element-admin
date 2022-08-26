<template>
  <div>
    <el-icon @click="ck">
      <CaretRight v-if="store.state.HomeModules.navBool"/>
      <CaretLeft v-else/>
    </el-icon>
  </div>
</template>

<script setup>
import {
  CaretRight,
  CaretLeft
} from '@element-plus/icons-vue'
// 引用useStore
import {useStore} from "vuex";
// 得到store对象
const store = useStore();

const ck = () => {
  store.commit("SET_NAVBOOL");
}
</script>

<style>

.el-icon {
  font-size: 25px;
}
</style>