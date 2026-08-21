# GuzDev Estudio — Portafolio

Sitio de portafolio para **GuzDev Estudio**, construido en HTML/CSS/JS puro
(sin frameworks ni build step), listo para publicarse en GitHub Pages.

## Estructura

```
guzdev-portfolio/
├── index.html          # Toda la estructura del sitio (una sola página)
├── css/style.css        # Estilos e identidad visual
├── js/main.js            # Año del footer, link de WhatsApp y animaciones al hacer scroll
└── assets/
    ├── logo/              # Íconos y logotipo de GuzDev Estudio
    └── projects/          # Capturas organizadas por proyecto (una carpeta por sistema)
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `guzdev-estudio.github.io`
   o `portafolio-guzdev`).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio:
   ```bash
   git init
   git add .
   git commit -m "Portafolio GuzDev Estudio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En el repositorio, ve a **Settings → Pages**, selecciona la rama `main` y
   la carpeta `/ (root)`, y guarda.
4. En un par de minutos tu sitio estará disponible en
   `https://TU_USUARIO.github.io/TU_REPO/`.

## Antes de publicar, personaliza

- **`js/main.js`** → cambia `WHATSAPP_NUMBER` por tu número real (código de
  país + número, sin espacios ni signos).
- **`index.html`**, sección `#contacto` → actualiza el correo
  (`mailto:contacto@guzdevestudio.com`) y los enlaces de GitHub / LinkedIn /
  Instagram (actualmente están como `href="#"`).
- **`index.html`**, sección `#proyectos` → si alguno de los sistemas ya tiene
  un enlace en vivo o un repositorio público, puedes envolver el título de
  cada proyecto en un `<a>` que apunte a esa URL.
- Los textos de cada proyecto fueron redactados a partir de las capturas de
  pantalla que compartiste; ajústalos si algún detalle técnico (base de
  datos, hosting, etc.) no es exacto.

## Notas de diseño

La identidad visual parte del propio logotipo del estudio (el hexágono
azul/gris): fondo casi negro tipo "blueprint", cuadrícula técnica de fondo,
acentos en degradado azul→cian, tipografía `Space Grotesk` para títulos,
`Inter` para texto y `JetBrains Mono` para etiquetas tipo "SISTEMA_01",
imitando nombres de módulo de un sistema real — coherente con que el
contenido del sitio son, literalmente, sistemas de software.
