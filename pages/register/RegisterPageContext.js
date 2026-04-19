/**
 * Page context without a separate base class: factory + setup chain live here.
 */
export default class RegisterPageContext {
  /**
     * Bound from Vue ref in setup().
     *
     * @type {import('vue').Ref<string>}
     */
  displayNameRef;

  /**
     * @param {RegisterPageContextParams} params - Parameters.
     */
  constructor (params) {
    this.displayNameRef = params.displayNameRef;
  }

  /**
     * @param {RegisterPageContextFactoryParams} params - Parameters.
     * @returns {RegisterPageContext} Context instance.
     */
  static create (params) {
    return new this(params);
  }

  /**
     * Run side effects after construction (watchers, initial fetch, etc.).
     *
     * @returns {this} Chainable instance.
     */
  setupComponent () {
    return this;
  }

  /**
     * Example: formatted line for the template.
     *
     * @returns {string} Greeting text.
     */
  formatGreetingLine () {
    const name = this.displayNameRef.value;

    return `Hello nha , ${name}`;
  }
}

/**
   * @typedef {{
   *   displayNameRef: import('vue').Ref<string>
   * }} RegisterPageContextParams
   */

/**
   * @typedef {RegisterPageContextParams} RegisterPageContextFactoryParams
   */
