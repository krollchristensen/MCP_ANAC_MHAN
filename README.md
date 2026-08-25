## Hvad er MCP?

Model Context Protocol, forkortet MCP, er en åben standard, der gør det muligt at forbinde en AI-applikation med eksterne data, værktøjer og arbejdsgange.

En sprogmodel kan som udgangspunkt kun arbejde med den kontekst, den får i samtalen. Den ved ikke automatisk, hvad der står i en lokal fil, hvilke opgaver der ligger i et projekt, eller hvordan et bestemt system skal ændres.

MCP giver AI-applikationen en standardiseret og kontrolleret forbindelse til sådanne systemer.

MCP kan eksempelvis bruges til at lade en AI-agent:

* læse aktuelle data fra en fil, database eller et API
* kalde en afgrænset funktion
* oprette eller ændre data gennem et godkendt værktøj
* anvende en genbrugelig prompt eller arbejdsgang
* arbejde med GitHub Issues, pull requests og Projects

MCP gør ikke sprogmodellen mere intelligent. MCP giver den adgang til aktuelle data og tilladte handlinger.

## Eksempler på hvor MCP giver mening

MCP er især nyttigt, når en AI skal arbejde med data eller systemer uden for selve samtalen.

### GitHub

En AI-agent kan fx:

* læse aktuelle Issues
* oprette nye Issues
* hente information om pull requests
* arbejde med et GitHub Project

Uden MCP skal man selv programmere integrationen til GitHub API'et. Med MCP får AI-agenten en standardiseret adgang til de funktioner, den må bruge.

### Database og REST API

MCP erstatter ikke et almindeligt REST API eller CRUD.

Man kan fx allerede have et API:

```http
GET /tasks
POST /tasks
PUT /tasks/12
DELETE /tasks/12
```

En almindelig applikation programmeres til at kende disse endpoints.

Med MCP kan funktionaliteten i stedet stilles til rådighed for en AI-agent som fx:

```text
get_tasks()
create_task(title, description)
complete_task(id)
```

Arkitekturen kan derfor være:

```text
AI-agent
   |
  MCP
   |
MCP-server
   |
REST API
   |
Database
```

MCP fungerer altså som et lag mellem AI-agenten og det eksisterende system.

### Filsystem

En AI-agent kan få kontrolleret adgang til bestemte filer.

Eksempel:

```text
AI-agent
   |
  MCP
   |
Projektmappe
   |
README.md
config.json
tasks.json
```

Agenten kan fx læse en konfigurationsfil eller hente aktuelle tasks uden først at få hele filens indhold kopieret ind i samtalen.

### Studieopgaver

En MCP-server kan stille studieopgaver til rådighed som både data og funktioner.

Eksempel:

```text
get_tasks()
add_task()
complete_task()
```

En studerende kan derefter fx spørge:

> Hvilke opgaver mangler jeg?

eller:

> Marker opgave 3 som færdig.

AI-agenten kan herefter vælge det relevante MCP-tool.

### Virksomhedssystemer

MCP kan bruges foran eksisterende systemer som fx:

* CRM
* helpdesk
* bookingsystem
* lagerstyring

En AI-agent kan fx få tools som:

```text
find_customer()
create_support_ticket()
get_available_times()
```

Agenten behøver ikke kende den bagvedliggende database eller API-struktur.

### Eksterne API'er

MCP kan også bruges til at give en AI-agent adgang til eksterne API'er.

Eksempel:

```text
get_weather(city)
get_exchange_rate(currency)
```

MCP-serveren kalder det relevante API og returnerer resultatet til AI-agenten.

## Hvorfor ikke bare bruge et almindeligt API?

Det kan man sagtens.

Hvis man bygger en almindelig webapplikation, hvor en frontend kalder et backend-API, er REST og CRUD ofte den rigtige løsning.

Forskellen er, at et REST API typisk bruges af en applikation, som på forhånd er programmeret til at kende bestemte endpoints.

```text
Frontend
   |
REST API
   |
Database
```

Med MCP kan funktionaliteten beskrives som tools og resources, som en AI-agent kan opdage og vælge mellem.

```text
AI-agent
   |
  MCP
   |
MCP-server
   |
REST API / Database / GitHub / Filer
```

MCP erstatter derfor ikke nødvendigvis REST API'er, databaser eller andre eksisterende systemer.

MCP kan i stedet ligge oven på dem og gøre deres data og funktioner tilgængelige for AI-agenter på en standardiseret måde.

## Hvornår giver MCP mening?

MCP giver især mening, når:

* en AI-agent skal hente aktuelle data
* en AI-agent skal kunne udføre handlinger
* flere forskellige systemer skal kunne anvendes af samme AI-agent
* man ønsker at styre præcist, hvilke funktioner AI-agenten må anvende
* eksisterende API'er eller systemer skal gøres tilgængelige for AI-agenter

Hvis man blot bygger en almindelig applikation uden AI-agent, er MCP ofte unødvendigt.

Kort sagt:

**REST API og CRUD giver applikationer adgang til funktionalitet. MCP gør data og funktionalitet standardiseret og anvendelig for AI-agenter.**


## Problemet MCP løser

Uden MCP skal brugeren ofte kopiere data ind i samtalen:

```mermaid
flowchart LR
    U[Bruger] -->|Kopierer data| A["AI-applikation"]
    A -->|Svar baseret på kopien| U
```

Kopien kan være forældet, ufuldstændig eller forkert. AI-applikationen kan heller ikke udføre en reel handling i det eksterne system.

Med MCP kan AI-applikationen hente aktuelle data og anvende de værktøjer, som en MCP-server stiller til rådighed:

```mermaid
flowchart LR
    U[Bruger] --> H["AI-host"]
    H --> C["MCP-klient"]
    C <--> S["MCP-server"]
    S <--> D[("Data eller system")]
```

## Roller i MCP

| Rolle | Ansvar | Eksempel i materialet |
| --- | --- | --- |
| Bruger | Beskriver behovet og godkender handlinger | Den studerende |
| AI-host | Indeholder samtalen, modellen og brugergrænsefladen | Copilot Chat i IntelliJ |
| MCP-klient | Opretter forbindelsen og sender MCP-beskeder | En del af AI-hosten |
| MCP-server | Beskriver og udfører afgrænsede funktioner | Vores Node.js task-server |
| Eksternt system | Indeholder de data, der arbejdes med | `tasks.json` |

En AI-host kan være forbundet med flere MCP-servere. Hver server kan give adgang til sit eget afgrænsede område.

```mermaid
flowchart TB
    H["AI-host"]
    H --> G["GitHub MCP-server"]
    H --> T["Task MCP-server"]
    H --> B["Database MCP-server"]
    G --> GH[(GitHub)]
    T --> J[("tasks.json")]
    B --> DB[(Database)]
```

## Hvad stiller en MCP-server til rådighed?

En MCP-server kan især stille resources, tools og prompts til rådighed.

```mermaid
flowchart TB
    S["MCP-server"]
    S --> R[Resource]
    S --> T[Tool]
    S --> P[Prompt]
    R --> RD[Læs aktuelle data]
    T --> TD[Udfør en afgrænset handling]
    P --> PD[Start en genbrugelig arbejdsgang]
```

### Resources

En resource er data, som klienten kan læse. Den svarer nogenlunde til en fil eller et læsbart API-svar.

I vores eksempel findes denne resource:

```text
tasks://all
```

Den returnerer den aktuelle taskliste fra `tasks.json`.

### Tools

Et tool er en funktion, som modellen kan anmode om at få udført. Tool-kald valideres mod et inputskema, før serverens kode bliver kørt.

Vores server har to tools:

```text
add_task
complete_task
```

Et tool bør udføre en afgrænset og tydeligt beskrevet handling. Det er serveren - ikke sprogmodellen - der bestemmer, hvordan handlingen implementeres.

### Prompts

En prompt er en navngivet og genbrugelig skabelon, som brugeren kan vælge i en kompatibel klient.

Vores server har denne prompt:

```text
plan_next_work_session
```

Prompten hjælper brugeren med at starte en planlægningsopgave på en ensartet måde. Prompts er brugeraktiverede, mens tools normalt vælges af modellen ud fra samtalen.

## Sådan foregår et MCP-kald

Når brugeren beder Copilot om at vise åbne tasks, kan forløbet se sådan ud:

```mermaid
sequenceDiagram
    actor U as Studerende
    participant H as Copilot i IntelliJ
    participant S as Task MCP-server
    participant D as tasks.json

    U->>H: Vis alle åbne tasks
    H->>S: Læs tasks://all
    S->>D: Læs aktuelle data
    D-->>S: Taskliste
    S-->>H: JSON med tasks
    H-->>U: Forklaret oversigt
```

Når brugeren beder om at afslutte en task, vælger modellen i stedet serverens `complete_task`-tool:

```mermaid
sequenceDiagram
    actor U as Studerende
    participant H as Copilot i IntelliJ
    participant S as Task MCP-server
    participant D as tasks.json

    U->>H: Markér task 2 som færdig
    H->>S: complete_task med id 2
    S->>S: Validér input
    S->>D: Opdatér task
    D-->>S: Gemt
    S-->>H: Resultat
    H-->>U: Task 2 er færdig
```

## Det gennemgående eksempel

Materialet indeholder en lille MCP-server skrevet i Node.js. Den bruger en lokal JSON-fil og kræver hverken GitHub, database, API-nøgle eller en ekstern tjeneste.

Eksemplet er valgt, fordi alle dele kan ses og forklares:

1. Brugeren formulerer et behov i naturligt sprog.
2. AI-hosten opdager serverens capabilities.
3. Modellen vælger en resource eller et tool.
4. MCP-klienten sender en struktureret besked.
5. Serveren validerer input og udfører handlingen.
6. Resultatet sendes tilbage til modellen.
7. Brugeren kontrollerer resultatet i `tasks.json`.

[Åbn det kørbare eksempel](materiale/egen-mcp-server/README.md)

## Direkte afvikling og Docker

Serveren kan først køres direkte med Node.js:

```mermaid
flowchart LR
    I[IntelliJ] -->|stdio| N["Node.js MCP-server"]
    N --> J[("tasks.json")]
```

Den samme server kan derefter pakkes i Docker:

```mermaid
flowchart LR
    I[IntelliJ] -->|stdio| D["Docker-container"]
    D --> N["Node.js MCP-server"]
    N --> J[("tasks.json")]
```

MCP bestemmer, hvordan klienten og serveren kommunikerer. Docker bestemmer, hvordan serveren pakkes og afvikles. Docker er derfor ikke en erstatning for MCP, men en alternativ måde at køre MCP-serveren på.

[Læs om Docker-udvidelsen](materiale/docker/README.md)

## MCP i fagene

MCP bør ikke være et isoleret emne. Det kan indgå med forskellig dybde gennem uddannelsen:

| Fag | Eksempel på fagligt fokus |
| --- | --- |
| Programmering 1 | Funktioner, inputvalidering, JSON, fejlhåndtering og test |
| Systemudvikling 1 | Krav, afgrænsning, arkitektur, kvalitet og sporbarhed |
| Teknologi 1 | Processer, `stdio`, operativsystem, samtidighed og dataadgang |
| Programmering 2 | Integration, distribuerede systemer og flere samarbejdende komponenter |
| Teknologi 2 | Containere, deployment, protokoller, rettigheder og sikkerhed |
| IT-sikkerhed | Softwaresikkerhed, security by design og håndtering af ikke-lovligt input |

[Se den samlede faglige kobling](faglig-kobling/README.md)

## Sikkerhed og ansvar

En MCP-server kan give en AI-agent mulighed for at læse data og udføre handlinger. Derfor skal serveren designes som et almindeligt sikkerhedskritisk API.

I eksemplet arbejder vi med følgende principper:

- mindst mulige rettigheder
- få og tydeligt afgrænsede tools
- inputvalidering med Zod
- ingen vilkårlige filstier fra brugeren
- forståelige fejl uden følsomme oplysninger
- ingen API-nøgler eller secrets i kildekoden
- menneskelig kontrol før og efter ændringer
- logning til `stderr`, fordi `stdout` bruges af MCP-protokollen

På IT-sikkerhedsuddannelsen kobles eksemplet til fagelementet Softwaresikkerhed. Det omfatter blandt andet programkvalitet, fejlhåndtering, security by design, vurdering af API'er og håndtering af lovlige og ikke-lovlige inputdata.

[Se MCP og Softwaresikkerhed](faglig-kobling/it-sikkerhed/README.md)

## Repositoryets struktur

```text
mcp-undervisningsmateriale/
├── README.md
├── materiale/
│   ├── egen-mcp-server/
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   ├── data/
│   │   │   └── tasks.json
│   │   ├── src/
│   │   │   ├── server.js
│   │   │   └── taskStore.js
│   │   └── test/
│   │       └── taskStore.test.js
│   └── docker/
│       └── README.md
└── faglig-kobling/
    ├── README.md
    ├── programmering-1/README.md
    ├── systemudvikling-1/README.md
    ├── teknologi-1/README.md
    ├── programmering-2/README.md
    ├── teknologi-2/README.md
    └── it-sikkerhed/README.md
```

## Foreslået undervisningsrækkefølge

1. Læs introduktionen på denne side.
2. Tegn selv arkitekturen med host, klient, server og data.
3. Kør serveren gennem MCP Inspector.
4. Forbind serveren til Copilot i IntelliJ.
5. Læs tasks gennem MCP.
6. Ændr en task gennem et tool og kontrollér JSON-filen.
7. Undersøg inputvalidering og fejlscenarier.
8. Kør den samme server i Docker.
9. Diskutér rettigheder, trusler og menneskelige kontrolpunkter.

## Relateret GitHub-eksempel

I [ByteBites Java Copilot Workshop](https://github.com/krollchristensen/ByteBitesJavaCopilotWorkshopTest) anvendes GitHubs eksterne MCP-server til at forbinde Copilot i IntelliJ med GitHub Issues, Projects og pull requests.

Task-serveren i dette repository viser, hvordan man selv udvikler en MCP-server. ByteBites viser, hvordan man anvender en MCP-server, som drives af en ekstern udbyder.

## Dokumentation

- [Introduktion til MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
- [MCP-arkitektur](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture)
- [Byg en MCP-server](https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server)
- [MCP Inspector](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector)
- [TypeScript SDK version 2](https://ts.sdk.modelcontextprotocol.io/v2/)
- [Docker MCP Catalog og Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/)
