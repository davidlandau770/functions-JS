// שאלה 1
// function createCounter() {
//     let count = 0;
//     return function counter() {
//         count++;
//         return count;
//     }
// }
// const returnCounter = createCounter()
// console.log(returnCounter());
// console.log(returnCounter());
// console.log(returnCounter());

// שאלה 2
// function secretHolder(secret){
//     const obj = {
//         getSecret: () => secret,
//         setSecret: (set) => {
//             secret = set;
//         }
//     }
//     return obj;
// }
// const mySecret = secretHolder("abc");
// console.log(mySecret.getSecret());
// mySecret.setSecret("123");
// console.log(mySecret.getSecret());

// שאלה 3
// function buildFunctions() {
//     const arr = [];
//     for (let i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }
// const funcs = buildFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();
