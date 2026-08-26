import roe1 from './images/projects/riseOfElements/roe.webp';
import roe2 from './images/projects/riseOfElements/screenshot-1.webp';
import roe3 from './images/projects/riseOfElements/screenshot-2.webp';
import roe4 from './images/projects/riseOfElements/screenshot-3.webp';
import roe5 from './images/projects/riseOfElements/screenshot-4.webp';
import roe6 from './images/projects/riseOfElements/screenshot-5.webp';

import daa1 from './images/projects/darkAgeAsunder/darkageasunder.webp';
import daa2 from './images/projects/darkAgeAsunder/screenshot-1.webp';
import daa3 from './images/projects/darkAgeAsunder/screenshot-2.webp';
import daa4 from './images/projects/darkAgeAsunder/screenshot-3.webp';
import daa5 from './images/projects/darkAgeAsunder/screenshot-4.webp';
import daa6 from './images/projects/darkAgeAsunder/screenshot-5.webp';
import daa7 from './images/projects/darkAgeAsunder/screenshot-6.webp';
import daa8 from './images/projects/darkAgeAsunder/screenshot-7.webp';
import daa9 from './images/projects/darkAgeAsunder/screenshot-8.webp';

import escape1 from './images/projects/escapeFHW/escape.webp';
import escapeHero from './images/projects/escapeFHW/screenshot-2.webp';
import escape2 from './images/projects/escapeFHW/screenshot-1.webp';
import escape3 from './images/projects/escapeFHW/screenshot-4.webp';
import escape4 from './images/projects/escapeFHW/screenshot-9.webp';
import escape5 from './images/projects/escapeFHW/screenshot-10.webp';
import escape6 from './images/projects/escapeFHW/screenshot-11.webp';

import ronday1 from './images/projects/ronday/ronday-project.webp';
import rondayVid1 from './images/projects/ronday/ronday-one.webm';
import rondayPost1 from './images/projects/ronday/ronday-one.poster.webp';
import rondayVid3 from './images/projects/ronday/ronday-three.webm';
import rondayPost3 from './images/projects/ronday/ronday-three.poster.webp';
import rondayVid4 from './images/projects/ronday/ronday-four.webm';
import rondayPost4 from './images/projects/ronday/ronday-four.poster.webp';
import rondayVid5 from './images/projects/ronday/ronday-five.webm';
import rondayPost5 from './images/projects/ronday/ronday-five.poster.webp';

import together1 from './images/projects/togetherAgain/screenshot-1.webp';
import together2 from './images/projects/togetherAgain/screenshot-2.webp';
import together3 from './images/projects/togetherAgain/screenshot-3.webp';
import together4 from './images/projects/togetherAgain/screenshot-4.webp';
import together5 from './images/projects/togetherAgain/screenshot-5.webp';

import satiscifi1 from './images/projects/satiscifi/screenshot-1.webp';
import satiscifi2 from './images/projects/satiscifi/screenshot-2.webp';
import satiscifi3 from './images/projects/satiscifi/screenshot-3.webp';
import satiscifi4 from './images/projects/satiscifi/screenshot-4.webp';

import bobaCat1 from './images/projects/bobaCat/bobacat.webp';
import bobaCat2 from './images/projects/bobaCat/screenshot-1.webp';
import bobaCat3 from './images/projects/bobaCat/screenshot-2.webp';
import bobaCat4 from './images/projects/bobaCat/screenshot-3.webp';

const img = (src) => ({ type: 'image', src });
const vid = (src, poster) => ({ type: 'video', src, poster });

/*
  Most recent first. `contribution` is what a hiring producer is actually reading for -
  keep it to what David owned, not what the game is about.
*/
export const PROJECTS = [
  {
    title: 'Rise of Elements',
    role: 'Creative Producer',
    org: 'Wicked Fox Games',
    year: '2024 – 2026',
    platforms: ['Steam'],
    status: 'In production',
    heroFrame: roe5,
    heroCaption: 'RISE OF ELEMENTS · KICKSTARTER',
    pitch:
      'A match-3 narrative puzzle game with RPG systems. Compete in Argos’s Tournament of Champions for elemental mastery against the Void’s threat to Aetheron.',
    contribution: [
      'Coordinated the Kickstarter campaign: $53,302 raised against a $50,000 goal, funded in 15 days.',
      'Oversaw delivery of all campaign creative and a new marketing website across internal leads and outside vendors.',
      'Ran daily standups for the Creative and Marketing teams and built the Jira workflow they shared.',
      'Aligned team leads on feature scope, with named owners and deadlines coming out of every planning meeting.',
    ],
    caveat: 'The game had not released during my time on the project.',
    links: [
      { type: 'steam', url: 'https://store.steampowered.com/app/3170850/Rise_of_Elements/' },
      { type: 'kickstarter', url: 'https://www.kickstarter.com/projects/wickedfoxgames/riseofelements' },
    ],
    media: [img(roe1), img(roe2), img(roe3), img(roe4), img(roe5), img(roe6)],
  },
  {
    title: 'Dark Age Asunder',
    role: 'Producer',
    org: 'Plutonium Powered',
    year: '2023 – 2025',
    platforms: ['Steam'],
    status: 'Shipped',
    heroFrame: daa8,
    heroCaption: 'DARK AGE ASUNDER · STEAM',
    pitch:
      'An endless survival roguelite. Hold off waves of monsters while rebuilding the kingdom they levelled, unlocking abilities as you go.',
    contribution: [
      'Shipped the game on Steam as sole producer on a cross-functional team of 5.',
      'Published the Steam page and took the game through Steam Next Fest.',
      'Ran weekly standups and owned the Trello board: triage, tracking and delegation.',
      'Built the feature and self-publishing timelines the team worked to.',
    ],
    links: [{ type: 'steam', url: 'https://store.steampowered.com/app/3200770/Dark_Age_Asunder/' }],
    media: [img(daa1), img(daa2), img(daa3), img(daa4), img(daa5), img(daa6), img(daa7), img(daa8), img(daa9)],
  },
  {
    title: "Escape from Hadrian's Wall",
    role: 'Production Coordinator',
    org: 'Jim Gray Productions',
    year: '2024',
    platforms: ['Steam', 'Meta Quest'],
    status: 'Demo shipped',
    heroFrame: escapeHero,
    heroCaption: "HADRIAN'S WALL · STEAM + QUEST",
    pitch:
      'Britannia, 402 AD. A prisoner beneath Hadrian’s Wall escapes with a stranger’s magic tools, hunting the mage tied to the war, the wall and the magic itself.',
    contribution: [
      'Shipped the playable demo on two platforms, Steam and Meta Quest.',
      'Authored and deployed both storefront pages.',
      'Coordinated the Creative Director with engineering, art, QA, marketing and voice talent to clear roadblocks weekly.',
      'Directed the VO sessions for in-game dialogue and captured the marketing screenshots and footage.',
      'Wrote a 10-week marketing plan off my own market research.',
    ],
    links: [
      { type: 'steam', url: 'https://store.steampowered.com/app/3105560/Escape_from_Hadrians_Wall/' },
      { type: 'meta', url: 'https://www.meta.com/experiences/escape-from-hadrians-wall-demo/8709395859124519/' },
    ],
    media: [img(escape1), img(escape2), img(escape3), img(escape4), img(escape5), img(escape6)],
  },
  {
    title: 'Ronday',
    role: 'QA Tester → Assistant Producer',
    org: 'Ronday Technologies',
    year: '2022 – 2023',
    platforms: ['Windows', 'macOS'],
    status: 'Live service · sunset',
    pitch:
      'A collaboration platform built in Unity: a virtual office with spatial audio, voice and video, private meetings and multi-user screen sharing.',
    contribution: [
      'Supported live-service production across bi-weekly release candidates.',
      'Ran 10 external load tests and led the postmortem on each.',
      'Authored 8 release notes and produced 11 tutorial videos for onboarding.',
      'Started in QA executing 130 TestRail cases per cycle before moving into production.',
    ],
    caveat: 'The service shut down in July 2023 with the company, so it is no longer accessible.',
    links: [{ type: 'youtube', url: 'https://www.youtube.com/watch?v=JM-9ac89hy4' }],
    media: [
      img(ronday1),
      vid(rondayVid1, rondayPost1),
      vid(rondayVid3, rondayPost3),
      vid(rondayVid4, rondayPost4),
      vid(rondayVid5, rondayPost5),
    ],
  },
];

export const STUDENT_PROJECTS = [
  {
    title: 'Together Again',
    role: 'Student project',
    org: 'ART 195, San José State University',
    year: '2023',
    platforms: ['itch.io'],
    status: 'Student',
    pitch:
      'An interactive narrative through a crater, a park, a chaotic city, a jetway bridge and a sunflower field, about the distance in a long-distance relationship.',
    contribution: [],
    links: [{ type: 'itch', url: 'https://davidkoster.itch.io/together-again' }],
    media: [img(together1), img(together2), img(together3), img(together4), img(together5)],
  },
  {
    title: 'SatiSciFi Virtual Concert',
    role: 'Student project',
    org: 'ART 109, San José State University',
    year: '2022',
    platforms: ['itch.io'],
    status: 'Student',
    pitch: 'A virtual concert scene built in Unity.',
    contribution: [],
    links: [{ type: 'itch', url: 'https://davidkoster.itch.io/satiscifi-virtual-concert' }],
    media: [img(satiscifi1), img(satiscifi2), img(satiscifi3), img(satiscifi4)],
  },
  {
    title: 'Boba Cat',
    role: 'Student project',
    org: 'ART 108, San José State University',
    year: '2022',
    platforms: ['itch.io'],
    status: 'Student',
    pitch:
      'Make boba and prove you run the best milk tea shop in town. Different ingredient combinations score differently.',
    contribution: [],
    links: [{ type: 'itch', url: 'https://davidkoster.itch.io/boba-cat' }],
    media: [img(bobaCat1), img(bobaCat2), img(bobaCat3), img(bobaCat4)],
  },
];
