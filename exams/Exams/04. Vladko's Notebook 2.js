function vladkosNotebook(data) {
    let restoredNotebook = {};
    for (let line of data) {
        let [color, type, value] = line.split('|');
        if (!restoredNotebook.hasOwnProperty(color)) {
            restoredNotebook[color] = {
                age: undefined,
                name: undefined,
                opponents: [],
                wins: 1,
                losses: 1
            };
        }

        let currentColor = restoredNotebook[color];
        if (type == 'win') {
            currentColor.opponents.push(value);
            currentColor.wins++;
        } else if (type == 'loss') {
            currentColor.opponents.push(value);
            currentColor.losses++;
        } else if (type == 'age') {
            currentColor.age = value;
        } else if (type == 'name') {
            currentColor.name = value;
        }
    }

    let output = {};
    for (let color of Object.keys(restoredNotebook).sort()) {
        let currentData = restoredNotebook[color];
        if (currentData.age != undefined && currentData.name != undefined) {
            output[color] = {
                age: currentData.age,
                name: currentData.name,
                opponents: currentData.opponents.sort(),
                rank: (currentData.wins / currentData.losses).toFixed(2)
            }
        }
    }

    console.log(JSON.stringify(output));
}