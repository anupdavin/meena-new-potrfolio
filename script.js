const codeLines = [
  'name: Meena Kannan',
  'target_roles:',
  '  - Lead Software Engineer',
  '  - Senior Java Backend Engineer',
  '  - Cloud Modernization Engineer',
  'core_stack:',
  '  java: "21"',
  '  spring_boot: "3.x"',
  '  cloud: ["AWS", "Kubernetes", "Docker"]',
  '  streaming: ["Kafka", "JMS"]',
  'delivery_strengths:',
  '  - secure enterprise releases',
  '  - UAT and production ownership',
  '  - mentoring and code review',
  '  - legacy-to-cloud modernization',
];

const typewriter = document.querySelector('#typewriter');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderTypewriter() {
  if (!typewriter) return;

  if (prefersReducedMotion) {
    typewriter.textContent = codeLines.join('\n');
    return;
  }

  let line = 0;
  let char = 0;
  let rendered = '';

  function typeNext() {
    if (line >= codeLines.length) {
      typewriter.textContent = rendered;
      return;
    }

    const current = codeLines[line];

    if (char < current.length) {
      rendered += current[char];
      char += 1;
    } else {
      rendered += '\n';
      line += 1;
      char = 0;
    }

    typewriter.textContent = `${rendered}_`;
    window.setTimeout(typeNext, char === 0 ? 160 : 18 + Math.random() * 20);
  }

  typeNext();
}

function injectHiringPolish() {
  const style = document.createElement('style');
  style.textContent = `
    .status-pill{display:inline-flex;margin:0 0 1rem;border:1px solid rgba(244,199,104,.45);border-radius:999px;background:rgba(244,199,104,.08);color:var(--amber);padding:.42rem .75rem;font-size:.85rem;font-weight:900}.hero h1{max-width:12ch}.hero-copy h1::after{content:'Building secure cloud-native Java platforms.';display:block;margin-top:.75rem;color:#d3dde6;font-size:clamp(1.2rem,2.4vw,2rem);line-height:1.2;letter-spacing:-.03em}.best-fit,.why-hire{margin-top:1.2rem}.fit-grid,.why-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.fit-card,.why-card,.contact-form,.contact-card{border:1px solid var(--line);border-radius:.8rem;background:linear-gradient(180deg,rgba(17,24,39,.92),rgba(8,12,18,.92));box-shadow:var(--shadow);padding:clamp(1rem,2vw,1.4rem)}.fit-card span{color:var(--green);font-family:'JetBrains Mono',monospace;font-weight:800;font-size:.78rem}.fit-card h3,.why-card h3,.contact-card h3{margin:.55rem 0;color:#fff;font-size:1.12rem}.fit-card p,.why-card p,.form-note{color:var(--muted);margin:0}.hero-actions .ghost{border-color:var(--line);color:#dce8ee;background:rgba(17,24,39,.45)}.contact-wrap{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(280px,.75fr);gap:1rem;text-align:left}.contact-form{display:grid;gap:1rem}.form-field{display:grid;gap:.4rem}.form-field label{color:#fff;font-weight:800}.form-field input,.form-field textarea{width:100%;border:1px solid var(--line);border-radius:.65rem;background:rgba(3,8,12,.72);color:var(--text);padding:.85rem 1rem;font:inherit}.form-field textarea{resize:vertical}.error-message{min-height:1.1rem;color:var(--rose);font-weight:700}.form-field.invalid input,.form-field.invalid textarea{border-color:rgba(251,113,133,.9)}.contact-card{display:grid;gap:.75rem;align-content:start}.contact-card a{border:1px solid var(--line);border-radius:.55rem;background:rgba(17,24,39,.72);color:#dbe6ee;padding:.8rem .95rem;font-weight:800}.contact-card a:hover{border-color:var(--green);color:var(--green)}@media(max-width:980px){.fit-grid,.why-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.contact-wrap{grid-template-columns:1fr}}@media(max-width:620px){.fit-grid,.why-grid{grid-template-columns:1fr}.contact-form .button,.contact-card a{width:100%}}`;
  document.head.appendChild(style);

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy && !document.querySelector('.status-pill')) {
    heroCopy.insertAdjacentHTML('afterbegin', '<p class="status-pill">Open to remote senior / lead engineering roles</p>');
  }

  const heroActions = document.querySelector('.hero-actions');
  if (heroActions && !heroActions.querySelector('.ghost')) {
    heroActions.insertAdjacentHTML('beforeend', '<a class="button ghost" href="#experience">View experience</a>');
  }

  const skillsSection = document.querySelector('#skills');
  if (skillsSection && !document.querySelector('.best-fit')) {
    skillsSection.insertAdjacentHTML('beforebegin', `
      <section class="section best-fit" id="fit">
        <div class="section-heading">
          <p class="eyebrow">Best fit for</p>
          <h2>Roles where delivery maturity matters.</h2>
        </div>
        <div class="fit-grid" aria-label="Target role fit">
          <article class="fit-card"><span>01</span><h3>Senior Java Backend Engineer</h3><p>Spring Boot, APIs, persistence, security, performance, and production support.</p></article>
          <article class="fit-card"><span>02</span><h3>Lead Software Engineer</h3><p>Delivery ownership, mentoring, code review, UAT readiness, and stakeholder clarity.</p></article>
          <article class="fit-card"><span>03</span><h3>Cloud Modernization Engineer</h3><p>Legacy-to-microservices modernization using Kubernetes, AWS, GitOps, and observability.</p></article>
          <article class="fit-card"><span>04</span><h3>Microservices / Kubernetes Engineer</h3><p>Kafka, ingress, service discovery, mTLS, autoscaling, and resilient platform patterns.</p></article>
        </div>
      </section>`);
  }

  const aboutPanel = document.querySelector('.about-grid');
  if (aboutPanel && !document.querySelector('.why-hire')) {
    aboutPanel.insertAdjacentHTML('afterend', `
      <div class="why-hire">
        <div class="why-grid">
          <article class="why-card"><h3>Modernizes legacy platforms safely</h3><p>Converts domain knowledge into incremental modernization plans without reckless big-bang rewrites.</p></article>
          <article class="why-card"><h3>Leads delivery without drama</h3><p>Uses ADRs, code reviews, UAT ownership, release hygiene, and clear engineering handovers.</p></article>
          <article class="why-card"><h3>Bridges domain and engineering</h3><p>Comfortable across GovTech, fintech, legal tech, retail analytics, and enterprise SaaS constraints.</p></article>
          <article class="why-card"><h3>Ships with production discipline</h3><p>Builds for security, observability, performance, incident response, and maintainability from day one.</p></article>
        </div>
      </div>`);
  }
}

function enhanceSeo() {
  const metaPairs = [
    ['keywords', 'Meena Kannan, Lead Software Engineer, Senior Java Engineer, Spring Boot, Microservices, Kubernetes, AWS, GovTech, Remote Software Engineer'],
    ['author', 'Meena Kannan'],
  ];
  metaPairs.forEach(([name, content]) => {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  });
}

function renderContactForm() {
  const contactSection = document.querySelector('#contact');
  const oldGrid = contactSection?.querySelector('.contact-grid');
  if (!contactSection || !oldGrid || document.querySelector('#contact-form')) return;

  oldGrid.outerHTML = `
    <div class="contact-wrap">
      <form class="contact-form" id="contact-form" action="mailto:meenakannan92@gmail.com" method="post" enctype="text/plain" novalidate>
        <div class="form-field"><label for="name">Your name</label><input id="name" name="name" type="text" autocomplete="name" required /><small class="error-message"></small></div>
        <div class="form-field"><label for="email">Your email</label><input id="email" name="email" type="email" autocomplete="email" required /><small class="error-message"></small></div>
        <div class="form-field"><label for="message">Role / message</label><textarea id="message" name="message" rows="5" required placeholder="Tell Meena about the role, location, contract type, and expected next step."></textarea><small class="error-message"></small></div>
        <button class="button primary" type="submit">Prepare email</button>
        <p class="form-note" id="form-status" role="status" aria-live="polite">Static-site safe mail client fallback. No secrets or private API keys are exposed.</p>
      </form>
      <div class="contact-card" aria-label="Direct contact links">
        <h3>Direct links</h3>
        <a href="mailto:meenakannan92@gmail.com">meenakannan92@gmail.com</a>
        <a href="tel:+6587373057">+65 8737 3057</a>
        <a href="tel:+919789302084">+91 97893 02084</a>
        <a href="https://www.linkedin.com/in/meena-kannan-mk/" target="_blank" rel="noreferrer">LinkedIn profile</a>
        <a href="https://github.com/meenak95" target="_blank" rel="noreferrer">GitHub profile</a>
        <a href="assets/MeenaKannan_Resume_2026.pdf" target="_blank" rel="noreferrer">Resume PDF</a>
      </div>
    </div>`;
}

function wireContactForm() {
  const contactForm = document.querySelector('#contact-form');
  const formStatus = document.querySelector('#form-status');
  if (!contactForm || contactForm.dataset.wired === 'true') return;
  contactForm.dataset.wired = 'true';

  function setFieldError(field, message) {
    const wrapper = field.closest('.form-field');
    const error = wrapper?.querySelector('.error-message');
    wrapper?.classList.toggle('invalid', Boolean(message));
    if (error) error.textContent = message;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    let valid = true;

    [name, email, message].forEach((field) => setFieldError(field, ''));
    if (!nameValue) { setFieldError(name, 'Please enter your name.'); valid = false; }
    if (!emailValue || !isValidEmail(emailValue)) { setFieldError(email, 'Please enter a valid email address.'); valid = false; }
    if (!messageValue || messageValue.length < 20) { setFieldError(message, 'Please add a message with at least 20 characters.'); valid = false; }

    if (!valid) {
      formStatus.textContent = 'Please fix the highlighted fields.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry for Meena Kannan from ${nameValue}`);
    const body = encodeURIComponent(`Name: ${nameValue}\nEmail: ${emailValue}\n\nMessage:\n${messageValue}\n\nSource: Meena Kannan portfolio`);
    formStatus.textContent = 'Opening your mail app with a prepared message...';
    window.location.href = `mailto:meenakannan92@gmail.com?subject=${subject}&body=${body}`;
  });
}

renderTypewriter();
injectHiringPolish();
enhanceSeo();
renderContactForm();
wireContactForm();

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');
    const panel = id ? document.getElementById(id) : null;
    if (!panel) return;
    document.querySelectorAll('.tab').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach((item) => {
      item.classList.remove('active');
      item.hidden = true;
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    panel.classList.add('active');
    panel.hidden = false;
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
