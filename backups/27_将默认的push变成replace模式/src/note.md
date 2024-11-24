一般有两种模式，一个是 push；一个是 replace。push 的话就像是把页面压入栈中，可以控制页面前进后退。replace 就是直接替换页面，无法后退来查看上一个浏览的页面。
而要换成 replace 也很简单，只需要在 app.vue 中的路由结构处加上 replace 属性就行。
