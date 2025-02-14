import nx from '@nx/eslint-plugin';
import unicorn from 'eslint-plugin-unicorn';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['.next/**/*'],
  },
  {
    plugins: {
      '@nx': nx,
      unicorn,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.cy.ts', '**/*.cy.tsx'],

    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*/.jsx'],
    rules: {
      complexity: ['error', 5],
      'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
    },
  },
  {
    files: ['**/*.jsx', '**/*.tsx', '**/layout.tsx'],
    ignores: ['**/layout.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];
