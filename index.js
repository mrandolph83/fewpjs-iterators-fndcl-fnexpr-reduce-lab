const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(passedIn, battery){
    return passedIn + battery
}, 0);
// Code your solution here
