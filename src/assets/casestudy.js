/*
  David's voice, David's claims. Every figure here traces back to the work itself.
  House style: no em dashes.
*/
export const CASE_STUDIES = [
  {
    id: 'rise-of-elements',
    title: 'Turning a stalled Kickstarter into a 15 day funding',
    subtitle: 'Rise of Elements · Creative Producer, Wicked Fox Games · Launched March 2025',
    metrics: [
      { value: '$53,302', label: 'Pledged, against a $50,000 goal' },
      { value: '15 days', label: 'To hit the goal' },
      { value: '107%', label: 'Of target' },
      { value: '5 months', label: 'Of prep the delay bought' },
    ],
    sections: [
      {
        heading: 'What I walked into',
        body: [
          'I had taken a short break from Wicked Fox for a contract with Jim Gray Productions. When I came back, the producer on Rise of Elements was leaving and the Kickstarter had been delayed.',
          'The plan up to that point was to upload a gameplay trailer and share it with friends. We had no marketing assets beyond some short gameplay footage, no marketing plan, no reward structure, and nobody on the team had run a crowdfunding campaign before. The campaign had been aimed at October 2024 and there was a lot more work to go.',
        ],
      },
      {
        heading: 'The problem',
        body: [
          'A Kickstarter looks like a marketing task, but it runs like a production one. The page, the video, the tiers, the press outreach, the fulfillment plan and the ad spend all have to be ready on the same morning, and they come from people who do not normally share a board: creative, marketing, and outside vendors we had not contracted yet.',
          'We had the game and we had an audience. What we did not have was a list of what a campaign actually requires, an owner for each piece, or a date any of us trusted.',
        ],
      },
      {
        heading: 'What we did',
        body: ['None of us had done this before, so the first thing was to stop guessing.'],
        bullets: [
          'Pulled together comparable campaigns in our genre and price range to see what they had ready on day one.',
          'Met with other studios who had run their own campaigns to learn from their experience.',
          'Got in touch with the Head of Product at Kickstarter, and brought in their Performance team, who helped create a video asset we did not have the capacity to make ourselves.',
          'Met with a PR consultant to help get the word out to press.',
          'Worked with vendors and distribution centers on physical rewards.',
          'Set the timeline and milestones, ran task tracking, and facilitated the meetings that kept creative and marketing pointed at the same date.',
        ],
      },
      {
        heading: 'What it cost, and what we cut',
        body: [
          'The campaign moved from October 2024 to March 2025. That was the cost of solving the unknowns, and it was worth it.',
          'Our scope problem ran backwards from the usual one. We did not start with too much, we started with almost nothing, and the plan grew as each unknown turned up. The one thing we took back out was physical rewards. Finding vendors and figuring out shipping logistics was a nightmare, and it was eating time the campaign needed.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'We hit the $50,000 goal in 15 days and finished at $53,302. The creative, the press plan and the new website were all live at launch instead of being patched in mid campaign.',
        ],
      },
      {
        heading: 'What I would do differently',
        bullets: [
          'Cut physical goods entirely. The fulfillment overhead is not worth what it adds to a campaign this size.',
          'Prepare a full list of requirements up front and have a GTM checklist ready, rather than finding out and learning on the fly. A lot of those five months was learning things that could have been a document.',
          'Line up the connections, Kickstarter, PR and other studios, before they are urgent.',
          'Spend less on Facebook ads. The ROI and click through did not justify it. I would put that into organic audience work and streamer partnerships instead.',
        ],
      },
    ],
  },
  {
    id: 'ronday-process',
    title: 'A feature nobody asked for, and the process gap behind it',
    subtitle: 'Ronday · Assistant Producer, Ronday Technologies · 2022 to 2023',
    metrics: [
      { value: '2 leads', label: 'Engineering and design, realigned without escalation' },
      { value: '1 sprint', label: 'Of displaced work, the cost of the fix' },
    ],
    sections: [
      {
        heading: 'How it came up',
        body: [
          'During an all hands, our senior engineer showed off a new 3D model feature he had built, a glTF importer. It did not match our design language and it was not something we had planned for the platform. Our lead designer reacted to it in the room, in front of everyone.',
          'That was the first most of us had heard about it, and it was not the first time it had happened. Features had been arriving fully built without design being consulted, and each one meant extra testing and debugging for people who had not planned for it.',
        ],
      },
      {
        heading: 'Why I did not treat it as a discipline problem',
        body: [
          'The easy read was that an engineer had gone off script and needed to be told to stop. I did not think that was the whole story, and right after a public blowup is a bad time to act on half of one.',
          'I talked to each of them individually first. With the engineer I wanted to know whether he was blocked, bored, running out of work, or deliberately working around design. It turned out to be the simple answer. He had run out of assigned work partway through the sprint and picked up something interesting to fill the time.',
          'The designer’s side was just as concrete. His problem was not really the feature. It was that a whole feature had reached a company demo with no discussion with design at all, and he found out at the same time as everyone else. He felt sidestepped, and he had a point.',
        ],
      },
      {
        heading: 'What I actually fixed',
        body: [
          'There was no animosity between them. They just needed clarity on how to work together, and without it they had each filled the gap with a reasonable assumption that happened to contradict the other’s.',
          'Once I had both sides, I brought them together and we agreed on a process: how a feature idea gets raised, when design gets consulted, and what happens when someone runs out of sprint work instead of inventing scope to fill it. That second half mattered as much as the first. An engineer with spare capacity is a planning problem, not a behavior problem.',
        ],
      },
      {
        heading: 'What it cost',
        body: [
          'Adjusting to the new process took time out of the sprint and pushed some work to the next one. That was the real price, and I would pay it again. The alternative was the same collision happening again with more resentment attached each time.',
        ],
      },
      {
        heading: 'What I took from it',
        body: [
          'Most production conflicts I have seen since read the same way. Two people doing their jobs correctly, colliding at a hand off nobody defined, and then arguing about the collision instead of the gap. The fix is almost never telling someone to stop. It is asking what they were solving for, separately, before anyone has to defend a position in public.',
        ],
      },
    ],
  },
];
