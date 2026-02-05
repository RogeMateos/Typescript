/**
 * Page Interactions Component
 * Handles interactive elements on tutorial pages
 */

import { DOMUtils } from '../utils/dom-utils.js';

export const PageInteractions = {
  /**
   * Toggle answer visibility
   */
  toggleAnswer() {
    const answer = DOMUtils.getElement('answer');
    DOMUtils.toggleClass(answer, 'hidden');
  },

  /**
   * Show code tab (original or result)
   */
  showCode(type) {
    const codeOriginal = DOMUtils.getElement('code-original');
    const codeResult = DOMUtils.getElement('code-result');
    const btnOriginal = DOMUtils.getElement('btn-original');
    const btnResult = DOMUtils.getElement('btn-result');

    // Hide both
    DOMUtils.addClass(codeOriginal, 'hidden');
    DOMUtils.addClass(codeResult, 'hidden');

    // Reset button styles
    DOMUtils.removeClass(btnOriginal, 'text-blue-400', 'border-b-2', 'border-blue-400');
    DOMUtils.removeClass(btnResult, 'text-green-400', 'border-b-2', 'border-green-400');
    DOMUtils.addClass(btnOriginal, 'text-gray-500');
    DOMUtils.addClass(btnResult, 'text-gray-500');

    // Show selected tab
    if (type === 'original') {
      DOMUtils.removeClass(codeOriginal, 'hidden');
      DOMUtils.addClass(btnOriginal, 'text-blue-400', 'border-b-2', 'border-blue-400');
      DOMUtils.removeClass(btnOriginal, 'text-gray-500');
    } else {
      DOMUtils.removeClass(codeResult, 'hidden');
      DOMUtils.addClass(btnResult, 'text-green-400', 'border-b-2', 'border-green-400');
      DOMUtils.removeClass(btnResult, 'text-gray-500');
    }
  }
};

// Expose to global scope for onclick handlers
window.toggleAnswer = PageInteractions.toggleAnswer;
window.showCode = PageInteractions.showCode;
