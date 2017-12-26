function addRemoveElements(input) {
    let initial = 1;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add'){
            result.push(initial);
            initial++;
        } else {
            result.pop();
            initial++;
        }
    }
    if (result.length <= 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }
}