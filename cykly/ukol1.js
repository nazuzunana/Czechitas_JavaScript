let soucet = 0;
let cislo = Number(prompt('Zadejte číslo'));

while (cislo !== 0) {
  soucet = soucet + cislo;
  console.log('Součet je: ' + soucet);
  cislo = Number(prompt('Zadejte číslo'));
}

let a = Number(prompt('Zadej číslo a'));
let b = Number(prompt('Zadej číslo b > a'));

for (let i = a; i <= b; i + 1) {
  console.log('Číslo 1 je: ' + i);
}
