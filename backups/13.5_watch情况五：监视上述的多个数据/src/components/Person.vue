<template>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";

//数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});

//方法
function changeAge() {
  person.age += 1;
}

function changeName() {
  person.name += "~";
}

function changeC1() {
  person.car.c1 = "dfs";
}

function changeC2() {
  person.car.c2 = "fsd";
}

function changeCar() {
  person.car = { c1: "雅迪", c2: "艾玛" };
}

//监视，情况五：监视上述的多个数据
//需求，既要监视第一台车，又要监视人名
//直接用数组包起来就完事
watch(
  [() => person.name, () => person.car.c1],
  (newValue, oldValue) => {
    console.log("person.car变化了", newValue, oldValue);
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
