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
    caseStudyUrl: null, // placeholder — add PDF URL here when ready
    body: `
<p>Designing for emotionally complex and financially sensitive experiences through collaborative product work.</p>
<p>Around 7 in 10 families in the U.S. reportedly lack savings for end-of-life costs, turning an already difficult experience into a financial burden for many. Through Develop for Good, I'm currently contributing to product design work supporting a nonprofit initiative exploring more accessible and dignified approaches to end-of-life planning.</p>
<p>What makes this work different from classroom projects is the context itself. The people who may eventually use these experiences aren't browsing casually — they could be navigating grief, uncertainty, emotional stress, or financial pressure. That changes how I think about every design decision.</p>
<p>I'm collaborating within an international cross-functional environment alongside student contributors across product, design, engineering, and related disciplines. My work currently involves exploring how research, information structure, usability, and interface decisions can reduce friction and make complex topics easier to understand.</p>
<h4>Areas I'm contributing to include:</h4>
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
  },

  itconsulting: {
    role:   'IT Consultant',
    co:     'Freelance Client',
    period: 'Remote · UK-Based Client · 1 Week Timeline',
    caseStudyUrl: null, // placeholder — add PDF URL here when ready
    body: `
<p>Supported a UK-based entrepreneur seeking assistance with project organization, workflow clarity, and structured planning while managing ongoing operational and execution challenges. Worked remotely to understand existing processes, identify workflow gaps, and organize findings into actionable documentation designed to support clearer execution and project coordination.</p>
<p>The engagement involved conducting requirement gathering, analyzing current workflows, mapping priorities, and supporting project planning through structured frameworks and recommendations. Outputs focused on improving organization, documentation practices, task prioritization, communication processes, and overall workflow visibility.</p>
<p>Deliverables included a requirement analysis summary, problem breakdown framework, priority mapping, timeline planning support, recommendations documentation, and a final summary report consolidating observations and suggested next steps.</p>

<h4>Outcomes for the Client</h4>
<ul>
  <li>Delivered a clearer overview of existing workflow challenges and project priorities</li>
  <li>Provided structured documentation to support more organized planning and execution</li>
  <li>Organized findings into actionable recommendations and suggested next steps</li>
  <li>Improved visibility around task prioritization and workflow organization</li>
  <li>Produced ready-to-reference materials intended to support future decision-making</li>
</ul>

<h4>What I Learned</h4>
<p>This engagement gave me practical exposure to working with ambiguous client requirements and transforming broad challenges into structured outputs. I strengthened my ability to:</p>
<ul>
  <li>Conduct requirement gathering and understand client needs through remote communication</li>
  <li>Break down complex or unclear workflows into organized frameworks and priorities</li>
  <li>Document findings and recommendations in a clear, actionable format</li>
  <li>Deliver structured outputs within short timelines while managing expectations</li>
  <li>Work independently with an international client and communicate professionally across a fully remote engagement</li>
</ul>
<p>Most importantly, I learned that effective consulting often begins with asking the right questions before attempting to provide solutions.</p>

<h4>Key Areas</h4>
<p>Requirement Gathering · Workflow Analysis · Project Planning · Documentation · Prioritization · Process Organization · Client Communication · Remote Collaboration · IT Consulting Support</p>

<h4>Deliverables</h4>
<ul>
  <li>Requirement Summary</li>
  <li>Workflow Analysis</li>
  <li>Priority Framework</li>
  <li>Recommendations Report</li>
  <li>Timeline Planning</li>
  <li>Final Summary Document</li>
</ul>

<p class="exp-confidential">Client identity and sensitive details withheld for confidentiality.</p>`,
    stack: [
      'Project Management', 'Problem Solving', 'Strategic Thinking',
      'Workflow Organization', 'Stakeholder Communication',
      'Execution Planning', 'Documentation'
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
