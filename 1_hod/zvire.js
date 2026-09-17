
export function vytvorZvire(zvire, jmeno, vek) {
	const povolenaZvirata = ["Pes", "Kočka", "Křeček"];

	if (!povolenaZvirata.includes(zvire)) {
        console.log("Neplatný druh zvířete. Povolené druhy jsou: Pes, Kočka, Křeček.");
		return null;
	}

    if (zvire === "Pes") {
		console.log("Pes: Haf");
    }
    if (zvire === "Kočka") {
		console.log("Kočka: Mňau");
    }
    if (zvire === "Křeček") {
		console.log("Křeček: Písk");
    }

	const jmenoBezMezer = jmeno.replaceAll(" ", "");

	return {
		druh: zvire,
		jmeno: jmenoBezMezer,
		vek: vek
	};
}