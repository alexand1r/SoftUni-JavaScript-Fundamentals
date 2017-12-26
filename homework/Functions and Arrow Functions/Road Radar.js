function roadRadar(input) {
    let speed = Number(input[0]);
    let limit = getLimit(input[1]);

    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            return overSpeed <= 20 ?
                'speeding' : overSpeed <= 40 ?
                'excessive speeding' : 'reckless driving';
        }
    }

    function getLimit(zone) {
        switch(zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
}
