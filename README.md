# Seva Hifi website

Static artist website and industry EPK for **Pacific Psychedelic Soul**. The design uses Mona Sans for display type, Archivo for body copy and JetBrains Mono for small labels, with warm off-white, ink, indigo, teal and ochre.

## Repository source – 12 November 2026

The complete build includes the HTML, CSS, JavaScript, licensed Mona Sans font, supplied photographs and artwork. Web hosting and custom-domain configuration remain separate from this source upload.

## Content update – 12 November 2026

- Embedded “Kafisi Niue – introducing Seva Hifi”: https://www.youtube.com/watch?v=HJduRPhpvyc
- Mastered by Joshua Llewellyn at Downbeat Mastering.
- Revised track titles, order and durations from the supplied Seva_tracklist(3).xlsx. The digital album has **13 tracks · 53:30**. The upcoming vinyl album has **17 tracks · 70 minutes**. The displayed digital tracklist remains unchanged.
- Original Pressures of Life 7″ vinyl: https://sevahifi.bandcamp.com/album/pressures-of-life
- SoundCloud profile: https://soundcloud.com/sugarlicks_studio
- Self-hosted Mona Sans variable WOFF2 with its SIL Open Font License, sourced from github/mona-sans at commit 4bc6ba8b354c36b4fb66d32cd67b4c1f2beb0a06. The font's width and weight axes supply the intended wordmark without artificial stretching.

## Files and hosting

The homepage is `index.html`; the industry page is `epk/index.html`. Styles, scripts, imagery and the font are in `assets/`. No build or paid platform is required. GitHub Pages publishes the `main` branch from the repository root at https://sugarlicks.github.io/SevaHifi_website/. Configure sevahifi.com separately when ready.

## Continuing work

The complete source belongs in [Sugarlicks/SevaHifi_website](https://github.com/Sugarlicks/SevaHifi_website), including the supplied photos, artwork and licensed font. Continue from the repository rather than an older ZIP or a chat attachment. The webpage is the current EPK source; the earlier draft PDF can stay as it is.

The latest layout revision has source checks for structure, links, assets, declared image sizing, colour contrast and reduced-motion rules. Browser review of this revision is still pending because the preview environment was unavailable. Content remains visible without JavaScript, and the EPK navigation links back to the homepage and contact section.

## Layout revision – 12 November 2026

- Split hero with a primary Industry EPK button and a secondary Listen anchor.
- Baz's full 640 × 359 landscape image is rendered at width 100% and height auto; the hero has no fixed image height or crop.
- Video follows the hero, with the original 7″ identified as an earlier release.
- The album pairs the full cover painting with digital and vinyl format blocks and three separate credit lines.
- Three equal musician cards retain the approved biographies and full roles.
- The partnership block has a 2 × 2 list on desktop, a mobile stack, an EPK button and direct email.
- Both pages use the agreed font pairing. The digital EPK tracklist and video playback defaults are preserved.

## Video playback

The website player uses the YouTube IFrame API to request full volume and unmuted playback on its first play. It clears the initial caption track when YouTube exposes that caption option; viewers can use the native controls afterwards. The EPK video button opens this same website player. Playback starts with a visitor's click.

## Listening access

The supplied SoundCloud link is a profile rather than a secret track or playlist URL. The site labels it accurately and offers email contact for private album listening. A private share link can replace that contact route when supplied.

The EPK is an unlisted public page with noindex/nofollow metadata and a robots.txt exclusion. It is not access-controlled. No unreleased audio or private share tokens are committed to this public repository.

## Remaining content

See CONTENT-TBC.md for the private listening link and press pack.
