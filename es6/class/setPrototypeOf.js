/* setPrototypeOf : 객체 생성시 프로토타입 지정해줄수 있음
*
* 결국, Object.create/assign 이나 setPrototypeOf나 객체나 모듈을 만드는 표준적인 방법임 */

const healthObj = {
    showHealth : function () {
        console.log("오늘은 운동시간 : " + this.healthTime);
    }
}

const myHealth = {
    healthTime : "12:30",
    name : "ysy"
};

const newObj = Object.setPrototypeOf(myHealth, healthObj);  // myHealth 객체에 healthObj prototype 추가

console.log("myHealth is ", myHealth);
console.log("newObj is ", newObj);
console.log(myHealth.showHealth());     // prototype에 추가된 함수 실행
