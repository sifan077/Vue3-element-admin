<template>
  <el-dialog v-model="store.state.HomeModules.dialogFormVisible" title="请输入信息">
    <el-form :model="form" :label-width="formLabelWidth">
      <el-form-item label="楼盘名称">
        <el-input v-model="form.title" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="户主">
        <el-input v-model="form.name" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
          <!-- 绑定函数 -->
        <el-button @click="toggleDialog(0)">取消</el-button>
        <el-button type="primary" @click="toggleDialog(1)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>

import {reactive} from "vue";

import {useStore} from "vuex";
import link from "../api/Link.js";
import {ElMessage} from "element-plus";

const formLabelWidth = '140px';
const form = reactive({
  name: "",
  title: "",
});

const store = useStore();

const toggleDialog = (num) => {
  if (num === 1) {
    const temp = store.state.HomeModules.uplistData;
    link("/userList/" + temp.id, "PATCH", form).then((res) => {
      console.log(res.data);
        ElMessage.success("修改成功");
    });
  }
  store.commit("DIALOG");
}

</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}


.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>