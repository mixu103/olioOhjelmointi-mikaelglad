// Tutoriaalista:

const a = 7
let b = a
b = 8
console.log(a, b) // prints 7 8

const c = { course: "TS" }
const d = c
d.course = "JS"
console.log(c, d) // prints {course: 'JS'} {course: 'JS'}

const c = { course: "TS" }
let d = c
d = { course: "JS" }
console.log(c, d) // prints {course: 'TS'} {course: 'JS'}