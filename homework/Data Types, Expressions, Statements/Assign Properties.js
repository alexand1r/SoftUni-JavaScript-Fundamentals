function assignProperties(input) {
    let [key1, value1, key2, value2, key3, value3] = input;
    let object = {};
    object[key1] = value1;
    object[key2] = value2;
    object[key3] = value3;
    console.log(object);
}

assignProperties(['1','a','2','b','3','c']);