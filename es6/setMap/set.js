let mySet = new Set();
console.log(toString.call(mySet));

// Set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용

mySet.add("crong");

if(mySet.has("crong")) {
    console.log("crong이 있음");
}