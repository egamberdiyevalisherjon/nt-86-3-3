// let son = +prompt("Son kiriting");

// console.log(typeof son, son);

// let ism = prompt("Ismizzi kiriting");
// let familiya = prompt("Familiyezzi kiriting");
// let yosh = prompt("Yoshizzi kiriting");

// alert(
//   `Sizning Malumotlaringiz: Ism: ${ism} Familiya: ${familiya} Yosh: ${yosh}`
// );

// console.log(Math.abs(-12));
// console.log(Math.pow(2, 3));
// console.log(Math.min(23, -9, 64, -17, 71, 13, 99, 11, -Infinity));
// console.log(Math.max(23, -9, 64, -17, 71, 13, 99, 11, Infinity));
// console.log(Math.sqrt(121));

// console.log(Math.random()); // min = 0, max = 0.9999999999999
// console.log(Math.random() * 11); // min = 0, max = 10.9999999999989
// console.log(Math.random() * 10 + 1); // min = 1, max = 10.99999999999
// min) 0 * 10 => 0 + 1 => 1
// max) 0.999999999 * 10 => 9.999999 + 1 => 10.9999999

// ceil, floor, round

// let son1 = 2.499999999;
// let son2 = -2.50000;
// let son3 = 2;
// let son4 = -2;

// -- -4 -- -3 -- -2.3456 -- -2 -- -1 -- -0=0 -- 1 -- 2 -- 2.3456 -- 3 -- 4 -- 5--

// ceil => O'nga
// floor => Chapga

// console.log(Math.round(son4));
// console.log(Math.floor(Math.random() * 10) + 1);

// 0 => 0.04999999999, 0.05 => 0.1499999
// 0 => 0 * 10 => 0, 0.05 => 0.1499999
// 0.01 => 0 * 10 => 0.1 => 1, 0.05 => 0.1499999
// 0 * 10 => 0 + 1 => 1,
// 0.9 * 10 => 9 => 9
// 0.949923 * 10 => 9.49923 => 9
// 0.999923 * 10 => 9.99923 => 9
// 0.999999 * 10 => 9.999999 => 10 + 1 => 11

// min 1, max 12
// Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
// console.log(Math.floor(Math.random() * (12 - 1)) + 1);
// 0 * 12 => 0 + 1 => 1
// 0.99999999999999 * 12 => 11.999999989 => 12 + 1 => 12

// min => 50, max => 100

// console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

// 0 * 51 => 0 + 50 => 50
// 0.99999999 * 51 => 50.99999999999949 => 50 + 50 => 100

// MIN => 1, MAX => 10

// let son = Math.floor(Math.random() * 10) + 1;

// let input = prompt("Son o'yladim. [1, 10]. Topib ko'ring.");

// console.log(
//   `Men ${son} sonini o'ylagan edim, Siz ${input} sonini kiritdingiz.`
// );

// let fruits = [
//   "Apple",
//   "Pineapple",
//   "Pear",
//   "Banana",
//   "Cherry",
//   "Kiwi",
//   "Lime",
//   "Strawberry",
// ];

// MIN = 0, MAX = 7

// let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

// console.log(fruits[index]);

// Conditionals

// if, else if, else

// switch, case

// if (2 < 1) {
//   let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

//   console.log(index);
// } else if (3 === 4) {
//   let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

//   console.log(index, "else if dan");
// } else if (2 < 0) {
//   let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

//   console.log(index, "else if 2 dan");
// } else if (2 > 1) {
//   let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

//   console.log(index, "else if 3 dan");
// } else {
//   let index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

//   console.log(index, "else  dan");
// }

// let son = Math.floor(Math.random() * 10) + 1;
// console.log(son);
// let input = +prompt("Son o'yladim. [1, 10]. Topib ko'ring.");

// if (son === input) {
//   document.write("Tori");
// } else if (input > son) {
//   document.write("Siz katta son kiritdingiz");
// } else if (input < son) {
//   document.write("Siz Kichkina son kiritdingiz");
// } else {
//   document.write("Iltimos son kiriting");
// }

// && => AND => VA, || => OR => YOKI

// true && true => true
// false && true => false
// true && false => false
// false && false => false

// true || true => true
// false || true => true
// true || false => true
// false || false => false

let simbollar = ["🍇", "𝟡", "💵", "🪙", "🌞"];

// 0 => 0
// 2 => 300
// 3 => 1000

// min = 0, max = 4

// let index1 = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
// let index2 = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
// let index3 = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

// let simbol1 = simbollar[index1];
// let simbol2 = simbollar[index2];
// let simbol3 = simbollar[index3];

// console.log(simbol1, simbol2, simbol3);

// 3 === 3 => 1000

// if (simbol1 === simbol2 && simbol2 === simbol3) {
//   console.log("Choq! $1000");
// } else if (simbol1 === simbol2 || simbol2 === simbol3) {
//   console.log("Choq! $300");
// } else if (simbol1 === simbol3) {
//   console.log("Choq! $100");
// } else {
//   console.log("Choq! $0");
// }

// ticket => $350
// living => $680
// tour => ¢230

// $ => 11250som
// ¢ => 12864som

// min => 3, max => 30
