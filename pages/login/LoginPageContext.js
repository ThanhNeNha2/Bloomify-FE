/**
 * Page context without a separate base class: factory + setup chain live here.
 */
export default class HomePageContext {
  /**
     * Bound from Vue ref in setup().
     *
     * @type {import('vue').Ref<string>}
     */
  displayNameRef;

  /**
     * @param {HomePageContextParams} params - Parameters.
     */
  constructor(params) {
    this.displayNameRef = params.displayNameRef;
  }

  /**
     * @param {HomePageContextFactoryParams} params - Parameters.
     * @returns {HomePageContext} Context instance.
     */
  static create(params) {
    return new this(params);
  }

  /**
     * Run side effects after construction (watchers, initial fetch, etc.).
     *
     * @returns {this} Chainable instance.
     */
  setupComponent() {
    return this;
  }

  /**
     * Example: formatted line for the template.
     *
     * @returns {string} Greeting text.
     */
  formatGreetingLine() {
    const name = this.displayNameRef.value;

    return `Hello, ${name}`;
  }
}

/**
 * @typedef {{
 *   displayNameRef: import('vue').Ref<string>
 * }} HomePageContextParams
 */

/**
 * @typedef {HomePageContextParams} HomePageContextFactoryParams
 */
