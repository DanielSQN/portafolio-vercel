const projects = [];

const stack = [
  ["Oracle Cloud", "Sales and Service B2B, OIC, RightNow"],
  ["Lenguajes", "JavaScript, Python, Java, .NET"],
  ["Integracion", "Flujos, soporte, APIs y procesos empresariales"],
  ["Frontend", "Interfaces web, JavaScript moderno y experiencia de usuario"],
  ["Herramientas", "GitHub, Vercel y control de versiones"],
  ["Enfoque", "Aprendizaje continuo y crecimiento profesional constante"],
];

const projectGrid = document.querySelector("#project-grid");
const stackList = document.querySelector("#stack-list");
const yearNode = document.querySelector("#year");

projectGrid.innerHTML =
  projects.length > 0
    ? projects
        .map(
          (project) => `
            <article class="project-card">
              <img src="${project.image}" alt="${project.title}" />
              <div class="project-body">
                <div class="project-header">
                  <div>
                    <h3>${project.title}</h3>
                    <p class="project-meta">${project.stack}</p>
                  </div>
                  <span class="project-tag">${project.type}</span>
                </div>
                <p class="project-copy">${project.description}</p>
                <div class="project-links">
                  <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
                  <a href="${project.repo}" target="_blank" rel="noreferrer">Repositorio</a>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `
        <article class="project-empty">
          <span class="project-empty-label">En desarrollo</span>
          <h3>Esta seccion se esta preparando.</h3>
          <p class="project-empty-copy">
            Pronto agregare proyectos reales con contexto, tecnologias utilizadas
            y enlaces a codigo o demo.
          </p>
        </article>
      `;

stackList.innerHTML = stack
  .map(
    ([title, description]) => `
      <div class="stack-item">
        <strong>${title}</strong>
        <span>${description}</span>
      </div>
    `
  )
  .join("");

yearNode.textContent = new Date().getFullYear();
