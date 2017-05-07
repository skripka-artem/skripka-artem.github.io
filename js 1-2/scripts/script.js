// Home1
// 'use string';
 // function pow(a, n) {
 //     var result = a;
 //
 //     for (var i = 0; i < n; i++) {
 //        result = result*a;
 //    }
 //
 //    return result;
 // }
 //
 // var a = prompt("a?", '');
 // var n = prompt("n?", '');
 // console.log( pow(a, n) );


//Home2
var arr = [];
 for (var i=0; i<5; i++) {
     arr[i] = prompt('Введите имя');
 }

 console.log(arr);
if ( arr.indexOf( prompt('Введите имя пользователя') ) != -1) {
    alert('вы успешно вошли')
} else {
    alert('Ошибка, пользователя не существует')
}


