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

## 4_hod

Ve složce `4_hod` jsem navázal na předchozí hodinu a vytvořil svůj první webový server pomocí frameworku Express.

### Co jsem se naučil

- nainstalovat a používat balíček `express`,
- vytvořit Express aplikaci pomocí `express()`,
- načíst hodnoty z konfiguračního souboru `.env` pomocí `loadEnvFile`,
- nastavit port serveru pomocí proměnné prostředí `PORT`,
- používat middleware `express.urlencoded()` pro zpracování dat z formuláře,
- vytvořit GET a POST routu pomocí `app.get()` a `app.post()`,
- odeslat HTML soubor pomocí `res.sendFile()`,
- získat data odeslaná z formuláře přes `req.body`,
- automaticky restartovat server po změně kódu pomocí programu `nodemon`.

### Co jsem vytvořil

- **Express server:** Server se spustí na portu nastaveném v `.env` a po spuštění vypíše přihlášeného uživatele.
- **Úvodní stránku:** GET požadavek na adresu `/` odešle soubor `public/templates/index.html`.
- **Formulář:** Stránka obsahuje formulář pro zadání jména a příjmení. Po odeslání POST požadavku server údaje přečte a vypíše do konzole.

### Použité nové postupy

Pomocí Expressu jsem vytvořil server a nastavil jeho routy. Middleware `express.urlencoded({ extended: true })` převede data z HTML formuláře do objektu `req.body`.

Konfigurační údaje, například port a uživatelské hodnoty, jsou uložené v souboru `.env`, aby nebyly přímo zapsané v kódu. Balíček `nodemon` umožňuje automatické znovuspuštění serveru po úpravě souboru.

### Spuštění

Ve složce `4_hod` lze server spustit příkazem:

```bash
node index.js
```

Pro automatické restartování při změně souborů lze použít:

```bash
nodemon index.js
```

## 5_hod

Ve složce `5_hod` jsem navázal na Express server a vytvořil jednoduchou registraci a přihlašování uživatelů s využitím databáze SQLite.

### Co jsem se naučil

- připojit SQLite databázi pomocí balíčku `sqlite3`,
- vytvořit tabulku pomocí SQL příkazu `CREATE TABLE IF NOT EXISTS`,
- ukládat uživatele do databáze pomocí `INSERT`,
- vyhledávat uživatele pomocí `SELECT`,
- používat parametrizované SQL dotazy s otazníky `?`,
- hashovat hesla pomocí knihovny `bcrypt`,
- porovnávat zadané heslo s hashem pomocí `bcrypt.compare`,
- používat `async/await` při asynchronních operacích,
- kontrolovat, jestli uživatel vyplnil všechna povinná pole,
- vracet HTTP stavové kódy pomocí `res.status()`,
- přesměrovat uživatele pomocí `res.redirect()`.

### Co jsem vytvořil

- **Databázi uživatelů:** V souboru `users.db` se vytvoří tabulka `users` se jménem uživatele a zahashovaným heslem.
- **Registraci:** Na stránce `/register` uživatel vyplní jméno a heslo. Heslo se před uložením zahashuje pomocí `bcrypt`.
- **Přihlášení:** Na stránce `/login` se vyhledá uživatel v databázi a ověří se zadané heslo.
- **Stránky a routy:** Kořenová adresa `/` přesměruje na přihlášení a mezi registrací a přihlášením lze přecházet pomocí odkazů.

### Použité nové postupy

Při registraci se heslo neukládá přímo, ale jako hash vytvořený pomocí `bcrypt.hash`. Při přihlášení se zadané heslo porovná s uloženým hashem pomocí `bcrypt.compare`.

Databázové dotazy používají parametry, například `WHERE username = ?`, což odděluje data od SQL příkazu. Server také kontroluje chybějící údaje a podle výsledku vrací například stav `400`, `401` nebo `500`.

### Spuštění

Ve složce `5_hod` lze server spustit příkazem:

```bash
npm start
```
