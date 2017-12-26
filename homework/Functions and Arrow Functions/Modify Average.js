function modifyAverage(input) {
    let n = Number(input[0]);

    let result = count(n);
    console.log(result);

    function count(n) {
        let countSmaller = 0;
        let countBigger = 0;
        var str = n.toString();
        for (var i = 0; i < str.length; i++) {
            let digit = parseInt(str.charAt(i), 10);
            if (digit >= 5) {
                countBigger += 1;
            } else { countSmaller += 1; }
        }
        if (countBigger > countSmaller) {
            return n;
        } else {
            n += '9'; n = Number(n);
            return count(n);
        }
    }

}

modifyAverage([101]);