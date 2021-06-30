// 특정값이 여러값중 하나일때,  ex) if ( a == 'a' || b = 'b' ...)
function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimal('개'));


// 값에 따라 다른 결과물을 반환해야 할때
function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));