"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40, 50];
console.log(fsoma2(numer));
