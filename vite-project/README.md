# Questlog 🎮

En personlig spelbacklog där användaren kan hålla koll på spel som hen vill spela, spelar just nu, har klarat eller lagt ner.

## Teknik och projektstruktur

- [x] React
- [x] TypeScript
- [x] Vite
- [x] SCSS
- [x] API-adress och eget handle: `elena`
- [x] Skapa en TypeScript-typ för spel (`Game`)
- [x] Skapa en API-fil (`gamesApi.ts`)
- [x] Funktion för att hämta alla spel (`fetchGames`)
- [x] Kontrollera `response.ok` vid API-anrop
- [x] Skapa state för spelen med `useState`
- [x] Hämta spel med `useEffect`
- [x] Skapa en separat `GameCard`-komponent
- [x] Skicka spelinformation till komponenten via props
- [ ] React Router
- [ ] Custom hooks (VG)
- [ ] useLocalStorage för att spara filter (VG)

## Funktioner

- [x] Visa alla spel i en lista.
- [x] Filtrera spel efter status:
  - [x] All
  - [x] Want to play
  - [x] Playing
  - [x] Completed
  - [x] Dropped
- [ ] Öppna ett enskilt spel och visa:
  - [ ] Omslagsbild
  - [ ] Plattform
  - [ ] Betyg
  - [ ] Anteckningar
- [ ] Lägga till ett nytt spel.
- [ ] Ändra information om ett spel.
- [ ] Ta bort ett spel.

## API och CRUD

- [x] GET `/games` – hämta alla spel
- [ ] GET `/games?status=playing` – hämta spel med en viss status
- [ ] GET `/games/:id` – hämta ett enskilt spel
- [ ] POST `/games` – skapa ett nytt spel
- [ ] PATCH `/games/:id` – uppdatera ett spel
- [ ] DELETE `/games/:id` – ta bort ett spel

## Sidor och routing

- [ ] Lista med alla spel
- [ ] Enskild spelsida (`/games/:id`)
- [ ] Formulär för att lägga till spel
- [ ] 404-sida
- [ ] React Router med layout och navigering

## Laddning och felhantering

- [ ] Visa laddningsindikator medan spel hämtas
- [ ] Visa laddningsindikator på enskild spelsida
- [x] Kontrollera `response.ok` vid hämtning av spel
- [ ] Visa felmeddelande om något går fel
- [ ] Hantera fel vid övriga API-anrop

## Design och extra funktioner

- [ ] Bestämma appens visuella stil
- [ ] Skapa layout för spellistan
- [ ] Skapa design för spelkorten
- [ ] Göra appen responsiv
- [ ] Eventuella egna funktioner

## Publicering och inlämning

- [ ] Deploya appen på Vercel
- [ ] Skriva färdig README
- [ ] Kontrollera att alla funktioner fungerar
- [ ] Kontrollera att API-anropen fungerar i den publicerade appen

## Bedömning

### G

- [ ] CRUD fungerar
- [ ] Komponenter med props
- [ ] Routing och navigering
- [ ] Laddning och felhantering
- [ ] TypeScript-typ för spel
- [ ] Publicerad app på Vercel

### VG

- [ ] Allt som krävs för G
- [ ] Custom hooks
- [ ] Sparat filter med `useLocalStorage`
