// Úkol: 
// -> Vytvořit funkci pro zapisování do souboru
//      -> zapis(soubor, text)
// -> Vytvořit funkci pro přidávání do souboru
//      -> pridej(soubor, text)
// -> Vytvoř simulaci logování
//      -> Do souboru se zapíše:
//          - aktuální čas
//          - Úspěch nebo neúspěch přihlášení
//          - Název uživatele
//      -> Příklad: 9:03 -> Úspěšné přihlášení (Tomáš)
//      -> Simulace by měla být buď:
//          -> Každou sekundu po dobu jedné minuty zapisuj
//          -> Zapiše 100x za sebou

import fs from "node:fs";



const soubor = "log.txt";
const text = "Toto je simulace logování \n";
let cas = new Date().toLocaleTimeString();
const uzivatel = "Tomáš";
const uspech = false; 

export function zapis(soubor, text) {
    fs.writeFile(soubor, text, "utf-8", (err) => {
        if (err) return console.log(err);
        return console.log("Úspěšně zapsáno do souboru!");
})};

zapis(soubor, text); 

export function pridej(soubor, text) {
    let cas = new Date().toLocaleTimeString();

    fs.appendFile(soubor, text, "utf-8", (err) => {
        if (err) return console.log(err);
})};



for (let i = 0; i < 100; i++) {
    cas = new Date().toLocaleTimeString();
    pridej(soubor, cas + " -> " + (uspech ? "Úspěšné přihlášení" : "Neúspěšné přihlášení") + " (" + uzivatel + ")\n");
}

fs.appendFile(soubor, "\n ======================== \n", "utf-8", (err) => {
    if (err) return console.log(err);
    return console.log("je tam ========================");
});

let interval = setInterval(() => {
    cas = new Date().toLocaleTimeString();
    pridej(soubor, cas + " -> " + (uspech ? "Úspěšné přihlášení" : "Neúspěšné přihlášení") + " (" + uzivatel + ")\n");
}, 1000);
