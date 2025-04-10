<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>父有一辆车：{{ car }}</h4>
    <h4 v-show="toy">子给的玩具:{{ toy }}</h4>
    <!-- 对于子来说是给玩具给父亲，所以是sendToy -->
    <Child :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "./Child.vue";
import { ref } from "vue";
//数据
let car = ref("奔驰");
let toy = ref("");
//方法
function getToy(value: string) {
  toy.value = value;
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
