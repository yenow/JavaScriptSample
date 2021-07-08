// spread가 가진 뜻은 펼치다. 퍼뜨리다  →  즉, 이 문법은 객체 혹은 배열을 펼칠수 있다는것이다.
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,   // slime 객체의 프로퍼티를 모두 가져온다.
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 배열에서도 사용가능하다
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]

//--------------------------------------------------------------------//
console.log('--------------------------------------------------------------------');
// rest : 비구조화 할당에서 쓰인다
const { color, ...rest } = purpleCuteSlime;  // ※ 꼭 명칭이 rest일 필요는 없다.
console.log(color);
console.log(rest);

// ※ 주의사항
// const numbers = [0, 1, 2, 3, 4, 5, 6];
// const [..rest, last] = numbers;  // 이런식으로 ... 문법이 앞에 나와서는 안된다.

//--------------------------------------------------------------------//
console.log('--------------------------------------------------------------------');
// 함수 파라미터에서의 rest
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
