# STRUCTURE

Összesítés, gondolatok, lehetséges irányok.

# Terminológia

**mainparams:** Olyan bemeneti fájl, ami a program működéséhez és a számítások elvégzéséhez elengedhetetlen adatokat tartalmaz. A programnak az "-m" kapcsolóval meghívva, majd elérési útvonallal adhatjuk át.

**extraparams:** Opcionális bemeneti fájl, ami a számítások végkimenetelét szabályozhatja. A programnak az "-e" kapcsolóval meghívva, majd elérési útvonallal adhatjuk át.

**popdata:** Populációs adatok tartalmazó bemeneti fájl. Soronként tartalmazza a populációk "neveit" és azok tulajdonságait tabulátorral elválasztva egymástól. A program ennek a fájlnak az elérési útvonalát alapértelemzetten a mainparams fájlból olvassa ki, de felülírható az "-i" kapcsolóval.

**K:** Feltételezett populációs mennyiség. MAXOPS néven is ismert. Ez egy szám.

**Iteráció:** Azt jelzi, hogy egy adott K értékre hányszor legyen lefuttatva a program (különböző seed-ekkel). Több iteráció = finomhangoltabb eredmény. Ez egy szám.

**Szimuláció:** Egy programlefutás 1db K értékkel és 1 iterációval.

**Kimeneti fájl:** A szimuláció végeredményét tartalmazó fájl. Ezt szokás Q-mátrixnak is hívni. Létrehozási helye alapértelmezetten a mainparamsban megadott érték, de az "-o" kapcsolóval ez felülírható.

**Projekt:** Szimulációk összessége. Minimum K érték és maximum K érték amit még nézünk, megadva az iteráció mennyiségével.

**Stream kimenet:** A program futása közben az stdoutra kiírt adatai. Ezt más programok nem használják fel (???), de a structure a saját java guis megoldásában igen.

# A programról

Populációgenetikai struktúra meghatározásához használt szoftver. Egyedek és azon tulajdonságaiból számol valószínűséget, aminek eredményét kiterjesztés nélküli szöveges fájlban tárolja. Ez azért hasznos, mert több olyan szoftver is létezik, amik ezen eredményekből információt állítanak elő, grafikonokat rajzolnak belőle.

Áll egy nagyon régi C (backend) és Java (frontend) kódbázisból.

Témalabor szempontjából a cél a backend felgyorsítása, hogy a kimeneti fájlok hamarabb készüljenek el. Ha van idő, ehhez egy grafikus felület elkészítése is célszerű lenne.

# A probléma

A program nem biztosít többszálas működést. Egy projekt lefutás sok időt vesz igénybe.

# Lehetséges megoldások

## "Wrapper" megközelítés

Egy megoldási terv lehet az, hogy fogjuk a futtatható backend C programot fordított állapotában, majd egy magasabb szintű nyelv köré csavarva meghívjuk azt automatizáltan paraméterekkel, custom thread pool megoldással, vagy egy ismertebb threading library alkalmazásával parallel módon. A wrapper argumentumként bekérné a minimum és maximum K értéket, az iterációt, a mainparams, extraparams, és a popdata fájlok elérési útját, valamint a kimeneti mappát ahová a kimeneti fájlokat rakja. A már meglévő megoldások többsége ezt az irányt követi.

**Előnyök:**

- Bármilyen nyelv köré fel lehet építeni, ahol van threading és argumentumkezelés.
- Nem kell a program "belső működésével" foglalkozni.
- Kevés kóddal, stabilan és gyorsan megvalósítható.
- A szálak nem dolgoznak össze, így nem kell race condition miatt aggódni, minden szimuláció egy fekete doboz, amiknek végzési sorrendje lényegtelen.

**Hátrányok:**

- Ilyen programból már létezik több is.
- A "hot path-ban", a számítási szempontból kritikus helyen nem történik változás - A program működésén igazából nem is gyorsítunk, csak egyszerre több folyamatot indítunk el más-más paraméterekkel. Egy szimuláció lefutása ugyanannyi időt vesz igénybe, de a projekt elvégzésének ideje így is lényegesen lecsökken.
- Nem különálló a program, azaz kell csatolni argumentumként egy elérési útvonalat is, ahol az eredeti futtatható elérhető.

## Beágyazott megközelítés I.

Ahelyett, hogy egy saját programmal a már meglévő futtathatót felhasználjuk, az eredeti kód kerül meghívásra. Az eredeti kódot extern C mód, vagy pedig c++ standardeknek megfelelő átírás után meghívjuk.

**Előnyök:**

- Nem kell folyamatokat meghívni.
- Feltételezhetően gyorsabb működés.
- Fordítás után egy futtatható tartalmazza a threading és az eredeti számítási logikát is.

**Hátrányok:**

- Több munka (globális változók kezelése szálspecifikus tárolókkal, nem threadsafe utasítások átírása, amik a fájlműveleteknél és a random generálásnál jön elő).
- A C kódot minimálisan módosítani kell, hogy fordítható legyen új fordítóval is.
- Csak C++ és C jövet szóba. (??? Vagy más olyan nyelv, ami engedi a C kód futást)

## Beágyazott megközelítés II.

Fogjuk az eredeti C kódot és alapjaiban átírjuk modern, C++20 kódra. Makrókból constexpr, raw pointer tömbök helyett a megfelelő STL tároló, calloc és malloc/delete elhagyása smart pointerek fejében, szálbiztosítás, fstream file pointerek helyett stbstbstb.

**Előnyök:**

- Minden, ami az előbbi pontban.
- Átláthatóbb, modernebb program.
- Potenciálisan nagy teljesítmény növekedés szimulációs szinten.
- Nagyon sok minden rendelkezésre áll, ami esetlegesen optimalizálható.

**Hátrányok:**

- Mégnagyobb mennyiségű munka.
- Feltételezhetően nem lenne kész már.
- Jóval több lehetőség hibára. (Ami rosszabb esetben akár rejtett is maradhat)
- Az, hogy megéri egyáltalán az egész, nem bizonyított.

# Fejlesztői stackek

## Wrapper megközelítés

Szó szerint szinte bármi felhasználható, mivel gyakorlatilag egy szkript szintén van ez az egész, amit meg lehet írni nagyon rövid kóddal. Szóba került a Python tkinter használatával is.

## Beágyazott megközelítés I.

Ugyanaz, mint az előbb.

## Beágyazott megközelítés II.

C++ cmake build tool több makefile segítségével, figyelve, hogy OS specifikus kód ne kerüljön felhasználásra (könnyen teljesíthető kritérium).

### Személyes preferencia

C++ háttérlogika valamilyen JS frontend megoldással. Ha hagyományos desktop program kell (ami fájlkezelés szempontjából megkönnyítené a helyzetet), akkor electron, ha pedig webes kezelőfelület kell, akkor azt express webszerverrel oldanám meg. Mindkét JS GUI megoldás alapjaiban multiplatform.

Mert:

A fordított kód gyorsabb, mint az értelmezett társa.

Számít a teljesítmény.

**DE** ez csak vélemény, abban csinálom meg, amiben kell.

## Már meglévő megoldások

[https://github.com/StuntsPT/Structure_threader](https://github.com/StuntsPT/Structure_threader) - Python alapú program "wrapper" megközelítéssel több populációgenetikai programhoz, így többek közt a structure támogatásával is.

[https://github.com/alkc/parallel-structure](https://github.com/alkc/parallel-structure) - BASH alapú "wrapper" megoldás.

[https://rdrr.io/rforge/ParallelStructure](https://rdrr.io/rforge/ParallelStructure) - R-ben írt "wrapper" program.

[https://github.com/rajanil/fastStructure](https://github.com/rajanil/fastStructure) - Python program Beágyazott I módszerrel.

[https://github.com/cdoorenweerd/PhylOStack/wiki/StrAuto-on-OpenStack](https://github.com/cdoorenweerd/PhylOStack/wiki/StrAuto-on-OpenStack) - Pythonban írt "wrapper".

[https://github.com/hzz0024/EasyParallel](https://github.com/hzz0024/EasyParallel) - Pythonban írt "wrapper".

[https://github.com/hernanmd/STRUCTUREPipelines](https://github.com/hernanmd/STRUCTUREPipelines) - Komplett pipeline az StrAuto csomaggal + integrálva a tipikusan használt structure kimeneti fájlokat felhasználó eszközökkel.

## Helyzetjelentés

Jelenleg egy c++ -ban írt wrapper program van, ami több projekt lefutását lehetővé teszi batch alapon. Paraméterben megadott helyen létrehoz projektenként egy mappát, ahová bemásolja a mainparams extraparams és popdata fájlokat. Külön mappába rakja a kimeneti fájlokat, valamint a stream kimenetet is összegyűjti a létrehozott processekből és fájlokba rendezi őket.

## Megjegyzés a múltkori megbeszéléshez

Mint kiderült, nem kell K x iteráció mennyiségben legenerálni a mainparams és extraparams fájlokat, hanem elég argumentumokkal felülírni őket.

## Extrázási lehetőségek, amik az eddigi megoldások nagy részében nincsenek meg:

- Kimeneti fájlok csoportosítása K szerint ZIP-ben. (Ezt használják a structure kimeneti fájlokat feldolgozó programok)
- Klaszterezés, workstation munkafeldarabolás.
- Kimeneti fájlokat felhasználó toolchainek integrálása.
- Állapotmentés minden szimuláció után, hogy váratlan leállás esetén folytatni lehessen a munkát a mentett állapotból.

## Technikai kérdések

1.  Melyik megközelítést válasszam?
2.  Milyen nyelven legyen a program megvalósítva?
3.  Web vagy desktop GUI?
