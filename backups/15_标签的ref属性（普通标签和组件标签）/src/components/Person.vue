<template>
  <div class="person">
    <h1>中国</h1>
    <!-- 这里不用id是因为id是唯一的，如果这个组件中用了id这个属性，而App.vue中也用了id，则会产生冲突; 而ref不同，每个文件中的ref都是独立的 -->
    <h2 ref="title2">哈尔滨</h2>
    <h2>琳达启动！</h2>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
// defineExpose导出，引用了之后可以声明person.vue的哪些ref等可以暴露出去
import { ref, defineExpose } from "vue";

// 创建一个title2，用于创建ref标记的内容
let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title2.value);
}

defineExpose({ a, b, c });
</script>

<!-- scoped:局部样式，加上之后，接下来写的样式就不会对其他文件生效了（比如此处用了person，如果其他文件中也有person这个属性就会很灾难，加上scoped之后能保持文件间的隔离性） -->
<!-- <style> -->
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>
