<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('send-toy', toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref, onMounted } from "vue";
let toy = ref("奥特曼");

//声明事件
const emit = defineEmits(["send-toy"]);

//实现挂载三秒后触发‘haha’自定义事件
onMounted(() => {
  setTimeout(() => {
    emit("send-toy");
  }, 3000);
});
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
