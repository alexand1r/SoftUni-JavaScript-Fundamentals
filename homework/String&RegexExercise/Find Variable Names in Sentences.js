function findVariable(input) {
    let pattern = /\b([_])([a-zA-Z0-9]+)\b/g;
    let text = input[0];
    let result = [], match;
    while (match = pattern.exec(text)) {
        result.push(match[2]);
    }
    console.log(result.join(','));
}

findVariable(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);