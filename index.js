console.clear();
// https://docs.google.com/document/d/1W_PXawhBTbCNqwmNOpisJWkxXnrTUtOV9-owb8Ufdrc/edit
console.log('===== Funkciniai uzdaviniai');

console.log('********* 4 uzduotis ******');

const funkcija4 = number => {
    let answer = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            answer++;
        }
    }
    return answer;
}
console.log(funkcija4(8));

console.log('********* 5 uzduotis ******');

const funkcija5 = () => {
    // const array = [...Array(100)].map(n => Math.floor(Math.random() * (77 - 33 + 1) + 33));

    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * (77 - 33 + 1) + 33))
        
    }

    return array;
}
console.log(funkcija5());