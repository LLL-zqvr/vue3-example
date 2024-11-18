<template>
  <div class="person">
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});

//直接解构出来的属性并不是响应式的
// let { name, age } = person;

//使用toRefs()后解构出来的对象才变成变为响应式
//toRefs() 将reactive对象变成ref对象
let { name, age } = toRefs(person);

function changeAge() {
  age.value += 1;
}

function changeName() {
  name.value += "~";

  console.log(name.value, person.name);
}
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
