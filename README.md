# PZD Podologia — Strona internetowa (Hugo)

Repozytorium strony internetowej dla gabinetu podologicznego **PZD Podologia — mgr Patrycja Zakrzewska-Dworczak** (Budziechów 88, 68-300 Lubsko, w budynku studia fizjoterapii i treningu *Dobry Ruch*).

## Uruchomienie lokalne

Wymagany jest [Hugo](https://gohugo.io/) (projekt przetestowany z Hugo `v0.170.1`, bez zależności od Node/Sass).

```bash
# Podgląd na żywo (domyślnie http://localhost:1313)
hugo server -D

# Budowa produkcyjna do katalogu public/
hugo --minify --cleanDestinationDir
```

## Struktura projektu

- `hugo.toml` — konfiguracja witryny, menu, dane kontaktowe, linki social media i ścieżki do mediów
- `data/services.yaml` — zakres zabiegów podologicznych (strona główna + `/zabiegi/`)
- `data/pricing.yaml` — oficjalny cennik usług zgodny z grafiką gabinetu (strona główna + `/cennik/`)
- `data/cases.yaml` — rzeczywiste efekty terapii ze zdjęciami przed/po (`#efekty`)
- `data/faq.yaml` — najczęstsze pytania przed wizytą (`#faq`)
- `data/hours.yaml` — godziny przyjęć gabinetu
- `content/` — podstrony (`zabiegi.md`, `cennik.md`, `o-gabinecie.md`, `kontakt.md`, `regulamin.md`, `polityka-prywatnosci.md`)
- `layouts/` — dedykowany szablon Hugo (`baseof.html`, `home.html`, `_partials/`)
- `assets/css/main.css` oraz `assets/js/main.js` — style, nawigacja mobilna i lekki podgląd (lightbox) zdjęć terapii
- `static/images/` — zdjęcia i materiały pobrane z folderu Google Drive (`patrycja-hero.jpg`, `patrycja-gabinet.jpg`, `gabinet-budynek.jpg` oraz `efekty/*.jpg`)

## Zintegrowane materiały

Projekt zawiera pełny komplet materiałów z Dysku Google i oficjalnego profilu Facebook PZD Podologia:
- oficjalny portret z logo marki (`static/images/patrycja-hero.jpg`) w sekcji hero i jako obrazek Open Graph,
- zdjęcie gabinetu i specjalistki (`static/images/patrycja-gabinet.jpg`) w sekcji *Poznajmy się* oraz na podstronie `/o-gabinecie/`,
- zdjęcie budynku *Dobry Ruch / Budziechów 88* (`static/images/gabinet-budynek.jpg`) w sekcji *Kontakt i dojazd*,
- 6 udokumentowanych przypadków terapii przed/po w sekcji *Rzeczywiste efekty terapii* (z podglądem pełnoekranowym),
- oficjalny cennik oraz pełny regulamin gabinetu (§ 1 – § 5).
