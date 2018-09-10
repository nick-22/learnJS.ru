// 1
// var a =2;
// var b = 5;
// var c=4;
// var x = 0;
// function calcD() {
//     // a = 100;
//     x = b*b - 4*a*c;
//     alert(x);
// }
//
// calcD();
//
// alert(x);
// alert(a);

// 2

// function calcD() {
//     a = 2;
//     b = 3;
//     c = 4;
//     alert(b*b-4*a*c);
// }
//
// calcD();

// 3

// function calcD(a, b, c) {
//     var x = b*b-4*a*c;
//     alert(x+=1);
// }
//
// calcD(2, 3, 4);

// 4

// function calcD(a, b, c) {
//     alert(b*b-4*a*c);
// }
//
// calcD(2, 3, 4);

// 5

// function calcD(a, b, c) {
//     return b*b-4*a*c;
// }
//
// var test = calcD(2, 3, 4);
// alert(test+=1);

// 6

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   else if (age < 3) { //позже добавил выход из функции
//       return;
//   }
//   else {
//     return confirm('Родители разрешили?');
//   }
// }
//
// var age = prompt('Ваш возраст?');
//
// if (checkAge(age)) {
//   alert( 'Доступ разрешен' );
// }
// // else if (checkAge(age) === undefined ) { //позже добавил, чтобы заценить пустой return
// //     alert( 'Проверка на undefined' );
// // }
// else {
//   alert( 'В доступе отказано' );
// }

// 7 то же, что и 6, но через if/else

// var age = prompt('Ваш возраст?');
//
// if (age > 18) {
//     alert('Доступ разрешен');
// }
// else if(!age) {
//     alert('Ввод отменен');
// }
// else {
//     var allow = confirm('Родители разрешили?');
//     if (allow) {
//         alert('Доступ разрешен');
//     }
//     else {
//         alert( 'В доступе отказано' );
//     }
// }
