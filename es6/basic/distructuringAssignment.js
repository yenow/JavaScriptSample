const value = {
    a : 'a',
    b : 'b',
    c : 'c'
}

const {a,b,c, d = 'd'} = value; // 기본값 설정 가능  

console.log(a + b + c + d);