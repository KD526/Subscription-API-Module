const charCount = {}

const server = "server"
const arr = ['a', 'b', 'c']
const num = [2, 3, 1, 4, 5]

function output() {
     server.split('').reverse().join('');
}

output()
 console.log(server)


 function reverse(arr1) {
   return arr1.reverse()
    //arr.sort()
 }

 console.log( reverse(arr))

 function sortNumRandom() {
    num.sort(function(){return (0.5 - Math.random())})
 }
 sortNumRandom()
console.log(`the highest value is ${num[0]}`)
 


