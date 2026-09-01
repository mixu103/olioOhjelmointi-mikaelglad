"use strict";
// Tutoriaalista:
const a = 7;
let b = a;
b = 8;
console.log(a, b); // prints 7 8
const c1 = { course: "TS" };
const d1 = c1;
d1.course = "JS";
console.log(c1, d1); // prints {course: 'JS'} {course: 'JS'}
const c2 = { course: "TS" };
let d2 = c2;
d2 = { course: "JS" };
console.log(c2, d2); // prints {course: 'TS'} {course: 'JS'}
//# sourceMappingURL=sidetasks.js.map