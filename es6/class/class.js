// ES6 class

/* ES5에서 사용했던 객체만드는 방법 */
function BeforeHealth (name) {
    this.name = name;

}

BeforeHealth.prototype.showHealth = function () {
    console.log(this.name + "님 안녕하세요");
}

const h = new BeforeHealth("crong");
h.showHealth();

/* ES6 class 문법
*  하지만, 결국 function으로 구현되어있는건 맞다 (위의 코드와 동일함)*/
class Health {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth () {
        console.log(this.name + "님 안녕하세요");
    }
}

const myHealth = new Health("sinyoung","20201129");
myHealth.showHealth();