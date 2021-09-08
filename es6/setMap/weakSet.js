// weakSet
// : 참조를 가지고 있는 객체만 저장이 가능하다.
// : 가비지 컬렉터가 작동해서, 만약 값안에 객체가 null값이 된다면 그 값은 Set에서 사라짐

let arr = [1,4,2,3];
let arr2 = [5,6,7,8];
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
// ws.add(111);

arr = null;

console.log(ws);
console.log(ws.has(arr));  // arr이 null이 되었으므로 가비지컬렉터의 대상이 되어서 없는 값이됨
console.log(ws.has(arr2));

