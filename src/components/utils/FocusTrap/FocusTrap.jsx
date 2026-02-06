import { useEffect, useRef } from 'react';

/**
 * Focus trap component
 * Allows to trap the focus within a container. Also handles focus wrapping, auto-focus when the
 * focus trap is first executed, and returns focus to previously focused element when the focus
 * trap is destroyed.
 *
 * Component props:
 * @param {boolean} isActive - Whether the focus trap is active or not.
 * @param {node} children - Focus trap content.
 *
 * @example
 * <FocusTrap isActive={isExpanded}>
 *   <div className="mobile-menu__content">...</div>
 * </FocusTrap>
 */

export const FocusTrap = ({ isActive, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Trap focus only if the component calling the focus trap is active
    if (!isActive) return;

    // Save the currently focused element
    const originalFocus = document.activeElement;

    // Find all focusable elements within the container
    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    // Auto-focus first focusable element within the container with a small delay to ensure CSS
    // transitions have started (as otherwise there will be nothin to focus)
    if (focusableElements.length > 0) {
      setTimeout(() => focusableElements[0].focus(), 50);
    }

    const handleKeyDown = keystroke => {
      // Stop execution if pressed key was not "Tab"
      if (keystroke.key !== 'Tab') return;

      // Re-query in case the DOM has changed (e.g. dynamic links)
      const currentElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      const firstElement = currentElements[0];
      const lastElement = currentElements[currentElements.length - 1];

      if (keystroke.shiftKey) {
        // If "Shift" + "Tab" and focus is on the first element, wrap to the last element

        if (document.activeElement === firstElement) {
          keystroke.preventDefault();
          lastElement.focus();
        }
      } else {
        // If "Tab" and focus is on last element, wrap to the first element
        if (document.activeElement === lastElement) {
          keystroke.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Clean up function to remove the listener and return focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (originalFocus) {
        originalFocus.focus();
      }
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className="focus-trap-wrapper">
      {children}
    </div>
  );
};
