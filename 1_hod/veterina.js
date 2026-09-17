
export function vytvorVeterinu(nazevVeteriny, pocetMist) {
	return {
		nazev: nazevVeteriny,
		pocetMist: pocetMist,
		zvirata: []
	};
}


export function posliZvire(zvire, veterina) {
	const pocetZvirat = veterina.zvirata.length;

	if (pocetZvirat >= veterina.pocetMist) {
		console.log(`Veterinární ordinace ${veterina.nazev} je plná. Zvíře ${zvire.jmeno} nemůže být přijato.`);
        return false;
	}

	veterina.zvirata.push(zvire);
	console.log(`Zvíře ${zvire.jmeno} bylo přijato do veterinární ordinace ${veterina.nazev}.`);
    return true;
}