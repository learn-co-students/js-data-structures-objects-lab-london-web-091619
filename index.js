const driver = {}

// returns a new driver object with updated value for key passed in, does not mutate original object
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, { [key]: value });
    return newDriver;
};

// mutates original object and updates key with new value
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
};

// should delete key-value pair, but is not mutating the original driver object
function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
};

// should mutate the original driver and delete key-value pair in it
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};

