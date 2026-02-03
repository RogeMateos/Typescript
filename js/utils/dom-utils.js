/**
 * DOM Utility Functions
 * Centralized DOM manipulation helpers
 */

export const DOMUtils = {
  /**
   * Get element by ID with error handling
   */
  getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
    }
    return element;
  },

  /**
   * Toggle class on element
   */
  toggleClass(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  },

  /**
   * Add class to element
   */
  addClass(element, ...classes) {
    if (element) {
      element.classList.add(...classes);
    }
  },

  /**
   * Remove class from element
   */
  removeClass(element, ...classes) {
    if (element) {
      element.classList.remove(...classes);
    }
  },

  /**
   * Check if element has class
   */
  hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
  }
};
