// 구조화 할당
const sampleValue = {
    a : 'a',
    b : 'b',
    c : 'c'
}
const {a,b,c, d = 'd'} = sampleValue; // 기본값 설정 가능
console.log(a + b + c + d);

//--------------------------------------------------------------------//
// 비구조화 할당시 이름 바꾸기
const {a : a1, b : b1, c : c1} = sampleValue; // 기본값 설정 가능
console.log(a1 + b1 + c1);

//--------------------------------------------------------------------//
// 배열 비구조화 할당
const sampleArray = [1,2];
const [one, two] = sampleArray;
console.log(one + two);


//--------------------------------------------------------------------//
// 깊은 값 구조화 할당
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

// 비구조화 할당을 2번이상하는 방법
const {
    state: {
        information: { name, languages }
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
};

console.log(extracted);

//--------------------------------------------------------------------//
// object-shortHand 문법 : key이름으로 선언된 값이 존재하면, 바로 매칭시켜줌
const name1 = 'name';
const languages1 = 'languages';
const value1 = 'value';

const extracted1 = {
    name1,
    languages1,
    value1
}

console.log(extracted1.name1);
console.log(extracted1.languages1);
console.log(extracted1.value1);
