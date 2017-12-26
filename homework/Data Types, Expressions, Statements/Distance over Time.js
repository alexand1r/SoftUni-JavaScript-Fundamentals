function distance(input) {
    let v1 = Number(input[0]);
    let v2 = Number(input[1]);
    let t = Number(input[2]) / 3600;

    let s1 = (v1 * t) * 1000;
    let s2 = (v2 * t) * 1000;

    let distanceOverTime = Math.abs(s1 - s2);
    console.log(distanceOverTime);
}


console.log(distance(['0','60','3600']));