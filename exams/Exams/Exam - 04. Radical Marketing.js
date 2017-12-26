function marketing(input) {
    let subscribers = [];
    let subscribtions = [];
    for (let line of input) {
        if (line.indexOf('-') != -1) {
            subscribtions.push(line);
        } else {
            subscribers.push(line);
        }
    }

    let all = {};
    for (let subscriber of subscribers) {
        if (!all.hasOwnProperty(subscriber)) {
            all[subscriber] = {};
            all[subscriber]['subscribeTo'] = [];
            all[subscriber]['subscribe'] = [];
        }
    }

    for (let subscription of subscribtions) {
        let [firstPerson, secondPerson] = subscription.split('-');
        if (!all.hasOwnProperty(firstPerson))
            continue;
        if (!all.hasOwnProperty(secondPerson))
            continue;
        // console.log(firstPerson);
        // console.log(secondPerson);
        if (!all[firstPerson]['subscribeTo'].includes(secondPerson)
            && firstPerson != secondPerson){
            all[secondPerson]['subscribe'].push(firstPerson);
            all[firstPerson]['subscribeTo'].push(secondPerson);
        }
    }

    let keysSorted = Object.keys(all).sort(function (a, b) {
        if (all[a]['subscribe'].length == all[b]['subscribe'].length) {
           return all[b]['subscribeTo'].length - all[a]['subscribeTo'].length;
        }
        return all[b]['subscribe'].length - all[a]['subscribe'].length;
    });

    console.log(keysSorted[0]);
    for (let s = 0; s < all[keysSorted[0]]['subscribe'].length; s++) {
        console.log(`${s + 1}. ${all[keysSorted[0]]['subscribe'][s]}`)
    }
    // console.log(keysSorted);
    // console.log(all);

    function includes(k) {
        for(var i=0; i < this.length; i++){
            if( this[i] === k || ( this[i] !== this[i] && k !== k ) ){
                return true;
            }
        }
        return false;
    }
}

// marketing([
//     'A',
//     'B',
//     'C',
//     'D',
//     'A-B',
//     'B-A',
//     'C-A',
//     'D-A'
// ]);

marketing([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);