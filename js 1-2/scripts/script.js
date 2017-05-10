// Home1
 'use string';
alert('HW1')
console.log( 'HW1' );

 for (i=0; i=isNaN(a); i++) {
     var a = prompt("Введите число a?", '');
 }
for (i=0; i=isNaN(n); i++) {
    var n = prompt("Введите число n?", '');
}

 function pow(a, n) {
      var result = a;

    for (var i = 0; i < n; i++) {
       result = result*a;
   }

    return result;
 }



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


