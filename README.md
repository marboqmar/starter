# Starter
This is a starter project to use as a foundation for future projects, containing basic components and being easily customisable.

This project has been built using Vite, React, HTML and CSS.

The author prefers CSS over SCSS, as does not find nesting easier to read, especially in very large files. Apart from nesting, the author sees no real advantage in using SCSS, since CSS now supports variables (custom properties) and does not require compilation, which is a significant benefit. While CSS lacks mixins, the author does not consider using multiple classes instead of mixins a major drawback. Another thing which CSS cannot do is using variables in `@media` queries, adding the need to write breakpoints manually on these queries. This is a disadvantage of CSS, but the author still thinks that the fact that it does not need to be compiled is a major benefit.

## Breakpoints
As previously discussed, CSS variables cannot be used in `@media` queries, so breakpoint values must be written manually.

The breakpoints used for this project are:
- Mobile-sm: `< 380px`. This is the default.
- Mobile: `>=380px`
- Tablet: `>= 768px`
- Desktop: `>= 1024px`
- Desktop-lg: `>= 1280px`

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