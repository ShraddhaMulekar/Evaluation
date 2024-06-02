
const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

let arr = extractSubArray(animals);
console.log(arr); 

function extractSubArray(newarr){
    return newarr.slice(3,7);
}