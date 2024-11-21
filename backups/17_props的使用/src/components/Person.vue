<template>
  <div class="person">
    <!-- {{ a }} -->
    <!-- {{ list }} -->
    <ul>
      <!-- key为索引值，如果不加的话就会默认以0，1，2，3当成索引值，数据更新时容易错乱,加上冒号说明读取id-->
      <li v-for="personObj in list" :key="personObj.id">
        {{ personObj.name }} -- {{ personObj.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
// 这里接收父组件传来的值,通过defineProps接收
// 另：defineProps这种前面有define的为宏函数，其实可以不引入
import { defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";
// defineProps要求是传入数组，且里面是字符串，且要和传入方传入的东西相对应
//接收a，b，但是这样的话打出来的话会显示a，b未定义，则还需要接受并保存下来
// defineProps(["a", "b"]);
// defineProps(["list"]);

/** 
 * 
//接收a等，同时将props保存起来
let x = defineProps(["a", "b", "list"]);
//此时就可以取到a了
console.log(x.a);

*/

//接收list并限制类型,并不是父传什么就接收什么了。如果类型不正确直接标红报错
// defineProps<{ list: Persons }>();

//接收list + 限制类型 + 限制必要性（可给可不给） + 指定默认值
//可传可不传,不传则放入默认值（这里的话前面要import withDefaults）
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: "sfd", name: "sdfs", age: 12 }],
});
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
