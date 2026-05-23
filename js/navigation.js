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

  document.getElementById('exp-detail-content').innerHTML = `
    <span class="co-tag">${d.role}</span>
    <h1>${d.co}</h1>
    <p class="meta">${d.period}</p>
    <div class="exp-divider"></div>
    ${d.body}
    <div class="stack-pills">${pills}</div>
  `;

  navTo('exp-detail');
}

// ─── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  backBar   = document.getElementById('sticky-back-bar');
  backBtnEl = document.getElementById('back-btn-el');
});
