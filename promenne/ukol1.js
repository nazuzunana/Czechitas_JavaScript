// jednořádkový komentář

/* 
víceřádkový
komentář
*/

let jmeno = 'Zuzana';
let vek = 27;
let vaha = 49;
let vyska = 1.75;
let bmi = vaha / (vyska * vyska);
console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let, vážím ' +
    vaha +
    ' kg, měřím ' +
    vyska +
    ' m a moje BMI je ' +
    bmi +
    '.'
);

let jmenoMuz = 'Matěj';
let jmenoZena = 'Zuzana';
let rokNarozeniMuz = 1989,
  květen;
let rokNarozeniZena = 1994,
  duben;
let rozdil = rokNarozeniZena - rokNarozeniMuz;

console.log(
  jmenoMuz + ' a ' + jmenoZena + ' jsou od sebe vzdálení ' + rozdil + ' let.'
);
