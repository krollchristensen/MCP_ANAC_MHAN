# MCP i Programmering 1

MCP kan indgå i Programmering 1 som en praksisnær ramme for programdesign, implementering, dataadgang, test og dokumentation. Det er ikke nødvendigt at anvende en bestemt server eller et bestemt domæne.

[Tilbage til den faglige oversigt](../README.md)

## Kobling til studieordningen

Programmering 1 omhandler design og programmering af IT-systemer af høj kvalitet i en hensigtsmæssig arkitektur. Faget omfatter blandt andet programmeringssprog, algoritmer, datastrukturer, databaser, samtidighed, udviklingsmiljøer, biblioteker, test og kvalitetssikring.

MCP kan understøtte disse mål, når de studerende arbejder med selve programløsningen og ikke kun med AI-klienten.

| Fokus i faget | Mulig MCP-aktivitet |
| --- | --- |
| Hensigtsmæssig arkitektur | Adskil MCP-lag, domænelogik og dataadgang |
| Centrale biblioteker | Anvend og dokumentér et relevant MCP-SDK |
| Database | Udstil afgrænset læse- eller skriveadgang til en database |
| Samtidighed | Undersøg samtidige kald og beskyt delte data |
| Test og kvalitetssikring | Test tool-handlers, validering, fejl og domænelogik |
| Dokumentation | Beskriv capabilities, input, output og begrænsninger |

## Mulige undervisningsaktiviteter

- Tilføj et MCP-lag til en eksisterende mindre applikation.
- Udstil en afgrænset domænefunktion som et tool.
- Udstil aktuelle data som en resource uden at give adgang til vilkårlige filer eller tabeller.
- Sammenlign direkte fil- eller databaseadgang med adgang gennem et repository eller servicelag.
- Skriv automatiserede test af gyldigt input, ugyldigt input og forventede fejl.
- Vurder kodekvalitet og refaktorér en løsning med for tæt kobling mellem protokol og domænelogik.

Domænet kan eksempelvis være bøger, produkter, reservationer, sensordata eller et eksisterende semesterprojekt.

## Forslag til leverance

Den studerende kan aflevere:

- kildekode med en tydelig opdeling i ansvar
- automatiserede test
- en kort arkitekturforklaring
- dokumentation af serverens capabilities
- eksempler på både accepteret og afvist input
- en vurdering af løsningens programkvalitet

## Kontrolpunkt

Den studerende skal kunne følge et kald fra MCP-grænsefladen gennem domænelogikken til data og tilbage igen. Den studerende skal også kunne forklare, hvordan resultatet er testet og verificeret.

## Kilde

- [Samlet studieordning for Datamatiker 2026](https://www.zealand.dk/wp-content/uploads/2016/09/Samlet-studieordning-Datamatiker-2026.pdf)
