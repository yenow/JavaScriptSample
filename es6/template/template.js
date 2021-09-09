/*
* json으로 응답받고, javascript Obect로 변환한 후에 데이터 처리 조작을 한 후 DOM에 추가
* 데이터 + HTML 문자열의 결합이 필요함
* */

const data = [{
    name : 'coffee',
    order : true,
    items : [1,2,3,4]
},{
    name : 'start',
    order : true
}]

// const template = `<div>welcome ${data[0].name} !!</div>`;
// console.log(template);



/* Tagged template literals */
function fn(tags,name,items) {

    console.log(tags);
    console.log(name);
    console.log(items);

    if (typeof items == "undefined") {
        items = "숫자가 없음";
    }

    return (tags[0] + name + tags[1] + items + tags[2]) ;
}
// const template2 = `<div>welcome ${data[0].name} !!</div><h2>숫자목록</h2><div>${data[0].items}</div>`
// console.log(template2);

// const template3 = fn`<div>welcome ${data[0].name} !!</div><h2>숫자목록</h2><div>${data[0].items}</div>`
// console.log(template3);

data.forEach((v) => {
    const template4 = fn`<div>welcome ${v.name} !!</div><h2>숫자목록</h2><div>${v.items}</div>`
    console.log(template4);
});