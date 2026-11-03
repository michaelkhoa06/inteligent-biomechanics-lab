# KSU-lab-v2

Intelligent Biomechanics Lab Website

## Publications

The Publications page is generated from `src/data/publications.json`, which is rebuilt automatically every time the site is built (`npm run build`). The list comes from Dr. Shi's ORCID profile and Semantic Scholar, with author lists filled in from Crossref.

- To refresh the list without building: `npm run fetch:pubs`
- To add a paper that isn't on ORCID or Semantic Scholar, or fix a wrong title/author list: add it to `src/data/publications-manual.json`
- To hide a paper (for example one matched to a different Lei Shi): add its DOI or title to `src/data/publications-exclude.json`

If ORCID or Semantic Scholar is down during a build, the previous list is kept and the build continues.

## Research videos

The Machine Learning, Multiscale Modeling, and Constitutive Modeling areas on the Research page have video slots. Put the video in `public/assets/videos/` (or use a YouTube/Vimeo link) and set its `src` in the `videos` list at the top of `src/pages/research.astro`. Slots without a video show a "coming soon" placeholder. Experiments & Testing uses the equipment list below.

## Equipment photos and models

The Experiments & Testing section displays one overview photo on the left and an equipment model table on the right. Put equipment photos in `public/assets/images/equipment/`.

The current overview photos are:

| Equipment | Photo filename |
| --- | --- |
| Instron testing machine and BioPuls biobath | `20250801_171117599_iOS.jpg` |
| CellScale biomaterials testing system | `20250505_010327205_iOS.jpg` |
| Sakura cryostat | `20250505_010211898_iOS.jpg` |

Each equipment entry uses only one overview photo, with no thumbnails or detail-photo gallery. The other photos in this folder are not displayed. Images are contained within their frame so equipment is not cropped.

Edit `src/data/equipment.json` to update the equipment list. Each item has `id`, `name`, `manufacturer`, `model`, `image`, and `imageAlt` fields. Set `model` to the confirmed equipment model and `image` to the public image URL, for example `/assets/images/equipment/20250801_171117599_iOS.jpg` (omit the `public` prefix). If a photo has a different filename or extension, update `image` to match. Use `imageAlt` to describe the equipment shown. Leave unconfirmed manufacturer or model fields empty; an empty manufacturer is omitted, while an empty model shows a contact link for model details. Missing photo files show a placeholder.

The Instron `68SC-1` and Sakura `Tissue-Tek Cryo3 Flex` names were read from the supplied equipment photos. The CellScale model remains unconfirmed.

After adding or replacing photos, reload the development page. Rebuild the site before publishing so the photo availability check is updated.
