# Vue3 笔记

### 一些常用知识

- `Vite` 项目中，`index.html` 是项目的入口文件，在项目最外层。
- 加载`index.html`后，`Vite` 解析 `<script type="module" src="xxx">` 指向的`JavaScript`。
- `Vue3`**中是通过**`createApp` 函数创建一个应用实例。

#### 2024/10/12

- setup 和 Options API 的关系
  Q: setup 和 data,methods(vue2)之间有什么关系，既 setup 和传统的配置项可不可以同时写，如果冲突了以谁为主？
  A:
  - `Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。(因为 setup 执行度很高，早在传统配置项之前就创建出来了)
  - 但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）。
  - 如果与`Vue2`冲突，则`setup`优先。

#### 2024/10/13

- vue2 中，`data(){return {x:900}}`中的数据就已经是响应式的了(如 x),但 vue3 不同。要想让数据变成响应式的，要用 ref()包裹住需要变成响应式的数据（数据是基本类型数据），并且引用响应式数据的地方使用的不只是"数据"，而是：数据.value
