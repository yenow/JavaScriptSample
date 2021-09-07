// 간단한 객체 만들기
function getObj() {
    let name = "crong";

    const getName = function () {
        return name;
    }
    
    const setName = function (newName) {
        name = newName;
    }

    const printName = function () {
        console.log(name);
    }

    // return {
    //     getName : getName,
    //     setName : setName
    // }

    // 객체 리터럴방식,
    return {
        getName,
        setName,
        name
    }
}

var obj = getObj();
console.log(obj);
console.log(obj.getName());