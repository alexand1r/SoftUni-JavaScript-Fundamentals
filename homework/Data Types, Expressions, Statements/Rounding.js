function rounding(input) {
    let [number, precision] = input.map(Number);
    if (precision > 15) precision = 15;
    let precisionNumber = '1';
    for (let i = 0; i < precision; i++){
        precisionNumber += '0';
    }
    precisionNumber = Number(precisionNumber);
    number = Math.round(number * precisionNumber) / precisionNumber;

    console.log(number);
}

rounding(['10.5', '3']);