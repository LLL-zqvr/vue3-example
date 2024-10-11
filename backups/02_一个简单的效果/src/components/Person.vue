<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  // 以下这些写法都是vue2的写法，属于选项式（配置式）API
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "1377888",
    };
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
    changeName() {
      this.name = "zhang_san";
    },
    changeAge() {
      this.age += 1;
    },
  },
};
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
</style>
