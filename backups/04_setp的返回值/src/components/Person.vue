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
  setup() {
    // console.log('@@',this)打出来就可以发现，setup中的this其实是undefind,vue3已经弱化this了。
    //数据原来是写在data中的，此时的name，age，tel都不是响应式的数据，不能随着值的变化，用到值的地方的值也跟着变
    //数据
    let name = "张三";
    let age = 18;
    let tel = "124243";
    //方法
    function changeName() {
      name = "zhang-san"; //注意：这样修改name，页面是没有变化的
      console.log(name); //name的值确实改了，但是name不是响应式的
    }
    function changeAge() {
      age += 1; //同上
    }
    function showTel() {
      alert(tel);
    }
    //将数据，方法交出去，模板中才可以使用
    // return里前两个返回的是对象，{name:name,age:age}，只是省略了
    //return返回的可以是对象，函数等。
    return { name, age, changeName, changeAge, showTel };
    //return返回的甚至可以是渲染函数，如：
    // return () => "哈哈";这么写的话页面渲染出来的就是内容"哈哈"了，与上面的template无关了
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
