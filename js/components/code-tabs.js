/**
 * Code Tabs Component
 * Handles switching between code examples
 */

import { DOMUtils } from '../utils/dom-utils.js';

export const CodeTabs = {
  /**
   * Show specific code tab and hide others
   */
  showCode(type) {
    // Hide all code blocks
    const codeOriginal = DOMUtils.getElement('code-original');
    const codeResult = DOMUtils.getElement('code-result');
    const btnOriginal = DOMUtils.getElement('btn-original');
    const btnResult = DOMUtils.getElement('btn-result');

    // Reset all states
    DOMUtils.addClass(codeOriginal, 'hidden');
    DOMUtils.addClass(codeResult, 'hidden');
    DOMUtils.removeClass(btnOriginal, 'text-blue-400', 'border-b-2', 'border-blue-400', 'text-green-400', 'border-green-400');
    DOMUtils.removeClass(btnResult, 'text-blue-400', 'border-b-2', 'border-blue-400', 'text-green-400', 'border-green-400');
    DOMUtils.addClass(btnOriginal, 'text-gray-500');
    DOMUtils.addClass(btnResult, 'text-gray-500');

    // Show selected tab
    if (type === 'original') {
      DOMUtils.removeClass(codeOriginal, 'hidden');
      DOMUtils.addClass(btnOriginal, 'text-blue-400', 'border-b-2', 'border-blue-400');
      DOMUtils.removeClass(btnOriginal, 'text-gray-500');
    } else if (type === 'result') {
      DOMUtils.removeClass(codeResult, 'hidden');
      DOMUtils.addClass(btnResult, 'text-green-400', 'border-b-2', 'border-green-400');
      DOMUtils.removeClass(btnResult, 'text-gray-500');
    }
  },

  /**
   * Toggle answer visibility
   */
  toggleAnswer() {
    const answer = DOMUtils.getElement('answer');
    DOMUtils.toggleClass(answer, 'hidden');
  }
};

// Expose to global scope for onclick handlers
window.showCode = CodeTabs.showCode;
window.toggleAnswer = CodeTabs.toggleAnswer;
