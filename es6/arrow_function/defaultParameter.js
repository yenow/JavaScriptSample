/* default parameters */
function sum (v,s) {
    s = s || 1;
    return v * s;
}

console.log(sum(3,10));
console.log(sum(3));

/* default parameters */
function sum2 (v,s=1) {   // 이렇게 인자값에 '=' 으로 값을 줘서 default 값을 정할수 있다.
    return v * s;
}

console.log(sum2(3,10));
console.log(sum2(3));