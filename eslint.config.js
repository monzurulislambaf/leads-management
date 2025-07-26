import { defineFlatConfig } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';

export default defineFlatConfig([
  // Vue.js base rules
  ...vue.configs['flat/essential'],

  // Vue.js + TypeScript rules
  ...vue.configs['flat/recommended'],

  // Prettier integration (must be last)
  prettier,

  // Your custom configuration
  {
    ignores: [
      'vendor',
      'node_modules',
      'public',
      'bootstrap/ssr',
      'tailwind.config.js',
      'resources/js/components/ui/*'
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts', 'js'], // Allow both TypeScript and JavaScript
            allowNoLang: true,  // Also allow <script> without lang attribute
          },
          style: {
            // You can add style lang restrictions here if needed
          },
          template: {
            // You can add template lang restrictions here if needed
          }
        },
      ],
      // Additional rules to support both JS and TS
      'vue/script-setup-uses-vars': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    }
  }
]);
