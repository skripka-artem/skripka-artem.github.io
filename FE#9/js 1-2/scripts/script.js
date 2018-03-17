// Home1
 'use string';
alert('HW1')
console.log( 'HW1' );
var a = prompt(" Введите a?", '');
var n = prompt("Введите n?", '');

function pow(a, n) {

    var result = a;


    if(isNaN(a) || isNaN(n)) {
        return('Помилка введення одне в одному або двох полях було введено не число')
    }
        for (var i = 0; i < n; i++) {
            result = result * a;
        }


    return result;

}
    console.log( pow(a, n) );



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


