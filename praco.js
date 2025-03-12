const charCount = {}

const server = "server";
const arr = ['a', 'b', 'c'];
const num = [2, 3, 1, 4, 5];
const mapNum = num.flatMap((x) => [x,x * 2])
let sum = num.reduce(times)
const small = num.filter(greater)
const newNum = num.map(timesArray)
let text = "";

function output(str) {
    return str.split('').reverse().join('');
}

 console.log(output(server))


 function reverse(arr1) {
   return arr1.reverse()
    //arr.sort()
 }
 reverse(arr)
 console.log( arr)

 function sortNum() {
    num.sort(function(a,b){return (a-b)})
 }
 sortNum()
console.log(`the lowest value is ${num[0]}`)
 
function addArray(value) {
    text += value + 1 + "\n";
}

function timesArray(value) {
   return value * 2;
}

function times(value, int) {
    return value + int;
 }

function greater(value) {
    return value < 4;
}

num.forEach(addArray);
console.log(text)
console.log(newNum)
console.log(small)
console.log(sum)
console.log(mapNum)



