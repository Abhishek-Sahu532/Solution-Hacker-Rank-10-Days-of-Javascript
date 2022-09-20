'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getLetter(s) {

    let letter = '';
    let str = 'aeioubcdfghjklmnpqrstvwxyz';
    let searchResult = str.search(s[0])

    switch (true) {
        case searchResult >= 0 && searchResult <= 4:
            return letter = "A"
            break;
        case searchResult >= 5 && searchResult <= 9:
            return letter = "B"
            break;
        case searchResult >= 10 && searchResult <= 14:
            return letter = "C"
            break;
        case searchResult >= 15 && searchResult <=25:
            return letter = "D"
            break;

        default:
            break;
    }



    return letter
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
