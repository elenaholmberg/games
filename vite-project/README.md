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
- [x] React Router
- [x] Custom hooks (VG)
- [x] useLocalStorage för att spara filter (VG)

## Funktioner

- [x] Visa alla spel i en lista.
- [x] Filtrera spel efter status:
  - [x] All
  - [x] Want to play
  - [x] Playing
  - [x] Completed
  - [x] Dropped
- [x] Öppna ett enskilt spel och visa:
  - [x] Omslagsbild
  - [x] Plattform
  - [x] Betyg
  - [x] Anteckningar
- [x] Lägga till ett nytt spel.
- [x] Ändra information om ett spel.
- [x] Ta bort ett spel.

## API och CRUD

- [x] GET `/games` – hämta alla spel
- [x] GET `/games?status=playing` – hämta spel med en viss status
- [x] GET `/games/:id` – hämta ett enskilt spel
- [x] POST `/games` – skapa ett nytt spel
- [x] PATCH `/games/:id` – uppdatera ett spel
- [x] DELETE `/games/:id` – ta bort ett spel

## Sidor och routing

- [x] Lista med alla spel
- [x] Enskild spelsida (`/games/:id`)
- [x] Formulär för att lägga till spel
- [x] 404-sida
- [x] React Router med layout och navigering

## Laddning och felhantering

- [x] Visa laddningsindikator medan spel hämtas
- [x] Visa laddningsindikator på enskild spelsida
- [x] Kontrollera `response.ok` vid hämtning av spel
- [x] Visa felmeddelande om något går fel
- [x] Hantera fel vid övriga API-anrop

## Design och extra funktioner

- [x] Bestämma appens visuella stil
- [x] Skapa layout för spellistan
- [x] Skapa design för spelkorten
- [x] Göra appen responsiv
- [x] Eventuella egna funktioner

## Publicering och inlämning

- [x] Deploya appen på Vercel
- [ ] Skriva färdig README
- [x] Kontrollera att alla funktioner fungerar
- [x] Kontrollera att API-anropen fungerar i den publicerade appen

## Bedömning

### G

- [x] CRUD fungerar
- [x] Komponenter med props
- [x] Routing och navigering
- [x] Laddning och felhantering
- [x] TypeScript-typ för spel
- [x] Publicerad app på Vercel

### VG

- [x] Allt som krävs för G
- [x] Custom hooks
- [x] Sparat filter med `useLocalStorage`
