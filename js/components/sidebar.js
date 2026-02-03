/**
 * Sidebar Component
 * Handles sidebar toggle and section expansion
 */

import { DOMUtils } from '../utils/dom-utils.js';

export const Sidebar = {
  /**
   * Toggle sidebar visibility (mobile)
   */
  toggle() {
    const sidebar = DOMUtils.getElement('sidebar');
    DOMUtils.toggleClass(sidebar, '-translate-x-full');
  },

  /**
   * Toggle section expansion/collapse
   */
  toggleSection(sectionId) {
    const list = DOMUtils.getElement(`list-${sectionId}`);
    const icon = DOMUtils.getElement(`icon-${sectionId}`);

    DOMUtils.toggleClass(list, 'hidden');
    DOMUtils.toggleClass(icon, 'rotate-180');
  }
};

// Expose to global scope for onclick handlers
window.toggleSidebar = Sidebar.toggle;
window.toggleSection = Sidebar.toggleSection;
