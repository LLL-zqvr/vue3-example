<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
//数据
let person = ref({
  name: "张三",
  age: 18,
});

//方法
function changeAge() {
  person.value.age += 1;
}
function changName() {
  person.value.name += "~";
}
function changePerson() {
  person.value = { name: "lisi", age: 90 };
}
//监视
//情况2.1：监视【ref】定义的【对象类型】数据,监视的是对象的地址值，若想监视对象内部的属性的变化，就要手动开启深度监视
// watch(person, (newValue, oldValue) => {
//   console.log("person变化了!", newValue, oldValue);
// });
//watch第一个参数：被监视的数据
//watch第二个参数：监视的回调
//watch第三个参数：配置对象（deep，immediate（立即监视，刚渲染时就会监视一次）等等）
//开启深度监视，使用第三个参数
watch(
  person,
  (newValue, oldValue) => {
    console.log("person变化了!", newValue, oldValue);
  },
  { deep: true }
);
</script>

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
