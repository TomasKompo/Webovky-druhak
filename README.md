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
