<template>
  <div class="container">
    <div class="item-left">
      <itemPage>
        <template #main>
          <OneView/>
        </template>
      </itemPage>

      <itemPage>
        <template #main>
          <TwoView/>
        </template>

      </itemPage>
    </div>

    <div class="item-right">
      <itemPage>
        <template #main>
          <ThreeView/>
        </template>
      </itemPage>
      <itemPage>
        <template #main>
          <FourView/>
        </template>
      </itemPage>
    </div>
  </div>
</template>

<script setup>


import ItemPage from "../../../components/ItemPage.vue";
import OneView from "../../../components/OneView.vue";
import TwoView from "../../../components/TwoView.vue";
import ThreeView from "../../../components/ThreeView.vue";
import FourView from "../../../components/FourView.vue";
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
  background-color: cyan;
  display: flex;
}

.container .item-left, .item-right {
  flex: 1;
}

</style>