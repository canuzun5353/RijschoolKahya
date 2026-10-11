# Rijschool Kahya

Onderhoudbare statische website, Nederlands op `/`, Turks op `/tr/`.

## Publicatie
GitHub Pages: Deploy from a branch → main → / (root).
Eigen domein: rijschoolkahya.nl. HTTPS afdwingen zodra het certificaat beschikbaar is.

DNS: vier A-records voor @ (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), CNAME www → canuzun5353.github.io.
Controleer bestaande AAAA-records en website-forwarding vóór migratie. Bewaar alle e-mailrecords, nameservers en DNSSEC.

## Inhoud bijwerken
Wijzig beide index.html-bestanden voor Nederlandse en Turkse inhoud.
Gedeelde opmaak: styles.css. Mobiel menu: script.js.
Geen framework, externe fonts, analytics, trackers of eigen backend.
PlanRijles-login POST rechtstreeks naar de officiële externe dienst; geen eigen opslag.

## Nog te bevestigen vóór definitieve oplevering
- Origineel logo aanleveren. De bestaande tekstnaam uit de eerdere website is behouden.
- KvK-gegevens via officieel register: openbare directories bevatten ook oudere gegevens. Geen KvK-nummer gepubliceerd.
- Openingstijden zondag.
- Definitieve, goedgekeurde privacyverklaring en eventuele algemene voorwaarden aanleveren. Alleen feitelijke websiteprivacy-informatie is opgenomen; geen voorwaarden verzonnen.
- Flexpulse-accounttest: officiële registratie, wachtwoordherstel en POST-login; planning/voortgang met een geldig leerlingaccount controleren.
- Bestaande domein toont een hostingplaceholder. Vervanging en DNS-migratie vooraf laten bevestigen door de eigenaar.
