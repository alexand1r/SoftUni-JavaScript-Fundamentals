function rosettaStone(input) {
    let templateLength = input.shift();
    templateLength = Number(templateLength);
    let templateMatrix = [];

    for (let i = 0; i < templateLength; i++) {
        templateMatrix.push(input.shift().split(' ').map(x => Number(x)));
    }

    let realMatrix = input.map(e => e.split(' ').map(Number));

    let clone = realMatrix.slice(0);
    let cutMatrix = [];
    for (let i = 0; i < clone.length; i += 1) {
        cutMatrix.push(clone[i].splice(i, templateLength));
    }
    console.log(cutMatrix);

    console.log(realMatrix);
    console.log(templateMatrix);
}

rosettaStone([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);