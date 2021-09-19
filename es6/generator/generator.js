/* generator
* - 사용자의 요구에 따라 다른 시간간격으로 여러 값을 반환할 수 있으며
* 내부상태를 관리할 수 있는 함수
* yield와 next를 통해 일시적으로 정지 될 수도 있고, 다시 시작될 수도 있다.
* */

function* generatorFunction () {
    yield 42;
}

const generator = generatorFunction();
console.log(generator === generator[Symbol.iterator]()); // 함수의 반환값은 iterable 프로토콜과 iterator 프로토콜을 따르는 객체

console.log(Symbol)
console.log(Symbol.iterator);


/* 모든 yield를 처리하기위해 그만큼의 next를 사용해야하는가 ?  >> 답은 정해져있지 않다
   >> next를 일일이 호출하지 않고, progammitically하게 호출하게 하려면, 재귀호출을 하면된다  */


/* ⚫ 제너레이터 함수에서의 return
*   - return은 수행되고 있는 이터레이터를 종료시킴
*   - return 뒤에오는 값은 IteratorResult 객체의 value 프로퍼티에 할당되며, done 프로퍼티는 true가 할당된다.
* */

function* sampleGFunction() {
    return 42;
}

console.log("************************* return ****************************");
const generator2 = sampleGFunction();
console.log(generator2.next()); // { value: 42, done: true }
console.log(generator2.return(43)); // 인자값을 반환하고 종료 generator 종료


console.log("************************* sampleGFunction2 ****************************");

function* sampleGFunction2() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const generatorSample = sampleGFunction2();
console.log(generatorSample.next());
console.log(generatorSample.next());
console.log(generatorSample.next());
console.log(generatorSample.next());
