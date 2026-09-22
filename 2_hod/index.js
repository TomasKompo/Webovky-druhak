// npm init -y -> Vytvoří package.json
// cd nazevslozky/cesta -> Přechod do složky/cesty
// cd... -> O složku výš
// ls -> Výpis souborů a složek

console.log("\n=== ÚKOL ČÍSLO 1 ===");

// 1) Práce s polem
// 2) Asynchronní JS (fetch)

const pole1 = ["Petr", "Jonáš", "Hromosvod", "Standa", "Kubajz", "Šanty", "Sýkorak", "Arnošt", "Karel", "Tomáš", "Jirka", "Honza", "Ondra", "Matěj", "Lukáš", "Vojta", "Marek", "David", "Adam", "Filip"];

// 1. Úkol:
// -> Vypsat jména z pole pomocí cyklu
// -> Spočítat kolik je v poli záznamů
// -> Náhodně vybrat jedno jméno

let pocetJmen = pole1.length;
for (let i = 0; i < pole1.length; i++) {
    console.log(pole1[i]);
}
console.log(`Počet jmen v poli: ${pocetJmen}`);

const nahodneJmeno = pole1[Math.floor(Math.random() * pole1.length)];
console.log(`Náhodně vybrané jméno: ${nahodneJmeno}`);





const pole2 = [
    {
        "stat": "Česká republika",
        "zkratka": "ČR",
        "počet_obyvatel": 10000000,
    }, 
    {
        "stat": "Německá spolková republika",
        "zkratka": "DE",
        "počet_obyvatel": 84000000,
    },
    {
        "stat": "Slovenská republika",
        "zkratka": "SK",
        "počet_obyvatel": 5400000,
    },
    {
        "stat": "Polská republika",
        "zkratka": "PL",
        "počet_obyvatel": 38000000,
    },
    {
        "stat": "Rakouská republika",
        "zkratka": "AT",
        "počet_obyvatel": 9200000,
    },
    {
        "stat": "Francouzská republika",
        "zkratka": "FR",
        "počet_obyvatel": 68000000,
    },
    {
        "stat": "Italská republika",
        "zkratka": "IT",
        "počet_obyvatel": 59000000,
    }
]

console.log("\n=== ÚKOL ČÍSLO 2 ===");

// 2. Úkol:
// -> Vypsat název a zkratku: např. "Česká Republika:CZ"
// -> Spočítat počet obyvatel dohromady
// -> Využít MAP nebo ForEach

let celkem_obyvatel = 0;

pole2.forEach((stat) => {
    console.log(`${stat.stat}:${stat.zkratka}`);
   celkem_obyvatel += stat.počet_obyvatel
})

console.log("Celkem obyvatel:", celkem_obyvatel)

// const celkovyPocetObyvatel = pole2.reduce((acc, stat) => acc + stat.počet_obyvatel, 0);

console.log("\n=== ÚKOL ČÍSLO  3===");

// 2) Asynchronní JS (fetch)

const casy = []
const teploty = []
try {
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
.then((data) => data.json())
.then((data) => {
    data.hourly.time.forEach(element => {
        casy.push(element);
    });
    data.hourly.temperature_2m.forEach(element => {
        teploty.push(element);
    });
    
    console.log(data.hourly.temperature_2m);

})
}
catch(error) {
    console.error("Chyba při načítání dat:", error);
}


// FOR
// Práce s polem
// -> Zjištění velikosti pole
// -> Funkce MAP a FOR EACH
// -> Funkce REDUCE

// Náhodné číslo
// -> Math.random()
// package.json
// -> npm init -y   

