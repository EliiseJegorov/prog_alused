let Nimi = prompt("Sisesta oma nimi:");
let lubatudKiirus = Number(prompt("Sisestage lubatud kiirus"));
let tegelikKiirus = Number(prompt("Sisestage tegelik kiirus"));

let trahv = (tegelikKiirus - lubatudKiirus) *3;
let tegelikTrahv = Math.min(trahv, 190);

console.log(Nimi + ", kiiruse yletamise eest on Teie trahv " + tegelikTrahv);