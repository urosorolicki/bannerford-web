# Bannerford design QA

## Evidence

The [shared mockup](https://chatgpt.com/s/m_6afebdfeb87c8191a83e4364171547cd) supplied a 1200 × 630 image, including 40px of black padding at each side. The comparison used the 1120 × 630 content crop and the [rendered homepage](docs/screenshots/reference-hero.jpg) at 1120 × 630 CSS pixels, device scale 1, with the page at the top and the menu closed. The full crop and focused crops of the masthead, feature cards, and parchment were reviewed together. The mockup ends within the parchment section.

The other tested widths were [1440px](docs/screenshots/desktop.jpg), [768px](docs/screenshots/tablet.jpg), and [390px](docs/screenshots/mobile.jpg), at device scale 1.

## Findings and fixes

- P1, masthead and hero alignment. The first 1120px capture put the headline about 78px to the left of its position in the mockup. The new editorial gutter places it within a few pixels of the source and leaves the banner visible at left. The mountain and bridge crop retains the bright village on the right.
- P2, feature grid. A fixed minimum height and aspect ratio made adjacent cards touch. The final four-column grid uses width-constrained tracks, gaps, and a separate height. All four illustrations and descriptions fit, and the layout switches to two columns on smaller screens.
- P2, spacing and wrapping. The first build cut the parchment heading off at the reference viewport height. Shorter card copy, tightened spacing above the parchment, and a more compact introduction bring the heading and its supporting copy into the visible opening.
- The warm gold, dark photographic overlay, cream serif headline, and illuminated parchment carry through the masthead and opening. Supporting text uses the site's sans-serif font at larger reading sizes than in the mockup. The illustrated crest, town panorama, card images, parchment, sketch, and wax seal are separate local assets.
- The mockup's buttons for gameplay and community lead to the available game overview and development journal in the implementation. GitHub is the verified external link.

## Browser checks

Local Chromium verified all images and anchors, mobile menu behavior, keyboard activation, the feature links, villager and production controls, and the console. Automated axe WCAG 2.1 A/AA checks reported zero findings at the four captured sizes. The hosted cloud browser preview route returned an upstream routing error, so the evidence comes from Chromium against the static export served locally.

final result: passed
