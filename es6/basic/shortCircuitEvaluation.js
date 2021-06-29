// 단축 평가 논리 계산법

// · 문제 상황 : 잘못된 파라미터를 넘겨서 에러가 발생하는 상황
/*
const dog = {
    name: '멍멍이'
};

function getName(animal) {
    return animal.name;
}

const name = getName();  // undefined 참조
console.log(name);
*/

// ① && 연산자로 코드 단축시키기

const dog = {
    name: '멍멍이'
};

// 기본적인 방법
function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

//  코드 단축  방법
function getName2(animal) {
    return animal && animal.name;
    // · 코드 단축 방법이 작동하는 이유 : A && B 연산자를 사용하게 될 때에는 A가 Truthy 한
    //    값이면 B가 결과 값이 되고, A가 Falsy한 값이면 결과는 A가 됩니다.
}

const name = getName();
const name2 = getName2();
console.log(name);
console.log(name2);


// && 코드 단축 : A && B 연산자를 사용하게 될 때에는 A가 Truthy 한값이면 B가 결과 값이 되고, A가 Falsy한 값이면 결과는 A가 됩니다.
console.log('------------&& 코드 단축-----------');
console.log('hello' && 'bye'); // bye
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
console.log(true && 'hello'); // hello

// A가 falsy한 값들
console.log(false && 'hello'); // false
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0

// ② || 연산자로 코드 단축시키기 : || 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 유용하게 사용할 수 있다.
console.log('' || 'hello'); // hello
console.log(0 || 'hello'); // hello
console.log(1 || 'hello'); // 1
console.log(1 || 1); // 1
