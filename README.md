# Seva Hifi website

Static artist website and industry EPK for **Pacific Psychedelic Soul**. The selected logo is the 11C refined mark with an independent first I and a single F–I top connection. Dual Grafika Medium supplies unjoined headings, Dual Grafika Regular supplies short subtitles, Archivo supplies body copy, and JetBrains Mono supplies small metadata. The palette retains light rose, ink and the deep red sampled from the album painting.

## Repository source – 12 November 2026

The complete build includes the HTML, CSS, JavaScript, supplied photographs, artwork and outlined logo. The purchased Dual Grafika WOFF2 is used unmodified for the site. Web hosting and custom-domain configuration remain separate from this source upload.

## Content update – 12 November 2026

- Embedded “Kafisi Niue – introducing Seva Hifi”: https://www.youtube.com/watch?v=HJduRPhpvyc
- Mastered by Joshua Llewellyn at Downbeat Mastering.
- Revised track titles, order and durations from the supplied Seva_tracklist(3).xlsx. The digital album has **13 tracks · 53:30**. The upcoming vinyl album has **17 tracks · 70 minutes**. The displayed digital tracklist remains unchanged.
- Original Pressures of Life 7″ vinyl: https://sevahifi.bandcamp.com/album/pressures-of-life
- SoundCloud profile: https://soundcloud.com/sugarlicks_studio
- The earlier Mona Sans font remains with its SIL Open Font License as a legacy asset; the current branding uses Dual Grafika and outlined SVGs.

## Files and hosting

The homepage is `index.html`; the industry page is `epk/index.html`. Styles, scripts, imagery and the font are in `assets/`. No build or paid platform is required. GitHub Pages publishes the `main` branch from the repository root at https://sugarlicks.github.io/SevaHifi_website/. Configure sevahifi.com separately when ready.

## Continuing work

The complete source belongs in [Sugarlicks/SevaHifi_website](https://github.com/Sugarlicks/SevaHifi_website), including the supplied photos, artwork and licensed font. Continue from the repository rather than an older ZIP or a chat attachment. The webpage is the current EPK source; the earlier draft PDF can stay as it is.

The latest layout revision has source checks for structure, links, assets, declared image sizing, colour contrast and reduced-motion rules. Both pages have been visually reviewed in the browser on desktop and in a 390-pixel mobile frame, with no horizontal overflow. The landscape hero and album art retain their original proportions. Content remains visible without JavaScript, and the EPK navigation links back to the homepage and contact section.

## Layout revision – 12 November 2026

- Split hero with a primary Industry EPK button and a secondary Listen anchor.
- Baz's full 640 × 359 landscape image is rendered at width 100% and height auto; the hero has no fixed image height or crop.
- Video follows the hero, with the original 7″ identified as an earlier release.
- The album pairs the full cover painting with digital and vinyl format blocks and three separate credit lines.
- Three equal musician cards retain the approved biographies and full roles.
- The partnership block has a 2 × 2 list on desktop, a mobile stack, an EPK button and direct email.
- Both pages use the agreed font pairing. The digital EPK tracklist and video playback defaults are preserved.

## Typography and palette revision – 12 November 2026

- Lowercase Mona Sans wordmark and display headings on both pages, with contextual alternates and ligatures disabled to keep both i dots visible.
- Light rose `#eed1cf` is retained, with deep red `#92262c` sampled from the painting’s left-hand figure replacing the blue blocks and shadows.
- Body copy remains Archivo; small labels remain JetBrains Mono. Approved copy, credits, imagery, track listing and video behaviour are unchanged.

## Video playback

The website player uses the YouTube IFrame API to request full volume and unmuted playback on its first play. It clears the initial caption track when YouTube exposes that caption option; viewers can use the native controls afterwards. The EPK video button opens this same website player. Playback starts with a visitor's click.

## Listening access

The supplied SoundCloud link is a profile rather than a secret track or playlist URL. The site labels it accurately and offers email contact for private album listening. A private share link can replace that contact route when supplied.

The EPK is an unlisted public page with noindex/nofollow metadata and a robots.txt exclusion. It is not access-controlled. No unreleased audio or private share tokens are committed to this public repository.

## Remaining content

See CONTENT-TBC.md for the private listening link and press pack.



## Selected logo and type – 13 November 2026

- Restored the 11C refined logo identified in Gareth’s screenshot. H and the first I are independent; only F and the final I join at the top. SEVA’s custom curved lettering is retained.
- The same outlined logo appears in the navigation, hero and footer on both the homepage and EPK. SVG aspect ratios remain locked.
- Unjoined headings use Dual Grafika Medium and short subtitles use Regular. Body copy stays Archivo for reading comfort. Small metadata stays JetBrains Mono.
- The supplied variable WOFF2 has a custom wght range of 10–180. CSS sets Regular=84 and Medium=95 explicitly; font synthesis is disabled for these elements. Use the original provided webfont, not converted desktop fonts. See FONT-NOTICE.md.
- Album details, credits, biographies, track listing, links, photographs and video playback code are unchanged.

- This branding release was reviewed in the browser on desktop and in a 390px mobile frame on both pages. No horizontal overflow was found, and the full hero photograph and cover painting retain their proportions.


## January 2027 outreach assets

- The homepage names Pacific Psychedelic Soul directly beneath the main artist logo.
- The selected logo supplies the SVG favicon, ICO fallback and Apple touch icon on both pages.
- Both visible footers use the fixed year 2027. The homepage footer does not use the automatic current-year hook.
- The EPK navigation offers a direct download of epk/downloads/seva-hifi-epk-2027.pdf; the homepage contact links also include the PDF.
- The six-page PDF retains selectable text, embedded fonts, vector logos, photographs, album facts, the 13-track digital listing, biographies, credits and 25 clickable links. Photographs retain their aspect ratios and full frames.
- Desktop and 390px mobile layouts were reviewed without horizontal overflow. PDF pages were rendered and inspected, and text, track counts and links were verified.


## Biographies and link behaviour – 14 November 2026

- Replaced Baz’s biography with the supplied Niuean/Samoan text; removed the Gareth Farry alias from Gmuva’s biography.
- Added congas to Levani’s role and core credits.
- Industry EPK and email links on the homepage use new tabs. Every online EPK link uses a new tab with `rel="noopener"`; the PDF control retains its download behaviour.
- Added Sugarlicks on YouTube beneath the SoundCloud link on both pages and in the PDF listening section.
- Regenerated the six-page PDF, checked its changed pages visually and verified the revised text and 25 link annotations. The photographs retain their full frames without white panels.
- Verified the EPK opens separately from the homepage and checked the link targets on both pages. The broader FORGE audit remains paused at Gareth’s request.
