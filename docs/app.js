// --- Demo cybersecurity projects (HTML & CSS only) ---
const PROJECTS = [
  {
    id: 'phishing-landing',
    title: 'Phishing Awareness Landing Page',
    description: 'Hero banner + three tips explaining how to spot phishing.',
    html: `
<section class="hero">
  <h1>Spot the Phish</h1>
  <p>Learn the common red flags before you click.</p>
</section>
<section class="tips">
  <article>
    <h3>1. Check the Sender</h3>
    <p>Mismatched domains and misspellings are warning signs.</p>
  </article>
  <article>
    <h3>2. Hover Before You Click</h3>
    <p>Inspect the full URL; look for <strong>https</strong> and the real domain.</p>
  </article>
  <article>
    <h3>3. Don’t Share OTPs</h3>
    <p>Legitimate services will never ask for your one-time code by email.</p>
  </article>
</section>
<footer class="cta">Report suspicious emails to <a href="#">security@company.tld</a></footer>`.trim(),
    css: `
:root{ --c:#0f172a; --ink:#0b1020; --fg:#0b132a; --text:#0b1020; --brand:#0ea5a3; }
body{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; color:#0f172a; }
.hero{ padding: 46px 24px; text-align:center; background: radial-gradient(650px 200px at 50% -10%, #6cc2ff33, transparent 60%), linear-gradient(180deg, #f0f9ff, #e6fff9); border-bottom:2px solid #def; }
.hero h1{ font-size: clamp(28px, 6vw, 44px); margin:0 0 8px; }
.hero p{ color:#334155; font-size: 18px; margin:0; }
.tips{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; padding: 20px; }
.tips article{ border:1px solid #e2e8f0; border-radius:14px; padding:16px; background:white; box-shadow: 0 6px 20px rgba(0,0,0,.04); }
.tips h3{ margin:.2em 0 .4em; color:#0f172a; }
.tips p{ color:#334155; }
.cta{ text-align:center; padding: 16px; background:#f8fafc; border-top:1px solid #e2e8f0; }
.cta a{ color:#0ea5a3; font-weight:700; text-decoration:none; }
    `.trim()
  },
  {
    id: 'vuln-report',
    title: 'Vulnerability Report Page',
    description: 'Simple table with severity chips and remediation summary.',
    html: `
<header class="header"><h1>Q4 Vulnerability Report</h1><p>Assessment: Internal Apps (Nov)</p></header>
<table class="table">
  <thead>
    <tr><th>ID</th><th>Title</th><th>Severity</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>WEB-101</td><td>Reflected XSS in search</td><td><span class="sev h">High</span></td><td>Mitigated</td></tr>
    <tr><td>API-077</td><td>Excessive Data Exposure</td><td><span class="sev c">Critical</span></td><td>Open</td></tr>
    <tr><td>DB-020</td><td>Weak password policy</td><td><span class="sev m">Medium</span></td><td>In Progress</td></tr>
  </tbody>
</table>
<section class="notes"><h3>Remediation Notes</h3><p>Harden output encoding, implement schema-based filtering, and enforce password length + blocklist.</p></section>`.trim(),
    css: `
*{ box-sizing:border-box }
body{ font-family: ui-sans-serif, system-ui, Segoe UI, Roboto, Arial; margin: 0; background:#f6f7fb; color:#0b1020 }
.header{ padding:18px 20px; background:white; border-bottom: 1px solid #e5e7eb }
.table{ border-collapse: collapse; width: 100%; background:white; margin: 16px 0; }
.table th, .table td{ border-bottom:1px solid #e5e7eb; padding: 12px 14px; text-align:left }
.table thead th{ background:#f8fafc; font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:#64748b }
.sev{ padding:4px 10px; border-radius:999px; font-weight:700; color:white; font-size:12px }
.sev.h{ background:#f59e0b }
.sev.c{ background:#ef4444 }
.sev.m{ background:#3b82f6 }
.notes{ background:white; border-top:1px solid #e5e7eb; padding: 16px 20px; }
    `.trim()
  },
  {
    id: 'threat-dashboard',
    title: 'Threat Intel Dashboard (Static)',
    description: 'Card layout for recent threats, heat levels, and log stream (purely visual).',
    html: `
<header class="bar">Threat Intel</header>
<main class="grid">
  <section class="card big">
    <h3>Recent Alerts</h3>
    <ul class="alerts">
      <li><span class="dot red"></span> Ransomware activity targeting SMB shares</li>
      <li><span class="dot amber"></span> Phishing domain impersonating payroll</li>
      <li><span class="dot green"></span> Weekly patch window completed</li>
    </ul>
  </section>
  <section class="card">
    <h3>Heat Level</h3>
    <div class="heat">
      <div class="cell h3"></div>
      <div class="cell h2"></div>
      <div class="cell h4"></div>
      <div class="cell h5"></div>
      <div class="cell h1"></div>
      <div class="cell h3"></div>
    </div>
  </section>
  <section class="card">
    <h3>Log Stream</h3>
    <pre class="log">[10:02:12] auth WARN  user=svc-ci ip=10.10.11.12 note=invalid token
[10:04:45] web  INFO  path=/login   status=302 ref=payroll-update.tld
[10:05:03] api  WARN  rate-limit tripped for key=34e2…</pre>
  </section>
</main>`.trim(),
    css: `
body{ font-family: system-ui, -apple-system, Segoe UI, Roboto; margin:0; background:#0b1220; color:#e6eef7 }
.bar{ padding: 14px 18px; font-weight:700; background:#0e172a; border-bottom:1px solid #14233a }
.grid{ display:grid; gap: 14px; grid-template-columns: 1.2fr .8fr .8fr; padding: 14px }
.card{ background:#0f1a2b; border:1px solid #152642; border-radius: 12px; padding: 12px }
.card.big{ grid-row: span 2; }
.alerts{ list-style:none; padding:0; margin:10px 0 0; display:grid; gap:8px }
.dot{ display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:8px }
.red{ background:#ff6b6b } .amber{ background:#f59e0b } .green{ background:#66e0a3 }
.heat{ display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-top:8px }
.cell{ height:48px; border-radius:8px; background: linear-gradient(180deg,#173351,#0f2239); border:1px solid #1a3556 }
.h1{ filter: brightness(1) } .h2{ filter: brightness(1.15) } .h3{ filter: brightness(1.3) } .h4{ filter: brightness(1.45) } .h5{ filter: brightness(1.6) }
.log{ background:#0d1728; border:1px solid #14233a; border-radius:8px; padding:10px; color:#9cc3ff; overflow:auto }
    `.trim()
  },
  {
    id: 'policy-hub',
    title: 'Security Policy Hub',
    description: 'A clean policy index with sections and anchors.',
    html: `
<h1>Security Policy Hub</h1>
<nav class="toc">
  <a href="#acc">Access Control</a>
  <a href="#pwd">Password Policy</a>
  <a href="#ir">Incident Response</a>
</nav>
<section id="acc"><h2>Access Control</h2><p>All access must be least-privilege, time-bound, and reviewed quarterly.</p></section>
<section id="pwd"><h2>Password Policy</h2><p>Length ≥ 14, passphrase encouraged, MFA mandatory.</p></section>
<section id="ir"><h2>Incident Response</h2><p>Report within 1 hour; follow triage → contain → eradicate → recover.</p></section>
    `.trim(),
    css: `
body{ font-family: Inter, system-ui; margin: 0 auto; padding: 28px; max-width: 920px; line-height:1.6; color:#1f2937 }
h1{ margin:0 0 8px }
.toc{ display:flex; gap:10px; flex-wrap: wrap; padding: 12px 0 18px; border-bottom:1px solid #e5e7eb }
.toc a{ text-decoration:none; background:#0ea5a314; color:#0b4b48; border:1px solid #0ea5a333; padding:6px 10px; border-radius: 999px }
h2{ margin: 18px 0 6px }
section{ padding: 8px 0 }
    `.trim()
  }
];

// --- DOM helpers ---
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

const list = $('#projectList');
const filterInput = $('#filterInput');
const htmlCodeEl = $('#htmlCode');
const cssCodeEl = $('#cssCode');
const iframe = $('#preview');
const currentTitle = $('#currentTitle');
const copyHtmlBtn = $('#copyHtmlBtn');
const copyCssBtn = $('#copyCssBtn');
const openPreviewBtn = $('#openPreviewBtn');

let current = null;

// Build sidebar list
function buildList(items){
  list.innerHTML = '';
  items.forEach((p) => {
    const li = document.createElement('li');
    li.dataset.id = p.id;
    li.innerHTML = `<div class="title">${p.title}</div><div class="desc">${p.description}</div>`;
    li.addEventListener('click', () => loadProject(p.id));
    list.appendChild(li);
  });
  highlightActive();
}

function highlightActive(){
  $$('.projects li').forEach(li => li.classList.toggle('active', current && li.dataset.id === current.id));
}

// Load project into panes + preview
function loadProject(id){
  const proj = PROJECTS.find(p => p.id === id) || PROJECTS[0];
  current = proj;
  setCode(htmlCodeEl, proj.html, 'markup');
  setCode(cssCodeEl, proj.css, 'css');
  currentTitle.textContent = proj.title;
  setIframeContent(proj.html, proj.css);
  highlightActive();
}

// Inject code and (re)highlight
function setCode(codeNode, source, lang){
  // Put raw code as text so Prism escapes safely
  codeNode.textContent = source.trim();
  codeNode.classList.remove(`language-${lang}`);
  void codeNode.offsetWidth; // force reflow so Prism re-highlights after class change
  codeNode.classList.add(`language-${lang}`);
  if (window.Prism && Prism.highlightElement){
    Prism.highlightElement(codeNode);
  }
}

function setIframeContent(html, css){
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${css}\n</style></head><body>${html}\n</body></html>`;
  iframe.srcdoc = doc;
}

// Copy helpers
async function copy(text){
  try{
    await navigator.clipboard.writeText(text);
    toast('Copied to clipboard');
  }catch{
    toast('Copy failed', true);
  }
}

function toast(msg, isErr=false){
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', right:'14px', bottom:'14px', padding:'10px 12px',
    border:'1px solid var(--muted)', background:isErr?'#2a1114':'#0e2a21',
    color:'white', borderRadius:'10px', zIndex:9999, opacity:'0',
    transition:'opacity .15s ease'
  });
  document.body.appendChild(t); requestAnimationFrame(()=> t.style.opacity='1');
  setTimeout(()=>{ t.style.opacity='0'; t.addEventListener('transitionend', ()=> t.remove()); }, 1300);
}

// Filter
filterInput.addEventListener('input', () => {
  const q = filterInput.value.toLowerCase().trim();
  const filtered = PROJECTS.filter(p => (p.title + ' ' + p.description).toLowerCase().includes(q));
  buildList(filtered);
});

// Buttons
copyHtmlBtn.addEventListener('click', () => current ? copy(current.html) : toast('Select a project first', true));
copyCssBtn.addEventListener('click', () => current ? copy(current.css) : toast('Select a project first', true));
openPreviewBtn.addEventListener('click', () => {
  if(!current){ toast('Select a project first', true); return; }
  const win = window.open('', '_blank');
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${current.title}</title><style>${current.css}</style></head><body>${current.html}</body></html>`;
  win.document.write(html); win.document.close();
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  buildList(PROJECTS);
  if (PROJECTS.length) loadProject(PROJECTS[0].id);
});
