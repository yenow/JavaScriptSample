/* rest parameters (ES5방법) */

function checkNum () {
    console.log(arguments);

    const argArray = Array.prototype.slice.call(arguments);
    console.log(argArray);
    console.log(toString.call(argArray));
    const result = argArray.every((v) => { typeof v === "number"})
    console.log(result);
}

const result = checkNum(10,2,3,4,5,"55");

console.log("------------------------------------------------");
/* rest parameters (ES6방법) */

function checkNum2 (...argArray) {  // 여기서 ...을 써주면 나머지 인자값을 배열로받음
    console.log(argArray);
    console.log(toString.call(argArray));
    const result = argArray.every((v) => { typeof v === "number"})
    console.log(result);
}

const result2 = checkNum2(10,2,3,4,5,"55");