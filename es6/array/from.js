function addMark() {
    // let newData = [];
    // for (let i = 0; i < arguments.length; i++) {
    //     newData.push(arguments[i] + "!");
    // }

    // arguments는 가짜배열이라서 map을 못씀
    let newArray = Array.from(arguments);   // from으로 arguments를 배열로 만들어줌
    let newData = newArray.map(function (v) {
        return v + "!";
    })

    console.log(newData);
}


addMark(1,2,3,4,5);