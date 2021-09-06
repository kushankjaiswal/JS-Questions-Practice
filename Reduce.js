//Reduce Method

// Simple Array Addition
const ans = [5, 1, 2, 3, 10].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
})

ans

// Value's of Array of objects addition
let sum = [{ 'x': 10 }, { 'x': 2 }, { 'x': 5 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, 0)

sum

//Flatten the Array 
let FlatArray = [[1, 5], [18, 9], [4, 9, 10, 15]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])

FlatArray

//Counting instances(frequency) of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Tiff']

const countedNames = names.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue] =  accumulator[currentValue] + 1
    }
    else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

countedNames