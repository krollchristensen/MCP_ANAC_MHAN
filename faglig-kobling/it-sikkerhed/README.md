# MCP i IT-sikkerhed

MCP kan anvendes som en generel case i fagelementet Softwaresikkerhed. De studerende kan undersøge en selvudviklet server, en ekstern MCP-server eller et designforslag. Koblingen kræver ikke anvendelse af eksemplet i dette repository.

[Tilbage til den faglige oversigt](../README.md)

## Kobling til studieordningen

Softwaresikkerhed omfatter blandt andet programkvalitet og dens sikkerhedsmæssige konsekvenser, trusler mod software, fejlhåndtering, security by design, privacy by design, sårbarheder i programkode, vurdering af API'er og biblioteker, test af input samt risikovurdering af kode og arkitektur.

En MCP-server er en relevant case, fordi den etablerer en tillidsgrænse mellem en AI-klient og data eller handlinger i andre systemer.

| Fokus i Softwaresikkerhed | Mulig MCP-aktivitet |
| --- | --- |
| Programkvalitet | Review kode, afhængigheder, fejlveje og vedligeholdelse |
| Trusler mod software | Udarbejd en trusselsmodel for host, server og eksterne tjenester |
| Fejlhåndtering | Test om fejl håndteres kontrolleret uden informationslækage |
| Security by design | Begræns capabilities, rettigheder og dataadgang fra starten |
| Privacy by design | Undersøg hvilke personoplysninger der sendes til server og model |
| API'er og biblioteker | Vurder SDK, transport, versionsvalg og forsyningskæde |
| Inputdata | Test både forventet, uventet og ondsindet input |
| Risiko | Vurder sandsynlighed, konsekvens, tiltag og resterende risiko |

## Relevante trusselsområder

- for brede eller uklart beskrevne tools
- manglende autentifikation eller autorisation
- prompt injection i data fra resources eller tool-resultater
- ugyldigt input og manglende outputvalidering
- utilsigtede eller destruktive handlinger
- lækage af secrets, personoplysninger eller interne fejl
- usikker transport og forkert håndtering af tokens
- sårbare eller kompromitterede biblioteker og container-images
- utilstrækkelig logning eller logs med følsomme oplysninger
- manglende isolation mellem brugere og serverprocesser

## Foreslået aktivitet

Gennemfør et sikkerhedsreview af en valgfri MCP-integration:

1. Afgræns system, aktiver, aktører og tillidsgrænser.
2. Kortlæg dataflow og capabilities.
3. Identificér relevante trusler og misbrugsscenarier.
4. Gennemfør test med lovligt og ikke-lovligt input.
5. Vurder autentifikation, autorisation, secrets, logs og afhængigheder.
6. Foreslå eller implementér sikkerhedstiltag.
7. Dokumentér den resterende risiko.

Aktiviteten kan gennemføres som kodegennemgang, dynamisk test, trusselsmodellering eller en kombination.

## Forslag til leverance

- system- og dataflowdiagram
- trusselsmodel
- risikovurdering
- sikkerhedstest med forventede og faktiske resultater
- dokumentation af mindst ét relevant sikkerhedstiltag
- vurdering af resterende risiko

## Kontrolpunkt

Den studerende skal kunne begrunde, hvorfor en capability findes, hvem der må bruge den, hvilke data den må tilgå, og hvordan misbrug opdages eller begrænses. AI-agentens forslag kan indgå i arbejdet, men sikkerhedsvurderingen skal kunne efterprøves fagligt.

## Kilde

- [Samlet studieordning for IT-sikkerhed, august 2026](https://www.zealand.dk/wp-content/uploads/2021/02/Samlet-studieordning-IT-sikkerhed-august-2026.pdf)
