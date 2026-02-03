/**
 * Main Application Entry Point
 * Initializes all components and utilities
 */

import { Sidebar } from './components/sidebar.js';
import { CodeTabs } from './components/code-tabs.js';
import { initializeHighlighting } from './utils/highlight-init.js';

/**
 * Initialize the application
 */
function init() {
  // Initialize syntax highlighting
  initializeHighlighting();

  console.log('TypeScript Tutorial App initialized');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for debugging purposes
export { Sidebar, CodeTabs };
