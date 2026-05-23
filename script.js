const codeLines = [
  'public final class LeadEngineer {',
  '  String name = "Meena Kannan";',
  '  String focus = "Cloud-native modernisation";',
  '  List<String> stack = List.of(',
  '    "Java 21", "Spring Boot 3", "Angular 18",',
  '    "Kubernetes", "Kafka", "AWS Government Cloud"',
  '  );',
  '',
  '  void shipProductionSystems() {',
  '    secureWith("Istio", "Vault", "Keycloak");',
  '    observeWith("Prometheus", "Grafana", "OpenTelemetry");',
  '    accelerateWith("Spring AI", "MCP", "Claude API");',
  '  }',
  '}',
];

const typewriter = document.querySelector('#typewriter');
let line = 0;
let char = 0;
let rendered = '';

function typeNext() {
  if (!typewriter || line >= codeLines.length) return;
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
  window.setTimeout(typeNext, char === 0 ? 180 : 22 + Math.random() * 30);
}

typeNext();

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');
    document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(id)?.classList.add('active');
  });
});
