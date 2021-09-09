
setTimeout(function () {
    console.log('settimeout');
},1000)


setTimeout(() => {
    console.log('settimeout');      // arrow function
},2000)


/* 함수의 this */
const myObj = {
    runTimeout() {
        setTimeout(function () {
            // console.log(this == window);   // bind를 하지 않는다면 this는 window이다
            this.printData();
        }.bind(this),200) ;
    },
    printData () {
        console.log("hi data");
    }
}

myObj.runTimeout()


/* 화살표 함수의 this */
const myObj2= {
    runTimeout() {
        setTimeout( () => {
            console.log(this == window);    // this가 가르키는건 실행타이밍의 컨텍스트를 가르킴
            this.printData();
        },200) ;
    },
    printData () {
        console.log("hi data");
    }
}

myObj2.runTimeout()

/* 일반함수는 콜백함수가 이벤트 큐에 있다가 나중에 실행되서 this가 window를가르킴
* arrow는 그 컨텍스트를 유지한다 */