const charCount = {}

const input = "server";
const arr = ['a', 'b', 'c'];
const num = [2, 3, 1, 4, 5];
const mapNum = num.flatMap((x) => x * 2)
let sum = num.reduce(times)
const small = num.filter(greater)
const newNum = num.map(timesArray)
let text = 0;

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
//console.log(`new array is ${newArr}`)

//counting recurring letters in a string
function checkChar() {
    for (const char of input ) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
}
checkChar()
//console.log(charCount);

function output(str) {
    return str.split('').reverse().join('');
}

 //console.log(output(input))

 function reverse(arr1) {
   return arr1.reverse()
    //arr.sort()
 }
 reverse(arr)
 //console.log( arr)

 function sortNum() {
num.sort(function(a,b){return a-b})}
 sortNum()
//console.log(`the lowest value is ${num[0]}`)
 
function addArray(value) {
    text += value;
}

function timesArray(value) {
   return value * 2;
}
function multiply(callback) {
    let x = 5;
   return callback(x)
}
console.log(multiply(timesArray))

function times(value, int) {
    return value + int;
 }

function greater(value) {
    return value < 4;
}
function getRandom() {
    return Math.floor(Math.random()* 10);
}

const old_arr = [1, 2, 3, 4]
const new_arr = []
let strng = ''

for (let i = 0; i < old_arr.length; i++ ) {
    new_arr[i] = old_arr[i] + i;
    strng += new_arr[i] + "\n"
}

const someArr = [];

for (let i = 0; i < 100; i++) {
    let k = Math.floor(Math.random() * 101)

    someArr[i] = k;
}
//console.log(someArr);
//console.log(strng);
// console.log(getRandom())
// num.forEach(addArray);
// console.log(num);
// console.log(text)
// console.log(newNum)
// console.log(small)
// console.log(sum)
 console.log(mapNum)



