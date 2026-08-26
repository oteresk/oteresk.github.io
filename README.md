# davidkoster.net

React + Vite + MUI. Deployed to GitHub Pages via `npm run deploy` (CNAME → davidkoster.net).

```bash
npm install
npm run dev      # local dev
npm run build    # production build into dist/
npm run deploy   # gh-pages
```

## Where the content lives

All copy is data, not markup. You should never need to touch a component to update the site.

| What | File |
|---|---|
| Hero bio, stats, availability, skills, certs, nav, links | `src/assets/constants.js` |
| Jobs, roles, bullets | `src/assets/experience.js` |
| Projects (shipped + student) | `src/assets/projects.js` |
| Case studies (`CASE_STUDIES`, an array) | `src/assets/casestudy.js` |
| Resume PDF, favicon, OG image | `public/` |

## Rules that matter

**Every number on this site must be defensible in an interview.** `STATS` in
`constants.js` and `metrics` in `casestudy.js` are the load-bearing claims. Do not
add one you can't source.

**Projects are most-recent-first.** `PROJECTS` is shipped/commercial work,
`STUDENT_PROJECTS` is coursework and renders collapsed below it. Keep them separate —
the whole point is that a skimmer can tell them apart without clicking.

**`contribution` is what you owned, `pitch` is what the game is.** A hiring producer
reads the first and skims the second. Don't paste store copy into `contribution`.

## Adding a project

```js
{
  title: 'Game Name',
  role: 'Producer',              // your title on THIS project
  org: 'Studio Name',
  year: '2025',
  platforms: ['Steam'],          // renders as chips on the card face
  status: 'Shipped',             // Shipped | Demo shipped | In production | Student
  pitch: 'One or two lines on what the game is.',
  contribution: ['What you owned.', 'What you unblocked.'],
  caveat: 'Optional. Use when the credit needs an honest asterisk.',
  links: [{ type: 'steam', url: '...' }],   // steam | itch | kickstarter | meta | youtube
  media: [img(thumbnail), img(screenshot), vid(clip, poster)],
}
```

First entry in `media` is the card thumbnail. For a `vid`, the poster is used.

## Adding an experience entry

Newest job first, and newest role first *within* a job, so a promotion reads top-down.
Every entry needs a `logo` and a `banner`; `logoBgColor`/`bannerBgColor` set the plate
behind them so a transparent PNG still reads.

The section uses CSS columns, not a grid — these cards differ a lot in height and a grid
row leaves a dead gap under the shorter one.

## Adding images — compress first

Source screenshots are 2–4 MB PNGs. They do not go in the repo at that size; the site
was 318 MB before this was enforced. Convert before importing:

```bash
# stills -> webp
ffmpeg -i shot.png -vf "scale='min(1600,iw)':-1:flags=lanczos" -c:v libwebp -quality 82 shot.webp

# motion -> webm + a poster still (never commit a GIF)
ffmpeg -i clip.gif -vf "scale='min(900,iw)':-2:flags=lanczos,fps=12" -c:v libvpx-vp9 -crf 38 -b:v 0 -an clip.webm
ffmpeg -i clip.gif -vf "scale='min(900,iw)':-2" -frames:v 1 -c:v libwebp -quality 80 clip.poster.webp
```

`ffmpeg` on Fedora can *encode* animated WebP but not decode it. Keep source GIFs
outside the repo if you might need to re-encode later.
