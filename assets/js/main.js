//Lev1_1_js-veriefung_loops_for-loop_hello-world

for (let i = 0; i < 11; i++) {
     console.log('Hallo World ' + i);
}

//Lev1_2_js-veriefung_loops_for-loop-array
// Aufgabenstellung

// Erstelle Array mit den Zahlen 0-10 mit Hilfe einer Schleife.

// Wenn wir mit Arrays arbeiten, müssen wir das Array initialisieren (var numArray = [];).
// Verwende den Befehl push() im Schleifenkörper.
// Gib numArray in der Konsole aus.

// Hinweise

// JavaScript for Loop - W3Schools

let numArray = [];
for (let i = 0; i < 11; i++) {
     numArray.push(i);
}
console.log(numArray);

//Lev1_4_js-veriefung_loops_for-loop_namen

let names = ['Christian', 'Anass', 'Mika', 'Sam', 'Shapour', 'Kim', 'Sergio'];
for (let i of names) {
     console.log(i);
}
let retArray = [];
for (let i = 0; i < 100; i++) {
     retArray.push(`Image_${i}.jpg`);
}
console.log(retArray);
