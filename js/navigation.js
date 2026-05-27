/* ============================================================
   navigation.js — SPA Router & Page Controller
   Handles page transitions, history stack, and back bar.
   ============================================================ */

// ─── State ──────────────────────────────────────────────────
let histStack = [{ page: 'home', scrollY: 0 }];

const SUB_PAGES = ['experiences', 'exp-detail', 'projects', 'skills', 'about'];

// ─── DOM refs (resolved after DOMContentLoaded) ──────────────
let backBar, backBtnEl;

// ─── Core page switcher ──────────────────────────────────────
function showPage(id, restoreScrollY) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (!target) return;
  target.classList.add('active');

  if (restoreScrollY != null) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.scrollTo({ top: restoreScrollY, behavior: 'instant' }));
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateBackBar(id);
}

// ─── Navigate forward ────────────────────────────────────────
function navTo(id) {
  histStack[histStack.length - 1].scrollY = window.scrollY;
  histStack.push({ page: id, scrollY: 0 });
  showPage(id);
}

// ─── Navigate back ───────────────────────────────────────────
function goBack() {
  if (histStack.length <= 1) return;
  histStack.pop();
  const prev = histStack[histStack.length - 1];
  showPage(prev.page, prev.scrollY);
}

// ─── Back bar visibility ─────────────────────────────────────
function updateBackBar(pageId) {
  if (!backBar || !backBtnEl) return;
  if (SUB_PAGES.includes(pageId)) {
    backBar.classList.add('visible');
    const label = pageId === 'exp-detail' ? 'Back to Experiences' : 'Back';
    backBtnEl.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>${label}`;
  } else {
    backBar.classList.remove('visible');
  }
}

// ─── Experience detail renderer ──────────────────────────────
function showExpDetail(id) {
  const d = EXP_DATA[id];
  if (!d) return;

  const pills = d.stack
    .map(s => `<span class="stack-pill">${s}</span>`)
    .join('');

  const caseStudyLink = d.caseStudy
    ? `<a href="${d.caseStudy}" target="_blank" rel="noopener" style="
        display:inline-flex; align-items:center; gap:7px; margin-top:32px;
        font-size:11px; font-weight:400; letter-spacing:0.16em; text-transform:uppercase;
        color:var(--navy); border:1px solid var(--border); border-radius:8px;
        padding:11px 20px; text-decoration:none; transition:border-color 0.2s, color 0.2s;
      " onmouseover="this.style.borderColor='var(--rose)';this.style.color='var(--rose)'"
         onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--navy)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        View Case Study
      </a>`
    : '';

  document.getElementById('exp-detail-content').innerHTML = `
    <span class="co-tag">${d.co}</span>
    <h1>${d.role}</h1>
    <p class="meta">${d.period}</p>
    <div class="exp-divider"></div>
    ${d.body}
    ${caseStudyLink}
    <div class="stack-pills" style="margin-top:28px">${pills}</div>
  `;

  navTo('exp-detail');
}

// ─── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  backBar   = document.getElementById('sticky-back-bar');
  backBtnEl = document.getElementById('back-btn-el');
});
