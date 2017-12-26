function gradsToRadians(input) {
    let grads = Number(input[0]);
    let degrees = (grads / 400) * 360;
    if (degrees >= 360)
        degrees = degrees % 360;
    else if (degrees <= 0)
        degrees = 360 + degrees;

    console.log(degrees);
}

gradsToRadians(['-50']);