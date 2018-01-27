// Создание строк

const uppercase = "qwertyuiop[]";
const averageRegister = "asdfghjkl";
const lowercase = "zxcvbnm";
console.log( "uppercase: " + uppercase);
console.log( "averageRegister: " + averageRegister);
console.log("lowercase: " + lowercase);

//Вывод длины строки
const lengthUppercase = uppercase.length;
console.log("lengthUppercase: " + lengthUppercase);
const lengthAverageRegister = averageRegister.length;
console.log("lengthAverageRegister: " + lengthAverageRegister);
const lengthLowercase = lowercase.length;
console.log("lengthLowercase: " + lengthLowercase);
//Поиск первого и последнего елемента
const symbolUppercaseFirst = uppercase.charAt(0);
const symbolUppercaseLast = uppercase.charAt(uppercase.length-1);
const symbolUppercase = "First elements Uppercase: " + symbolUppercaseFirst +";   " + "Last elements: " + symbolUppercaseLast;
console.log(symbolUppercase);

const symbolAverageRegisterFirst = averageRegister.charAt(0);
const symbolAverageRegisterLast = averageRegister.charAt(averageRegister.length-1);
const symbolAverageRegister = "First elements AverageRegister: " + symbolAverageRegisterFirst +";   " + "Last elements: " + symbolAverageRegisterLast;
console.log(symbolAverageRegister);

const symbolLowercaseFirst = lowercase.charAt(0);
const symbolLowercaseLast = lowercase.charAt(lowercase.length-1);
const symbolLowercase = "First elements Lowercase: " + symbolLowercaseFirst +";   " + "Last elements: " + symbolLowercaseLast;
console.log(symbolLowercase);
//Пошук елемента

const seachFirst = "Elements ([): " + uppercase.indexOf("[");
const seachSecond = "Elements (]): " +  uppercase.indexOf("]");

console.log(seachFirst);
console.log(seachSecond);

console.log( "Variables: " + uppercase + " ;  "  + averageRegister + " ;  "  + lowercase );
