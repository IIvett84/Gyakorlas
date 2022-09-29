console.log("Hello Ivett");

let a = 5;
let b = 3;
let c = a+b;
console.log(c);



function filterArra(array, number) {
let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            newArray.push(array[i])
        } 
    }
    return newArray

}
console.log(filterArra([2, 7, 5, -3, 51, Math.PI], 4));

function bubbleSort(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        for (let j = 0; j < Numbers.length; j++) {
            if (Numbers[j] > Numbers[j+1]) {
                let tmp = Numbers[j];
                Numbers[j] = Numbers[j+1];
                Numbers[j+1] = tmp;
            }
        }
    }
    return Numbers
};

let tryMe = [5,3,7,4,24,13,15];
console.log(bubbleSort(tryMe));
