//forEach, map, sort, filter, reduce
/*let oldarray= [1,2,3,4,5]
let newArray= []

oldarray.forEach(e => newArray.push(e*2));
console.log(newArray)

newArray = array.map(e => e*2);
console.log(newArray)

let array= [1,6,4,9,2,11,22,35,48]
let array2= ['a', 'B', 'A', 'b']
array.sort((a,b)=>a-b)
console.log(array)

//generic higher order function
function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

//create prototype
Array.prototype.filterFunction= function (callback) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}
const arr=[1,2,3,4,5];
arr.filterFunction

// Function containing logic for filtering out odd numbers
function isOdd(x) {
    return x % 2 != 0;
}

// Function containing logic for filtering out even numbers
function isEven(x) {
    return x % 2 === 0;
}

// For filtering out odd numbers
filterFunction(arr, isOdd)
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers
filterFunction(arr, isEven)
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]

arr.filterFunction(e=>e > 5).filterFunction(e=> e < 10)*/

/*const numbers= [2, 4, 6, 8, 10];
const result= numbers.reduce((acc, item)=>{
    return acc= acc+item;
}, 1)
console.log(result);*/

/*const strings = ['the', 'code', 'bunnies'];
const result = strings.reduce((acc, item) => {
    return acc = acc + item;
}, '')
console.log(result.slice(0,result.length-1));
console.log(result.slice(result.length-5));*/

const objects = [{name: 'Matthew', age: 23, eyeColor: 'blue'},{name: 'Beto', age: 38, eyeColor: 'brown'}, {name: 'Lev', age: 8}];
const result = objects.reduce((acc, item) => {
    return acc += item.age;
}, 0)
console.log(result);

