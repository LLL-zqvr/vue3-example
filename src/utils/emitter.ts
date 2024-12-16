import mitt from "mitt";

// 调用mitt得到emitter,emitter能：绑事件，触发事件
const emitter = mitt();

//绑定事件(on)
emitter.on("test1", () => {
  console.log("test1被调用了");
});
emitter.on("test2", () => {
  console.log("test2被调用了");
});

//触发事件(emit)
//1.两秒后触发
setTimeout(() => {
  emitter.emit("test1");
  emitter.emit("test2");
}, 2000);

//2.每隔一秒钟都触发一次
setInterval(() => {
  emitter.emit("test1");
  emitter.emit("test2");
}, 1000);

//解绑事件（off）

setTimeout(() => {
  emitter.off("test1");
}, 3000);

// 一次性解绑所有事件(all,clear)
setTimeout(() => {
  emitter.all.clear();
}, 3000);

//暴露emitter
export default emitter;
