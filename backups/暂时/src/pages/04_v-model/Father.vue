<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上，双向绑定 -->
    <!-- <input type="text" v-model="username" /> -->

    <!-- 上述实现是由以下底层代码完成的： :value="username"实现数据到页面；@input="username = $event.target.value"实现页面到数据,<HTMLInputElement>是为了断言这确实是个html的元素，不然会有警告-->
    <!--
    <input
      type="text"
      :value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    />
    -->

    <!-- 自定义的组件，怎么实现v-model呢？ -->
    <!-- v-model用在组件标签上 -->
    <!-- :modelValue="username" @update:modelValue="username = $event"实现从数据到页面；其中，update:modelValue是一个整体！！是一个时间名，只不过是这个事件名中带着冒号而已！！以下是底层 -->
    <!--
    <AtlindaInput
      :modelValue="username"
      @update:modelValue="username = $event"
    />
    -->
    <!-- 但是程序员的话直接用v-model就行了，在自定义组件处处理了很多东西，详见AtlindaInput.vue；所以其实实际生产开发中，这些都由UI组件库的作者来操心，而程序员则可以直接用 -->
    <AtlindaInput v-model="username" />
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from "vue";
import AtlindaInput from "./AtlindaInput.vue";
//数据
let username = ref("zhangsan");
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
