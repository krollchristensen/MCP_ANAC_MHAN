# MCP i Systemudvikling 1

MCP kan indgå i Systemudvikling 1 som case for behovsafdækning, krav, modellering, arkitektur, kvalitetssikring og sporbarhed. Det er ikke nødvendigt at implementere en MCP-server for at arbejde fagligt med emnet.

[Tilbage til den faglige oversigt](../README.md)

## Kobling til studieordningen

Systemudvikling 1 omhandler analyse af et problemområde og design af et mindre system. Faget omfatter blandt andet systemudviklingsmetoder, krav, modeller, softwarearkitektur, brugergrænseflader, test, kvalitetssikring, dokumentation og sporbarhed.

En MCP-integration er velegnet som case, fordi dens capabilities udgør en tydelig grænse mellem en AI-klient og et informationssystem.

| Fokus i faget | Mulig MCP-aktivitet |
| --- | --- |
| Behov og interessenter | Undersøg hvem der skal bruge integrationen og hvorfor |
| Krav | Beskriv tilladte handlinger, data, fejl og begrænsninger |
| Analyse og design | Modellér domæne, ansvar og centrale interaktioner |
| Softwarearkitektur | Placér MCP-laget i forhold til brugergrænseflade, services og data |
| Test og kvalitet | Udled test fra krav og acceptkriterier |
| Dokumentation og sporbarhed | Forbind behov, krav, design, implementering og test |

## Mulige undervisningsaktiviteter

- Udarbejd en interessent- og behovsanalyse for en valgfri MCP-integration.
- Beskriv hvilke capabilities der skal være resources, tools eller prompts.
- Formulér funktionelle krav og kvalitetskrav til eksempelvis sikkerhed, svartid og fejlhåndtering.
- Udarbejd use cases, domænemodel, komponentdiagram og sekvensdiagram.
- Gennemfør et arkitekturreview med fokus på ansvar og kobling.
- Udarbejd acceptkriterier og en testplan før implementering.
- Vurder om MCP overhovedet er den rigtige integrationsform til problemet.

## Generisk sporbarhed

| Behov | Krav | Design | Verifikation |
| --- | --- | --- | --- |
| Brugeren skal kunne hente aktuelle oplysninger | Serveren tilbyder en afgrænset læsefunktion | Resource eller read-only tool | Test med kendte data |
| En handling må kun udføres med gyldigt input | Input valideres før domænelogikken kaldes | Skema og servicelag | Negative testcases |
| Fejl skal være forståelige | Interne detaljer skjules for klienten | Fælles fejlhåndtering | Test af forventede fejl |

Tabellen er et mønster og kan tilpasses et selvvalgt domæne.

## Forslag til leverance

- kort problem- og behovsbeskrivelse
- krav og acceptkriterier
- relevante modeller og diagrammer
- arkitekturbegrundelse
- testplan og sporbarhedsmatrix
- vurdering af MCP som løsningsvalg

## Kontrolpunkt

Den studerende skal kunne begrunde systemets capabilities ud fra behov og krav. Et tool er dermed en del af systemets kontrakt og ikke blot en teknisk funktion, som AI-modellen kan kalde.

## Kilde

- [Samlet studieordning for Datamatiker 2026](https://www.zealand.dk/wp-content/uploads/2016/09/Samlet-studieordning-Datamatiker-2026.pdf)
