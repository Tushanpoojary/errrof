function doubleArray(arr, callback) {
    return arr.map(callback);
}


function doubleValue(num) {
    return num * 2;
}


const numbers = [1, 2, 6, 9, 5];
const doubled = doubleArray(numbers, doubleValue);

console.log(doubled); 
