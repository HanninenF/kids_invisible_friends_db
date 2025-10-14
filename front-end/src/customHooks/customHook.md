/\* Description:
Implementera funktionalitet för att hämta data från API:et.
Säkerställ att fetch-anrop kapslas i återanvändbara funktioner eller hooks.
Lägg till felhantering och loading-state så att UI kan reagera på olika tillstånd.
Hämtningslogik ska använda projektets definierade typer för att undvika implicit any.

Acceptance criteria:
Data kan hämtas från API:et via en centraliserad fetch-funktion eller hook.
Både success-, error- och loading-tillstånd hanteras och exponeras för komponenter.
Alla API-svar är strikt typade med TypeScript.
Fetch-logiken är återanvändbar för flera olika endpoints.
Fel loggas på ett kontrollerat sätt och visas i UI om relevant.

fetch:
fetcha barn från databasen
uppdatera barn i state

create:
skapa barn
skapa friend
skicka barn till databasen
skicka friend till databasen
databasen skickar ok, eller inte ok
uppdatera barn i state
uppdatera friend i state

update:
uppdatera barn
uppdatera friend
skicka update barn till databasen
skicka update friend till databasen
databasen skickar ok, eller inte ok
uppdatera barn i state
uppdatera friend i state

delete:
ta bort barn
ta bort friend
skicka delete barn till databasen
skicka delete friend till databasen
databasen skickar ok, eller inte ok
uppdatera barn i state
uppdatera friend i state
\*/

```bash
git checkout main
git fetch origin
git merge --ff-only origin/main
```
