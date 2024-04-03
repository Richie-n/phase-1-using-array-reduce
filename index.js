const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(sum,0)

function sum(accumulator, value){
    return accumulator + value
}
console.log(totalBatteries)