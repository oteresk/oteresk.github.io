import CSM from './images/certificates/csm.webp';
import BBG from './images/certificates/bbg.webp';
import GPM from './images/certificates/gpm.webp';

export const NAV = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Experience', link: 'experience' },
  { name: 'Projects', link: 'projects' },
  { name: 'Case Studies', link: 'casestudy' },
  { name: 'Certificates', link: 'certificates' },
];

export const LINKS = [
  { name: 'Contact Me', url: 'mailto:davidkoster53@gmail.com' },
  { name: 'Resume', url: '/resume.pdf' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/d-koster/' },
  { name: 'Twitter', url: 'https://twitter.com/Oteresk' },
  { name: 'BlueSky', url: 'https://bsky.app/profile/oteresk.bsky.social' },
];

export const AVAILABILITY = 'Open to producer roles';

export const INTRO_BLURB =
  "I'm a Game Producer with a passion for working with talented teams on video games. I thrive on optimizing workflows and bringing teams together to tackle complex challenges. With experience in project management, Scrum frameworks, and both cross-cultural and cross-functional collaboration, I focus on making processes more efficient while keeping people at the heart of every project.";

// Every figure here is defensible in an interview. Do not add one that is not.
export const STATS = [
  { value: '$53,302', label: 'Kickstarter raised', detail: 'Rise of Elements, funded in 15 days at 107% of a $50K goal' },
  { value: '20–30', label: 'Person teams', detail: 'Art, engineering, QA and marketing under one sprint cadence' },
  { value: '6', label: 'Countries, one schedule', detail: 'Coordinated across US, Canada, Brazil, Sweden, South Korea and South Africa time zones' },
  { value: '4 yrs', label: 'In production', detail: 'QA to Creative Producer since 2022' },
];

export const PROJ_MAN = [
  'Sprint planning, standups and retrospectives',
  'Scrum, Agile and Kanban',
  'Milestone and release scheduling',
  'Cross-functional hand-offs (art / engineering / QA)',
  'Backlog grooming and triage',
  'Playtest organization and feedback loops',
  'Kickstarter campaign coordination',
  'Steam and Meta storefront publishing',
  'Distributed and cross-cultural teams',
  'Budget breakdowns',
  'Conflict resolution',
];

export const SOFTWARE = [
  'Jira & Confluence',
  'Asana',
  'Trello',
  'Airtable',
  'Notion',
  'TestRail',
  'Unity',
  'Unreal Engine',
  'Steamworks',
  'GitHub',
  'P4V',
  'Adobe Suite',
];

export const CERTIFICATES = [
  { name: 'Certified ScrumMaster', image: CSM },
  { name: "Game Production: What You Aren't Taught", image: BBG },
  { name: 'Google Agile Project Management', image: GPM },
  { name: 'Foundations of Project Management', image: GPM },
];
