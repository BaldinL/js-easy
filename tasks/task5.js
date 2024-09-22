// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  let count=0;
  let arr =[...str];
  for(let i = 0;i<str.length;i++){
    if(arr[i]===char){
      count++;
    }
  }

  return count;
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o'));
console.log(countOccurrences("banana", 'a'));

module.exports = countOccurrences;