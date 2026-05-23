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

renderTypewriter();

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

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function setFieldError(field, message) {
  const wrapper = field.closest('.form-field');
  const error = wrapper?.querySelector('.error-message');

  wrapper?.classList.toggle('invalid', Boolean(message));
  if (error) error.textContent = message;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('#name');
  const email = contactForm.querySelector('#email');
  const message = contactForm.querySelector('#message');

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  let valid = true;

  setFieldError(name, '');
  setFieldError(email, '');
  setFieldError(message, '');

  if (!nameValue) {
    setFieldError(name, 'Please enter your name.');
    valid = false;
  }

  if (!emailValue || !isValidEmail(emailValue)) {
    setFieldError(email, 'Please enter a valid email address.');
    valid = false;
  }

  if (!messageValue || messageValue.length < 20) {
    setFieldError(message, 'Please add a message with at least 20 characters.');
    valid = false;
  }

  if (!valid) {
    formStatus.textContent = 'Please fix the highlighted fields.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry for Meena Kannan from ${nameValue}`);
  const body = encodeURIComponent(
    `Name: ${nameValue}\nEmail: ${emailValue}\n\nMessage:\n${messageValue}\n\nSource: Meena Kannan portfolio`
  );

  formStatus.textContent = 'Opening your mail app with a prepared message...';
  window.location.href = `mailto:meenakannan92@gmail.com?subject=${subject}&body=${body}`;
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
