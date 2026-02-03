let numbers = [1,2,3,4,5,6,7,8,9,10,"eleven","false"];
console.log(numbers);
console.log(typeof numbers);

//ACCESSING ARRAYS
console.log(numbers[5]);
console.log(numbers.at(5));
console.log(numbers.at(-1));

//MODIFYING OR UPDATING ARRAYS
numbers[0] = 'one';
console.log(numbers)

//DETERMINING THE NUMBER OF ITEMS IN AN ARRAY
//LENGTH OF ITEMS IN AN ARRAY
console.log(numbers.length);

//
let numbers2 = numbers.slice(0,5)
console.log(numbers2);

//ADDING ITEMS ON ARRAYS
let names = ["David","Hillary","John"];
names.push("Mary","Ken")
console.log(names)

//UNSHIFT METHOD
names.unshift("Jane","Jack")
console.log(names);

//REMOVING ITEMS FROM AN ARRAY
names.pop();
console.log(names);

//SHIFT METHOD
names.shift();
console.log(names);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2)
console.log(arr3)

//includes method
let letters = ['w','d','h','l','g']
console.log(letters.includes('w'))

//SPLICE METHOD.
let y = [1,2,3,4,5,6,7,8,9]
y.splice(2,2)
console.log(y)

y.splice(2,0,100,200)
console.log(y)

y.splice(4,2,300,400)
console.log(y)

//NESTED ARRAYS
let x = [1,2,3,[5,6,[7,8,[9,10]]]]
console.log(x[3][2][2][1])

//SLIDE 69 AND 70
