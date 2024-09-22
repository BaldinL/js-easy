// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
   let finStr=[];
   for(let i =0;i<str.length;i++){
     finStr[i]= str[str.length-(i+1)];
    }
  const newStr = [];
  const numbers = '0123456789';
  for(let i = 0; i < finStr.length; i++) {
    if (!numbers.includes(finStr[i])) {
      newStr.push(finStr[i]);
    }
  }
  console.log(newStr.join());
  return newStr.join('');
}
reverseWithoutNumbers("hello123world456");
module.exports = reverseWithoutNumbers;