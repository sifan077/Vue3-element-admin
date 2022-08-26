<template>
  <div>
    <el-table :data="tableData.listData.slice((currentPage4-1)*pageSize4,pageSize4*currentPage4)" style="width: 100%">
      <el-table-column prop="id" label="编号"/>
      <el-table-column prop="title" label="楼盘名称"/>
      <el-table-column prop="type" label="类型"/>
      <el-table-column prop="num" label="门牌号"/>
      <el-table-column prop="hometype" label="房子类型"/>
      <el-table-column prop="name" label="姓名"/>
    </el-table>

    <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="currentPage4"
        :total="tableData.listData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />

    <!--修改的弹出框-->
    <UpdateDialog/>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import link from "../../../api/Link.js";
import UpdateDialog from "../../../components/UpdateDialog.vue";
// 设置分页需要的参数与方法
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const handleSizeChange = (val) => {
  pageSize4.value = val;
}
const handleCurrentChange = (val) => {
  currentPage4.value = val;
}
// 获取表格数据
let tableData = reactive({
  listData: []
});
onMounted(() => {
  link("/userList").then((res) => {
    tableData.listData = res.data;
    console.log(tableData.listData)
  });
});

</script>

<style scoped>

</style>