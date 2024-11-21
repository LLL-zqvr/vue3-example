<template>
  <!-- 给person传两个值，一个是哈哈，一个嘿嘿 -->
  <!-- 加冒号“：”就说明是表达式了，不加的话会被当成字符串处理，但是ref是特例，不用加 -->
  <!-- <person a="哈哈" b="嘿嘿" :list="personList" /> -->
  <person a="哈哈" b="嘿嘿" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { reactive } from "vue";
import { type Persons } from "./types";
// 需求，父中有一堆人，传给子去展示
//reactive是可以传泛型的，所以可以把泛型放到reactive那里
let personList = reactive<Persons>([
  { id: "sfds1", name: "张三", age: 19 },
  { id: "sfds2", name: "李四", age: 19 },
  { id: "sfds3", name: "王五", age: 39, x: "sdfs" },
]);
</script>
