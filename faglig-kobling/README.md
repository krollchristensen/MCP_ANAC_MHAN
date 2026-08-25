# MCP i Teknologi 2

MCP kan indgå i Teknologi 2 som case for netværk, distribuerede systemer, virtualisering, deployment, hosting, sikkerhed og bæredygtighed. Fokus er på teknologivalget og infrastrukturen, ikke på et bestemt servereksempel.

[Tilbage til den faglige oversigt](../README.md)

## Kobling til studieordningen

Teknologi 2 omhandler teknologiske problemstillinger inden for netværk, distribuerede systemer og sikkerhed under hensyntagen til bæredygtighed. Deployment og hosting indgår ligeledes i fagelementet.

| Fokus i faget | Mulig MCP-aktivitet |
| --- | --- |
| Distribuerede systemer | Analysér placering og kommunikation mellem host, server og eksterne tjenester |
| Netværk | Undersøg adresser, porte, DNS, TLS og forbindelsesfejl ved remote MCP |
| Applikationsprotokoller | Sammenlign MCP-transport med HTTP-baserede API'er |
| Virtualisering | Kør en MCP-server i en container eller virtuel maskine |
| Deployment og hosting | Etablér og dokumentér et reproducerbart driftsmiljø |
| Sikkerhed | Begræns netværk, rettigheder, secrets og adgang til data |
| Bæredygtighed | Vurder ressourceforbrug, skalering og levetid for infrastrukturen |

## Mulige undervisningsaktiviteter

- Sammenlign lokal afvikling, containerafvikling og en remote tjeneste.
- Containerisér en selvvalgt MCP-server og dokumentér image, bruger, volumes og netværk.
- Undersøg Streamable HTTP og de netværkskomponenter, der indgår i forbindelsen.
- Konfigurér TLS og vurder behovet for autentifikation og autorisation.
- Design et deployment med miljøvariabler og sikker håndtering af secrets.
- Mål eller estimer ressourceforbrug ved forskellige driftsformer.
- Vurder om en gateway giver en reel driftsfordel i en løsning med flere MCP-servere.

## Sammenligningsramme

| Driftsform | Fordel | Udfordring |
| --- | --- | --- |
| Lokal proces | Enkel og tæt på brugeren | Afhænger af lokalt miljø og lokale rettigheder |
| Container | Reproducerbart og isoleret miljø | Kræver styring af volumes, bruger og netværk |
| Remote service | Fælles adgang og central drift | Kræver sikkerhed, overvågning og skalering |
| Gateway | Central konfiguration af flere servere | Tilføjer et ekstra drifts- og tillidslag |

Docker er en relevant mulighed, men ikke et krav for at anvende MCP fagligt i Teknologi 2.

## Forslag til leverance

- infrastruktur- og netværksdiagram
- reproducerbar deploymentvejledning
- dokumentation af transport og sikkerhedsindstillinger
- sammenligning af mindst to driftsformer
- begrundet teknologivalg
- kort vurdering af ressourceforbrug og bæredygtighed

## Kontrolpunkt

Den studerende skal kunne begrunde, hvor serveren bør køre, hvordan klienten forbinder, og hvilke konsekvenser valget har for drift, sikkerhed og ressourceforbrug.

## Kilde

- [Samlet studieordning for Datamatiker 2026](https://www.zealand.dk/wp-content/uploads/2016/09/Samlet-studieordning-Datamatiker-2026.pdf)
