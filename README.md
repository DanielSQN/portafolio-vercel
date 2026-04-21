# Portafolio para Vercel

Este repo esta pensado para desplegarse rapido en Vercel como sitio estatico.

## Archivos principales

- `index.html`: nombre, titulo profesional y enlaces.
- `script.js`: proyectos, stack y links.
- `styles.css`: colores, layout y tono visual.

## Paso a paso para GitHub

1. Crea un repositorio nuevo en GitHub, por ejemplo `portafolio-vercel`.
2. Abre una terminal en esta carpeta.
3. Ejecuta:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio-vercel.git
git push -u origin main
```

## Paso a paso para Vercel

1. Entra a Vercel.
2. Pulsa `Add New -> Project`.
3. Importa el repositorio de GitHub.
4. Despliega. Vercel lo detecta como sitio estatico.
