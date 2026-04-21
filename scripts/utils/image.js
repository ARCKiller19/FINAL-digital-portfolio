// image.js — Image / Placeholder Rendering Utility

/**
 * Renders an <img> or a placeholder <div> depending on whether src is provided.
 * @param {object} imgData - { src, alt, placeholder }
 * @param {object} opts    - { className, style, aspectRatio }
 * @returns {HTMLElement}
 */
export function renderImage(imgData, opts = {}) {
  const { className = '', style = '', aspectRatio = null } = opts;

  if (imgData && imgData.src) {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt || '';
    img.loading = 'lazy';
    if (className) img.className = className;
    if (style)     img.style.cssText = style;
    return img;
  }

  // Placeholder
  const div = document.createElement('div');
  div.className = `img-placeholder ${className}`;
  div.setAttribute('data-slot', imgData?.placeholder || 'image');
  if (style) div.style.cssText = style;
  if (aspectRatio) div.style.aspectRatio = aspectRatio;
  return div;
}
