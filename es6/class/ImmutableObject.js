/* Object.assign를 잘 활용하면, 이전 객체를 활용해서 새로운 객체를 반환할수 있다.
*
* 리액트에서는 새로운 객체를 만들었을때 렌더링이 되기때문이 잘 활용할수 있고,
* 이전객체를 따로 저장함으로써 히스토리 관리를 할수 있다 */

const previousObj = {
    name : "ysy",
    lastTime : "12:20"
}

const health = Object.assign({}, previousObj, {
    lastTime : "12:30",
    age : ""
});

console.log("myHealth is ", health);
console.log(previousObj === health);

