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

let jmenoUzivatele = prompt('Jak se jmenuješ?');
let vekUzivatele = Number(prompt('Kolik je ti let?'));

if (vekUzivatele > 18) {
  console.log(
    'Vaše jméno je ' +
      jmenoUzivatele +
      ' , je vám ' +
      vekUzivatele +
      ' a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vaše jméno je ' +
      jmenoUzivatele +
      ' , je vám ' +
      vekUzivatele +
      ' a tak musíte počkat ještě ' +
      (18 - vekUzivatele) +
      ' let, než budete moci řídit auto.'
  );
}

let a = Number(prompt('Zadjete A:'));
let b = Number(prompt('Zadjete B:'));
let c = Number(prompt('Zadjete C:'));

// porovnávání - nejdříve 2 libovolné čísla, pak to větší s tím třetím
if (a > b) {
  // nutne porovnat jeste A s C
  if (a > c) {
    console.log('Největší číslo je A:' + a);
  } else {
    console.log('Největší číslo je C:' + c);
  }
} else {
  // nutne porovnat jeste B s C
  if (b > c) {
    console.log('Největší číslo je B:' + b);
  } else {
    console.log('Největší číslo je C:' + c);
  }
}


