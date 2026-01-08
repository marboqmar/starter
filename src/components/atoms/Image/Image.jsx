import { classNames } from "../../../utils/helpers";

/**
 * Image component
 * 
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} src - Image source URL.
 * @param {string} [alt=""] - Alt text (defaults to empty string for decorative images).
 * @param {'lazy' | 'eager'} [loading="lazy"] - 
 * 'lazy' (default) uses async decoding. 
 * 'eager' uses sync decoding for LCP optimization.
 * @param {object} [rest] - Supports all standard HTML <img> attributes.
 *
 * @example
 * // Lazy loading (default)
 * <Image src="/photo.png" alt="Description" />
 * @example
 * // Eager loading (for hero sections)
 * <Image src="/hero.png" loading="eager" alt="Hero description" />
 */

export const Image = ({ 
  className = "", 
  src, 
  alt = "",
  loading = "lazy",
  ...rest
}) => {
  const decodingStrategy = loading === "lazy" ? "async" : "sync";

  return (
    <img  
      className={classNames("image", className)}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decodingStrategy}
      {...rest}
    />
  )
};