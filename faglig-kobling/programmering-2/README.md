# MCP i Programmering 2

MCP kan indgå i Programmering 2 som integrationsform i et distribueret system. De studerende kan arbejde med en selvvalgt case, en eksisterende applikation eller en ekstern tjeneste. En bestemt serverimplementation er ikke en forudsætning.

[Tilbage til den faglige oversigt](../README.md)

## Kobling til studieordningen

Programmering 2 omhandler design, arkitektur, programmering og deployment af distribuerede systemer samt kommunikationen mellem systemernes dele.

| Fokus i faget | Mulig MCP-aktivitet |
| --- | --- |
| Heterogene komponenter | Integrér en AI-klient med en service skrevet i et andet sprog eller på en anden platform |
| Distribueret programmering | Udvikl eller anvend en remote MCP-server |
| Samarbejdende processer | Håndtér flere samtidige klienter og fælles data |
| Netværksteknologier | Sammenlign lokal `stdio` med Streamable HTTP |
| Systemintegration | Placér MCP foran en eksisterende API, service eller datakilde |
| Kvalitative konsekvenser | Vurder kobling, svartid, robusthed, sikkerhed og vedligeholdelse |

## Mulige undervisningsaktiviteter

- Udstil udvalgt funktionalitet fra en eksisterende backend gennem MCP.
- Udvikl en MCP-klient, der opdager og kalder serverens capabilities.
- Sammenlign MCP med direkte REST-kald i den samme integrationscase.
- Flyt en lokal integration til en remote transport og dokumentér de nye fejlscenarier.
- Test timeouts, afbrudte forbindelser, ugyldige svar og utilgængelige afhængigheder.
- Undersøg flere samtidige brugere og konsistens i fælles data.
- Integrér komponenter udviklet i forskellige programmeringssprog.

## Arkitekturvalg

De studerende kan sammenligne følgende muligheder:

| Mulighed | Velegnet når | Centrale spørgsmål |
| --- | --- | --- |
| Lokal `stdio` | Serveren anvendes på samme computer som klienten | Proceslevetid, lokale rettigheder og installation |
| Remote MCP over HTTP | Flere klienter skal anvende en fælles tjeneste | Netværksfejl, autentifikation, samtidighed og skalering |
| Direkte API-integration | En almindelig applikation kalder en kendt service | Er MCP nødvendigt, eller tilføjer det blot kompleksitet? |

## Forslag til leverance

- implementeret integration
- komponent- og sekvensdiagram
- dokumentation af protokol og dataflow
- automatiserede integrations- og fejltest
- begrundet valg af transport og arkitektur
- vurdering af løsningens kvalitative konsekvenser

## Kontrolpunkt

Den studerende skal kunne forklare, hvilke dele der er distribuerede, hvordan de kommunikerer, og hvilke nye fejl- og sikkerhedsscenarier integrationen medfører.

## Kilde

- [Samlet studieordning for Datamatiker 2026](https://www.zealand.dk/wp-content/uploads/2016/09/Samlet-studieordning-Datamatiker-2026.pdf)
