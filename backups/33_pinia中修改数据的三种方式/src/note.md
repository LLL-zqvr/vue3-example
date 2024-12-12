请看 Count.vue
// 第一种修改方式,直接摸到数据，这在 vuex 中是不被允许的，但是 pinia 支持
// countStore.sum += 1;

//第二种修改方式，patch 意思为碎片，表示的是只修改之中的相应属性，多个数据同时发生变化时，最好用 patch，因为它是整合成 patch 一次性地修改，会减少修改次数
/\*_ countStore.$patch({
sum: 888,
school: "啊？",
});
_/

//第三种，使用 actions（自定义方法），另：需要在 store 中的 count 声明 actions
countStore.increment(n.value);
