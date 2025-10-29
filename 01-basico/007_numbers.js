// Curso JavaScript: 7. Números (Numbers)
// https://youtu.be/o4p6p1z2P5A

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b, c, d);
console.log(c.toFixed(1));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + d);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
