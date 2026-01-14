# Starter

This is a starter project to use as a foundation for future projects, containing basic components
and being easily customisable.

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Routing
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **CSS** - Styling (no preprocessors)

## Why CSS rather than SCSS?

The author prefers CSS over SCSS, as nesting is not found easier to read, especially in very large
files. Apart from nesting, the author sees no real advantage in using SCSS, since CSS now supports
variables (custom properties) and does not require compilation, which is a significant benefit.

While CSS lacks mixins, the author does not consider using multiple classes instead of mixins a
major drawback.

Another limitation is that CSS variables cannot be used in `@media` queries, which requires writing
breakpoints manually. However, the author still considers the fact that CSS does not need to be
compiled a major benefit.

## Getting Started

To set up this project:

1. Clone this repository from GitHub.
2. Access the project's root folder and run `pnpm install`.
3. Every time you want to work on the project, access the project and run from the project's root
   folder `pnpm run dev` to start the development server.

### Available Scripts

- `pnpm run dev`: to start development server.
- `pnpm run build`: to build for production.
- `pnpm run preview`: to preview production build.
- `pnpm run lint`: to run ESLint.

## Project Structure

The structure of this project is as follows:

```
src/
├── components/         # Component library (atomic design)
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── css/
│   ├── global/         # Global styles
│   │   ├── colour-variables.css     # Color tokens
│   │   ├── colours.css              # Color utility classes
│   │   ├── layout.css               # Margin, flex, and grid classes
│   │   ├── site.css                 # Base reset and site styles
│   │   ├── typography-variables.css # Typography tokens
│   │   └── variables.css            # Spacing, border radius
│   ├── pages/          # Page-specific styles
│   └── style.css       # Main stylesheet entry point
├── pages/              # Page components
├── App.jsx             # Main app component
├── routes.jsx          # React Router configuration
└── main.jsx            # Application entry point
```

## Customisation

The top priority of this project is to provide components that can be customised quickly and easily.

### Variables

To adapt the componens of this project to your designs, modify the variables found in the following
files:

- `src/css/global/variables.css`
- `src/css/global/colour-variables.css`
- `src/css/global/typography-variables.css`

All variables use CSS custom properties, so you can override them in your own CSS files or modify
them directly in these files.

Modify the container and grid classes as needed. These can be found in `src/css/global/layout.css`.

The focus styles can be found on `src/css/global/site.css`.

### Typography

To modify the typography, update the font families in `src/css/global/typography-variables.css`,
and then adjust the font link in `index.html`.

The `code` tag styling is located on `src/css/global/site.css`.

The `--icon-alignment-height` variable (located in `src/css/global/typography-variables.css`) is a
'first-line anchor', used to align the icon to the first line of text. It uses the variables
`--line-height-base` and `--font-size-base` to calculate the height the first line of text has and
align the icon accordingly. If the line height or font sizes used are different, update this
variable accordingly.

### Breakpoints

The breakpoints used for this project are:

- Mobile: `< 768px` This is the default.
- Tablet: `>= 768px`.
- Desktop: `>= 1024px`.
- Desktop-lg: `>= 1280px`.

Usage in CSS:

```css
/* Tablet */
@media (min-width: 768px) {
  /* styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* styles */
}
```

As previously discussed, CSS variables cannot be used in `@media` queries, so breakpoint values
must be written manually. Consequently, in order to modify these breakpoints, do a global search
and replace all instances manually across your CSS files.
