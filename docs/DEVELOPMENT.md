# Website Development and Maintenance

Astro static website for the Intelligent Biomechanics Lab at Kennesaw State University.

## Development

Use Node.js 22.12 or later in the supported Node 22 release line.

```sh
npm ci
npm run dev
```

```sh
npm run build          # Refresh publications, then generate dist/
npm run build:offline  # Build from the checked-in publication data
npm run check          # Check generated local links and media references
npm run preview       # Preview the production build
```

Publish the generated `dist/` directory. There is no backend or database requirement.

## Project structure

```text
src/
  pages/                 Routes and page composition
  layouts/               Shared page document
  components/
    layout/              Header and footer
    home/                Home page sections
    members/             Shared member profile presentation
    research/            Research media presentation
  data/                  Site settings, news, people and publication data
  scripts/               Browser interactions
  styles/                Global and scoped page styles
public/assets/           Images, videos and favicons served without processing
scripts/                 Publication refresh and build validation
```

Astro pages own the URLs. Keep editable content in `src/data/`, reusable presentation in `src/components/`, and browser behavior in `src/scripts/`. Page styles are imported inside Astro `<style>` blocks so they remain scoped. Member profiles share their templates and styles while retaining their existing layout variants.

`node_modules/`, `.astro/` and `dist/` are generated and ignored by Git. Legacy alternate member pages now redirect to the current profiles. Unused templates and abandoned database/upload tooling have been removed. The only legacy database containing records is preserved locally in `archive/legacy-data/app.db`; see [the archive notes](../archive/README.md).

## Updating content

| Content | Location |
| --- | --- |
| Contact details and site identity | `src/data/client.json` |
| Main navigation | `src/data/navigation.json` |
| News announcements | `src/data/news.ts` |
| First-year cohorts and visiting scholars | `src/data/team.ts` |
| Member biographies | `src/data/members/` |
| Research videos | `src/data/research-videos.ts` |
| Equipment | `src/data/equipment.json` |
| Publication cache | `src/data/publications.json` |

Home slideshow photos are read from `public/assets/images/hero/`; keep that directory intact when replacing photos. Use public URLs such as `/assets/images/equipment/photo.jpg` without the `public` prefix. Keep existing public URLs when replacing assets so shared links continue to work.

## News pagination

Edit announcements in `src/data/news.ts`. News shows five stories per page, with synchronized page controls above and below the results. Topic filters, keyword searches, and sort changes reset the results to page one.

The URL parameters `page`, `topic`, `q`, and `sort` preserve the current page and filters when refreshing or sharing the URL. Pagination is handled in the browser; no separate news-page files are needed.

## Publications

`npm run build` refreshes the publication list from Dr. Shi's ORCID profile and Semantic Scholar, with author lists filled in from Crossref. If both sources fail, the previous list is retained.

- Refresh without building: `npm run fetch:pubs`.
- Add or correct a paper: `src/data/publications-manual.json`.
- Hide a mismatched paper: `src/data/publications-exclude.json`.
- Use `npm run build:offline` for reproducible layout checks without changing the publication list.

## Research media and equipment

Set video `src`, `poster`, `title` and `caption` in `src/data/research-videos.ts`. Local videos live in `public/assets/videos/`; YouTube and Vimeo URLs are also supported. An empty `src` keeps the existing coming-soon placeholder.

Equipment content lives in `src/data/equipment.json`. Each entry uses `id`, `name`, `category`, `manufacturer`, `model`, `image` and `imageAlt`; optional `photos` entries contain an additional photo's `src` and `alt`. Photos are contained within their frame without cropping, and visitors can open each photo at full size. Leave unconfirmed manufacturer or model fields empty; the page omits unknown values.

To add or replace an equipment photo:

1. Place the photo in `public/assets/images/equipment/`.
2. Update the corresponding entry's `image` and `imageAlt` fields in `src/data/equipment.json`. Use a public URL such as `/assets/images/equipment/OCT.jpeg`, without the `public` prefix.
3. Update `manufacturer`, `model`, and any optional photo or nameplate information in the same entry as needed.
4. Run `npm run dev` to review `/research/#experiments`, then run `npm run build` (or `npm run build:offline`) and publish the generated `dist/` directory to make the change live.

Visitors can click equipment photos to enlarge them. Photo updates are made through the project files.

The gallery currently contains **8 equipment entries, 8 equipment photos, and 2 nameplate photos**. These paths are relative to `public/assets/images/equipment/`:

| Equipment | Main photo | Additional photo |
| --- | --- | --- |
| Universal Testing Machine & BioPuls Biobath — Instron 68SC-1 | `20250801_171117599_iOS.jpg` | |
| Biomaterials Testing System — CellScale | `Biomaterials Testing System.jpg` | |
| Optical Coherence Tomography (OCT) — Lumedica OQ LABSCOPE 3.0 | `OCT.jpeg` | |
| Research Microscope — Olympus | `Research Microscope.jpeg` | |
| Cryostat — Sakura Tissue-Tek Cryo3 Flex | `20250505_010211898_iOS.jpg` | |
| Automatic Sterilmatic Sterilizer — Market Forge | `Automatic Sterilmatic Sterilizer.jpeg` | |
| Isotemp Freezer — Fisherbrand | `Image.jpeg` | |
| Cold Storage Cabinet — VWR | `Image (1).jpeg` | |

Use public URLs such as `/assets/images/equipment/OCT.jpeg` in the data, without the `public` prefix. Keep the original equipment image files when adding or replacing photos.

Nameplate information is stored with the equipment entry: optional `specifications` are label/value pairs shown on the card; `nameplate` contains a source photo, identification records, and optional calibration-label records in expandable details. The supplied nameplates are preserved in `public/assets/images/equipment/nameplates/instron-68sc-1.png` and `lumedica-oq-labscope-3.png`.

The Instron label was printed on 02 Apr 2024 and shows a due date of 02 Apr 2025. Treat this as a photographed historical record, not evidence of current calibration. Its `2530-50N/173580` transducer ID does not establish the testing machine's maximum load capacity. The Lumedica nameplate confirms model **OQ LABSCOPE 3.0**, serial **OQL-03-0109**, manufacture year **2025**, **12 V DC**, **102 W**, and **Research use only**.
