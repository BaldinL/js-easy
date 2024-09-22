// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
   let arr = [...str];
    let newarr =[];
   for(let i =0;i<str.length;i++){
    if(arr[i]==='a'||arr[i]==='e'||arr[i]==='i'||arr[i]==='o'||arr[i]==='u'||arr[i]==='A'||arr[i]==='E'||arr[i]==='I'||arr[i]==='O'||arr[i]==='U'){
        newarr[i]='*';
    }else{
        newarr[i]=arr[i];
    }
   }
return newarr.join('');
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;