<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <hr />
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一游戏的名字</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from "vue";

// 数据

let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
  { id: "sfsdfs01", name: "王者荣耀" },
  { id: "sfsdfs02", name: "O神" },
  { id: "sfsdfs03", name: "崩铁" },
]);
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
// 方法
function changePrice() {
  car.price += 10;
}
function changeFirstGame() {
  games[0].name = "碧蓝航线";
}
function changeObj() {
  obj.a.b.c = 999;
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
