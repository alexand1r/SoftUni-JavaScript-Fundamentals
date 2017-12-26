function printEveryNthElement(input) {
    let num = Number(input.pop());
    let result = [];
    for (let i = 0; i < input.length; i += num) {
        result.push(input[i]);
    }
    console.log(result.join('\n'));
}