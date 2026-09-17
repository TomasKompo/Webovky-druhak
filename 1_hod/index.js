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

function vytvorZvire(zvire, jmeno, vek) {
	const povolenaZvirata = ["Pes", "Kočka", "Křeček"];

	if (!povolenaZvirata.includes(zvire)) {
        console.log("Neplatný druh zvířete. Povolené druhy jsou: Pes, Kočka, Křeček.");
		return null;
	}

    if (zvire === "Pes") {
        console.log("Haf");
    }
    if (zvire === "Kočka") {
        console.log("Mňau");
    }
    if (zvire === "Křeček") {
        console.log("Písk");
    }

	const jmenoBezMezer = jmeno.replaceAll(" ", "");

	return {
		druh: zvire,
		jmeno: jmenoBezMezer,
		vek: vek
	};
}

function vytvorVeterinu(nazevVeteriny, pocetMist) {
	return {
		nazev: nazevVeteriny,
		pocetMist: pocetMist,
		zvirata: []
	};
}

function posliZvire(zvire, veterina) {
	const pocetZvirat = veterina.zvirata.length;

	if (pocetZvirat >= veterina.pocetMist) {
		console.log(`Veterinární ordinace ${veterina.nazev} je plná. Zvíře ${zvire.jmeno} nemůže být přijato.`);
        
	}

	veterina.zvirata.push(zvire);
	console.log(`Zvíře ${zvire.jmeno} bylo přijato do veterinární ordinace ${veterina.nazev}.`);
    
}

const pes = vytvorZvire("Pes", "A z Or", 5);
const kocka = vytvorZvire("Kočka", "Ra d u lina", 3);
const veterina = vytvorVeterinu("Chci jenom penize", 1);


console.log(pes);
console.log(posliZvire(pes, veterina));
console.log(posliZvire(kocka, veterina));
console.log(veterina);