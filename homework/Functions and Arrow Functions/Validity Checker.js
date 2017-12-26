function validityChecker(input) {
    let [x1,y1,x2,y2] = input.map(Number);

    let firstCheck = isValid(x1,y1,0,0);
    let secondCheck = isValid(x2,y2,0,0);
    let thirdCheck = isValid(x1,y1,x2,y2);

    if (Number.isInteger(firstCheck)) {
        console.log('{' + x1 + ', ' + y1 + '} to {0, 0} is valid');
    } else {
        console.log('{' + x1 + ', ' + y1 + '} to {0, 0} is invalid');
    }

    if (Number.isInteger(secondCheck)) {
        console.log('{' + x2 + ', ' + y2 + '} to {0, 0} is valid');
    } else {
        console.log('{' + x2 + ', ' + y2 + '} to {0, 0} is invalid');
    }

    if (Number.isInteger(thirdCheck)) {
        console.log('{' + x1 + ', ' + y1 + '} to {' + x2 + ', ' + y2 + '} is valid');
    } else {
        console.log('{' + x1 + ', ' + y1 + '} to {' + x2 + ', ' + y2 + '} is invalid');
    }

    function isValid(n1, n2, n3, n4) {
        return Math.sqrt(Math.pow(n3 - n1, 2) + Math.pow(n4 - n2, 2));
    }
}