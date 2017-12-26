function distanceIn3D(input) {
    let [a1, b1, c1, a2, b2, c2] = input.map(Number);

    let distance = Math.sqrt(Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2) + Math.pow(c1 - c2, 2));

    console.log(distance);
}

distanceIn3D(['1','1','0','5','4','0']);
