let soucet = 0;
let cislo = Number(prompt('Zadejte číslo'));

while (cislo !== 0) {
  soucet = soucet + cislo;
  console.log('Součet je: ' + soucet);
  cislo = Number(prompt('Zadejte číslo'));
}
