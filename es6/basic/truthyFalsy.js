// truthy, Falsy

 function print(person) {

     if (!person) {
         console.log('Falsy테스트');
         return;
     }
     console.log(person.name);
 }

 const person = null;
 print(person);

// undefined와 null은 Falsy한 값이다. Falsy한 값 앞에 느낌표를 붙이면 true로 전환된다
// Falsy값을 true로전환, ! 를 꼭 붙여줘야한다.
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);    // Not A Number 라는 의미, parseInt라는 함수를 사용할 때 볼수 있음.
