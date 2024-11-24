# vue3-example

记录一下在 B 站跟着尚硅谷的 vue3。

### Development Environments

开发环境/框架及版本

VS Code
Node.js ^20
Vue ^3.4

### Notes

本人笔记在此~

- [这里是 vit 的笔记](vite-note.md)
- 从 27 小节后，就有意识地将每一小节的笔记或者说明都整理到了对应小节文件中，详见 backups 文件中的代码<(￣︶￣)↗[GO!]

### Update

#### 2024/11/24

集中式状态（数据）管理=>主要是针对组件中的共享数据=> vue3 主要使用 pinia

#### 2024/11/22

- 生命周期

- 路由就是一组 key-value 的对应关系,关键在于路径的变化

  1. 导航区
  2. 请来路由器
  3. 制定路由的具体规则（什么路径，对应着什么组件）
  4. 形成一个一个的【？？？.vue】Class.vue Subject.vue

- 路由组件：靠路由的规则渲染出来的。通常放在 pages 或 views 文件夹

  ```
  routes:[
    {path:'/demo',component:Demo}
  ]
  ```

- 一般组件：程序员亲手写标签实现的`<Demo/>`，一般组件通常存放在`components`文件夹。

- 通过点击导航，视觉效果上“消失” 了的路由组件，默认是被**卸载**掉的，需要的时候再去**挂载**。

- 路由工作模式

  - `history`模式

  优点：`URL`更加美观，路径中不带有`#`，更接近传统的网站`URL`。

  缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有`404`错误。

  ```
  const router = createRouter({
    history: createWebHistory(), //history模式
    /******/
  });
  ```

- `hash`模式

  优点：兼容性更好，因为不需要服务器端处理路径。

  缺点：`URL`带有`#`不太美观，且在`SEO`优化方面相对较差。

  ```
  const router = createRouter({
    history: createWebHashHistory(), //hash模式
    /******/
  });
  ```

- to 的两种写法

  ```
  <!-- 第一种：to的字符串写法 -->
  <router-link active-class="active" to="/home">主页</router-link>
  ```

  ```
  <!-- 第二种：to的对象写法 -->
  <router-link active-class="active" :to="{path:'/home'}">Home</router-link>


  ```

#### 2024/11/19

watch 监视的只有四个：一个函数，返回一个值；ref；一个响应式对象（如 reactive）；或者由这些东西组成的数组

#### 2024/11/13

1.

```
     let person = reactive({
       name: "张三",
       age: 18,
     });
     let { name, age } = toRefs(person);
```

toRefs 将 person 中的所有 value 都能解构取出来并变成响应式数据。  
 `let nl = toRef(person,'age')`这是取 person 对象中的 age 解构拿出来并变成响应式对象。

2. `v-model`可双向绑定数据。如：

```

姓：<input type="text" v-model="firstName" /><br />
名：<input type="text" v-model="lastName" /><br />

```

3. computed 计算属性

#### 2024/10/24

- 使用原则：
  > 1. 若需要一个基本类型的响应式数据，必须使用`ref`。
  > 2. 若需要一个响应式对象，层级不深，`ref`、`reactive`都可以。
  > 3. 若需要一个响应式对象，且层级较深，推荐使用`reactive`。

#### 2024/10/13

- vue2 中，`data(){return {x:900}}`中的数据就已经是响应式的了(如 x),但 vue3 不同。要想让数据变成响应式的，要用 ref()包裹住需要变成响应式的数据（数据是基本类型数据），并且引用响应式数据的地方使用的不只是"数据"，而是：数据.value
- ref=======> 可以定义：基本类型、对象类型的响应式数据
  reactive==> 只能定义：对象类型的响应式数据
- ref 处理对象时，数值记得加上 `.value`

#### 2024/10/12

- setup 和 Options API 的关系
  Q: setup 和 data,methods(vue2)之间有什么关系，既 setup 和传统的配置项可不可以同时写，如果冲突了以谁为主？
  A:
  - `Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。(因为 setup 执行度很高，早在传统配置项之前就创建出来了)
  - 但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）。
  - 如果与`Vue2`冲突，则`setup`优先。

#### 2024/10/14

setting->extention->Auto Insert: Dot Value 勾选后当使用 ref 后 vscode 会自动补充`.value`

#### 2024/10/13

- ` npm i vite-plugin-vue-setup-extend -D`安装插件，并添加，使得`<script lang="ts" setup name="1234">`中的 name 生效。如下：
  ![img1](./img/image1.png)

#### 2024/10/10

- 编写了 Person 组件。
- 在谷歌中下载了 vue 扩展程序(尚硅谷 05)

#### 2024/10/5

1. 创建一个 vue3 项目。
2. 编写了 App 组件。
