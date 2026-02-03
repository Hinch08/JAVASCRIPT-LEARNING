//TASK 69
let colors = ['red','green','blue']
colors[1]='pink'
console.log(colors)
let lengthofColors = colors.length
console.log(lengthofColors)
colors.pop(colors)
console.log(colors)

//ASSIGNMENT 1
//let arr1 = [1,2,3]
//let arr2 = [4,5,6]
//let arr3 = arr1.concat(arr2)
//console.log(arr3)
//arr3.shift()
//console.log(arr3)

//ASSIGNMENT 2
let source_array = ['a','b','c','d','e','f','g','h','i']
let extracted_array = source_array.slice(2,4)
console.log(extracted_array)
source_array.splice(2,2,'x','y','z')
console.log(source_array)