// Write your solution in this file!
// var driver = {name: "Milen"} 
// function updateDriverWithKeyandValue(driver, key, value){ 
//     const newDriver = {...driver}
//     newDriver[key] = value
//     return newDriver
// }


// function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
//     driver[key] = value 
//     return driver
// }

// function deleteFromdriverByKey(driver,key){
//     const newDriver= {...driver}
//     delete newDriver[key]
//     return newDriver
    
// }

// function destructiveDeleteFromDriverByKey(driver,key){
//     delete driver[key]
//     return driver
// }

var driver = {name : "John"} 
function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = { ...driver }
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newDriver = { ...driver}
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
