// Object assign 메서드

const healthObj = {
    showHealth : function () {
        console.log("오늘은 운동시간 : " + this.healthTime);
    }
}

const myHealth = Object.create(healthObj);  // Object로 만듬 (prototype을 가지고 있음)
myHealth.healthTime = "11:20";
myHealth.name = "ysy";
myHealth.showHealth();

console.log(myHealth);
console.log(toString.call(myHealth));

console.log("******************************************************");

const myHealth2 = Object.assign(Object.create(healthObj),{
    name : "ysy",
    healthTime : "12:20"
})

console.log(myHealth2);