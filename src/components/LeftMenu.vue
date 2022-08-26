<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :collapse="store.state.HomeModules.navBool"
      @open="handleOpen"
      @close="handleClose"
      router
  >
    <template v-for="(v) in router.options.routes[1].children" :key="v.path">

      <!-- 带下拉的导航-->
      <el-sub-menu :index="v.path" v-if="v.children">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>{{ v.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="val in v.children" :key="val.path">
          <el-menu-item :index="val.path">{{ val.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <!-- 不带下拉的导航-->
      <el-menu-item :index="v.path" v-else>
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>{{ v.meta.title }}</span>
        <!--        <span>{{ 1 }}</span>-->
      </el-menu-item>
    </template>

  </el-menu>
</template>

<script setup>
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'
import {useStore} from "vuex";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();
onMounted(() => {
  // console.log(router.options.routes[1].children)
})
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>

</style>