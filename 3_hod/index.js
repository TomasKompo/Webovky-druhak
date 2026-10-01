// Modul fs = filesystem
// -> Čtení souboru
// -> Zápis do souboru

// Asynchronní vs Synchronní


import fs from "node:fs";

fs.writeFile("test.txt", "Ahoj první řádku!", "utf-8", (err) => {
    if (err) return console.log(err)
        return console.log("Úspěšně zapsáno do souboru!");
});


fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) return console.log(err)
        return console.log(data);
});

fs.appendFile("test.txt", "\nAhoj druhý řádku!", "utf-8", (err) => {
    if (err) return console.log(err)
        return console.log("Úspěšně zapsáno do souboru!");
});

// Čtení probíhá před appendem

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) return console.log(err)
        return console.log(data);
});

fs.rename("test.txt", "testAlePrejmenovany.txt", (err) => {
    if (err) return console.log(err)
        return console.log("Soubor byl přejmenován!");
});



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