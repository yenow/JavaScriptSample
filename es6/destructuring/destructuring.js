// 배열
let data = ["crong","honux","jk","jinny"];
let [one,,three,] = data;

console.log(one);
console.log(three);


// 객체
let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}
let {name : myName, age : myAge} = obj;   //  객체의 값을 뽑아서 다른 변수이름으로 사용가능
console.log(myName);
console.log(myAge);


// json 형식
var news = [
    {
        "title" : "sbs",
        "time" : 6,
        "newList" : ["내용","내용2","내용3"]
    },
    {
        "title" : "mbs",
        "time" : 10,
        "newList" : ["mbs내용","mbs내용2","mbs내용3"]
    }
];
let [,{title,time}] = news;
console.log(title);
console.log(time);