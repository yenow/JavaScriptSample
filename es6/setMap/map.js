// map은 key:value
// weakMap과 map의 다른점은 가비지 컬렉션이 작동하냐 마냐의 차이

let wm = new WeakMap();
let myFun = function () {}

wm.set(myFun,0);

console.log(wm.get(myFun));