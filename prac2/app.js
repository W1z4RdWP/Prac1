//                                 Задание 1
// -----------------------------------------------------------------------
// const arr = [];
// const arr1 = new Array();
// const arr2 = Array.from({ length: 3 }, (_, index) => index + 1);

// console.log(arr2)

//                                 Задание 2
// -----------------------------------------------------------------------
// const arr = [1,2,3,4,5,6];
// console.log(arr[4]);
// arr[4] = 10;
// console.log(arr[4]);

//                                 Задание 3
// -----------------------------------------------------------------------
// const arr1 = new Array(5);
// console.log("Длина массива: ",arr1.length)

//                                 Задание 4
// -----------------------------------------------------------------------
// const arr = [1,2,3,4,5,6];
// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i]);
// }

// //                                 Задание 5
// // -----------------------------------------------------------------------
// const arr = [1,2,3,4,5,6];
// const arr2 = [7,6,8,9];
// let arr3 = arr+','+arr2;
// console.log(arr3);

// //                                 Задание 6 (+ Задание 5)
// // -----------------------------------------------------------------------
// arr3=arr3.split(',');
// console.log(arr3)

// arr3.pop();
// console.log(arr3);

// //                                 Задание 7 + Задание 6 (+ Задание 5)
// // -----------------------------------------------------------------------
// arr3.pop();
// console.log(arr3);
// //                                 Задание 8
// // -----------------------------------------------------------------------
// arr3.unshift('new el');
// console.log(arr3);

// //                                 Задание 9
// // -----------------------------------------------------------------------
// let currentDate = new Date();
// console.log(currentDate);
// //                                 Задание 10 + 9
// // -----------------------------------------------------------------------
// var options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
// console.log(currentDate.toLocaleString("ru", options));

//                                 Задание 11
// -----------------------------------------------------------------------

// function multiplyRandNums(randNum1, randNum2){
//     result = randNum1 * randNum2;
//     return `${randNum1} * ${randNum2} = ${result}`;
// }
// let randNum1 = Math.floor(Math.random()*51);
// let randNum2 = Math.floor(Math.random() * 51);
// console.log(multiplyRandNums(randNum1,randNum2));