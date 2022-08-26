<template>
  <div>
    <div class="item">
      <!-- 设置插槽 -->
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.item {
  height: 300px;
  border: 1px solid rgb(168, 166, 166);
  margin: 0.25rem;
  background-color: #d7d7ce;
}
</style>