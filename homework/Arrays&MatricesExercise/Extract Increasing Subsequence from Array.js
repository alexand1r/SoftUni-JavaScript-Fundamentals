function extractIncreasing(input) {
    let result = [input[0]];
    let current = Number(input[0]);
    for (var i = 1; i < input.length; i++) {
        if (Number(input[i]) >= current) {
            result.push(input[i]);
            current = Number(input[i]);
        }
    }
    console.log(result.join('\n'));
}

extractIncreasing(['3','4','2','7']);