// 배열순회하는 방법1
let data = [1,2,undefined,NaN,null,""];

data.forEach(function (value){
    console.log("value is",value);
});


//for in  :  Object를 순회할때 씀, 배열도 Object이기 때문에 작동은함, 하지만 상위에 저장된 객체도 가져와버림
let data2 = [1,2,undefined,NaN,null,""];
Array.prototype.getIndex = function () {};

for (let idx in data2) {
    console.log(data2[idx]);
}


// for of  : 배열을 순회할수 있는 방법, es6에서 나온 새로운 문법
let data3 = [1,2,undefined,NaN,null,""];
Array.prototype.getIndex = function () {};

for (let value of data3) {
    console.log(value);
}