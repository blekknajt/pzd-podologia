# PZD Podologia — Strona internetowa (Hugo)

Repozytorium strony internetowej dla gabinetu podologicznego **PZD Podologia — mgr Patrycja Zakrzewska-Dworczak** (Budziechów 88, 68-300 Lubsko).

## Uruchomienie lokalne

Wymagany jest [Hugo](https://gohugo.io/) (projekt przetestowany z Hugo `v0.170.1`, bez zależności od Node/Sass).

```bash
# Podgląd na żywo (domyślnie http://localhost:1313)
hugo server -D

# Budowa produkcyjna do katalogu public/
hugo --minify
```

## Struktura projektu

- `hugo.toml` — konfiguracja witryny, menu, dane kontaktowe, linki social media i ścieżki do mediów
- `data/services.yaml` — lista zabiegów podologicznych (używana na stronie głównej i `/zabiegi/`)
- `data/pricing.yaml` — pogrupowany cennik usług (używany na stronie głównej i `/cennik/`)
- `data/cases.yaml` — przypadki kliniczne / efekty terapii (`#efekty`)
- `data/faq.yaml` — najczęstsze pytania przed wizytą (`#faq`)
- `data/hours.yaml` — godziny otwarcia gabinetu
- `content/` — podstrony (`zabiegi.md`, `cennik.md`, `o-gabinecie.md`, `kontakt.md`, `regulamin.md`, `polityka-prywatnosci.md`)
- `layouts/` — dedykowany szablon Hugo (`baseof.html`, `home.html`, `_partials/`)
- `assets/css/main.css` oraz `assets/js/main.js` — style i lekki skrypt nawigacji (minifikowane przez Hugo Pipes)
- `static/images/` — docelowy katalog na zdjęcia i grafiki z Dysku Google

## Integracja materiałów z Dysku Google

Po pobraniu materiałów z folderu Google Drive wystarczy umieścić zoptymalizowane pliki w `static/images/` i uzupełnić ścieżki:

1. **Logo i zdjęcia gabinetu** w `hugo.toml` (`[params.media]`):
   - `logo` → np. `"/images/logo-pzd.svg"` (zastąpi wektorowy monogram nagłówka i stopki)
   - `heroPortrait` → np. `"/images/patrycja-portret.jpg"` (wskoczy w ramkę hero na stronie głównej)
   - `clinicInterior` → np. `"/images/gabinet-wnetrze.jpg"` (podstrona *O gabinecie*)
   - `clinicExterior` → np. `"/images/gabinet-budynek.jpg"` (sekcja *Kontakt i dojazd*)
   - `ogImage` → np. `"/images/og-pzd-podologia.jpg"` (podgląd linku na Facebooku / komunikatorach)
2. **Zdjęcia efektów terapii (przed/po)** w `data/cases.yaml` (pole `image` dla każdego przypadku).
3. **Weryfikacja pełnego cennika i regulaminu** w `data/pricing.yaml` oraz `content/regulamin.md`.
