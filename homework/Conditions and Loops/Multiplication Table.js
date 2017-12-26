function multiplicationTable(input) {
    let n = Number(input[0]);

    let table = `<table border='1'>\n`;

    for (let row = 1; row <= n + 1; row++) {
        let j = 'x';
        if (row != 1) j = row - 1;
        table += `\t<tr><th>${j}</th>`;
        for (let col = 1; col <= n; col++) {
            if (row == 1)
                table += `<th>${col * row}</th>`;
            else
                table += `<td>${col * (row - 1)}</td>`;
        }
        table += `</tr>\n`;
    }

    table += `</table>`;

    console.log(table);
}

multiplicationTable(['6']);