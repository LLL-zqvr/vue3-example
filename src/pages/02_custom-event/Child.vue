<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('sendToy', toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref, onMounted } from "vue";
let toy = ref("奥特曼");
// 子声明自定义事件
const emit = defineEmits(["sendToy"]);
</script>

<style scoped>
.child {
  margin-top: 10px;
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
