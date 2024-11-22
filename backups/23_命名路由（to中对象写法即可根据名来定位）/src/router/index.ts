// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";

//引入一个一个可能要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
//第二步：创建路由器
//router是路由器，routers是被它管理的路由，是数组

const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    //一个一个的路由规则
    {
      //name:"路由名"
      name: "zhuye",
      //   path: "路径",
      //   component: 对应的组件,
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      //   path: "路径",
      //   component: 对应的组件,
      path: "/news",
      component: News,
    },
    {
      name: "guanyu",
      //   path: "路径",
      //   component: 对应的组件,
      path: "/about",
      component: About,
    },
  ],
});

//将写好的路由暴露出去
export default router;
//注意，此时还要在main.ts处引用路由，这才能真正地使用路由
