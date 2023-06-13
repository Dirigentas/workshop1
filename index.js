console.clear();
//Math.floor(Math.random() * (max - min + 1) + min);

console.log('===== 1 uzduotis');
//sukurti masyva, kurio ilgis yra 10 - 30
//reiksmes nuo 1 iki 10 imtinai

let = wallet = [];
const masyvoIlgis = Math.floor(Math.random() * (30 - 10 + 1) + 10);

console.log(masyvoIlgis);

for (let i = 0; i < masyvoIlgis; i++) {
    wallet.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}
console.log(wallet);

console.log('===== 2 uzduotis');

let sum = 0;

for (let index = 0; index < masyvoIlgis; index++) {
    sum += wallet[index]
}
console.log(sum);