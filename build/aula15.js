"use strict";
function fsoma(...numeros) {
    let s = 0;
    for (let numero of numeros) {
        s += numero;
    }
    return s;
}
console.log(fsoma(10, 20, 30, 40));
