import jsdocPlugin from 'eslint-plugin-jsdoc';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

const sharedRules = {
  // ===== FORMAT =====
  indent: ['error', 2],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'never'],

  // ===== CLEAN CODE =====
  'no-unused-vars': 'warn',
  'no-console': 'off',

  // ===== JSDOC (optional nhưng nên bật) =====
  'jsdoc/require-param': 'warn',
  'jsdoc/require-returns': 'warn'
};

export default [
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    plugins: {
      jsdoc: jsdocPlugin
    },

    rules: {
      ...sharedRules
    }
  },
  {
    files: ['**/*.vue'],

    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },

    plugins: {
      vue: vuePlugin,
      jsdoc: jsdocPlugin
    },

    rules: {
      ...sharedRules,

      // ===== VUE =====
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 2,
          multiline: 1
        }
      ]
    }
  }
];
