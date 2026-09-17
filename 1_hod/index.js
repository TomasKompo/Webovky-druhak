/* 
1) Funkce, která na základě svého parametru zvolí vyjádření zvířete
 -> Parametry (Pes/Kočka/Křeček, jméno, věk)
 -> Pokud jméno obsahuje mezery, tak je smažte
 -> Funkce vyhodnotí, zda bylo v parametru jedno ze tří zvířat
 -> Pokud ano, vytovří a vrátí objekt zvířete
 -> vytvorZvire(zvire, jmeno, vek)

 2) Funkce, která vytvoří objekt veteriny
 -> Parametry (název veteriny a počet míst)
 -> Pokud je veterina plná, tak zvíře nepřijme
 -> vytvorVeterinu(nazevVeteriny, pocetMist)

3) Funkce, která pošle zvíře na veterinu
 -> Parametry (Objekt zvířete, veterina)
 -> posliZvire(zvire, veterina)
*/

/*
import * as zvireModule from "./zvire.js";
import * as veterinaModule from "./veterina.js";
*/

import { vytvorZvire } from "./zvire.js";
import { vytvorVeterinu, posliZvire, osetriZvire } from "./veterina.js";




console.log("=== Vytváření zvířat ===");
const pes = vytvorZvire("Pes", "A z Or", 5);
const kocka = vytvorZvire("Kočka", "Ra d u lina", 3);
const veterina = vytvorVeterinu("Chci jenom penize", 1);

console.log("\n=== Zvířata ===");
console.log(`1. ${pes.druh} - ${pes.jmeno}, ${pes.vek} let`);
console.log(`2. ${kocka.druh} - ${kocka.jmeno}, ${kocka.vek} roky`);

console.log("\n=== Přijímání na veterinu ===");
posliZvire(pes, veterina);
posliZvire(kocka, veterina);

console.log("\n=== Stav veteriny ===");
console.log(`Ordinace: ${veterina.nazev}`);
console.log(`Obsazenost: ${veterina.zvirata.length}/${veterina.pocetMist}`);

console.log("\n=== Ošetření na Veterině ===");
osetriZvire(pes, veterina);
console.log(`${pes.jmeno} byl ošetřen a propuštěn z veterinární ordinace ${veterina.nazev}.`);
console.log(`Obsazenost: ${veterina.zvirata.length}/${veterina.pocetMist}`);


