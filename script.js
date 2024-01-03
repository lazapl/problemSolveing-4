/*Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length){
    let result = []
    for(let i=1; i<=length; i++){
        console.log(num * i)
    }
    return result
}


console.log(arrayOfMultiples(7, 5)) -> [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) -> [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) -> [17, 34, 51, 68, 85, 102]


---------------------------------------------------------------------------------------------------------*/


/*Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj){
   
    let newArray = []
    let keyObj = Object.keys(obj)
    let keyRes = Object.values(obj)

    newArray.push(keyObj, keyRes)

    console.log(newArray)  
    

}



console.log(keysAndValues({ a: 1, b: 2, c: 3 })) -> [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })) -> [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined })) -> [["key1", "key2", "key3"], [true, false, undefined]]

---------------------------------------------------------------------------------------------------------*/

/*Write a class called Rectangle that represents a rectangular two-dimensional region

class Rectangle {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    toString(){
        return `Rectangle [x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`;
    }


    
}
const myRectangle = new Rectangle(10, 20, 30, 40)
console.log(myRectangle.toString())

output: [x=10, y=20, width=30, height=40]

---------------------------------------------------------------------------------------------------------*/


/*Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

function removeLeadingTrailing(n) {
    let number = parseFloat(n)

    if(isNaN(number)){
        return n
    }
 
    let result = number.toString()

    if(result.includes('.')){
        result = result.replace(/0+$/,'')
        result = result.endsWith('.') ? result.slice(0, -1) : result
    }
    return result
    
}

console.log(removeLeadingTrailing("230.000"));  -> 230
console.log(removeLeadingTrailing("00402"));    -> 402
console.log(removeLeadingTrailing("03.1400"));  -> 3.14
console.log(removeLeadingTrailing("30"));       -> 30


---------------------------------------------------------------------------------------------------------*/

/*Create a function that returns true if two arrays contain identical values, and false otherwise.
function checkEquals(arr1, arr2) {

    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }

    return true
}

console.log(checkEquals([1, 2], [1, 3])) -> false


console.log(checkEquals([1, 2], [1, 2])) -> true


---------------------------------------------------------------------------------------------------------*/