// Home1
 'use string';
alert('HW1')
console.log( 'HW1' );



 function pow(a, n) {
      var result = a;


     if(isNaN(a) || isNaN(n)) {
       result = result*a;
   }

    return result;
 }
var a = prompt("Введите число a?", '');

var n = prompt("Введите число n?", '');


 console.log( pow(a, n) );
 alert('Решение смотреть в консоле')

 //Home2
alert('HW2')
 var arr = [];
  for (var i=0; i<5; i++) {
      arr[i] = prompt('Введите имя');
 }

  var avtor = prompt('Введите имя пользователя');
 if ( arr.indexOf(avtor ) != -1) {
    alert(avtor +'вы успешно вошли')
 } else {
     alert('Ошибка, пользователя не существует')
 }


