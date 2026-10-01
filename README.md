# Druhák

## 1_hod

Ve složce `1_hod` jsem vytvořil jednoduchý program v JavaScriptu, který simuluje přijímání a ošetřování zvířat ve veterinární ordinaci.

### Co jsem se naučil

- vytvářet a používat vlastní funkce,
- předávat funkci parametry a vracet z ní hodnoty,
- vytvářet objekty a pracovat s jejich vlastnostmi,
- ukládat objekty do pole a zjišťovat počet prvků pomocí `length`,
- používat podmínky `if` a kontrolovat, jestli je hodnota povolená,
- vyhledat objekt v poli pomocí `indexOf`,
- odstranit prvek z pole pomocí `splice`,
- upravovat text pomocí `replaceAll`,
- vypisovat informace do konzole pomocí `console.log`,
- rozdělit program do více souborů a používat exporty a importy funkcí,
- rozlišovat velká a malá písmena v názvech funkcí.

### Co jsem vytvořil

- `zvire.js` obsahuje funkci `vytvorZvire`, která:
  - ověřuje, jestli je druh zvířete povolený,
  - vypíše zvuk zvířete,
  - odstraní mezery ze jména,
  - vytvoří a vrátí objekt zvířete.
- `veterina.js` obsahuje funkce pro:
  - vytvoření veterinární ordinace,
  - přijetí zvířete na veterinu,
  - kontrolu kapacity ordinace,
  - ošetření a propuštění zvířete.
- `index.js` je hlavní soubor programu. Importuje funkce z ostatních souborů, vytvoří psa, kočku a veterinu a přehledně vypíše průběh programu.

### Použité funkce a postupy

Program nejdříve vytvoří zvířata a veterinární ordinaci s jedním místem. Pes je přijat, ale kočka už se kvůli plné kapacitě přijmout nemůže. Potom je pes ošetřen a propuštěn, takže se počet obsazených míst sníží.

Výpis programu je rozdělený do částí, aby bylo vidět vytváření zvířat, přijímání na veterinu, stav ordinace a ošetření.

### Spuštění

Ve složce `1_hod` lze program spustit příkazem:

```bash
node index.js
```

## 2_hod

Ve složce `2_hod` jsem navázal na předchozí hodinu a naučil se nové postupy pro práci s daty a asynchronním JavaScriptem.

### Co jsem se naučil

- používat metodu `forEach` pro procházení pole,
- náhodně vybrat prvek pomocí `Math.random()` a `Math.floor()`,
- používat metodu `reduce` jako alternativu k `forEach`,
- načítat data z internetového API pomocí `fetch`,
- zpracovat odpověď z API ve formátu JSON pomocí `response.json()`,
- pracovat s asynchronními operacemi pomocí řetězení `.then()`,
- zachytit chybu při načítání dat pomocí `try...catch`,
- vytvořit projektový soubor `package.json` příkazem `npm init -y`.

### Co jsem vytvořil

- **Úkol 1:** Práce s polem jmen. Program vypíše všechna jména, spočítá jejich počet a náhodně vybere jedno jméno.
- **Úkol 2:** Práce s polem objektů obsahujících státy, jejich zkratky a počet obyvatel. Program vypíše stát se zkratkou a spočítá celkový počet obyvatel.
- **Úkol 3:** Načtení hodinové předpovědi počasí z API Open-Meteo. Program pomocí `fetch` získá časy a teploty a vypíše teploty do konzole.

### Použité nové postupy

V prvním úkolu jsem použil náhodný index vytvořený pomocí výrazu `Math.floor(Math.random() * pole.length)`.

Ve druhém úkolu jsem použil metodu `forEach` pro zpracování objektů v poli. Stejný výsledek při sčítání obyvatel by bylo možné získat také pomocí metody `reduce`.

Ve třetím úkolu se pomocí `fetch` načtou data z API. Odpověď se převede na JSON a z objektu se získají hodnoty `data.hourly.time` a `data.hourly.temperature_2m`.

### Spuštění

Ve složce `2_hod` lze program spustit příkazem:

```bash
node index.js
```

## 3_hod

Ve složce `3_hod` jsem navázal na předchozí hodinu a naučil se pracovat se soubory pomocí modulu `node:fs`.

### Co jsem se naučil

- importovat vestavěný modul `node:fs`,
- zapisovat obsah do souboru pomocí `fs.writeFile`,
- číst obsah souboru pomocí `fs.readFile`,
- přidávat další obsah do souboru pomocí `fs.appendFile`,
- přejmenovat soubor pomocí `fs.rename`,
- pracovat s callbacky a kontrolovat chyby pomocí parametru `err`,
- rozlišovat mezi synchronním a asynchronním prováděním operací,
- opakovat operaci v pravidelném intervalu pomocí `setInterval`,
- vytvořit jednoduchou simulaci logování do souboru.

### Co jsem vytvořil

- **Základní práce se souborem:** Program vytvoří soubor, zapíše do něj text, přečte jeho obsah, přidá další řádek a soubor přejmenuje.
- **Simulace logování:** Program zapisuje do `log.txt` aktuální čas, úspěšné nebo neúspěšné přihlášení a jméno uživatele. Záznamy se nejdříve vytvoří stokrát za sebou a potom se přidávají každou sekundu.

### Použité nové postupy

V souboru `index.js` jsem si vyzkoušel asynchronní práci se soubory. Každá operace používá callback, který se spustí po dokončení operace nebo vypíše chybu.

V souboru `ukol.js` jsem vytvořil funkce `zapis` a `pridej`. Pomocí podmíněného operátoru se podle hodnoty `uspech` vytvoří text o úspěšném nebo neúspěšném přihlášení.

### Spuštění

Ve složce `3_hod` lze základní ukázku spustit příkazem:

```bash
node index.js
```
