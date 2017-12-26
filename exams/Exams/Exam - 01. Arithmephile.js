function arithmephile(input) {
    input = input.map(Number);
    let allMultiplications = [];

    for (let num = 0; num < input.length; num++) {
        if (input[num] >= 0 && input[num] < 10) {
            let currentMultiplication = 1;
            let clone = input.slice(0);
            // console.log(clone);
            if (input[num + 1]) {
                let neededNums = clone.slice(num + 1, num + input[num] + 1);
                for (let i = 0; i < neededNums.length; i++) {
                    // console.log(neededNums[i]);
                    currentMultiplication *= neededNums[i];
                }
                allMultiplications.push(currentMultiplication);
            }
            // console.log(currentMultiplication);
        }
    }
    // console.log(allMultiplications);
    var largest = Math.max.apply(Math, allMultiplications);
    console.log(largest);
}

// arithmephile(["10","20","2","30","44","123","3","56","20","24"]);
arithmephile(["100","200","2","3","2","3","2","1","1"]);