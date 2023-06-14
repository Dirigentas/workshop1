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
        console.log(answer);
    }

    return answer;
}

console.log(funkcija4(8));