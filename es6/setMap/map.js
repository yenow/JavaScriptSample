/* map은 key:value
   weakMap과 map의 다른점은 가비지 컬렉션이 작동하냐 마냐의 차이 */

let wm = new WeakMap();
let myFun = function () {}

wm.set(myFun,0);

console.log(wm.get(myFun));


/* WeakMap 활용
   : class객체에 private한 멤버변수를 만들수 있음 (WeakMap이 전역공간에 있기때문에 이 부분은 단점이 될수 있을까?) */

// 일반적인 클래스의 사용
// function Area(height, width) {
//     // this.height = height;
//     // this.width = width;
// }
//
// Area.prototype.getArea = function () {
//     return this.height * this.width;
// }


function Area(height, width) {
    wm.set(this, {height,width});   // 이렇게 WeakMap을 활용해서 현재 객체의 변수를 넣어줌
}

Area.prototype.getArea = function () {
    const {height,width} = wm.get(this);
    return height * width;
}

let myArea = new Area(10,20);
console.log(myArea.getArea());
console.log(myArea.height);