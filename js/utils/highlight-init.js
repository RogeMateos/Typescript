/**
 * Syntax Highlighting Initialization
 * Handles highlight.js setup
 */

export function initializeHighlighting() {
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  } else {
    console.warn('Highlight.js not loaded');
  }
}
