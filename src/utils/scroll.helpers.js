/**
 * Scrolls the window to the top smoothly or instantly.
 * @param {boolean} [hasSmoothAnimation] - Whether to animate the scroll.
 */

export const scrollToTop = (hasSmoothAnimation = true) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: hasSmoothAnimation ? 'smooth' : 'instant',
  });

  // Move focus back to the top so 'Tab' starts at the beginning
  document.querySelector('header')?.focus();
};
