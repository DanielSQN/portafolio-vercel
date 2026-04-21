const projects = [
  {
    title: "Dashboard de ventas",
    type: "Frontend",
    description:
      "Panel para seguimiento de ingresos, conversion y comportamiento de clientes con una interfaz enfocada en lectura rapida.",
    stack: "React, Charts, API REST",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    repo: "#",
  },
  {
    title: "Plataforma educativa",
    type: "Full Stack",
    description:
      "Experiencia de aprendizaje con autenticacion, rutas protegidas y panel administrativo para contenidos y usuarios.",
    stack: "Next.js, Node.js, PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    repo: "#",
  },
  {
    title: "App movil de habitos",
    type: "Producto",
    description:
      "Diseno y desarrollo de una app para habitos diarios con seguimiento visual, recordatorios y progresion semanal.",
    stack: "React Native, Firebase",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    repo: "#",
  },
];

const stack = [
  ["Frontend", "React, Next.js, TypeScript"],
  ["Backend", "Node.js, Express, APIs REST"],
  ["Datos", "PostgreSQL, Firebase, Prisma"],
  ["UI", "Figma, CSS, diseno responsive"],
  ["Deploy", "Vercel, GitHub, CI/CD"],
  ["Calidad", "Testing, accesibilidad, performance"],
];

const projectGrid = document.querySelector("#project-grid");
const stackList = document.querySelector("#stack-list");
const yearNode = document.querySelector("#year");

projectGrid.innerHTML = projects
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
  .join("");

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
