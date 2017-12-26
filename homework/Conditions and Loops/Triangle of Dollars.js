function triangleOfDiamonds(input) {
    let line = '';
    for (let col = 1; col <= Number(input[0]); col++) {
        console.log('$'.repeat(col));
    }
}

triangleOfDiamonds(['3']);