import imbLogo from '../assets/images/experience/imblogo.webp';
import rondayLogo from '../assets/images/experience/rondaylogo.webp';
import wfLogo from '../assets/images/experience/wflogo.webp';
import jgpLogo from '../assets/images/experience/jgpLogo.webp';
import ppLogo from '../assets/images/experience/pplogo.webp';

/*
  This is a credits timeline, not a resume. Its only job is career shape at a
  glance: where, what title, and one line of what came out of it. The bullets
  live in the resume PDF (linked in the hero) and the substance lives in the
  case studies. If this ever grows back into a bullet list, the section has
  started competing with the resume again.

  Most recent first, and newest role first within a company so a promotion
  reads top-down. The full bullet version is archived at the bottom of this file.
*/
export const EXPERIENCE = [
  {
    title: 'Wicked Fox Games',
    employment: 'Full-time',
    logo: wfLogo,
    logoBgColor: '#000000',
    roles: [
      { role: 'Creative Producer', date: 'Oct 2024 – Apr 2026' },
      { role: 'Associate Producer', date: 'Apr 2024 – Oct 2024' },
    ],
    summary:
      'Ran the Rise of Elements Kickstarter and the shared sprint cadence across creative, marketing, engineering and QA.',
  },
  {
    title: 'Plutonium Powered',
    employment: 'Freelance',
    logo: ppLogo,
    logoBgColor: '#1e1e20',
    roles: [{ role: 'Producer', date: 'Oct 2023 – Aug 2025' }],
    summary: 'Shipped Dark Age Asunder on Steam as sole producer on a team of five.',
  },
  {
    title: 'Jim Gray Productions',
    employment: 'Contract',
    logo: jgpLogo,
    logoBgColor: '#232325',
    roles: [{ role: 'Production Coordinator', date: 'Jul 2024 – Oct 2024' }],
    summary:
      "Shipped the Escape from Hadrian's Wall demo on Steam and Meta Quest, and authored both storefronts.",
  },
  {
    title: 'Indie MEGABOOTH',
    employment: 'Contract',
    logo: imbLogo,
    logoBgColor: '#f7f3eb',
    roles: [{ role: 'Assistant Producer', date: 'Jul 2023 – Aug 2023' }],
    summary: 'Curated a Steam Sale in collaboration with 113 partner studios.',
  },
  {
    title: 'Ronday Technologies',
    employment: 'Full-time',
    logo: rondayLogo,
    logoBgColor: '#f4f1ea',
    roles: [
      { role: 'Assistant Producer', date: 'Oct 2022 – Jul 2023' },
      { role: 'QA Tester', date: 'May 2022 – Oct 2022' },
    ],
    summary:
      'Live-service production on a Unity collaboration platform. Started in QA and moved into production.',
  },
];

/* ---------------------------------------------------------------------------
ARCHIVE: the detailed bullet version, removed because it restated the resume.
Restore by swapping these `bullets` arrays back onto the roles above and
reinstating the bullet list in ExperienceCard.

Wicked Fox Games — Creative Producer (Oct 2024 – Apr 2026)
  - Coordinated the Rise of Elements Kickstarter. $53,302 raised, and the
    $50,000 goal hit in 15 days.
  - Ran daily standups for the Creative and Marketing teams, surfacing blockers
    before they reached the schedule.
  - Built the shared Jira workflow between Creative and Marketing, so neither
    team was guessing at the other's state.
  - Owned delivery of Kickstarter creative assets and a new website across
    internal leads and outside vendors.

Wicked Fox Games — Associate Producer (Apr 2024 – Oct 2024)
  - Ran sprint planning, standups, retros and backlog grooming for engineering,
    art and QA.
  - Implemented the cross-functional Jira workflow those three disciplines
    shared, cutting ambiguity at hand-off.
  - Managed production and delivery of a publisher demo, and met the quality bar
    on schedule.
  - Organized bi-weekly Friends & Family playtests and fed the findings back
    into the sprint.

Plutonium Powered — Producer (Oct 2023 – Aug 2025)
  - Shipped Dark Age Asunder on Steam, a Vampire Survivors inspired roguelite
    with base building.
  - Ran weekly standups and task delegation for a cross-functional team of 5.
  - Published the Steam page and took the game through Steam Next Fest.
  - Owned the Trello board end to end: triage, tracking, and the feature and
    self-publishing timelines.
  - Built the project timelines the team worked to, covering both feature
    development and self-publishing.
  - Ran game testing passes myself when the schedule needed it.

Jim Gray Productions — Production Coordinator (Jul 2024 – Oct 2024)
  - Shipped the Escape from Hadrian's Wall playable demo on Steam and Meta Quest.
  - Authored and deployed both storefront pages.
  - Ran standups, retros and sprint planning across engineering, art, QA,
    marketing and voice talent.
  - Directed VO sessions for in-game dialogue and captured the screenshots and
    footage used in marketing.
  - Wrote a 10-week marketing plan off my own market research.

Indie MEGABOOTH — Assistant Producer (Jul 2023 – Aug 2023)
  - Curated and ran a Steam Sale in collaboration with 113 studios.
  - Introduced Asana to a team that had no task tracking, and set up the boards
    it ran on.
  - Maintained the Airtable of indie game partnerships that partnership
    decisions were made from.

Ronday Technologies — Assistant Producer (Oct 2022 – Jul 2023)
  - Supported live-service production of Ronday, a remote collaboration platform
    built in Unity.
  - Ran 10 external load tests and led the postmortems that followed each one.
  - Authored 8 release notes and produced 11 tutorial videos for onboarding.
  - Reported bi-weekly release-candidate status to both Production and Engineering.

Ronday Technologies — QA Tester (May 2022 – Oct 2022)
  - Executed 130 TestRail cases bi-weekly against each release candidate.
  - Filed detailed bug tickets in Jira and tracked them through to fix verification.
  - Provided live technical support for events hosted on the platform.
--------------------------------------------------------------------------- */
