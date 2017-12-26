function vladkosNotebook(input) {
    // let pattern = /^\s*(.+)\s*\|\s*(name|age|loss|win)\s*\|\s*([a-zA-Z ]+)$/g;

    let colors = {};
    for (let line of input) {
        let pattern = /(.+)\|(name|age|loss|win)\|(.+)/g;

        let match = pattern.exec(line);
        if (match) {
            let color = match[1];
            let action = match[2];
            let attribute = match[3];

            if (!colors.hasOwnProperty(color)) {
                colors[color] = {};
                colors[color].wins = 1;
                colors[color].losses = 1;
                colors[color].opponents = [];
            }

            if (action == 'age') {
                colors[color].age = attribute;
            } else if (action == 'win') {
                colors[color].wins += 1;
                colors[color].opponents.push(attribute);
            } else if (action == 'loss') {
                colors[color].losses += 1;
                colors[color].opponents.push(attribute);
            } else if (action == 'name') {
                colors[color].name = attribute;
            }

        }

    }
    for (let color in colors) {
        if (!colors[color].hasOwnProperty('name') || !colors[color].hasOwnProperty('age')) {
            delete colors[color];
        } else if (colors[color].hasOwnProperty('age') && Number(colors[color].age) < 0 && Number(colors[color].age) > 50) {
            delete colors[color];
        }
    }

    for (let color in colors) {
        colors[color].rank = (colors[color].wins / colors[color].losses).toFixed(2);
        delete colors[color].wins;
        delete colors[color].losses;
    }

    // let keysSorted = Object.keys(colors).sort(function(a,b){return colors[a]-colors[b]});
    for (let color in colors) {
        colors[color].opponents.sort(function (a, b) {
            return a.localeCompare(b);
        });
    }

    let keysSorted = Object.keys(colors).sort(function (a, b) {
        return a.localeCompare(b);
    });

    let sortedObject = {};
    keysSorted.forEach(function (el) {
        sortedObject[el] = colors[el];
        sortedObject[el] = {};
    });

    for (let color in colors) {
        let propertiesSorted = Object.keys(colors[color]).sort(function (a, b) {
            return a.localeCompare(b);
        });
        propertiesSorted.forEach(function (el) {
            sortedObject[color][el] = colors[color][el];
        });
    }

    console.log(JSON.stringify(sortedObject));

}

vladkosNotebook(["purple|age|99","red|age|44","blue|win|pesho","blue|win|mariya","purple|loss|Kiko","purple|loss|Kiko","purple|loss|Kiko","purple|loss|Yana","purple|loss|Yana","purple|loss|Manov","purple|loss|Manov","red|name|gosho","blue|win|Vladko","purple|loss|Yana","purple|name|VladoKaramfilov","blue|age|21","blue|loss|Pesho"]);