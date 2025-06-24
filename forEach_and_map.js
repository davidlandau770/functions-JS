// שאלה 1
// function doubleValues(arr){
//     let newArr = [];
//     arr.forEach(item => {
//         newArr.push(item)
//     });
//     return newArr
// }
// console.log(doubleValues([1,2,3,4,5,6,7,8]));

// שאלה 2
// function showFirstAndLast(arr){
//     let newArr = [];
//     arr.forEach(item => {
//         if (item % 2 == 0) {
//             newArr.push(item);
//         }
//     });
//     return newArr
// }
// console.log(showFirstAndLast([1,2,3,4,5,6,7,8]));

// שאלה 3
// function showFirstAndLast(arr){
//     let newArr = [];
//     arr.forEach(item => {
//         if (typeof item === "string" && item === arr[0] || item === arr[arr.length - 1]) {
//             newArr.push(item);
//         }
//     });
//     return newArr
// }
// console.log(showFirstAndLast(["1",2,3,4,"5",6,7,"8"]));

// שאלה 4
// function vowelCount(string){
//     let obj = {};
//     for (const i in string) {
//         if (obj[string[i]]) {
//             obj[string[i]] += 1;
//         } else {
//             obj[string[i]] = 1
//         }
//     }
//     return obj
// }
// const obj = vowelCount("1Ahkaa8sdKJ8dh");
// console.log(obj);

// שאלה 5
// function capitalize(string){
//     let newStr = "";
//     for (i in string) {
//         newStr += string[i]?.toString().toUpperCase();
//     }
//     return newStr
// }
// const str = capitalize("1Ahkaa8sdKJ8dh");
// console.log(str);

// שאלה 6
// function shiftLetters(string){
//     let ascii = "";
//     let newStr = "";
//     for (const i in string) {
//         ascii = string[i]?.charCodeAt() - 1;
//         if (ascii === 64) {
//             newStr += "Z"
//         } else if (ascii === 96) {
//             newStr += "z"
//         } else if (ascii === 47) {
//             newStr += "9"
//         } else {
//             newStr += String.fromCharCode(ascii);
//         }
//     }
//     return newStr
// }
// const str = shiftLetters("Ahkaa8sdKJ8dh");
// console.log(str);

