/* ============================================================
   data.js — Portfolio Content Data
   All text content, experience details, and project data
   lives here. Update this file to change page content.
   ============================================================ */

const NAV_LINKS = [
  { label: 'Home',        page: 'home'        },
  { label: 'Experience',  page: 'experiences' },
  { label: 'Projects',    page: 'projects'    },
  { label: 'Skills',      page: 'skills'      },
  { label: 'About',       page: 'about'       },
];

/* ─── EXPERIENCE DATA ───────────────────────────────────────── */
const EXP_DATA = {
  dfg: {
    role:   'Product Designer',
    co:     'Develop for Good',
    period: 'Remote · May 2026 – Aug 2026',
    body: `
<p>Designing for emotionally complex and financially sensitive experiences through collaborative product work.</p>
<p>Around 7 in 10 families in the U.S. reportedly lack savings for end-of-life costs, turning an already difficult experience into a financial burden for many. Through Develop for Good, I'm currently contributing to product design work supporting a nonprofit initiative exploring more accessible and dignified approaches to end-of-life planning.</p>
<p>What makes this work different from classroom projects is the context itself. The people who may eventually use these experiences aren't browsing casually — they could be navigating grief, uncertainty, emotional stress, or financial pressure. That changes how I think about every design decision.</p>
<p>I'm collaborating within an international cross-functional environment alongside student contributors across product, design, engineering, and related disciplines. My work currently involves exploring how research, information structure, usability, and interface decisions can reduce friction and make complex topics easier to understand.</p>
<p>Areas I'm contributing to include:</p>
<ul>
  <li>User research and understanding context</li>
  <li>Information architecture and structuring experiences</li>
  <li>Wireframing and iterative design exploration</li>
  <li>High-fidelity prototyping</li>
  <li>Design refinement through feedback and collaboration</li>
  <li>Communicating ideas across contributors and workflows</li>
  <li>Preparing designs toward implementation and handoff processes</li>
</ul>
<p>Because the project is still ongoing, I'm learning to become more comfortable with ambiguity — contributing before all answers exist, iterating through uncertainty, and balancing user needs with broader product goals.</p>
<p>One of the biggest shifts this experience has introduced is moving beyond:</p>
<blockquote><p>"Does this interface look good?"</p></blockquote>
<p>toward questions like:</p>
<blockquote><p>"Is this understandable under stress?" "Does this reduce confusion?" "Would someone navigating a difficult situation trust this?"</p></blockquote>
<p>Those questions make product decisions feel less about aesthetics and more about clarity, trust, accessibility, and impact. The work is still evolving, and so is my understanding of how thoughtful products are built within collaborative environments.</p>`,
    stack: [
      'Figma', 'User Research', 'Information Architecture',
      'Wireframing', 'Prototyping', 'Collaboration',
      'Iteration', 'Design Communication'
    ]
  }
};

/* ─── PROJECTS DATA ─────────────────────────────────────────── */
const PROJECTS_DATA = [
  {
    id:       'weatherly',
    tag:      'Data · Visualisation',
    tagClass: 'blue',
    title:    'Weatherly',
    subtitle: 'Real-Time Weather Intelligence Dashboard',
    desc:     "Most weather apps show numbers — Weatherly gives context. Built from scratch with live conditions, a 5-day forecast, and an interactive temperature trend chart wrapped in a custom frosted-glass UI. Handles error states gracefully, converts raw API data into readable metrics, and intelligently filters forecast intervals into clean daily readings.",
    pills:    ['Python', 'Streamlit', 'Plotly', 'Pandas', 'OpenWeatherMap API'],
    pillClass:'blue',
    iconBg:   '',
    icon:     `<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="20" stroke="#C0A8A2" stroke-width="1" stroke-dasharray="4 3"/><circle cx="30" cy="30" r="10" stroke="#C0A8A2" stroke-width="0.8"/><path d="M30 10 L30 50 M10 30 L50 30" stroke="#C0A8A2" stroke-width="0.6" opacity="0.4"/></svg>`
  },
  {
    id:       'securepay',
    tag:      'ML · Security',
    tagClass: '',
    title:    'SecurePay Fraud Monitor',
    subtitle: 'ML-Powered Financial Security Dashboard',
    desc:     "A production-grade fraud detection system pairing a rule-based risk engine with an Isolation Forest model to flag suspicious transactions in real time. Four working modules: executive overview, live alerts feed, searchable transaction explorer, and on-demand CSV report export — all custom-built in Plotly with a cohesive dark security aesthetic.",
    pills:    ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Scikit-learn'],
    pillClass:'',
    iconBg:   'rose-bg',
    icon:     `<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect x="8" y="8" width="44" height="44" rx="4" stroke="#C0A8A2" stroke-width="1" stroke-dasharray="4 3"/><path d="M16 44 L24 28 L32 36 L40 20 L48 32" stroke="#C0A8A2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="40" cy="20" r="2.5" fill="#EDE0DD" opacity="0.6"/></svg>`
  }
];

/* ─── SKILLS DATA ───────────────────────────────────────────── */
const SKILLS_DATA = [
  { title: 'Languages',  blue: false, items: ['Python', 'C++', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Frameworks', blue: true,  items: ['Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Scikit-learn', 'Requests'] },
  { title: 'Design',     blue: false, items: ['Figma', 'Wireframing', 'Hi-Fi Prototyping', 'User Research', 'Dev Handoff'] },
  { title: 'Dev Tools',  blue: true,  items: ['Git', 'GitHub', 'VS Code', 'OpenWeatherMap API', 'Streamlit Cloud'] },
  { title: 'Concepts',   blue: false, items: ['Machine Learning', 'REST APIs', 'Responsive Design'] },
  { title: 'Business',   blue: true,  items: ['Business Analysis', 'Tech Consulting', 'Stakeholder Comms', 'Requirements Scoping'] }
];
