const heroCodeLines = [
  'public class LeadSoftwareEngineer {',
  '    private String name = "Meena Kannan";',
  '    private String seniority = "decade-class";',
  '    private List<String> stack = List.of(',
  '        "Java 21",',
  '        "Spring Boot 3",',
  '        "Kubernetes",',
  '        "Kafka",',
  '        "AWS GovCloud",',
  '        "Spring AI + MCP"',
  '    );',
  '',
  '    // Production systems, not demo code',
  '    public void modernize() {',
  '        recover("legacy knowledge");',
  '        deploy("microservices + GitOps");',
  '        secure("Istio + Vault + Keycloak");',
  '        observe("Prometheus + OpenTelemetry");',
  '    }',
  '}',
];

const contactLines = [
  'meena@portfolio:~$ contact --info',
  '> Email: meenakannan92@gmail.com',
  '> Singapore: +65 8737 3057',
  '> India: +91 97893 02084',
  '> LinkedIn: linkedin.com/in/meena-kannan-mk',
  '> GitHub: github.com/meenak95',
  '',
  'meena@portfolio:~$ availability --status',
  '> Status: open to senior remote roles worldwide',
  '> Domains: GovTech, fintech, cloud modernization, AI delivery',
  '> Location: Singapore / India',
  '',
  'meena@portfolio:~$ _',
];

const skillData = {
  backend: {
    detail: 'Backend selected: Java 21, Spring Boot 3.x, Spring Security, Hibernate/JPA, REST, SOAP, WebFlux, and Resilience4j.',
    items: [
      ['Java 21', 96, 'Enterprise service design and modernization'],
      ['Spring Boot 3', 94, 'Microservices, APIs, secure backend delivery'],
      ['Spring Security', 88, 'OAuth2/OIDC, Keycloak, service security'],
      ['Hibernate/JPA', 86, 'Data modelling and persistence'],
      ['Resilience4j', 82, 'Fault tolerance and service reliability'],
      ['REST/SOAP', 88, 'API integration across legacy and modern stacks'],
    ],
  },
  cloud: {
    detail: 'Cloud and DevOps selected: AWS Government Cloud, ECS, EKS, ALB, S3, RDS, CloudFront, Docker, Kubernetes, Helm, Istio, ArgoCD, Jenkins, and GitHub Actions.',
    items: [
      ['Kubernetes', 90, 'Workloads, service discovery, rollout patterns'],
      ['AWS GovCloud', 88, 'ECS, EKS, ALB, S3, RDS, IAM, CloudFront'],
      ['Istio', 84, 'mTLS, traffic policy, service mesh controls'],
      ['ArgoCD', 86, 'GitOps release standardization'],
      ['Docker/Helm', 88, 'Container packaging and deployment'],
      ['Jenkins/GitHub Actions', 86, 'CI/CD and release automation'],
    ],
  },
  ai: {
    detail: 'AI and LLM selected: Spring AI, RAG, MCP, Claude API, embeddings, prompt engineering, evaluation loops, and Copilot agentic workflows.',
    items: [
      ['Spring AI', 82, 'Java-native AI service acceleration'],
      ['RAG pipelines', 80, 'Retrieval design, chunking, evaluation'],
      ['MCP', 78, 'Tool invocation and backend agent patterns'],
      ['Claude API', 76, 'LLM integration and workflow prototyping'],
      ['Copilot agentic mode', 84, 'Squad adoption and developer acceleration'],
      ['Responsible AI', 80, 'PDPA-aware minimization and auditability'],
    ],
  },
  frontend: {
    detail: 'Frontend selected: Angular 18, NgRx, RxJS, React, Next.js, JSF/PrimeFaces, GraphQL, and citizen-facing workflow design.',
    items: [
      ['Angular 18', 88, 'Modern enterprise frontend migration'],
      ['NgRx', 84, 'Predictable state management'],
      ['RxJS', 86, 'Reactive UI and API orchestration'],
      ['React/Next.js', 76, 'Modern component-driven UI'],
      ['JSF/PrimeFaces', 82, 'Legacy citizen portal delivery'],
      ['GraphQL', 72, 'API query layer experience'],
    ],
  },
  data: {
    detail: 'Messaging and data selected: Kafka, Kafka Streams, KEDA, JMS, IBM MQ, PostgreSQL, Oracle, MySQL, MongoDB, Redis, and Flyway.',
    items: [
      ['Kafka', 90, 'Event streaming and asynchronous workflows'],
      ['Kafka Streams', 82, 'Stream processing and event transforms'],
      ['KEDA', 80, 'Event-driven autoscaling'],
      ['Redis', 84, 'Caching and timeout reduction'],
      ['Oracle/PostgreSQL', 88, 'GovTech and enterprise data platforms'],
      ['MongoDB', 78, 'Document storage for legal tech systems'],
    ],
  },
};

const workflowDetails = [
  {
    command: 'Modernization step 01: recover legacy behavior',
    title: 'Recover behavior before replacing systems.',
    text: 'Meena owned live VRLS legacy support and produced the knowledge base for 8 core licensing modules, enabling the new VRLS 2.0 squad to move forward without prior domain knowledge.',
  },
  {
    command: 'Modernization step 02: design service boundaries',
    title: 'Split services around real domain boundaries.',
    text: 'Vehicle registration, ownership transfer, road tax, and permits become Spring Boot services with clear ownership over data, deployment, and API contracts.',
  },
  {
    command: 'Modernization step 03: introduce event-driven flow',
    title: 'Replace polling with event-driven behavior.',
    text: 'Kafka event streaming, Redis caching, and KEDA autoscaling reduce polling, timeout cascades, and manual scaling during peak renewal periods.',
  },
  {
    command: 'Modernization step 04: secure the platform path',
    title: 'Bake security into the platform path.',
    text: 'Istio service mesh, mutual TLS, Vault, Keycloak, OAuth2/OIDC, HP Fortify, and SonarQube turn release safety into part of the architecture.',
  },
  {
    command: 'Modernization step 05: ship with governance',
    title: 'Ship with observability and squad enablement.',
    text: 'ArgoCD GitOps, Jenkins, GitHub Actions, Prometheus, Grafana, OpenTelemetry, ADRs, code reviews, mentoring, and retrospectives keep delivery repeatable.',
  },
];

const projectDetails = {
  vrls: `Selected work: VRLS 2.0 modernization
Status: production modernization
Domain: Singapore Land Transport Authority
Impact: citizen-facing licensing workflows
Architecture: Spring Boot 3 services, Kafka, Redis, KEDA, EKS, Istio
Delivery: ArgoCD, Jenkins, GitHub Actions, SonarQube, Fortify
Signal: legacy knowledge transfer became modernization leverage`,
  'retail-ai': `Selected work: Retail promotion forecasting
Status: real-time analytics
Domain: AI-powered CPG retail forecasting
Impact: 15+ minute reporting delay cut to near real time
Architecture: Spring Boot, Kafka events, AWS Lambda, PostgreSQL
Delivery: fallback handling, batching, latency SLAs
Signal: AI integration with production service contracts`,
  'legal-ai': `Selected work: Legal View Bill Analyzer
Status: legal-tech rules engine
Domain: legal billing anomaly detection
Impact: AI output combined with expert compliance rules
Architecture: Spring Boot, MongoDB, Drools BRMS, REST
Delivery: sub-500ms rule evaluation under production load
Signal: auditable automation for sensitive domain logic`,
};

const bootLines = [
  ['ok', 'mount /career/meena-kannan'],
  ['ok', 'detect seniority: decade-class production engineer'],
  ['ok', 'load module: govtech-modernization'],
  ['ok', 'load module: java21-springboot3'],
  ['ok', 'connect kafka://vrls-events'],
  ['ok', 'sync argocd://aws-govcloud'],
  ['ok', 'enable spring-ai + mcp toolchain'],
  ['ok', 'render hacker portfolio interface'],
];

function runBoot() {
  const screen = document.querySelector('#bootScreen');
  const lines = document.querySelector('#bootLines');
  const progress = document.querySelector('#bootProgress');
  if (!screen || !lines || !progress) return;

  document.body.classList.add('booting');
  let index = 0;

  function addLine() {
    if (index >= bootLines.length) {
      progress.style.width = '100%';
      window.setTimeout(() => {
        screen.classList.add('done');
        document.body.classList.remove('booting');
        window.setTimeout(() => screen.remove(), 560);
      }, 420);
      return;
    }

    const [status, text] = bootLines[index];
    const row = document.createElement('div');
    row.className = 'boot-row';
    row.innerHTML = `<span>[${status}]</span><strong>${text}</strong>`;
    lines.appendChild(row);
    progress.style.width = `${Math.round(((index + 1) / bootLines.length) * 100)}%`;
    index += 1;
    window.setTimeout(addLine, 135 + Math.random() * 110);
  }

  addLine();
}

function typeLines(target, lines, speed = 24) {
  if (!target) return;
  let line = 0;
  let char = 0;
  const output = lines.map(() => '');

  function render() {
    target.innerHTML = output
      .map((content, index) => {
        const cursor = index === line ? '<span class="cursor">&#9608;</span>' : '';
        return `<div class="code-line"><span class="line-no">${String(index + 1).padStart(2, '0')}</span><span>${content}${cursor}</span></div>`;
      })
      .join('');
  }

  function tick() {
    if (line >= lines.length) {
      target.innerHTML = output
        .map((content, index) => `<div class="code-line"><span class="line-no">${String(index + 1).padStart(2, '0')}</span><span>${content}</span></div>`)
        .join('');
      return;
    }

    const current = lines[line];
    if (char < current.length) {
      output[line] += current[char].replace('<', '&lt;').replace('>', '&gt;');
      char += 1;
    } else {
      line += 1;
      char = 0;
    }

    render();
    window.setTimeout(tick, char === 0 ? 180 : speed + Math.random() * speed);
  }

  render();
  tick();
}

function typeContact() {
  const target = document.querySelector('#contactTerminal');
  if (!target) return;
  let index = 0;

  function tick() {
    if (index >= contactLines.length) return;
    const line = document.createElement('div');
    line.className = 'contact-line';
    line.textContent = contactLines[index];
    target.appendChild(line);
    index += 1;
    window.setTimeout(tick, index === 1 ? 700 : 170);
  }

  tick();
}

function renderSkills(key = 'backend') {
  const grid = document.querySelector('#skillGrid');
  const detail = document.querySelector('#skillDetail');
  const data = skillData[key];
  if (!grid || !detail || !data) return;

  detail.textContent = data.detail;
  grid.innerHTML = data.items
    .map(([name, level, description]) => `
      <article class="skill-card">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="bar" aria-label="${name} proficiency"><span style="--level: ${level}%"></span></div>
      </article>
    `)
    .join('');

  requestAnimationFrame(() => grid.classList.add('visible-bars'));
}

function setupSkillTabs() {
  document.querySelectorAll('[data-skill]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-skill]').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      document.querySelector('#skillGrid')?.classList.remove('visible-bars');
      renderSkills(button.dataset.skill);
    });
  });
  renderSkills('backend');
}

function setupWorkflow() {
  const command = document.querySelector('#workflowCommand');
  const title = document.querySelector('#workflowTitle');
  const text = document.querySelector('#workflowText');
  const bar = document.querySelector('#workflowBar');

  document.querySelectorAll('[data-workflow]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.workflow);
      const detail = workflowDetails[index];
      if (!detail) return;

      document.querySelectorAll('[data-workflow]').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      command.textContent = detail.command;
      title.textContent = detail.title;
      text.textContent = detail.text;
      bar.style.width = `${(index + 1) * 20}%`;
    });
  });
}

function setupProjectInspector() {
  const inspector = document.querySelector('#projectInspector');
  if (!inspector) return;

  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.project;
      inspector.textContent = projectDetails[key] || projectDetails.vrls;
      document.querySelectorAll('[data-project-card]').forEach((card) => {
        card.classList.toggle('active', card.dataset.projectCard === key);
      });
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 320)}ms`;
    observer.observe(element);
  });
}

function setupSectionDots() {
  const dots = document.querySelectorAll('[data-section-dot]');
  const sections = [...dots]
    .map((dot) => document.getElementById(dot.dataset.sectionDot))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        dots.forEach((dot) => dot.classList.toggle('active', dot.dataset.sectionDot === entry.target.id));
      });
    },
    { threshold: 0.32 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupMatrix() {
  const canvas = document.querySelector('#matrix');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const glyphs = '01{}[]<>/\\$#JAVA SPRING KAFKA AWS AI LTA VRLS MCP';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let columns = [];
  let width = 0;
  let height = 0;
  let fontSize = 16;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fontSize = width < 700 ? 13 : 16;
    columns = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * -height);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

    columns.forEach((y, index) => {
      const char = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = index * fontSize;
      ctx.fillStyle = Math.random() > 0.9 ? 'rgba(34, 211, 238, 0.68)' : 'rgba(34, 197, 94, 0.58)';
      ctx.fillText(char, x, y);
      columns[index] = y > height + Math.random() * 900 ? 0 : y + fontSize;
    });

    if (!prefersReducedMotion) window.requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

function setupCursorAura() {
  const aura = document.querySelector('#cursorAura');
  if (!aura) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  window.addEventListener('pointermove', (event) => {
    tx = event.clientX;
    ty = event.clientY;
  });

  function tick() {
    x += (tx - x) * 0.16;
    y += (ty - y) * 0.16;
    aura.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }

  tick();
}

function setupCommandDock() {
  const form = document.querySelector('#commandForm');
  const input = document.querySelector('#commandInput');
  const output = document.querySelector('#dockOutput');
  if (!form || !input || !output) return;

  const commands = {
    help: 'commands: help, about, seniority, skills, workflow, warroom, projects, ai, experience, contact, resume, clear',
    about: 'opening ./about_me.txt',
    seniority: 'running ./seniority_scan --decade',
    skills: 'running ls -la /skills/',
    workflow: 'running ./modernization_pipeline.sh',
    warroom: 'tailing production_warroom.log',
    projects: 'running git log --projects',
    ai: 'running ./ai_lab --rag --mcp --guardrails',
    experience: 'opening career_timeline.log',
    contact: 'running ./contact_me.sh',
    resume: 'opening assets/MeenaKannan_Resume_2026.pdf',
  };

  const targets = {
    about: '#about',
    seniority: '#seniority',
    skills: '#skills',
    workflow: '#workflow',
    warroom: '#warroom',
    projects: '#projects',
    ai: '#ai',
    experience: '#experience',
    contact: '#contact',
  };

  function print(kind, text) {
    const row = document.createElement('div');
    row.innerHTML = `<span>${kind}</span> ${text}`;
    output.appendChild(row);
    output.scrollTop = output.scrollHeight;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const raw = input.value.trim().toLowerCase();
    if (!raw) return;

    print('cmd', raw);
    input.value = '';

    if (raw === 'clear') {
      output.innerHTML = '<div><span>system</span> cleared</div>';
      return;
    }

    if (raw === 'resume') {
      print('ok', commands.resume);
      window.open('assets/MeenaKannan_Resume_2026.pdf', '_blank', 'noopener,noreferrer');
      return;
    }

    if (commands[raw]) {
      print('ok', commands[raw]);
      if (targets[raw]) document.querySelector(targets[raw])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    print('err', `unknown command: ${raw}. type help`);
  });
}

function setupClientLens() {
  const buttons = [...document.querySelectorAll('[data-brief-lens]')];
  const eyebrow = document.querySelector('#briefEyebrow');
  const title = document.querySelector('#briefTitle');
  const text = document.querySelector('#briefText');
  const grid = document.querySelector('#briefGrid');
  const checklist = document.querySelector('#briefChecklist');
  if (!buttons.length || !eyebrow || !title || !text || !grid || !checklist) return;

  const lenses = {
    modernize: {
      eyebrow: 'Current focus',
      title: 'LTA VRLS 2.0 modernization',
      text: 'Supporting Singapore transport licensing modernization across legacy knowledge recovery, Spring Boot services, cloud deployment, secure release practices, and team handover.',
      cards: [
        ['Client confidence', 'Owns live systems', 'Comfortable with production support, UAT pressure, release controls, and domain-heavy workflows.'],
        ['Modern stack', 'Java + cloud native', 'Java 21, Spring Boot 3, Kubernetes, Kafka, Redis, KEDA, Istio, AWS GovCloud, and ArgoCD.'],
        ['Delivery style', 'Practical leadership', 'Documents decisions, mentors engineers, reviews code, and turns complex systems into repeatable delivery.'],
        ['AI readiness', 'Useful, not hype', 'Applies Spring AI, RAG, MCP, Claude API, and Copilot workflows where they improve engineering outcomes.'],
      ],
      checks: [
        'Government and enterprise delivery experience',
        'Secure CI/CD, code quality, and release governance',
        'Strong bridge between legacy behavior and modern architecture',
      ],
    },
    stabilize: {
      eyebrow: 'When reliability matters',
      title: 'Production ownership under real constraints',
      text: 'A client can trust Meena with systems that cannot simply pause: incidents, UAT feedback, release gates, integration risks, and team knowledge gaps.',
      cards: [
        ['Operating model', 'Support + delivery', 'Balances feature work with production tickets, release readiness, and cross-team coordination.'],
        ['Risk controls', 'Quality gates', 'Uses SonarQube, Fortify, reviews, documentation, and release discipline to reduce avoidable defects.'],
        ['Integration depth', 'Legacy + modern', 'Works across SOAP, REST, queues, databases, microservices, and citizen-facing business flows.'],
        ['Team reliability', 'Knowledge transfer', 'Creates handover material and practical playbooks so teams are less dependent on tribal memory.'],
      ],
      checks: [
        'Production support mindset, not just feature delivery',
        'Comfortable with domain-heavy government workflows',
        'Clear communication across engineering, QA, UAT, and business users',
      ],
    },
    ai: {
      eyebrow: 'AI-enabled engineering',
      title: 'Modern delivery with responsible AI leverage',
      text: 'Meena brings AI into engineering where it helps: faster reviews, better documentation, retrieval-assisted workflows, and safer developer productivity.',
      cards: [
        ['AI patterns', 'Spring AI + RAG', 'Understands retrieval pipelines, prompt structure, MCP tool use, and Java-native AI integration.'],
        ['Developer velocity', 'Copilot workflows', 'Uses agentic coding assistance for scaffolding, review, tests, and repetitive implementation work.'],
        ['Governance', 'Practical guardrails', 'Keeps sensitive domains focused on traceability, human review, minimization, and measurable outcomes.'],
        ['Enterprise fit', 'AI plus architecture', 'Connects AI features to service contracts, data access, security, and maintainable backend design.'],
      ],
      checks: [
        'AI used as engineering leverage, not a portfolio buzzword',
        'Strong Java backend base underneath AI experimentation',
        'Useful for teams adopting AI-assisted delivery carefully',
      ],
    },
  };

  function renderLens(key) {
    const lens = lenses[key] || lenses.modernize;
    buttons.forEach((button) => button.classList.toggle('active', button.dataset.briefLens === key));
    eyebrow.textContent = lens.eyebrow;
    title.textContent = lens.title;
    text.textContent = lens.text;
    grid.replaceChildren(...lens.cards.map(([label, heading, body]) => {
      const card = document.createElement('div');
      card.innerHTML = `<span>${label}</span><strong>${heading}</strong><p>${body}</p>`;
      return card;
    }));
    checklist.replaceChildren(...lens.checks.map((item) => {
      const row = document.createElement('div');
      const dot = document.createElement('span');
      row.append(dot, document.createTextNode(` ${item}`));
      return row;
    }));
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => renderLens(button.dataset.briefLens));
  });
}

runBoot();
typeLines(document.querySelector('#heroCode'), heroCodeLines, 12);
typeContact();
setupSkillTabs();
setupWorkflow();
setupProjectInspector();
setupReveal();
setupSectionDots();
setupMatrix();
setupCursorAura();
setupCommandDock();
setupClientLens();
